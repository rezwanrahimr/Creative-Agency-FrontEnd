import { useEffect, useState } from "react";
import image1 from "../../../assets/portfolio/app-img1.jpg";
import image2 from "../../../assets/portfolio/app-img2.jpg";
import image3 from "../../../assets/portfolio/app-img3.jpg";
import image4 from "../../../assets/portfolio/app-img4.jpg";
import image5 from "../../../assets/portfolio/app-img5.jpg";
import image6 from "../../../assets/portfolio/app-img6.jpg";

const OurWork = () => {
  const [item, setItem] = useState("All");
  const [workSimple, setWorkSimple] = useState([]);

  /*   const { data = [], isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      try {
        const res = await fetch("portfolio.json");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  }); */

  const data = [
    {
      name: "Pets Care & Training App",
      title: "iOs, Android",
      category: "Mobile App All Website",
      image: image1,
    },
    {
      name: "Car Rental App",
      title: "Graphic, Print",
      category: "Mobile App All Graphic",
      image: image2,
    },
    {
      name: "Event Management App",
      title: "Graphic, Print",
      category: "Mobile App All Graphic",
      image: image3,
    },
    {
      name: "Restaurant App",
      title: "Graphic, Print",
      category: "Mobile App All Graphic Website",
      image: image4,
    },
    {
      name: "Restaurant / Hotel App",
      title: "Graphic, Print",
      category: "Mobile App All Graphic",
      image: image5,
    },
    {
      name: "Super Mart App",
      title: "Graphic, Print",
      category: "Mobile App All Graphic Website",
      image: image6,
    },
  ];

  useEffect(() => {
    const work = data?.filter((element) => element.category?.includes(item));
    setWorkSimple(work);
  }, [item]);

  return (
    <div className="p-12 ">
      <div className="flex justify-between">
        <div>
          {/* <h2 className="text-secondary">OUR WORK</h2>
          <h1 className="text-primary text-4xl font-bold">Portfolio</h1> */}
        </div>
        <div className="text-sm ">
          <ul className="flex flex-wrap">
            <li>
              <button
                className={`btn m-2 ${
                  item == "All" ? "btn-secondary" : " btn-primary"
                }`}
                onClick={() => setItem("All")}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={`btn m-2 ${
                  item == "Website" ? "btn-secondary" : " btn-primary"
                }`}
                onClick={() => setItem("Website")}
              >
                Website
              </button>
            </li>
            <li>
              <button
                className={`btn m-2 ${
                  item == "Mobile App" ? "btn-secondary" : " btn-primary"
                }`}
                onClick={() => setItem("Mobile App")}
              >
                Mobile App
              </button>
            </li>
            <li>
              <button
                className={`btn m-2 ${
                  item == "Graphic" ? "btn-secondary" : " btn-primary"
                }`}
                onClick={() => setItem("Graphic")}
              >
                Graphic
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
        {workSimple?.map((element, index) => (
          <div
            key={index}
            className="w-full h-full hover:-translate-y-1 hover:scale-110  duration-300"
          >
            <img className="rounded-xl" src={element.image} alt="" />
            <div className="text-center mt-2">
              <h1 className="text-primary font-semibold text-2xl">
                {element.name}
              </h1>
              <p>{element.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
