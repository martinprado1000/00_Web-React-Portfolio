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
            githubLink="https://github.com"
            websiteLink="https://example.com"
          />
        </div>
        <div className="col-md-4 my-3">
          <Card
            imageName="Ecommerce_SSR.PNG"
            title="Ecommerce SSR"
            text="Ecommer desarrollado con Node y renderizado con handlebars."
            githubLink="https://github.com"
            websiteLink="https://example.com"
          />
        </div>
        <div className="col-md-4 my-3">
          <Card
            imageName="Chat.PNG"
            title="Chat API"
            text="Chat desarrollado con Node y React."
            githubLink="https://github.com"
            websiteLink="https://example.com"
          />
        </div>
      </div>
    </div>
  );
}


export default BodyAplications;
