

type ServiceCardType = {
    photo?: string;
    title?: string;
    description1?: string;
    description2?: string;

  };
  
  const ServiceCard = (props: ServiceCardType) => {
    return (
      <section className="service_card" >
        <div className="card_image">
          <img src={props.photo} alt="card cover" />
        </div>
        <div>
        <div className="card_title">
        {props.title} </div>
        <div className="card_description">{props.description1}</div> </div>
        
      </section>
    );
  };
  
  export default ServiceCard;
  