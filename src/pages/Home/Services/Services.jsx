import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(' https://cars-doctors-18420.web.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center my-5">
                <p className="text-orange-500 font-bold">Service</p>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="font-bold">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-5">
                {
                    services.map(service => <ServiceCard key={service._id}
                    service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;