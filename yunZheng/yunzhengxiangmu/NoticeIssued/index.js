 function noticebutton(){
    
    var odiv = document.getElementById("notice");

    if (odiv.style.display == "none") {
        odiv.style.display = "block";
       
    } else {
        odiv.style.display = "none";
       
    }
}
function noticebutton1(){
let a =document.getElementById("announcementcontent").value;
// var b=JSON.stringify(a);

axios
   .post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/issueAnnouncementServlet",{announcementContent:a})
   .then((res) => {
    // alert(document.getElementById("announcementcontent").value);
    console.log(res);
    console.log(res.data);
   
  })
  .catch((error) => {
     console.log(error);
     alert("接口出问题了");
    
  });
}




