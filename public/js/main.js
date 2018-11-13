$(function(){
    $("#GetData").click(function(){
        $.ajax({
            type: "GET",
            url: "/getData",
            data: {type:1},
            //dataType: "json",
            success: function(data){
                $("#showData").val(data.data);
            },
            error:function(err){
                $("#showData").val(err);
                // console.log(err);
            }
        });
    });
});