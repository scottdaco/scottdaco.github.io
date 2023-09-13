
$(document).ready(function() {
    $("#bfox").click(function() {
        $.ajax ({
        dataType: "json",
        url: "https://randomfox.ca/floof/",
        success: function(r) {
            console.log(r["image"]);
             $('#i').attr("src", r["image"]);
        }
        });
        $.ajax ({
        dataType: "json",
        url: "https://random-data-api.com/api/v2/appliances",
        success: function(r) {
            console.log(r["equipment"]);
             $('#n').text(r["equipment"]);
        }
        });
    });
    $("#bobj").click(function() {
        $(".img1").attr("src", "iron.jpg")
        $(".img2").attr("src", "tv.jpg")
        $(".img3").attr("src", "water.jpg")
    });
    $(".t").click(function() {
        $(".apg").attr("src", "tv.jpg")
    });
    $(".w").click(function() {
        $(".apg").attr("src", "water.jpg")
    });
    $(".ir").click(function() {
        $(".apg").attr("src","iron.jpg")
    });
    $(".l").click(function() {
        $(".apg").attr("src","aligatorlizard.jpg")
    });
});
