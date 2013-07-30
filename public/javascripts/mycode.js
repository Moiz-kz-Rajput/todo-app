
(function(){
            $(function(){
                addHandlers();
    })

    function addHandlers(){
        ('#register').bind("click",function(){
            $(submit).onclick(),function(){
                $.ajax({
                       url:"/register",
                        type:"post",
                        data:{

                            Todo:("#Todo").val()
                        }

                }).done(function (response){
                        alert("success");
                        alert("res "+response);
                    });
            }
        })

    }
})
        $(function(){
            $("p").html(function(){
                $.ajax({
                    url:"/findAll",
                    type:"get",
                    data:{
                        Todo:("")
                    }

                })

            })

        })