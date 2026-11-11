"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  hasErrors,
  validateAll,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/validation";
import styles from "./Contacto.module.css";

const CONTACT_URL =
  process.env.NEXT_PUBLIC_CONTACT_URL ?? "https://ctm-mailer.onrender.com";

type Status = "idle" | "sending" | "success" | "error";

const emptyValues: ContactValues = {
  nombre: "",
  email: "",
  subject: "",
  message: "",
};
const noErrors: ContactErrors = {
  nombre: null,
  email: null,
  subject: null,
  message: null,
};

// The mailer replies with the string "success", either as plain text or as a JSON string.
async function isSuccessResponse(response: Response): Promise<boolean> {
  if (!response.ok) return false;
  const body = await response.text();
  try {
    return JSON.parse(body) === "success";
  } catch {
    return body === "success";
  }
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>(noErrors);
  const [status, setStatus] = useState<Status>("idle");

  // Validates as the user types, like the original onKeyUp handlers.
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as ContactField;
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({
      ...current,
      [field]: validateField(field, value),
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus((await isSuccessResponse(response)) ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const fieldProps = (field: ContactField) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: handleChange,
    className: errors[field] ? styles.invalid : undefined,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  const errorMessage = (field: ContactField) =>
    errors[field] && (
      <p id={`${field}-error`} className={styles.validationError}>
        {errors[field]}
      </p>
    );

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div>
        <input type="text" placeholder="Nombre" {...fieldProps("nombre")} />
        {errorMessage("nombre")}
      </div>

      <div>
        <input
          type="email"
          placeholder="Correo Electronico"
          {...fieldProps("email")}
        />
        {errorMessage("email")}
      </div>

      <div>
        <input type="text" placeholder="Asunto" {...fieldProps("subject")} />
        {errorMessage("subject")}
      </div>

      <div>
        <textarea rows={4} placeholder="Mensaje" {...fieldProps("message")} />
        {errorMessage("message")}
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && (
        <div className={styles.successMessage}>
          <h3>¡Tu mensaje ha sido enviado!</h3>
          <p>
            Gracias por contactarme, me pondre en contacto contigo lo más pronto
            posible.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className={styles.errorMessage} role="alert">
          <h3>No se pudo enviar tu mensaje.</h3>
          <p>
            Inténtalo de nuevo más tarde o escríbeme a karlagarrido@live.com.
          </p>
        </div>
      )}
    </form>
  );
}
