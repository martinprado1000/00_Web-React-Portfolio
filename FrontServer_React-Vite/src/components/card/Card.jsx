import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Card({ imageName, title, text, githubLink, websiteLink }) {
  const buttonStyle = {
    width: "100%",
    marginBottom: "5px",
  };

  const cardStyle = {
    height: "400px", // Establece la altura deseada para todos los cards
  };

  const imgStyle = {
    width: "100%", // Ajusta el ancho de la imagen al 100% del contenedor
    height: "100%", // Ajusta la altura de la imagen al 100% del contenedor
    objectFit: "contain", // Ajusta la imagen dentro del contenedor sin recortar
  };

  function ModalEcommersAPI() {
    return (
      <Modal
        show={show1}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Ecommerce API</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-primary">El backed esta desarrollado en Node.js. </p> 
          <p>Tecnologias usadas en el bachend: Express, mongoose, connect-mongo, dotenv, cookie-parser, jsonwebtoken, nodemailer, passport, passport-jwt, express-validator.</p>
          <p className="text-primary">El frontend esta desarrollado en React. Página responsive.</p>
          Tecnologias usadas en el frontend: Vite, react-bootstrap, react-router-dom, react-hook-form, js-cookie, sweetalert2.
        </Modal.Body>
        <hr />
        <Modal.Body>
          <p className="text-primary">PODES PROBAR LA APLICACION haciendo click en el icono website, registrate y listo. Si lo queres probar como usuario superAdministrador (Podras crear, editar y eliminar usuarios y productos) logueate con las siguientes credenciales, Usuario: superdministrador@superadministrador  Paasword: 123456</p>
          <p className="text-danger">¡IMPORTANTE! La aplicación está alojada en un hosting gratuito, por lo tanto, está suspendida y demora aproximadamente 1 minuto en traer primer dato o ejecutar la primera consulta.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalEcommersSSR() {
    return (
      <Modal
        show={show2}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Ecommerce SSR (Server side rendering)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-primary">Aplicación desarrollado con Node.js. Frontend renderizado desde el backend con plantillas Handlebars</p> 
          <p>Tecnologias usadas: Express, express-handlebars, express-session, mongoose, connect-mongo, dotenv, cookie-parser, nodemailer, passport, passport-local, passport-github2, connect-flash.</p>
        </Modal.Body>
        <hr />
        <Modal.Body>
          <p className="text-primary">PODES PROBAR LA APLICACION haciendo click en el icono website, registrate y listo. Si lo queres probar como usuario superAdministrador (Podras crear, editar y eliminar usuarios y productos) logueate con las siguientes credenciales, Usuario: superdministrador@superadministrador  Paasword: 123456</p>
          <p className="text-danger">¡IMPORTANTE! La aplicación está alojada en un hosting gratuito, por lo tanto, está suspendida y demora aproximadamente 1 minuto en traer primer dato o ejecutar la primera consulta.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalChatAPI() {
    return (
      <Modal
        show={show3}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Ecommerce API</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-primary">El backed esta desarrollado en Node.js. </p> 
          <p>Tecnologias usadas en el bachend: Express, socket.io, mongoose, connect-mongo, dotenv, cookie-parser, jsonwebtoken, nodemailer, passport, passport-jwt, express-validator.</p>
          <p className="text-primary">El frontend esta desarrollado en React. Página responsive.</p>
          Tecnologias usadas en el frontend: Vite, react-bootstrap, socket.io-client, react-router-dom, react-hook-form, js-cookie, sweetalert2.
        </Modal.Body>
        <hr />
        <Modal.Body>
          <p className="text-primary">PODES PROBAR LA APLICACION haciendo click en el icono website, registrate y listo. Si lo queres probar como usuario superAdministrador (Podras crear, editar y eliminar usuarios) logueate con Usuario: superdministrador@superadministrador  Paasword: 123456</p>
          <p className="text-danger">¡IMPORTANTE! La aplicación está alojada en un hosting gratuito, por lo tanto, está suspendida y demora aproximadamente 1 minuto en traer primer dato o ejecutar la primera consulta.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleClose = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };

  const handleClickDetail = (title) => {
    // Abre el modal cuando hagan clic en el enlace
    switch (title) {
      case "Ecommers API":
        setShow1(true);
        break;
      case "Ecommerce SSR":
        setShow2(true);
        break;
      case "Chat API":
        setShow3(true);
        break;
    }
  };

  return (
    <>
      <div className="card" style={cardStyle}>
        <img
          src={`/${imageName}`}
          className="card-img-top"
          style={imgStyle}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a
              onClick={() => handleClickDetail(title)}
              className="btn btn-dark"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiBookOpen /> Detalle de la App
            </a>
            <a
              href={githubLink}
              className="btn btn-primary"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={websiteLink}
              className="btn btn-primary"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Website
            </a>
          </div>
        </div>
      </div>
      {show1 && <ModalEcommersAPI />}
      {show2 && <ModalEcommersSSR />}
      {show3 && <ModalChatAPI />}
    </>
  );
}

export default Card;
