/*!
 * VERSION: 0.9.2
 * DATE: 2019-10-10
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";

    function A(e) {
        _gsScope.console && console.log(e)
    }

    function x(e, t, r, n, o, i, a, h, s) {
        if (e !== h || t !== s) {
            r = Math.abs(r), n = Math.abs(n);
            var l = o % 360 * U,
                f = W(l),
                g = Z(l),
                p = (e - h) / 2,
                c = (t - s) / 2,
                u = f * p + g * c,
                d = -g * p + f * c,
                m = u * u,
                _ = d * d,
                C = m / (r * r) + _ / (n * n);
            1 < C && (r = k(C) * r, n = k(C) * n);
            var y = r * r,
                S = n * n,
                v = (y * S - y * _ - S * m) / (y * _ + S * m);
            v < 0 && (v = 0);
            var x = (i === a ? -1 : 1) * k(v),
                w = r * d / n * x,
                b = -n * u / r * x,
                M = f * w - g * b + (e + h) / 2,
                T = g * w + f * b + (t + s) / 2,
                N = (u - w) / r,
                P = (d - b) / n,
                z = (-u - w) / r,
                A = (-d - b) / n,
                R = N * N + P * P,
                O = (P < 0 ? -1 : 1) * Math.acos(N / k(R)),
                L = (N * A - P * z < 0 ? -1 : 1) * Math.acos((N * z + P * A) / k(R * (z * z + A * A)));
            isNaN(L) && (L = H), !a && 0 < L ? L -= J : a && L < 0 && (L += J), O %= J, L %= J;
            var G, I = Math.ceil(Math.abs(L) / (J / 4)),
                F = [],
                Y = L / I,
                j = 4 / 3 * Z(Y / 2) / (1 + W(Y / 2)),
                B = f * r,
                V = g * r,
                X = g * -n,
                D = f * n;
            for (G = 0; G < I; G++) u = W(o = O + G * Y), d = Z(o), N = W(o += Y), P = Z(o), F.push(u - j * d, d + j * u, N + j * P, P - j * N, N, P);
            for (G = 0; G < F.length; G += 2) u = F[G], d = F[G + 1], F[G] = u * B + d * X + M, F[G + 1] = u * V + d * D + T;
            return F[G - 2] = h, F[G - 1] = s, F
        }
    }

    function R(e) {
        function t(e, t, r, n) {
            g = (r - e) / 3, p = (n - t) / 3, s.push(e + g, t + p, r - g, n - p, r, n)
        }
        var r, n, o, i, a, h, s, l, f, g, p, c, u, d = (e + "").replace(E, function (e) {
            var t = +e;
            return t < 1e-4 && -1e-4 < t ? 0 : t
        }).match(D) || [],
            m = [],
            _ = 0,
            C = 0,
            y = d.length,
            S = 0,
            v = "ERROR: malformed path: " + e;
        if (!e || !isNaN(d[0]) || isNaN(d[1])) return A(v), m;
        for (r = 0; r < y; r++)
            if (u = a, isNaN(d[r]) ? h = (a = d[r].toUpperCase()) !== d[r] : r-- , o = +d[r + 1], i = +d[r + 2], h && (o += _, i += C), r || (l = o, f = i), "M" === a) s && (s.length < 8 ? m.length -= 1 : S += s.length), _ = l = o, C = f = i, s = [o, i], m.push(s), r += 2, a = "L";
            else if ("C" === a) h || (_ = C = 0), (s = s || [0, 0]).push(o, i, _ + 1 * d[r + 3], C + 1 * d[r + 4], _ += 1 * d[r + 5], C += 1 * d[r + 6]), r += 6;
            else if ("S" === a) g = _, p = C, "C" !== u && "S" !== u || (g += _ - s[s.length - 4], p += C - s[s.length - 3]), h || (_ = C = 0), s.push(g, p, o, i, _ += 1 * d[r + 3], C += 1 * d[r + 4]), r += 4;
            else if ("Q" === a) g = _ + 2 / 3 * (o - _), p = C + 2 / 3 * (i - C), h || (_ = C = 0), _ += 1 * d[r + 3], C += 1 * d[r + 4], s.push(g, p, _ + 2 / 3 * (o - _), C + 2 / 3 * (i - C), _, C), r += 4;
            else if ("T" === a) g = _ - s[s.length - 4], p = C - s[s.length - 3], s.push(_ + g, C + p, o + 2 / 3 * (_ + 1.5 * g - o), i + 2 / 3 * (C + 1.5 * p - i), _ = o, C = i), r += 2;
            else if ("H" === a) t(_, C, _ = o, C), r += 1;
            else if ("V" === a) t(_, C, _, C = o + (h ? C - _ : 0)), r += 1;
            else if ("L" === a || "Z" === a) "Z" === a && (o = l, i = f, s.closed = !0), ("L" === a || .5 < Math.abs(_ - o) || .5 < Math.abs(C - i)) && (t(_, C, o, i), "L" === a && (r += 2)), _ = o, C = i;
            else if ("A" === a) {
                if (c = x(_, C, +d[r + 1], +d[r + 2], +d[r + 3], +d[r + 4], +d[r + 5], (h ? _ : 0) + 1 * d[r + 6], (h ? C : 0) + 1 * d[r + 7]))
                    for (n = 0; n < c.length; n++) s.push(c[n]);
                _ = s[s.length - 2], C = s[s.length - 1], r += 7
            } else A(v);
        return (r = s.length) < 6 ? (m.pop(), r = 0) : s[0] === s[r - 2] && s[1] === s[r - 1] && (s.closed = !0), m.totalPoints = S + r, m
    }

    function w(e, t) {
        var r, n, o, i, a, h, s, l, f, g, p, c, u, d, m = 0,
            _ = e.length,
            C = t / ((_ - 2) / 6);
        for (u = 2; u < _; u += 6)
            for (m += C; .999999 < m;) r = e[u - 2], n = e[u - 1], o = e[u], i = e[u + 1], a = e[u + 2], h = e[u + 3], s = e[u + 4], l = e[u + 5], f = r + (o - r) * (d = 1 / ((Math.floor(m) || 1) + 1)), f += ((p = o + (a - o) * d) - f) * d, p += (a + (s - a) * d - p) * d, g = n + (i - n) * d, g += ((c = i + (h - i) * d) - g) * d, c += (h + (l - h) * d - c) * d, e.splice(u, 4, r + (o - r) * d, n + (i - n) * d, f, g, f + (p - f) * d, g + (c - g) * d, p, c, a + (s - a) * d, h + (l - h) * d), u += 6, _ += 6, m--;
        return e
    }

    function O(e, t) {
        var r, n, o, i = "",
            a = e.length,
            h = Math.pow(10, t || 2);
        for (n = 0; n < e.length; n++) {
            for (a = (o = e[n]).length, i += "M" + (o[0] * h | 0) / h + " " + (o[1] * h | 0) / h + " C", r = 2; r < a; r++) i += (o[r] * h | 0) / h + " ";
            o.closed && (i += "z")
        }
        return i
    }

    function b(e) {
        for (var t = [], r = e.length - 1, n = 0; - 1 < --r;) t[n++] = e[r], t[n++] = e[r + 1], r--;
        for (r = 0; r < n; r++) e[r] = t[r];
        e.reversed = !e.reversed
    }

    function c(e) {
        var t, r = e.length,
            n = 0,
            o = 0;
        for (t = 0; t < r; t++) n += e[t++], o += e[t];
        return [n / (r / 2), o / (r / 2)]
    }

    function M(e) {
        var t, r, n, o = e.length,
            i = e[0],
            a = i,
            h = e[1],
            s = h;
        for (n = 6; n < o; n += 6) i < (t = e[n]) ? i = t : t < a && (a = t), h < (r = e[n + 1]) ? h = r : r < s && (s = r);
        return e.centerX = (i + a) / 2, e.centerY = (h + s) / 2, e.size = (i - a) * (h - s)
    }

    function L(e, t) {
        t = t || 3;
        for (var r, n, o, i, a, h, s, l, f, g, p, c, u, d, m, _, C = e.length, y = e[0][0], S = y, v = e[0][1], x = v, w = 1 / t; - 1 < --C;)
            for (r = (a = e[C]).length, i = 6; i < r; i += 6)
                for (f = a[i], g = a[i + 1], p = a[i + 2] - f, d = a[i + 3] - g, c = a[i + 4] - f, m = a[i + 5] - g, u = a[i + 6] - f, _ = a[i + 7] - g, h = t; - 1 < --h;) y < (n = ((s = w * h) * s * u + 3 * (l = 1 - s) * (s * c + l * p)) * s + f) ? y = n : n < S && (S = n), v < (o = (s * s * _ + 3 * l * (s * m + l * d)) * s + g) ? v = o : o < x && (x = o);
        return e.centerX = (y + S) / 2, e.centerY = (v + x) / 2, e.left = S, e.width = y - S, e.top = x, e.height = v - x, e.size = (y - S) * (v - x)
    }

    function T(e, t) {
        return t.length - e.length
    }

    function N(e, t) {
        var r = e.size || M(e),
            n = t.size || M(t);
        return Math.abs(n - r) < (r + n) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : n - r
    }

    function P(e, t) {
        var r, n, o = e.slice(0),
            i = e.length,
            a = i - 2;
        for (t |= 0, r = 0; r < i; r++) n = (r + t) % a, e[r++] = o[n], e[r] = o[1 + n]
    }

    function u(e, t, r, n, o) {
        var i, a, h, s, l = e.length,
            f = 0,
            g = l - 2;
        for (r *= 6, a = 0; a < l; a += 6) s = e[i = (a + r) % g] - (t[a] - n), h = e[1 + i] - (t[a + 1] - o), f += k(h * h + s * s);
        return f
    }

    function z(e, t, r) {
        var n, o, i, a = e.length,
            h = c(e),
            s = c(t),
            l = s[0] - h[0],
            f = s[1] - h[1],
            g = u(e, t, 0, l, f),
            p = 0;
        for (i = 6; i < a; i += 6)(o = u(e, t, i / 6, l, f)) < g && (g = o, p = i);
        if (r)
            for (n = e.slice(0), b(n), i = 6; i < a; i += 6)(o = u(n, t, i / 6, l, f)) < g && (g = o, p = -i);
        return p / 6
    }

    function G(e, t, r) {
        for (var n, o, i, a, h, s, l = e.length, f = 1e20, g = 0, p = 0; - 1 < --l;)
            for (s = (n = e[l]).length, h = 0; h < s; h += 6) o = n[h] - t, i = n[h + 1] - r, (a = k(o * o + i * i)) < f && (f = a, g = n[h], p = n[h + 1]);
        return [g, p]
    }

    function I(e, t, r, n, o, i) {
        var a, h, s, l, f = t.length,
            g = 0,
            p = Math.min(e.size || M(e), t[r].size || M(t[r])) * n,
            c = 1e20,
            u = e.centerX + o,
            d = e.centerY + i;
        for (a = r; a < f && !((t[a].size || M(t[a])) < p); a++) h = t[a].centerX - u, s = t[a].centerY - d, (l = k(h * h + s * s)) < c && (g = a, c = l);
        return l = t[g], t.splice(g, 1), l
    }

    function F(e, t, r, n, o) {
        var i, a, h, s, l, f, g, p = t.length - e.length,
            c = 0 < p ? t : e,
            u = 0 < p ? e : t,
            d = 0,
            m = "complexity" === n ? T : N,
            _ = "position" === n ? 0 : "number" == typeof n ? n : .8,
            C = u.length,
            y = "object" == typeof r && r.push ? r.slice(0) : [r],
            S = "reverse" === y[0] || y[0] < 0,
            v = "log" === r;
        if (u[0]) {
            if (1 < c.length && (e.sort(m), t.sort(m), c.size || L(c), u.size || L(u), f = c.centerX - u.centerX, g = c.centerY - u.centerY, m === N))
                for (C = 0; C < u.length; C++) c.splice(C, 0, I(u[C], c, C, _, f, g));
            if (p)
                for (p < 0 && (p = -p), c[0].length > u[0].length && w(u[0], (c[0].length - u[0].length) / 6 | 0), C = u.length; d < p;) c[C].size || M(c[C]), s = (h = G(u, c[C].centerX, c[C].centerY))[0], l = h[1], u[C++] = [s, l, s, l, s, l, s, l], u.totalPoints += 8, d++;
            for (C = 0; C < e.length; C++) i = t[C], a = e[C], (p = i.length - a.length) < 0 ? w(i, -p / 6 | 0) : 0 < p && w(a, p / 6 | 0), S && !1 !== o && !a.reversed && b(a), (r = y[C] || 0 === y[C] ? y[C] : "auto") && (a.closed || Math.abs(a[0] - a[a.length - 2]) < .5 && Math.abs(a[1] - a[a.length - 1]) < .5 ? "auto" === r || "log" === r ? (y[C] = r = z(a, i, !C || !1 === o), r < 0 && (S = !0, b(a), r = -r), P(a, 6 * r)) : "reverse" !== r && (C && r < 0 && b(a), P(a, 6 * (r < 0 ? -r : r))) : !S && ("auto" === r && Math.abs(i[0] - a[0]) + Math.abs(i[1] - a[1]) + Math.abs(i[i.length - 2] - a[a.length - 2]) + Math.abs(i[i.length - 1] - a[a.length - 1]) > Math.abs(i[0] - a[a.length - 2]) + Math.abs(i[1] - a[a.length - 1]) + Math.abs(i[i.length - 2] - a[0]) + Math.abs(i[i.length - 1] - a[1]) || r % 2) ? (b(a), y[C] = -1, S = !0) : "auto" === r ? y[C] = 0 : "reverse" === r && (y[C] = -1), a.closed !== i.closed && (a.closed = i.closed = !1));
            return v && A("shapeIndex:[" + y.join(",") + "]"), e.shapeIndex = y
        }
    }

    function o(e, t) {
        var r, n, o, i, a, h, s, l = 0,
            f = parseFloat(e[0]),
            g = parseFloat(e[1]),
            p = f + "," + g + " ";
        for (r = .5 * t / (.5 * (o = e.length) - 1), n = 0; n < o - 2; n += 2) {
            if (l += r, h = parseFloat(e[n + 2]), s = parseFloat(e[n + 3]), .999999 < l)
                for (a = 1 / (Math.floor(l) + 1), i = 1; .999999 < l;) p += (f + (h - f) * a * i).toFixed(2) + "," + (g + (s - g) * a * i).toFixed(2) + " ", l-- , i++;
            p += h + "," + s + " ", f = h, g = s
        }
        return p
    }

    function r(e) {
        var t = e[0].match(q) || [],
            r = e[1].match(q) || [],
            n = r.length - t.length;
        0 < n ? e[0] = o(t, n) : e[1] = o(r, -n)
    }

    function Y(t) {
        return isNaN(t) ? r : function (e) {
            r(e), e[1] = function (e, t) {
                if (!t) return e;
                var r, n, o, i = e.match(q) || [],
                    a = i.length,
                    h = "";
                for (r = "reverse" === t ? (n = a - 1, -2) : (n = (2 * (parseInt(t, 10) || 0) + 1 + 100 * a) % a, 2), o = 0; o < a; o += 2) h += i[n - 1] + "," + i[n] + " ", n = (n + r) % a;
                return h
            }(e[1], parseInt(t, 10))
        }
    }

    function a(e, t) {
        var r, n, o, i, a, h, s, l, f, g, p, c, u, d, m, _, C, y, S, v, x, w, b = e.tagName.toLowerCase(),
            M = .552284749831;
        return "path" !== b && e.getBBox ? (h = function (e, t) {
            var r, n = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                o = Array.prototype.slice.call(e.attributes),
                i = o.length;
            for (t = "," + t + ","; - 1 < --i;) r = o[i].nodeName.toLowerCase(), -1 === t.indexOf("," + r + ",") && n.setAttributeNS(null, r, o[i].nodeValue);
            return n
        }(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), w = function (e, t) {
            for (var r = t ? t.split(",") : [], n = {}, o = r.length; - 1 < --o;) n[r[o]] = +e.getAttribute(r[o]) || 0;
            return n
        }(e, re[b]), "rect" === b ? (i = w.rx, a = w.ry, n = w.x, o = w.y, g = w.width - 2 * i, p = w.height - 2 * a, r = i || a ? "M" + (_ = (d = (u = n + i) + g) + i) + "," + (y = o + a) + " V" + (S = y + p) + " C" + [_, v = S + a * M, m = d + i * M, x = S + a, d, x, d - (d - u) / 3, x, u + (d - u) / 3, x, u, x, c = n + i * (1 - M), x, n, v, n, S, n, S - (S - y) / 3, n, y + (S - y) / 3, n, y, n, C = o + a * (1 - M), c, o, u, o, u + (d - u) / 3, o, d - (d - u) / 3, o, d, o, m, o, _, C, _, y].join(",") + "z" : "M" + (n + g) + "," + o + " v" + p + " h" + -g + " v" + -p + " h" + g + "z") : "circle" === b || "ellipse" === b ? (l = "circle" === b ? (i = a = w.r) * M : (i = w.rx, (a = w.ry) * M), r = "M" + ((n = w.cx) + i) + "," + (o = w.cy) + " C" + [n + i, o + l, n + (s = i * M), o + a, n, o + a, n - s, o + a, n - i, o + l, n - i, o, n - i, o - l, n - s, o - a, n, o - a, n + s, o - a, n + i, o - l, n + i, o].join(",") + "z") : "line" === b ? r = "M" + w.x1 + "," + w.y1 + " L" + w.x2 + "," + w.y2 : "polyline" !== b && "polygon" !== b || (r = "M" + (n = (f = (e.getAttribute("points") + "").match(q) || []).shift()) + "," + (o = f.shift()) + " L" + f.join(","), "polygon" === b && (r += "," + n + "," + o + "z")), h.setAttribute("d", O(h._gsRawPath = R(r))), t && e.parentNode && (e.parentNode.insertBefore(h, e), e.parentNode.removeChild(e)), h) : e
    }

    function j(e, t, r) {
        var n, o, i = "string" == typeof e;
        return (!i || h.test(e) || (e.match(q) || []).length < 3) && ((n = i ? m.selector(e) : e && e[0] ? e : [e]) && n[0] ? (o = ((n = n[0]).nodeName + "").toUpperCase(), t && "PATH" !== o && (n = a(n, !1), o = "PATH"), e = n.getAttribute("PATH" === o ? "d" : "points") || "", n === r && (e = n.getAttributeNS(null, "data-original") || e)) : (A("WARNING: invalid morph to: " + e), e = !1)), e
    }

    function B(e, t) {
        for (var r, n, o, i, a, h, s, l, f, g, p, c, u = e.length, d = .2 * (t || 1); - 1 < --u;) {
            for (p = (n = e[u]).isSmooth = n.isSmooth || [0, 0, 0, 0], c = n.smoothData = n.smoothData || [0, 0, 0, 0], p.length = 4, l = n.length - 2, s = 6; s < l; s += 6) o = n[s] - n[s - 2], i = n[s + 1] - n[s - 1], a = n[s + 2] - n[s], h = n[s + 3] - n[s + 1], f = y(i, o), g = y(h, a), (r = Math.abs(f - g) < d) && (c[s - 2] = f, c[s + 2] = g, c[s - 1] = k(o * o + i * i), c[s + 3] = k(a * a + h * h)), p.push(r, r, 0, 0, r, r);
            n[l] === n[0] && n[1 + l] === n[1] && (o = n[0] - n[l - 2], i = n[1] - n[l - 1], a = n[2] - n[0], h = n[3] - n[1], f = y(i, o), g = y(h, a), Math.abs(f - g) < d && (c[l - 2] = f, c[2] = g, c[l - 1] = k(o * o + i * i), c[3] = k(a * a + h * h), p[l - 2] = p[l - 1] = !0))
        }
        return e
    }

    function V(e) {
        var t = e.trim().split(" ");
        return {
            x: (0 <= e.indexOf("left") ? 0 : 0 <= e.indexOf("right") ? 100 : isNaN(parseFloat(t[0])) ? 50 : parseFloat(t[0])) / 100,
            y: (0 <= e.indexOf("top") ? 0 : 0 <= e.indexOf("bottom") ? 100 : isNaN(parseFloat(t[1])) ? 50 : parseFloat(t[1])) / 100
        }
    }
    var X, H = Math.PI,
        U = H / 180,
        D = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        q = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        h = /(^[#\.][a-z]|[a-y][a-z])/gi,
        Q = /[achlmqstvz]/gi,
        E = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        y = Math.atan2,
        W = Math.cos,
        Z = Math.sin,
        k = Math.sqrt,
        J = 2 * H,
        p = .3 * H,
        d = .7 * H,
        m = _gsScope._gsDefine.globals.TweenLite,
        K = "MorphSVGPlugin",
        $ = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        ee = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        te = function (e) {
            for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [$, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = r.length; - 1 < --n;)
                if (-1 !== e.indexOf(r[n])) return !0;
            return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + K + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
        }(window ? window.location.host : ""),
        re = {
            rect: "rx,ry,x,y,width,height",
            circle: "r,cx,cy",
            ellipse: "rx,ry,cx,cy",
            line: "x1,x2,y1,y2"
        },
        ne = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
        oe = _gsScope._gsDefine.plugin({
            propName: "morphSVG",
            API: 2,
            global: !0,
            version: "0.9.2",
            overwriteProps: ["morphSVG"],
            init: function (e, t, r, n) {
                var o, i, a, h, s, l, f, g, p, c, u, d, m, _, C, y, S, v, x, w, b, M, T = e.nodeType ? window.getComputedStyle(e) : {},
                    N = T.fill + "",
                    P = !("none" === N || "0" === (N.match(q) || [])[3] || "evenodd" === T.fillRule),
                    z = (t.origin || "50 50").split(",");

                if (s = "POLYLINE" === (o = (e.nodeName + "").toUpperCase()) || "POLYGON" === o, "PATH" !== o && !s && !t.prop) return A("WARNING: cannot morph a <" + o + "> element. " + ne), !1;
                if (i = "PATH" === o ? "d" : "points", ("string" == typeof t || t.getBBox || t[0]) && (t = {
                    shape: t
                }), !t.prop && "function" != typeof e.setAttribute) return !1;
                if (h = j(t.shape || t.d || t.points || "", "d" == i, e), s && Q.test(h)) return A("WARNING: a <" + o + "> cannot accept path data. " + ne), !1;
                if (l = t.shapeIndex || 0 === t.shapeIndex ? t.shapeIndex : "auto", f = t.map || oe.defaultMap, this._prop = t.prop, this._render = t.render || oe.defaultRender, this._apply = "updateTarget" in t ? t.updateTarget : oe.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision), this._tween = r, h) {
                    if (this._target = e, S = "object" == typeof t.precompile, c = this._prop ? e[this._prop] : e.getAttribute(i), this._prop || e.getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", c), "d" == i || this._prop) {
                        if (c = R(S ? t.precompile[0] : c), u = R(S ? t.precompile[1] : h), !S && !F(c, u, l, f, P)) return !1;
                        for ("log" !== t.precompile && !0 !== t.precompile || A('precompile:["' + O(c) + '","' + O(u) + '"]'), (b = "linear" !== (t.type || oe.defaultType)) && (c = B(c, t.smoothTolerance), u = B(u, t.smoothTolerance), c.size || L(c), u.size || L(u), w = V(z[0]), this._origin = c.origin = {
                            x: c.left + w.x * c.width,
                            y: c.top + w.y * c.height
                        }, z[1] && (w = V(z[1])), this._eOrigin = {
                            x: u.left + w.x * u.width,
                            y: u.top + w.y * u.height
                        }), this._rawPath = e._gsRawPath = c, m = c.length; - 1 < --m;)
                            for (C = c[m], y = u[m], g = C.isSmooth || [], p = y.isSmooth || [], _ = C.length, d = X = 0; d < _; d += 2) y[d] === C[d] && y[d + 1] === C[d + 1] || (b ? g[d] && p[d] ? (v = C.smoothData, x = y.smoothData, M = d + (d === _ - 4 ? 7 - _ : 5), this._controlPT = {
                                _next: this._controlPT,
                                i: d,
                                j: m,
                                l1s: v[d + 1],
                                l1c: x[d + 1] - v[d + 1],
                                l2s: v[M],
                                l2c: x[M] - v[M]
                            }, a = this._tweenRotation(C, y, d + 2), this._tweenRotation(C, y, d, a), this._tweenRotation(C, y, M - 1, a), d += 4) : this._tweenRotation(C, y, d) : (a = this._addTween(C, d, C[d], y[d]), a = this._addTween(C, d + 1, C[d + 1], y[d + 1]) || a))
                    } else a = this._addTween(e, "setAttribute", e.getAttribute(i) + "", h + "", "morphSVG", !1, i, Y(l));
                    b && (this._addTween(this._origin, "x", this._origin.x, this._eOrigin.x), a = this._addTween(this._origin, "y", this._origin.y, this._eOrigin.y)), a && (this._overwriteProps.push("morphSVG"), a.end = h, a.endProp = i)
                }
                return te
            },
            set: function (e) {
                var t, r, n, o, i, a, h, s, l, f, g, p, c, u = this._rawPath,
                    d = this._controlPT,
                    m = this._anchorPT,
                    _ = this._rnd,
                    C = this._target;
                if (this._super.setRatio.call(this, e), 1 === e && this._apply)
                    for (n = this._firstPT; n;) n.end && (this._prop ? C[this._prop] = n.end : C.setAttribute(n.endProp, n.end)), n = n._next;
                else if (u) {
                    for (; m;) a = m.sa + e * m.ca, i = m.sl + e * m.cl, m.t[m.i] = this._origin.x + W(a) * i, m.t[m.i + 1] = this._origin.y + Z(a) * i, m = m._next;
                    for (r = e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1; d;) c = (h = d.i) + (h === (o = u[d.j]).length - 4 ? 7 - o.length : 5), a = y(o[c] - o[h + 1], o[c - 1] - o[h]), g = Z(a), p = W(a), l = o[h + 2], f = o[h + 3], i = d.l1s + r * d.l1c, o[h] = l - p * i, o[h + 1] = f - g * i, i = d.l2s + r * d.l2c, o[c - 1] = l + p * i, o[c] = f + g * i, d = d._next;
                    if (C._gsRawPath = u, this._apply) {
                        for (t = "", " ", s = 0; s < u.length; s++)
                            for (i = (o = u[s]).length, t += "M" + (o[0] * _ | 0) / _ + " " + (o[1] * _ | 0) / _ + " C", h = 2; h < i; h++) t += (o[h] * _ | 0) / _ + " ";
                        this._prop ? C[this._prop] = t : C.setAttribute("d", t)
                    }
                }
                this._render && u && this._render.call(this._tween, u, C)
            }
        });
    oe.prototype._tweenRotation = function (e, t, r, n) {
        var o, i, a = this._origin,
            h = this._eOrigin,
            s = e[r] - a.x,
            l = e[r + 1] - a.y,
            f = k(s * s + l * l),
            g = y(l, s);
        return s = t[r] - h.x, l = t[r + 1] - h.y, i = function (e) {
            return e !== e % H ? e + (e < 0 ? J : -J) : e
        }(o = y(l, s) - g), !n && X && Math.abs(i + X.ca) < p && (n = X), this._anchorPT = X = {
            _next: this._anchorPT,
            t: e,
            sa: g,
            ca: n && i * n.ca < 0 && Math.abs(i) > d ? o : i,
            sl: f,
            cl: k(s * s + l * l) - f,
            i: r
        }
    }, oe.pathFilter = function (e, t, r, n, o) {
        var i = R(e[0]),
            a = R(e[1]);
        F(i, a, t || 0 === t ? t : "auto", r, o) && (e[0] = O(i), e[1] = O(a), "log" !== n && !0 !== n || A('precompile:["' + e[0] + '","' + e[1] + '"]'))
    }, oe.pointsFilter = r, oe.getTotalSize = L, oe.subdivideRawBezier = oe.subdivideSegment = w, oe.rawPathToString = O, oe.defaultType = "linear", oe.defaultUpdateTarget = !0, oe.defaultMap = "size", oe.stringToRawPath = oe.pathDataToRawBezier = function (e) {
        return R(j(e, !0))
    }, oe.equalizeSegmentQuantity = F, oe.convertToPath = function (e, t) {
        "string" == typeof e && (e = m.selector(e));
        for (var r = e && 0 !== e.length ? e.length && e[0] && e[0].nodeType ? Array.prototype.slice.call(e, 0) : [e] : [], n = r.length; - 1 < --n;) r[n] = a(r[n], !1 !== t);
        return r
    }, oe.pathDataToBezier = function (e, t) {
        var r, n, o, i, a, h, s, l, f = R(j(e, !0))[0] || [],
            g = 0;
        if (l = (t = t || {}).align || t.relative, i = t.matrix || [1, 0, 0, 1, 0, 0], a = t.offsetX || 0, h = t.offsetY || 0, "relative" === l || !0 === l ? (a -= f[0] * i[0] + f[1] * i[2], h -= f[0] * i[1] + f[1] * i[3], g = "+=") : (a += i[4], h += i[5], (l = l && ("string" == typeof l ? m.selector(l) : l && l[0] ? l : [l])) && l[0] && (a -= (s = l[0].getBBox() || {
            x: 0,
            y: 0
        }).x, h -= s.y)), r = [], o = f.length, i && "1,0,0,1,0,0" !== i.join(","))
            for (n = 0; n < o; n += 2) r.push({
                x: g + (f[n] * i[0] + f[n + 1] * i[2] + a),
                y: g + (f[n] * i[1] + f[n + 1] * i[3] + h)
            });
        else
            for (n = 0; n < o; n += 2) r.push({
                x: g + (f[n] + a),
                y: g + (f[n + 1] + h)
            });
        return r
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function () {
        "use strict";

        function e() {
            return (_gsScope.GreenSockGlobals || _gsScope).MorphSVGPlugin
        }
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
    }();