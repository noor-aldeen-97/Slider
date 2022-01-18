$(function () {

    var count = 1;
    var timer;

    var SliderTimer = () => {
        timer = setInterval(function () {
            $(".button-container input[type=radio][data-index=" + count + "]").click();
        }, 5000);
    };
    var checkCount = ()=>{
        count ++;
        if(count > 3){
            count =0;
        }
    };

    $(".button-container input[type=radio]").on("change", function () {
        var index = $(this).data("index");
        $(".img-container img:eq( " + index + " )").addClass("active");
        setTimeout(function () {
            $(".img-container img").removeClass("active");
            $(".img-container img:eq( " + index + " )").addClass("active");
        }, 100);

        clearInterval(timer);
        SliderTimer();
        checkCount();
    });


    $(".arrow-right").on("click",function(){
        $(".button-container input[type=radio][data-index=" + count + "]").click();
        clearInterval(timer);
        SliderTimer();
    });

    $(".arrow-left").on("click",function(){
        $(".button-container input[type=radio][data-index=" + (3 - count) + "]").click();
        clearInterval(timer);
        SliderTimer();
    });
    SliderTimer();
});