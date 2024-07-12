function del() {
  let a = document.getElementById("error");
  let b = document.getElementById("confirm");
  a.remove();
  b.remove();
}

function change() {
  let newarr = "";
  let arr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "j",
    "h",
    "i",
    "g",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (var i = 0; i < 4; i++) {
    var index = Math.floor(Math.random() * 62);
    newarr += arr[index];
  }
  document.getElementById("vcode3").innerHTML = newarr;
}

function reg() {
  let a = document.getElementById("name2").value;
  let p = document.getElementById("password2").value;
  let c = document.getElementById("password4").value;
  let e = document.getElementById("email2").value;
  let v = document.getElementById("vcode2").value;
  console.log(a, p, c, e, v);
  let code = document.getElementById("vcode3").innerHTML;
  if (code == v) {
    if (p !== c) {
      alert("两次输入的密码不相同，请重新输入");
    } else {
      axios
        .post(
          "https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/registerServlet",
          {
            account: a,
            password: p,
            email: e,
            checkCode: v,
          }
        )
        .then((res) => {
          // console.log(res);
          console.log(res.data);
          if (res.data.msg == "注册成功") {
            alert("注册成功!");
            location.href = "../picture6/UpdateProfile.html";
          } else {
            alert("该账号或邮箱已存在！");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("接口出问题了");
        });
    }
  } else {
    alert("验证码输入错误，请重新输入");
  }
}
