import { useQuery } from "react-query";
import Loading from "../../../Components/Loading/Loading";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  //Load user data
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/user"],
    queryFn: async () => {
      const res = await fetch(
        "https://creative-agency-backend-henna.vercel.app/user"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  // Make admin Function
  const admin = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You are be able to Admin this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://creative-agency-backend-henna.vercel.app/user/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.acknowledged) {
                refetch();
                Swal.fire("Success!", "delete this user.", "success");
              }
            });

          Swal.fire("Admin Added!", "make admin this user.", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete User Function
  const deleteUser = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Delete this user!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://creative-agency-backend-henna.vercel.app/user/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.acknowledged) {
                refetch();
                Swal.fire("Success!", "delete this user.", "success");
              }
            });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs md:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Make Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((element) => (
              <tr key={element._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={element.image} alt="user image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{element.name}</div>
                      <div className="text-sm opacity-50">{element.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-bold">{element.role}</span>
                </td>
                <td>
                  {element.role !== "Admin" && (
                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => admin(element?._id)}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <th>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => deleteUser(element?._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
