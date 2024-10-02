import React from "react";

function Services() {
  return (
    <section
      id="Services"
      className="min-h-screen flex flex-col items-center justify-center bg-color-3"
    >
      <h2 className="text-4xl mb-10 reveal-top-services">
        My <span className="text-color-1">Servecies</span>
      </h2>
      <div className="flex flex-row gap-[30px] max-md:flex-col">
        <ServiceCard
          iconClass="ri-code-s-slash-line"
          title="Web Development"
          description="Crafting modern and responsive websites using the latest technologies. We build scalable and efficient web solutions tailored to your business need."
        />
        <ServiceCard
          iconClass="ri-smartphone-line"
          title="Mobile Development"
          description="Building seamless and responsive mobile applications for all platforms."
        />
        <ServiceCard
          iconClass="ri-paint-brush-line"
          title="UI/UX Design"
          description="Creating intuitive and user-friendly designs that enhance user experience."
        />
      </div>
    </section>
  );
}
const ServiceCard = ({ iconClass, title, description }) => {
  return (
    <div className="w-[350px] bg-color-4 p-10 rounded-lg flex flex-col items-center shadow-lg reveal-bottom">
      <div className="h-[60px] flex items-center justify-center">
        <i className={`${iconClass} text-color-1 text-5xl`}></i>
      </div>
      <p className="font-bold mb-2">{title}</p>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
};

export default Services;
