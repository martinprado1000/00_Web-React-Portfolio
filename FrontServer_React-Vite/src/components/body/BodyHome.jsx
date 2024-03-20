import React from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaBootstrap,
  FaGit,
} from "react-icons/fa";
import { SiMysql, SiPhp, SiMongodb } from "react-icons/si";

function BodyHome() {
  return (
    <Container fluid>
      <Row>
        <Col xs={9} style={{ padding: "20px" }}>
          <div className="mt-4">
            <h5>Martín Fernando Prado</h5>
            <p>
              <FaMapMarkerAlt /> Guemes 2147, Rosario, Sante Fe, 2000 (AR)
            </p>
            <p>
              <FaEnvelope /> martinprado1000@gmail.com
            </p>
            <p>
              <FaPhone /> 341-2725888
            </p>
            <p>
              <FaLinkedin className="me-1" />
              <a
                href="https://www.linkedin.com/in/mart%C3%ADn-fernando-prado-396a80227/"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
          <hr />

          {/* Resumen personal */}
          <div className="mt-4">
            <h4 className="text-primary">Resumen Personal</h4>
            <p>
              Interesado en el desarrollo de aplicaciones y comprometido con el
              aprendizaje continuo. Busco ampliar mis conocimientos y
              habilidades en el área, mientras colaboro en proyectos diversos.
              Aprecio la oportunidad de formar parte de equipos colaborativos
              donde pueda seguir creciendo profesionalmente.
            </p>
          </div>
          <hr />

          {/* Historial de empleo */}
          <div className="mt-4">
            <h4 className="text-primary">Historial de Empleo</h4>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                  <img
                    src="Toolsoft.PNG"
                    className="card-img"
                    alt="Imagen de Toolsoft SRL"
                  />
                  {/* <Image src="Toolsoft.PNG" rounded style={{ width: "100px" }} /> */}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Toolsoft SRL</h5>
                    <p className="card-text">
                      Rosario, Santa Fe | Mayo 2016 - Presente
                    </p>
                    <p className="card-text">
                      Técnico en soporte informático de primer y segundo nivel
                      en infraestructura. Windows, Linux, VMWare, CCTV,
                      telefonía analógica e IP, networking, Mikrotik. Encargado
                      del análisis, desarrollo e implementación de proyectos de
                      infraestructura. Leer manuales técnicos, consultar con los
                      usuarios o realizar diagnósticos informáticos para
                      investigar y resolver problemas o para proporcionar
                      asistencia técnica y soporte.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                  <img
                    src="w.PNG"
                    className="card-img mx-5"
                    alt="Imagen de Wisetek SRL"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Wisetek SRL</h5>
                    <p className="card-text">
                      Rosario, Santa Fe | Ene. 2014 - Ene. 2016
                    </p>
                    <p className="card-text">
                      Trabajo de forma Autónoma. Técnico en trabajos de
                      infraestructura, domótico, inmótica, CCTV, seguridad
                      electrónica, control de acceso, detección de incendio y de
                      intrusión, cableado estructurado. Diseño y desarrollo de
                      casas inteligentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <img
                  src="IBM.PNG"
                  className="card-img card-center"
                  alt="Imagen de IBM Argentina"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">IBM Argentina</h5>
                  <p className="card-text">
                    Buenos Aires, Capital Federal | Jun. 2006 - Ene. 2014
                  </p>
                  <p className="card-text">
                    Técnico especialista en ATM (Cajeros Automáticos y
                    Autoservicios) Reparación a nivel HW (reparaciones internas
                    como cambios de ingeniería de los equipos). Configuraciones,
                    masterizaciones y programación a nivel SW. Cursos oficiales
                    provistos por IBM, estando certificado en las 3 marcas más
                    importantes de ATM a nivel mundial (Diebold, NCR y Wincor).
                    Por medio de IBM he trabajado en directa con las empresas
                    BANELCO y LINK en el área de telecomunicaciones y redes (TCP
                    IP y X25.)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          {/* Educación */}
          <div className="mt-4">
            <h4 className="text-primary">Educación</h4>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Coderhouse</h5>
                <p className="card-text">
                  Programador Backend, Node.js, Dic. 2023
                </p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  Terciario Urquiza, Rosario, Santa Fe
                </h5>
                <p className="card-text">Analista en sistemas, Nov. 2016</p>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">
                  Escuela Técnica N° 19 - D.E: 1° “Alejandro Volta” , Buenos
                  Aires, Capital Federal
                </h5>
                <p className="card-text">Técnico electrónico, Nov. 2004</p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={3} className="bg-dark" style={{ padding: "20px" }}>
          {/* Imagen */}
          <div className="text-center mb-4">
            <Image src="MartinPrado.jpg" rounded style={{ width: "100px" }} />
          </div>
          {/* Actitudes */}
          <div className="fs-6">
            <h6 className="text-primary">Actitudes</h6>
            <div className="mb-2">
              <p>
                <FaNodeJs /> Node.js
              </p>
              <ProgressBar now={100} style={{ height: "8px" }} />
            </div>
            <div className="mb-2">
              <p>
                <FaReact /> React
              </p>
              <ProgressBar now={90} style={{ height: "8px" }} />
            </div>
            <div className="mb-2">
              <p>
                <SiMongodb /> MongoDB
              </p>
              <ProgressBar now={90} style={{ height: "8px" }} />
            </div>
            <div className="mb-2">
              <p>
                <FaBootstrap /> Bootstrap
              </p>
              <ProgressBar now={90} style={{ height: "8px" }} />
            </div>
            <div className="mb-2">
              <p>
                <FaGit /> Git
              </p>
              <ProgressBar now={90} style={{ height: "8px" }} />
            </div>
            <div className="mb-2">
              <p>
                <SiMysql /> MySQL
              </p>
              <ProgressBar now={60} style={{ height: "8px" }} />
            </div>
            <div className="mb-2">
              <p>
                <SiPhp /> PHP
              </p>
              <ProgressBar now={50} style={{ height: "8px" }} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BodyHome;
