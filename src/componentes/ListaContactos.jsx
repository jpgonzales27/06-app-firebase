import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase/firebaseConfig";
import Contacto from "./Contacto";

const ListaContactos = () => {
  const [listaContactos, setListaContactos] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, "usuarios"),
      (snapshot) => {
        // console.log("snapshot: ", snapshot.docs[0].data());
        const arregloUsuarios = snapshot.docs.map((documento) => {
          // console.log(documento.data());
          // console.log(documento.id());
          return { ...documento.data(), id: documento.id };
        });

        console.log(arregloUsuarios);
        setListaContactos(arregloUsuarios);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    listaContactos.length > 0 && (
      <ContenedorContactos>
        {listaContactos.map((contacto) => (
          <Contacto
            key={contacto.id}
            id={contacto.id}
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
