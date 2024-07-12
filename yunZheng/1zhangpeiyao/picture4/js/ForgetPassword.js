function del (){
    let a = document.getElementById("hint");
    let b = document.getElementById("btn");
    a.remove();
    b.remove();
}

function login() {
    let a = document.getElementById("account").value;
    let r = document.getElementById("reset").value;
    let n = document.getElementById("new").value;
    let c = document.getElementById("confirm").value;
    console.log(a);
    console.log(r);
    console.log(n);
    console.log(c);
  axios
    .post(
      "https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/forgetPasswordServlet",
      {
        account: a,
        checkCode: r,
        password: n,
      }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data.status);
      if (res.data.status == -1) {
        alert("用户信息不存在，请重新输入");
      } else {
        alert("重置密码成功！请重新登录");
        location.href="../../picture3/Login.html"
      }
    })
    .catch((error) => {
      console.log(error);
      alert("接口出问题了");
    });
}