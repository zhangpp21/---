let url = location.search;
console.log(url);
function confirm() {
    let n = document.getElementById("name2").value;
    let c = document.getElementById("class2").value;
    let ba = document.getElementById("batch2").value;
    let p = document.getElementById("position2").value;
    let bi = document.getElementById("bio2").value;
    let e = document.getElementById("experience2").value;
    console.log(n, c, ba, p, bi, e);
  axios
    .post(
      "https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/updateProfileServlet",
      {
        name: n,
        majorClass: c,
        stage: ba,
        jogId: p,
        personalSignature: bi,
        awards: e,
      }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
      // location.href =
      //   "../../2student/updateProfile.html?name=" +
      //   n +
      //   "&majorClass=" +
      //   c +
      //   "&stage=" +
      //   ba +
      //   "&jogId=" +
      //   p +
      //   "&personalSignature=" +
      //   bi +
      //   "&awards=" +
      //   e;
      location.href = "../picture3/Login.html";
    })
    .catch((error) => {
      console.log(error);
      alert("接口出问题了");
    });
}