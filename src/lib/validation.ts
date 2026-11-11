export type ContactField = "nombre" | "email" | "subject" | "message";

export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Record<ContactField, string | null>;

export const contactFields: ContactField[] = ["nombre", "email", "subject", "message"];

export const errorMessages: Record<ContactField, string> = {
  nombre: "Ingresa tu nombre.",
  email:
    "Tu correo electronico debe de tener una @ y un dominio. Ejemplo: pepe@ejemplo.com",
  subject: "Ingresa el motivo de tu contacto.",
  message: "Ingresa el texto de tu mensaje.",
};

const EMAIL_REGEX = /^[^@]+@[^@.]+\.[a-z]+$/i;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value);
}

/** Returns the error message for a field, or null when the value is valid. */
export function validateField(field: ContactField, value: string): string | null {
  const valid = field === "email" ? isValidEmail(value) : value !== "";
  return valid ? null : errorMessages[field];
}

export function validateAll(values: ContactValues): ContactErrors {
  return {
    nombre: validateField("nombre", values.nombre),
    email: validateField("email", values.email),
    subject: validateField("subject", values.subject),
    message: validateField("message", values.message),
  };
}

export function hasErrors(errors: ContactErrors): boolean {
  return contactFields.some((field) => errors[field] !== null);
}
