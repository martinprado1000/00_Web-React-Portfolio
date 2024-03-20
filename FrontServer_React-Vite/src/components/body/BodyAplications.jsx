import Card from "../card/Card"

function BodyAplications() {
  return (
    <div className="container mt-3">  
      <div className="row">
        <div className="col-md-4 my-3"> 
          <Card
            imageName="Ecommerce.PNG"
            title="Ecommers API"
            text="Ecommerce desarrollado con Node y React."
            githubLink="https://github.com/martinprado1000/02_API-React_Node-Ecommers.git"
            websiteLink="https://zero2-api-react-node-ecommers-front.onrender.com/"
          />
        </div>
        <div className="col-md-4 my-3">
          <Card
            imageName="Ecommerce_SSR.PNG"
            title="Ecommerce SSR"
            text="Ecommer desarrollado con Node y renderizado con handlebars."
            githubLink="https://github.com/martinprado1000/Desafio_final.git"
            websiteLink="https://ecommerce-ssr.onrender.com/realTimeProducts"
          />
        </div>
        <div className="col-md-4 my-3">
          <Card
            imageName="Chat.PNG"
            title="Chat API"
            text="Chat desarrollado con Node y React."
            githubLink="https://github.com/martinprado1000/03_API-React_Node-Chat.git"
            websiteLink="https://zero3-api-react-node-chat-front.onrender.com/"
          />
        </div>
      </div>
    </div>
  );
}


export default BodyAplications;
