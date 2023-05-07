let sp2 = window.location.search.slice(1);
 let usp1 = new URLSearchParams(sp2);
 if (sp2.includes('firstOk')) {
   const wait2 = document.querySelector("#wait2");
   const continue1 = document.getElementById("continue2");
   wait2.style.display = "block";
   let waitCount1 = 8;
   let wait1count1 = setInterval(() => {
     waitCount1--;
     if (waitCount1 == 0) {
       wait2.style.display = "none";
       continue2.style.display = "flex";
       clearInterval(wait1count1);
       continue2.onclick = ()=>{
         let url = window.location.href;
         if (url.indexOf('?firstOk') > -1) {
         let updatedUrl = url.replace('?firstOk', '');
         window.history.replaceState({}, '', updatedUrl);
         window.location.href = "#wait-timer";
       }
       }
     }
   }, 1000);
 }
 
 
 function destination(){
   continue2.style.display = "none";
  const waitTimer = document.querySelector("#wait-timer");
  const continue3 = document.querySelector("#continue3");
  let count = 12;
  let counter = setInterval(() => {
    waitTimer.textContent = `Please Wait ${count} Seconds`;
    count--;
    if (count == -1) {
      clearInterval(counter);
      waitTimer.style.display = "none";
      continue3.style.display = "flex";
    }
  }, 1000);
 }
 
 function redirect(){
   const key = "J@yX24";
   let flink = localStorage.getItem("flink");
   let decrypted = CryptoJS.AES.decrypt(flink, key);
   let ogLink = decrypted.toString(CryptoJS.enc.Utf8);
   localStorage.clear();
   window.location.assign(ogLink);
 }
