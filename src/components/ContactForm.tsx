"use client";

import { useState } from "react";

interface MessageBoxProps {
  title: string;
  message: string;
  onClose: () => void;
}

function MessageBox({ title, message, onClose }: MessageBoxProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(29, 29, 27, 0.7)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
      }}
    >
      <div
        className="p-8 rounded-xl shadow-2xl max-w-sm w-full"
        style={{
          backgroundColor: "var(--color-blanco-puro)",
          animation: "modalSlideIn 0.3s ease-out",
        }}
      >
        <h3
          className="text-lg font-semibold mb-3"
          style={{
            fontFamily: "var(--font-family-titulo)",
            color: "var(--color-verde-institucional)",
          }}
        >
          {title}
        </h3>
        <p
          className="mb-6"
          style={{
            color: "var(--color-negro-profundo)",
            fontFamily: "var(--font-family-cuerpo)",
          }}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          className="w-full font-medium py-2 rounded-lg hover:opacity-90"
          style={{
            backgroundColor: "var(--color-verde-institucional)",
            color: "var(--color-blanco-puro)",
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [modal, setModal] = useState<{
    title: string;
    message: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setModal({
        title: "Campos Incompletos",
        message: "Por favor complete todos los campos del formulario.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setModal({
        title: "Email Inválido",
        message: "Por favor ingrese un correo electrónico válido.",
      });
      return;
    }

    setModal({
      title: "¡Mensaje Enviado con Éxito!",
      message: `Gracias ${formData.name} por contactar a Calderón Galindo Abogados. Hemos recibido su consulta y nos pondremos en contacto con usted a la brevedad posible.`,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {modal && (
        <MessageBox
          title={modal.title}
          message={modal.message}
          onClose={() => setModal(null)}
        />
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
            style={{ fontFamily: "var(--font-family-cuerpo)" }}
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
            style={{ fontFamily: "var(--font-family-cuerpo)" }}
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
            style={{ fontFamily: "var(--font-family-cuerpo)" }}
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transform hover:scale-[1.01]"
          style={{
            backgroundColor: "var(--color-verde-institucional)",
            color: "var(--color-blanco-puro)",
            fontFamily: "var(--font-family-cuerpo)",
          }}
        >
          Enviar Mensaje
        </button>
      </form>
    </>
  );
}
