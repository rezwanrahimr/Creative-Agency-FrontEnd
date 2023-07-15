export function verifyUser(userInfo) {
  fetch("https://creative-agency-backend-henna.vercel.app/user", {
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
