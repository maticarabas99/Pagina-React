import React from "react";
import {
  ContactContainer,
  ContactForm,
  ContactInfo,
  ContactInput,
  ContactTextArea,
  ContactTitle,
  FormText,
} from "./syled";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";

export const Contacto = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("campo requerido"),
      email: Yup.string().email("Email invalido").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <ContactContainer>
      <ContactTitle>Comunícate con nosotros</ContactTitle>
      <ContactInfo>
        <div class="container">
          <FormText>Contáctanos: Estamos Listos para Ayudarte</FormText>
          <ContactForm
            id="contactForm"
            onSubmit={formik.handleSubmit}
            validationSchema={validateYupSchema}
          >
            <label for="name"></label>
            <ContactInput
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              onChange={formik.handleChange}
               
            />
            <label for="email"></label>
            <ContactInput
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              onChange={formik.handleChange}
            />
            <label for="subject"></label>
            <ContactInput
              type="text"
              id="subject"
              name="subject"
              placeholder="Asunto"
              onChange={formik.handleChange}
            />
            <label for="message"></label>
            <ContactTextArea
              id="message"
              name="message"
              rows="4"
              placeholder="Mensaje"
              onChange={formik.handleChange}
            ></ContactTextArea>
            <button type="submit">Enviar</button>
          </ContactForm>
          <div id="success"></div>
        </div>
      </ContactInfo>
    </ContactContainer>
  );
};
