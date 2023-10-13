import axios from "axios";
import { useEffect, useState } from "react";

async function fetchData() {
    try {
      // Make a GET request and wait for the response
      const response = await axios.get("https://admin.naxa.com.np/api/services");
  
      // Access the data from the response
      const responseData = response.data;
  
      return responseData
      
    } catch (error) {
      
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
    <div>
      {services.map((service:any,) => {

return <h5 key={service.id}>{service.title}</h5>;
})}
        
        </div>
  )
}

export default ServicePage;