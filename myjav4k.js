(function($) {
    var $form = $("#ajax-search-form")
      , $input = $form.find(":text");
    $form.append('<div class="search-item"></div>');
    var $result_container = $(".search-item");
    $form.on("submit", function() {
        var keyword = $input.val();
        $result_container.show().html('<div id="ajaxloader">\u0110ang t\u1ea3i d\u1eef li\u1ec7u.</div>');
        $.ajax({
            url: "" + sitehome + "/feeds/posts/summary?alt=json-in-script&q=" + keyword + "&max-results=9999",
            type: "get",
            dataType: "jsonp",
            success: function(data) {
                var entry = data.feed.entry, posturl, posttitle, thumburl, skeleton = "";
                if (entry !== undefined) {
                    skeleton = '<div class="boiden"></div>';
                    skeleton += '<div class="block_new"><div class="tabs"><div class="tabs_content"><div class="bar_title"><span><a href="/p/search.html?q=' + keyword + '">T\u00ecm ki\u1ebfm v\u1edbi &quot;' + keyword + '&quot;> t\u00ecm th\u00eam</a></span><a href="/" class="close">&times;</a></div><ul class="l_w_l">';
                    for (var i = 0; i < entry.length; i++) {
                        for (var j = 0; j < entry[i].link.length; j++)
                            if (entry[i].link[j].rel == "alternate") {
                                posturl = entry[i].link[j].href;
                                break
                            }
                        "media$thumbnail"in entry[i] ? thumburl = entry[i].media$thumbnail.url : thumburl = '"+no_img+"';
                        thumburl = thumburl.replace(/s72-c/gi, "s500");
                        posttitle = entry[i].title.$t;
                        var Ntitle = posttitle;
                        var Etitle = "HD";
                        if (posttitle.indexOf("[") != -1 || posttitle.indexOf("]") != -1) {
                            Ntitle = posttitle.split("[")[0];
                            Etitle = posttitle.split("[")[1].split("]")[0]
                        }
                        skeleton += '<li><div><a  class="vtip" href="' + posturl + '" title="' + Ntitle + '"><img class="thumbnail" alt="' + posttitle + '" src="' + thumburl + '"></a><div><div class="f_desc"><a class="vtip" href="' + posturl + '" title="' + Ntitle + '" >' + Ntitle.split("-")[0] + '</a></div><div class="f_desc2">' + Ntitle.split("-")[1] + '</div></div><div class="f_tag">' + Etitle + "</div></div></li>"
                    }
                    skeleton += "</ul></div></div></div>";
                    $result_container.html(skeleton)
                } else
                    $result_container.html('<div class="boiden"></div><div class="block_new"><div class="tabs_content"><h1>Kh\u00f4ng c\u00f3 k\u1ebft qu\u1ea3. g\u00f5 t\u1eeb c\u1ee5 th\u1ec3 h\u01a1n!<a href="/" class="close">&times;</a></h1></div></div>')
            },
            error: function() {
                $result_container.html('div class="boiden"></div><div class="block_new"><div class="tabs_content"><h1>Error loading feed.<a href="/" class="close">&times;</a></h1></div></div>')
            }
        });
        return false
    });
    $form.on("click", ".close", function() {
        $result_container.fadeOut();
        return false
    })
}
)(jQuery);
$(function() {
    $.ajax({
        url: "" + sitehome + "/feeds/posts/default/-/" + label1 + "?alt=json-in-script&max-results=20",
        type: "get",
        dataType: "jsonp",
        success: function _slider(data) {
            var posturl, posttitle, thumburl, skeleton = "", entry = data.feed.entry;
            if (entry !== undefined) {
                skeleton = "<ul>";
                for (var i = 0; i < entry.length; i++) {
                    for (var j = 0; j < entry[i].link.length; j++)
                        if (entry[i].link[j].rel == "alternate") {
                            posturl = entry[i].link[j].href;
                            break
                        }
                    "media$thumbnail"in entry[i] ? thumburl = entry[i].media$thumbnail.url : thumburl = '"+no_img+"';
                    thumburl = thumburl.replace(/s72-c/gi, "s500");
                    posttitle = entry[i].title.$t;
                    var Ntitle = posttitle;
                    var Etitle = "HD";
                    if (posttitle.indexOf("[") != -1 || posttitle.indexOf("]") != -1) {
                        Ntitle = posttitle.split("[")[0];
                        Etitle = posttitle.split("[")[1].split("]")[0]
                    }
                    skeleton += '<li><a href="' + posturl + '" title="' + Ntitle + '"><div class="slide_shadow"></div><img class="sl_thumb" alt="' + posttitle + '" src="' + thumburl + '"></a><div class="slide_desc"><div class="sld_content"><a class="name_sl1" href="' + posturl + '" title="' + Ntitle + '">' + Ntitle.split("-")[0] + '</a><div class="name_sl2">' + Ntitle.split("-")[1] + '</div></div></div><div class="sl_tag">' + Etitle + "</div></li>"
                }
                skeleton += "</ul>";
                $(".mycarousel").html(skeleton);
                $(".mycarousel").jCarouselLite({
                    speed: 400,
                    auto: 7E3,
                    visible: 5,
                    btnNext: ".next",
                    btnPrev: ".prev"
                })
            } else
                $(".mycarousel").html("Kh\u00f4ng c\u00f3 d\u1eef li\u1ec7u...")
        },
        error: function() {
            $(".mycarousel").html("L\u1ed7i d\u1eef li\u1ec7u...")
        }
    })
});
function myjav4k(data) {
    var posturl, posttitle, thumburl, skeleton = "", entry = data.feed.entry;
    if (entry !== undefined) {
        skeleton = "<ul class='l_w_l'>";
        for (var i = 0; i < entry.length; i++) {
            for (var j = 0; j < entry[i].link.length; j++)
                if (entry[i].link[j].rel == "alternate") {
                    posturl = entry[i].link[j].href;
                    break
                }
            "media$thumbnail"in entry[i] ? thumburl = entry[i].media$thumbnail.url : thumburl = '"+no_img+"';
            thumburl = thumburl.replace(/s72-c/gi, "s500");
            posttitle = entry[i].title.$t;
            var Ntitle = posttitle;
            var Etitle = "HD";
            if (posttitle.indexOf("[") != -1 || posttitle.indexOf("]") != -1) {
                Ntitle = posttitle.split("[")[0];
                Etitle = posttitle.split("[")[1].split("]")[0]
            }
            skeleton += '<li><div><a  class="vtip" href="' + posturl + '" title="' + Ntitle + '"><img class="thumbnail" alt="' + posttitle + '" src="' + thumburl + '"></a><div><div class="f_desc"><a class="vtip" href="' + posturl + '" title="' + Ntitle + '" >' + Ntitle.split("-")[0] + '</a></div><div class="f_desc2">' + Ntitle.split("-")[1] + '</div></div><div class="f_tag">' + Etitle + "</div></div></li>"
        }
        skeleton += "</ul>";
        document.write(skeleton)
    }
}
function phimlist(data) {
    var posturl, posttitle, skeleton = "", entry = data.feed.entry;
    if (entry !== undefined) {
        skeleton = "";
        for (var i = 0; i < entry.length; i++) {
            for (var j = 0; j < entry[i].link.length; j++)
                if (entry[i].link[j].rel == "alternate") {
                    posturl = entry[i].link[j].href;
                    break
                }
            posttitle = entry[i].title.$t;
            var Ntitle = posttitle;
            var Etitle = "HD";
            if (posttitle.indexOf("[") != -1 || posttitle.indexOf("]") != -1) {
                Ntitle = posttitle.split("[")[0];
                Etitle = posttitle.split("[")[1].split("]")[0]
            }
            skeleton += '<li><a href="' + posturl + '" title="' + Ntitle + '">' + Ntitle.split("-")[0] + '</a><div class="chapter">' + Etitle + "</div></li>"
        }
        skeleton += "";
        document.write(skeleton)
    }
}
;