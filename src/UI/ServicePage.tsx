import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./Atom/serviceCard";

async function fetchData() {
    try {
      // Get Request
      const response = await axios.get("https://admin.naxa.com.np/api/services");
  
      // daya
      const responseData = response.data;
  
      return responseData
      
    } catch (error) {
      // for errors
      console.error("Error:", error);
    }
  }

const ServicePage = () => {

    const [services, setServices] = useState<object[]>([]);

  useEffect(() => {
    (async () => {
      if (services.length == 0) {
        const response: any = await fetchData();

        setServices(response || []);

      }
    })();
  }, []);

  console.log(services);

  return (
    <div className="services_list">
      <div>
      <ul>
      {services.map((service:any,) => {

return <li key={service.id}>{service.title}</li>;
})}
      </ul>
      </div>
      <div>

{services.map((service:any, id) =>(
                    <div className="service_description" key={id}>
                        <ServiceCard
                        photo={service.photo}
                          title={service.title}
                          description1={service.description1}
                        />
                    </div>
                  )
              )}
        
      </div>
        </div>
        
  )
}

export default ServicePage;