import React from "react";
import { ContactContainer, ContactForm, ContactInfo, ContactInput, ContactTextArea, ContactTitle, FormText,} from "./syled";

export const Contacto = () => {
  return (
    <ContactContainer>
      <ContactTitle>Comunícate con nosotros</ContactTitle>
      <ContactInfo>
        <div class="container">
          <FormText >Contáctanos: Estamos Listos para Ayudarte</FormText >
          <ContactForm id="contactForm" novalidate>
            <label for="name"></label>
            <ContactInput
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              required
            />
            <div class="error" id="nameError"></div>
            <label for="email"></label>
            <ContactInput
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              required
            />
            <div class="error" id="emailError"></div>
            <label for="subject"></label>
            <ContactInput
              type="text"
              id="subject"
              name="subject"
              placeholder="Asunto"
            />
            <div class="error" id="subjectError"></div>
            <label for="message"></label>
            <ContactTextArea
              id="message"
              name="message"
              rows="4"
              placeholder="Mensaje"
            ></ContactTextArea>
            <div class="error" id="messageError"></div>
            <button type="submit">Enviar</button>
          </ContactForm>
          <div id="success"></div>
        </div>
      </ContactInfo>
    </ContactContainer>
  );
};
