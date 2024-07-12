function login() {
  let a = document.getElementById("account").value;
  let p = document.getElementById("password").value;
  console.log(a);
  console.log(p);
  axios
    .post(
      "https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/loginServlet",
      { account: a, password: p }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
      if (res.data.status == -1) {
        alert("用户名或密码错误，请重新输入");
      } else {
        if (a == 2023004333) {
          location.href = "../../2student/updateProfile.html";
        } else if (a == 2023009876) {
          location.href = "../../3yundingSystem/header.html";
        } else {
          location.href = "../../4yunzheng/stuFind/studentFind.html";
        }
      }
    })
    .catch((error) => {
      console.log(error);
      alert("接口出问题了");
    });
}
