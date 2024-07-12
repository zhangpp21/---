var si = sessionStorage.getItem("studentName")
console.log(si)
let confirm = document.querySelector(".confirm");
let saveSuc = document.querySelector(".saveSuc")
var back = document.querySelector(".return");
let save = document.querySelector(".save")
confirm.addEventListener('click', function () {

    saveSuc.style.display = 'block'
})

back.onclick = function () {
    location.href = "../stuMod/studentMod.html";
}
let name1 = document.querySelector(".frame1");
let majorClass = document.querySelector(".frame2");
let stage = document.querySelector(".frame3");
let directionId = document.querySelector(".frame4");
let jobId = document.querySelector(".frame5");
let account = document.querySelector(".frame6");
let signature = document.querySelector(".signatureFra");
let carryPrize = document.querySelector(".carryPrizeFra");

axios.post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/selectAllUserByBigManager", {
    // name: name1.value,
    // majorclass: majorClass.value,
    // stage: stage.value,
    // directionID: directionId.value,
    // jobID: jobId.value,
    // account: account.value,
    // personalsignature: signature.value,
    // awards: carryPrize.value
})
    .then(function (response) {
        console.log(response);
        console.log(response.data.data)
        let q1 = document.querySelector(".q1");
        let q2 = document.querySelector(".q2");
        let q3 = document.querySelector(".q3");
        let q4 = document.querySelector(".q4");
        let q5 = document.querySelector(".q5");
        let q6 = document.querySelector(".q6");
        let sign1 = document.querySelector(".signatureFra");
        let sign = document.querySelector(".si");
        let carry = document.querySelector(".carryPrizeFra");
        len = response.data.data;
        var i = 0;
        console.log(len[0])
        for (i = 0; i < len.length; i++){
            if (len[i].name === si) {
                console.log(i)
                q1.value = len[i].name;
                q2.value = len[i].majorClass;
                q3.value = len[i].stage;
                q4.value = len[i].directionId;
                q5.value = len[i].userId;
                q6.value = len[i].account;
                sign1.value = len[i].personalSignature;
                carry.value = len[i].awards;
            }
        }
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () { })

save.onclick = function () {
    name1.disabled = "disabled"
    majorClass.disabled = "disabled"
    stage.disabled = "disabled"
    directionId.disabled = "disabled"
    jobId.disabled = "disabled"
    account.disabled = "disabled"
    signature.disabled = "disabled"
    carryPrize.disabled = "disabled"

    axios.post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/updateUserInfoByBigManagerServlet", {
        name: name1.value,
        majorclass: majorClass.value,
        stage: stage.value,
        directionID: directionId.value,
        jobID: jobId.value,
        account: account.value,
        personalsignature: signature.value,
        awards: carryPrize.value
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () { })
}   
