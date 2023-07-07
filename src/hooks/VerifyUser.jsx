export function verifyUser(userInfo) {
  fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userInfo }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.token) {
        localStorage.setItem("token", data?.token);
      }
    });
}
