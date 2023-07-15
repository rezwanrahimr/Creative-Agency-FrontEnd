import carousel1 from "../../../assets/images/image-1.jpg";
import carousel2 from "../../../assets/images/image-2.jpg";
import carousel3 from "../../../assets/images/image-3.jpg";
import carousel4 from "../../../assets/images/image-4.jpg";
import carousel5 from "../../../assets/images/image-5.jpg";
import carousel6 from "../../../assets/images/image-6.jpg";
import "./WorkSimple.scss";
const WorkSimple = () => {
  const workData = [
    { title: "Creative App", service: "ios, design", image: carousel1 },
    { title: "Brochure Design", service: "Graphic, Print", image: carousel2 },
    {
      title: "Ecommerce Development",
      service: "Web Application",
      image: carousel3,
    },
    { title: "Icon Pack", service: "Android & iOs, Design", image: carousel4 },
    { title: "Creative App", service: "ios, design", image: carousel5 },
    { title: "Creative App", service: "ios, design", image: carousel6 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  px-12">
      {workData?.map((element, index) => (
        <div
          key={index}
          className="w-full h-full hover:-translate-y-1 hover:scale-110  duration-300 mt-5 "
        >
          <img className="rounded-xl" src={element?.image} alt="" />
          <div className="text-center mt-2">
            <h1 className="text-primary font-semibold text-2xl">
              {element?.title}
            </h1>
            <p>{element?.service}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSimple;
