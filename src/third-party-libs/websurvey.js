"use strict";
window.console || (window.console = {}), window.console.debug || (window.console.debug = function() {});

function log(a) {
    console.debug(a)
}

function logError(a) {
    console.error(a)
}(function(a, b) {
    function c() {
        return Date.now || (Date.now = function() {
            return new Date().getTime()
        }), parseInt(Date.now() / 1e3)
    }

    function d(a) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !0), c.onreadystatechange = function() {
            if (4 == c.readyState && 200 == c.status) {
                var a = b.createElement("div");
                a.style.cssText = "z-index:999999;", a.id = "asknicelypopup", b.body.appendChild(a), a.innerHTML = c.responseText;
                var d = b.getElementById("asknicely_close");
                d && q(d, "click", asknicelyclose)
            }
        }, c.send()
    }
    var e = "3.4.1",
        f = function makeId(a) {
            for (var b = "", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = 0; d < a; d++) b += c.charAt(Math.floor(Math.random() * c.length));
            return b
        }(16),
        g = !1;
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (g = !0);
    var h = function(a) {
            for (var c = b.cookie ? b.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, e = 0; e < c.length; e++) {
                var f = c[e].split("="),
                    g = f[0].replace(d, decodeURIComponent),
                    h = f.slice(1).join("=");
                "\"" === h.charAt(0) && (h = h.slice(1, -1));
                try {
                    if (h = h.replace(d, decodeURIComponent), a === g) return h
                } catch (a) {}
            }
        },
        i = function(a, c, d) {
            if ("number" == typeof d.expires) {
                var e = new Date;
                e.setMilliseconds(e.getMilliseconds() + 864e+5 * d.expires), d.expires = e
            }
            return c = encodeURIComponent(c + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), a = encodeURIComponent(a + ""), a = a.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), a = a.replace(/[\(\)]/g, escape), b.cookie = [a, "=", c, d.expires && "; expires=" + d.expires.toUTCString(), d.path && "; path=" + d.path, d.domain && "; domain=" + d.domain, d.secure ? "; secure" : ""].join("")
        },
        j = function(a) {
            i(a, "", {
                expires: -1,
                path: "/"
            })
        },
        k = function() {
            return a.asknicelySettings.email ? a.asknicelySettings.email.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "") : ""
        },
        l = function() {
            return k() + "an_reload"
        },
        m = function() {
            return k() + "an_slug"
        },
        n = "notset",
        o = ".asknice.ly";
    if (a.asknicelySettings.is_dev && (o = ".asknicely.site"), a.asknicelySettings.domain_key) n = a.asknicelySettings.domain_key + o, log(a.asknicelySettings.domain_key);
    else return void logError("AskNicely Widget - You are missing a domain_key from the window.asknicelySettings");
    var p = "docked";
    a.asknicelySettings.mode && (p = a.asknicelySettings.mode);
    var q = function(b, c, d) {
        b.addEventListener ? b.addEventListener(c, d, !1) : b.attachEvent && b.attachEvent("on" + c, function() {
            return d.apply(b, [a.event])
        })
    };
    a.addEventListener || a.attachEvent || (b.getElementById("asknicely_iframe_wrapper").style.height = "340px");
    var r = !1;
    q(a, "message", function(c) {
        if ("close" == c.data && asknicelyclose(), "score_click" == c.data && (r = !0, j(m()), j(l())), "comment_loaded" == c.data) {
            var d = a.innerWidth || b.documentElement.clientWidth || b.body.clientWidth;
            if (780 > d || g) {
                b.getElementById("asknicely_iframe_wrapper").style.height = 300 + "px"
            }
        }
    }), q(a, "focus", function() {
        s()
    });
    var s = function() {
        r || !h(m()) && asknicelyclose()
    };
    a.asknicelyclose = function() {
        var a = b.getElementById("asknicelypopup");
        a && a.parentNode.removeChild(a), j(m())
    }, a.loadNewSurvey = function() {
        var b, g = h(l()),
            j = "service/inapp.php";
        a.asknicelySettings.asknicely_internal_endpoint && (j = a.asknicelySettings.asknicely_internal_endpoint), b = "https://" + n + "/" + j + "?id=" + encodeURIComponent(f) + "&reloadcookie=" + encodeURIComponent(g) + "&anVersion=" + encodeURIComponent(e);
        var k = new XMLHttpRequest;
        k.open("POST", b, !0), k.onreadystatechange = function() {
            if (4 == k.readyState && 200 == k.status) {
                var a;
                try {
                    a = JSON.parse(k.responseText)
                } catch (a) {
                    return logError("ERROR - JSON parsing failed with AskNicely Response"), !1
                }
                if (a.info && log(a.info), a.msg && log(a.msg), !0 == a.show) {
                    i(m(), a.slug, {
                        path: "/"
                    });
                    var b = h(l()),
                        g = "https://" + n + "/live/frame/" + p + "/" + a.slug + "?id=" + encodeURIComponent(f) + "&reloadcookie=" + encodeURIComponent(b) + "&source=ajax&anVersion=" + encodeURIComponent(e);
                    d(g)
                }
                0 < a.wait && i(l(), a.wait + c(), {
                    path: "/"
                })
            }
        }, delete a.asknicelySettings.domain_id, delete a.asknicelySettings.hide, k.send(JSON.stringify(a.asknicelySettings))
    }, a.asknicelyLoad = function() {
        var b = h(l());
        if (b >= c() && !0 != a.asknicelySettings.force) {
            var e = b - c();
            return void log("reloading in  " + e + " seconds")
        }
        var g = h(m());
        if (void 0 != g) {
            log("Found un-answered survey: " + g);
            var i = "https://" + n + "/live/frame/" + p + "/" + g + "?id=" + encodeURIComponent(f) + "&reloadcookie=" + encodeURIComponent(b) + "&source=cookie";
            return void d(i)
        }
        void 0 == b ? (log("Requesting survey, no delay found"), a.loadNewSurvey()) : !0 == a.asknicelySettings.force ? (log("Requesting survey, forced mode"), a.loadNewSurvey()) : b < c() && (log("Requesting new survey"), a.loadNewSurvey())
    }, a.asknicelySettings.ready && a.asknicelySettings.ready(), !0 == a.asknicelySettings.hide || (!1 != a.asknicelySettings.autoload && a.asknicelyLoad(), a.asknicelySettings.show = function(b) {
        for (var c in b) a.asknicelySettings[c] = b[c];
        a.asknicelyLoad()
    })
})(window, document);