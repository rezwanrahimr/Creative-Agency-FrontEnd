import Swal from "sweetalert2";

const AddService = () => {
  const handleServiceAdd = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const subTitle = event.target.subTitle.value;
    const photo = event.target.photo.files[0];

    const formData = new FormData();
    formData.append("image", photo);

    fetch(
      "https://api.imgbb.com/1/upload?key=5756255c76d4869d95450653607b1dd9",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const service = {
            title,
            subTitle,
            photo: data.data.url,
          };
          fetch("http://localhost:5000/service", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ service }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.acknowledged) {
                event.target.reset();
                Swal.fire(
                  "New Service Added!",
                  "Check On Service Section!",
                  "success"
                );
              }
            });
        }
      });
  };
  return (
    <form className="w-1/2" onSubmit={handleServiceAdd}>
      <input
        name="title"
        type="text"
        required
        placeholder="Title"
        className="input input-bordered w-full "
      />{" "}
      <br />
      <textarea
        name="subTitle"
        className="textarea textarea-bordered w-full h-28 required my-2"
        placeholder="Description"
      ></textarea>
      <br />
      <input
        name="photo"
        type="file"
        className="file-input  file-input-secondary border-0 w-full max-w-xs"
      />
      <br />
      <button
        type="submit"
        className="btn btn-active btn-neutral w-1/2 mt-2 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default AddService;
