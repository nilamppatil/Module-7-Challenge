$(document).ready(function(){
    $(".saveButton").on("click",function(){
        console.log('Saved ..');
        let timeId = $(this).parent().attr("id")
        let value =$(this).siblings(".description").val();

        console.log(timeId);
        console.log(value);

        localStorage.setItem(timeId,value);

        $(".notification").addClass('show');

        setTimeout(function(){
            $(".notification").removeClass("show");
        },5000)
        

    })
function hourUpdate(){
                 let current_Hour =moment().hours();
                 for (let i=0;i<$(".time-block").length;i++){
                   let hour =parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
                   console.log(hour)
                   console.log(current_Hour)
                   if(hour<current_Hour){
                       $(".time-block")[i].classList.add("past")
                   
                   }
                   else if (hour == current_Hour){
                    $(".time-block")[i].classList.add("past")
                    $(".time-block")[i].classList.remove("present")
                   }
                   else {
                    $(".time-block")[i].classList.remove("past")
                    $(".time-block")[i].classList.remove("present")
                    $(".time-block")[i].classList.add("future")

                   }


                 }

}

hourUpdate();

let interval = setInterval(hourUpdate,15000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))



$("#currentDay").text(moment().format("dddd,MMMM,Do"))




})