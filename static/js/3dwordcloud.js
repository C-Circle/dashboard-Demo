!
function SVG3DTagCloud() {
    function t(t, e) {
        function n() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        function i() {
            var wcid = document.getElementById("3dwordcloud"),
			e = wcid.offsetWidth,  //宽度
			n = wcid.offsetHeight,  //高度
            i = e,
            r = n;
            p.width.toString().indexOf("%") > 0 || p.height.toString().indexOf("%") > 0 ? (i = Math.round(t.offsetWidth / 100 * parseInt(p.width)), r = Math.round(i / 100 * parseInt(p.height))) : (i = parseInt(p.width), r = parseInt(p.height)),
            e <= i && (i = e),
            n <= r && (r = n),
            b = {
                x: i / 2,
                y: r / 2
            },
            O.x = p.speed / b.x,
            O.y = p.speed / b.y,
            w = i >= r ? r / 100 * parseInt(p.radius) : i / 100 * parseInt(p.radius),
            w < 1 && (w = 1),
            x = w / 2,
            x < p.radiusMin && (x = p.radiusMin, w = 2 * x),
            A.setAttribute("width", i),
            A.setAttribute("height", r),
            A.setAttribute("id", p.uuid),
            p.bgDraw && (P.setAttribute("width", i), P.setAttribute("height", r)),
            o(x)
			console.log("resize:", i, r);
			// console.log(A);			
        }
        function o(t) {
            for (var e = 0, n = S.length; e < n; e++) r(S[e], t)
        }
        function r(t, e) {
            var n = t.vectorPosition.x - C.x,
            i = t.vectorPosition.y - C.y,
            o = t.vectorPosition.z - C.z,
            r = Math.sqrt(n * n + i * i + o * o);
            t.vectorPosition.x /= r,
            t.vectorPosition.y /= r,
            t.vectorPosition.z /= r,
            t.vectorPosition.x *= e,
            t.vectorPosition.y *= e,
            t.vectorPosition.z *= e
        }
        // e为一个词
        function s(t, e, n, i, o) {
            var r = {},
            s = e.textShadow || p.textShadow;
            var colors = [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ],
            color = colors[Math.round(Math.random()*(colors.length-1))];
            return r.element = document.createElementNS(D, "text"),
            r.element.setAttribute("x", 0),
            r.element.setAttribute("y", 0),
            r.element.setAttribute("fill", color || e.color || p.fontColor),
            r.element.setAttribute("font-family", p.fontFamily),
            r.element.setAttribute("font-size", e.fontSize || p.fontSize),
            r.element.setAttribute("font-weight", p.fontWeight),
            r.element.setAttribute("font-style", p.fontStyle),
            r.element.setAttribute("font-stretch", p.fontStretch),
            r.element.setAttribute("text-anchor", "middle"),
            s && r.element.setAttribute("style", "text-shadow: " + s + ";"),
            r.element.textContent = p.fontToUpperCase ? e.label.toUpperCase() : e.label,
			r.element.label = e.label,
			r.element.labelNum = e.labelNum,
            r.index = t,
            r.mouseOver = !1,
            r.vectorPosition = {
                x: n,
                y: i,
                z: o
            },
            r.vector2D = {
                x: 0,
                y: 0
            },
            e.url ? (r.link = document.createElementNS(D, "a"), r.link.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.url), r.link.setAttribute("target", e.target), r.link.addEventListener("mouseover", f, !0), r.link.addEventListener("mouseout", m, !0), p.click && r.link.addEventListener("mousedown", f, !0), r.link.appendChild(r.element), A.appendChild(r.link)) : (r.element.addEventListener("mouseover", f, !0), r.element.addEventListener("mouseout", m, !0), p.click && r.element.addEventListener("mousedown",
            function(t) {
                c(t.target, !0),
                p.click.call(I, e)
            },
            !0), A.appendChild(r.element)),
            r
        }
        function u() {
            for (var t = 1,
            e = p.entries.length + 1; t < e; t++) {
                var n = Math.acos((2 * t - 1) / e - 1),
                i = Math.sqrt(e * Math.PI) * n,
                o = Math.cos(i) * Math.sin(n),
                r = Math.sin(i) * Math.sin(n),
                u = Math.cos(n),
                a = s(t - 1, p.entries[t - 1], o, r, u);
                S.push(a)
            }
        }
        function a(t) {
            for (var e = 0,
            n = S.length; e < n; e++) {
                var i = S[e];
                if (i.element.getAttribute("x") === t.getAttribute("x") && i.element.getAttribute("y") === t.getAttribute("y")) return i
            }
        }
        function c(t, e) {
            for (var n = a(t), i = 0, o = S.length; i < o; i++) {
                var r = S[i];
                r.index === n.index ? (!r.mouseOver && e && r.element.setAttribute("opacity", p.opacityOver), r.element.textContent = r.element.label.concat("：", r.element.labelNum), r.mouseOver = !0) : (r.mouseOver && e && r.element.setAttribute("opacity", p.opacityOut), r.element.textContent = r.element.label, r.mouseOver = !1)
            }
        }
        function l() {
            var t = O.x * z.x - p.speed,
            e = p.speed - O.y * z.y,
            n = t * E,
            i = e * E;
            k.sx = Math.sin(n),
            k.cx = Math.cos(n),
            k.sy = Math.sin(i),
            k.cy = Math.cos(i);
            for (var o = 0,
            r = S.length; o < r; o++) {
                var s = S[o];
                if (M) {
                    var u = s.vectorPosition.x,
                    a = s.vectorPosition.y * k.sy + s.vectorPosition.z * k.cy;
                    s.vectorPosition.x = u * k.cx + a * k.sx,
                    s.vectorPosition.y = s.vectorPosition.y * k.cy + s.vectorPosition.z * -k.sy,
                    s.vectorPosition.z = u * -k.sx + a * k.cx
                }
                var c = p.fov / (p.fov + s.vectorPosition.z);
                s.vector2D.x = s.vectorPosition.x * c + b.x,
                s.vector2D.y = s.vectorPosition.y * c + b.y,
                s.element.setAttribute("x", s.vector2D.x),
                s.element.setAttribute("y", s.vector2D.y);
                var l;
                M ? (l = (x - s.vectorPosition.z) / w) < p.opacityOut && (l = p.opacityOut) : (l = parseFloat(s.element.getAttribute("opacity")), s.mouseOver ? l += (p.opacityOver - l) / p.opacitySpeed: l += (p.opacityOut - l) / p.opacitySpeed),
                s.element.setAttribute("opacity", l)
            }
            S = S.sort(function(t, e) {
                return e.vectorPosition.z - t.vectorPosition.z
            })
        }
        function d() {
            if ($("#" + p.uuid).length <= 0) return void console.log("dom not found. stop animloop.");
            requestAnimFrame(d),
            F || l()
        }
        function f(t) {
            p.click && t.target.setAttribute("cursor", "pointer"),
            F || (M = !1, c(t.target))
        }
        function m(t) {
            p.click && t.target.setAttribute("cursor", "default"),
            F || (M = !0)
        }
        function v(t) {
            z = h(A, t)
        }
        function h(t, e) {
            var n = t.getBoundingClientRect();
            return {
                x: e.clientX - n.left,
                y: e.clientY - n.top
            }
        }
        function y(t) {
            i()
        }
        // 词云参数
        var wcid = document.getElementById("3dwordcloud");
        var wch = wcid.offsetHeight;  //高度
        var wcw = wcid.offsetWidth;  //宽度
        console.log("参数p:", wcw, wch);
        var p = {
            entries: words,
            width: wcw,
            height: wch,
            radius: "70%",
            radiusMin: 75,
            bgDraw: !0,
            bgColor: "rgba(255, 255, 255, 0)",
            opacityOver: 1, // 显示100%
            opacityOut: .05, // 显示5%
            opacitySpeed: 6,
            fov: 800,
            speed: 0.5,
            textShadow: null,
            fontFamily: "Arial, sans-serif",
            fontSize: "15",
            fontColor: "#fff",
            fontWeight: "normal",
            fontStyle: "normal",
            fontStretch: "normal",
            fontToUpperCase: !1,
            click: null,
            // uuid: n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
            uuid: "3dwordcloudjs"
        };
        if (void 0 !== e) for (var g in e) e.hasOwnProperty(g) && p.hasOwnProperty(g) && (p[g] = e[g]);
        if (!p.entries.length) return ! 1;
        var x, w, b, A, P, S = [],
        M = !0,
        z = {
            x: 0,
            y: 0
        },
        C = {
            x: 0,
            y: 0,
            z: 0
        },
        O = {
            x: 0,
            y: 0
        },
        k = {
            sx: 0,
            cx: 0,
            sy: 0,
            cy: 0
        },
        E = Math.PI / 180,
        D = "http://www.w3.org/2000/svg",
        F = !1,
        I = {
            settings: p,
            pause: function() {
                F = !0
            },
            play: function() {
                F = !1
            },
            toggleAutoplay: function() {
                F = !F
            },
            render: function() {
                l()
            }
        };
        return window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
            function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
        } (),
        function() {
            // A = document.createElementNS(D, "svg"),
            // A.addEventListener("mousemove", v),
            // A.setAttribute("class", "chart"),
            // t.appendChild(A),
            // p.bgDraw && (P = document.createElementNS(D, "rect"), P.setAttribute("x", -200), P.setAttribute("y", -300), P.setAttribute("fill", p.bgColor), A.appendChild(P)),
            // u(),
            // i(),
            // d(),
            // window.addEventListener("resize", y)
            var chart = document.querySelector(".map .chart");
            var svg = document.querySelector(".map .chart svg");
            console.log("update svg")
            // svg.parentNode.removeChild(svg);
            while (chart.hasChildNodes()) {
                chart.removeChild(chart.lastChild);
            }　
            A = document.createElementNS(D, "svg");
            A.addEventListener("mousemove", v),
            A.setAttribute("class", "chart"),
            t.appendChild(A),
            p.bgDraw && (P = document.createElementNS(D, "rect"), P.setAttribute("x", -200), P.setAttribute("y", -300), P.setAttribute("fill", p.bgColor), A.appendChild(P)),
            u(),
            i(),
            d(),
            window.addEventListener("resize", y);		
        } (),
        I
    }
    window.SVG3DTagCloud = t
} (),
"undefined" != typeof jQuery && function(t) {
    t.fn.svg3DTagCloud = function(e) {
        console.log("3dwoldcloud");
        return this.each(function() {
            t.data(this, "plugin_SVG3DTagCloud", new SVG3DTagCloud(this, e))
        })
    }
} (jQuery);