// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useQuery } from "react-query";
import "./ClientReview.scss";

const ClientReview = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/review");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="md:flex items-center review-container md:py-14 py-8">
      <div className="review-content md:p-12 p-8">
        <h2 className="text-secondary">CLIENTS TESTIMONIAL</h2>
        <h1 className="text-primary">
          What our clients say about our Company.
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {data?.slice(0, 5).map((review) => (
          <SwiperSlide key={review._id} className="md:p-12 px-8">
            <div>
              <p className="text-justify">{review.details}</p> <br />
              <div className="flex items-center">
                <div className="avatar me-3">
                  <div className="w-24 rounded-full">
                    <img src={review.image}></img>
                  </div>
                </div>
                <div className="text-left">
                  <h1 className="font-bold">{review.name}</h1>
                  <h2>{review.designation}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;
