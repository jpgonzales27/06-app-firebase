import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase/firebaseConfig";
import Contacto from "./Contacto";

const ListaContactos = () => {
  const [listaContactos, setListaContactos] = useState([
    {
      id: 1,
      nombre: "juan",
      correo: "correo",
    },
    { id: 2, nombre: "pablo", correo: "correo2" },
  ]);

  return (
    listaContactos.length > 0 && (
      <ContenedorContactos>
        {listaContactos.map((contacto) => (
          <Contacto
            key={contacto.id}
            nombre={contacto.nombre}
            correo={contacto.correo}
          />
        ))}
      </ContenedorContactos>
    )
  );
};

const ContenedorContactos = styled.div`
  margin-top: 40px;
`;

export default ListaContactos;
