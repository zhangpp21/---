let confirm = document.getElementById("confirm");
let back = document.querySelector(".return");
// confirm.onclick = function () {
//     console.log(response.msg)
//     // location.href = "../modPage/modPage.html"
// }
function find() {
    let obj = {};
    var b = document.getElementById("studentName").value;

    console.log(b);
    axios.post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/selectStudentFromAccountByBigManagerServlet",
            {name : b}
    )

        .then((res) => {
    console.log(res);
        console.log(res.data.msg);
        var qq = res.data.msg
    if(qq == '没有此用户') {
        alert("用户不存在");
        }
    else {
        confirm.onclick = function () {
            sessionStorage.setItem("studentName", b)
            sessionStorage.getItem("studentName")
            console.log(sessionStorage.getItem("studentName"))
            console.log(res.data.msg)
            location.href = "../ModifySituation/modPage.html"
        }
        }
})
        .catch((error) => {
            console.log(error);
            alert("接口出现问题了");
})

}

