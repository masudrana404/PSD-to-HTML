$(document).ready(function(){
    //mixitup(portfolio section)
    let mixer = mixitup('.container');

    //waypoint stickey menu


    $(".js--services-section").waypoint(function(derection){
        if(derection == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        };
        
    });

    //SMOOTH SCROLL FOR IE/EDGE/SAFARI

    $('a').on('click',function(event){
        if(this.hash !== ""){
            event.preventDefault();

            let hash = this.hash;

            $('html,body').animate({
                scrollTop:$(hash).offset().top},
                800, function(){
                    window.location.hash = hash;
            })
        };
    });

});

    function openNav(){
        document.getElementById('myNav').style.width ="100%";
    }
    function closeNav(){
        document.getElementById('myNav').style.width ="0%";
    }