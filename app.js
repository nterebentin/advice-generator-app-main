/* Jquery */

const adviceId = $("#advice-id");
const adviceTxt = $("#advice-text");
const adviceBtn = $("#generate-btn");

function getAdvice() {
  $.ajax({
    url: "https://api.adviceslip.com/advice",
    method: "GET",
    dataType: "json",
    success: function(data) {
      adviceId.text(data.slip.id);
      adviceTxt.text(data.slip.advice);
    },
    error: (textStatus, errorThrown) => {
        console.log(textStatus, errorThrown);
    }
  });
}

getAdvice();
adviceBtn.on("click", getAdvice);


/* JS */
// const adviceId = document.getElementById("advice-id");
// const adviceTxt = document.getElementById("advice-text");
// const adviceBtn = document.getElementById("generate-btn");


// async function getAdvice(){
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const { slip: { id, advice}} = await res.json();
//     adviceId.innerText = id;
//     adviceTxt.innerText = advice;
// }
// getAdvice()
// adviceBtn.addEventListener("click", getAdvice)
