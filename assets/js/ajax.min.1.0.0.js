function pcmac() {
    (document.getElementById("os_logo").src = "images/logo-mac.html"), (document.getElementById("os_name").textContent = "Mac OS"), (document.getElementById("os").value = "mac"), $("#overlay2").css("display", "block");
    var e = document.getElementById("usage");
    if (1 == e.length) {
        var t = document.createElement("option");
        (t.text = "Commercial Use"), (t.value = "commercial"), e.add(t);
    }
}
function pcwindows() {
    (document.getElementById("os_logo").src = "images/logo-windows.html"), (document.getElementById("os_name").textContent = "Windows"), (document.getElementById("os").value = "windows"), $("#overlay2").css("display", "block");
    var e = document.getElementById("usage");
    if (1 == e.length) {
        var t = document.createElement("option");
        (t.text = "Commercial Use"), (t.value = "commercial"), e.add(t);
    }
}
function linux() {
    (document.getElementById("os_logo").src = "images/logo-linux.html"), (document.getElementById("os_name").textContent = "Linux"), (document.getElementById("os").value = "linux"), $("#overlay2").css("display", "block");
    var e = document.getElementById("usage");
    for (i = 0; i < e.length; i++) {
        "commercial" == e.options[i].value && e.remove(i);
    }
    (document.getElementById("personal_use").style.display = "block"), (document.getElementById("commercial_use").style.display = "none");
}
function checkUsage() {
    "commercial" == document.getElementById("usage").value
        ? ((document.getElementById("personal_use").style.display = "none"), (document.getElementById("commercial_use").style.display = "block"))
        : ((document.getElementById("personal_use").style.display = "block"), (document.getElementById("commercial_use").style.display = "none"));
}
function initPayment() {
    if (validate()) {
        const baseUrl_hk = "index.html";
        String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };
        const sandbox = false;
        const merchant_id = sandbox ? `${1210726}` : `${210251}`;
        const os = document.getElementById("os").value;
        const usage = document.getElementById("usage").value;
        const amount = usage == "commercial" ? "1990.0" : "990.0";
        const cust_first_name = document.getElementById("name").value;
        const cust_last_name = "";
        const cust_email = document.getElementById("email").value;
        const cust_mobile = document.getElementById("mobile_no").value;
        const cust_address = "kalutara";
        const cust_country = "Sri Lanka";
        const order_id = `des_${os}_${usage}_${cust_email}`;
        const items = `des
		for ${os.capitalize()} - $
		{
			usage.capitalize()
		}`;
        const currency = "LKR";
        const city = "Kalutara";
        const delivery_address = "";
        const delivery_city = "";
        const payhere_params = {
            sandbox: sandbox,
            merchant_id: merchant_id,
            return_url: `${baseUrl_hk} ? order_id = ${order_id}`,
            cancel_url: `${baseUrl_hk} / deslk / cancelPayment.php`,
            notify_url: `${baseUrl_hk} / deslk / notify.php`,
            order_id: order_id,
            items: items,
            amount: amount,
            currency: currency,
            first_name: cust_first_name,
            last_name: cust_last_name,
            email: cust_email,
            phone: cust_mobile,
            address: cust_address,
            city: city,
            country: cust_country,
            delivery_address: delivery_address,
            delivery_city: delivery_city,
            delivery_country: cust_country,
        };
        payhere.onCompleted = function onCompleted(orderId) {
            window.location = `${baseUrl_hk} ? order_id = ${order_id}`;
        };
        payhere.onDismissed = function onDismissed() {};
        payhere.onError = function onError(error) {
            console.log("Error:" + error);
        };
        payhere.startPayment(payhere_params);
        $.ajax({ type: "POST", data: { os: os, name: cust_first_name, email: cust_email, mobile_no: cust_mobile, usage: usage }, url: `deslk / initPayment.php` }).done(function (e) {});
    }
}
function pcdownload() {
    if (validate()) {
        var e = document.getElementById("os").value,
            t = document.getElementById("name").value,
            n = document.getElementById("email").value,
            l = document.getElementById("mobile_no").value,
            o = document.getElementById("usage").value;
        $.ajax({ type: "POST", data: { os: e, name: t, email: n, mobile_no: l, usage: o }, url: "deslk/initDownload.php" }).done(function (e) {
            $("#overlay2").css("display", "none"), (window.location = e);
        });
    }
}
function validate() {
    document.getElementById("os").value;
    var e = document.getElementById("name").value,
        t = document.getElementById("email").value,
        n = document.getElementById("mobile_no").value,
        l = (document.getElementById("usage").value, 1);
    return (
        "" == e ? ((document.getElementById("name_lbl").innerHTML = "*"), (l = 0)) : (document.getElementById("name_lbl").innerHTML = ""),
        "" == t ? ((document.getElementById("email_lbl").innerHTML = "*"), (l = 0)) : (document.getElementById("email_lbl").innerHTML = ""),
        "" == n || 10 != n.length ? ((document.getElementById("mobile_no_lbl").innerHTML = "*"), (l = 0)) : (document.getElementById("mobile_no_lbl").innerHTML = ""),
        1 == l
    );
}
function contactUs() {
    $("#contactUs").css("display", "block");
}
function cnvLegacy() {
    (result = document.getElementById("results").value),
        (document.getElementById("keyboard").disabled = !0),
        0 == result.length ? ((document.getElementById("tab").value = "results_legacy"), showAlert("type_unicode_first")) : ((document.getElementById("tab").value = "results_legacy"), convertLegacy());
}
function cnvUnicode() {
    (document.getElementById("tab").value = "results"), (document.getElementById("contain_english").style.display = "none"), (document.getElementById("keyboard").disabled = !1);
}
$("#close_alert").click(function () {
    $("#overlay").css("display", "none");
}),
    $("#close_alert2").click(function () {
        $("#overlay2").css("display", "none");
    }),
    $("#close_alert3").click(function () {
        $("#iframe").css("display", "none");
    }),
    $("#close_alert41").click(function () {
        $("#thankyou").css("display", "none");
    }),
    $("#close_alert5").click(function () {
        $("#contactUs").css("display", "none");
    }),
    $("#close_alert4").click(function () {
        window.location = "https://www.des.lk";
    });
function show_alert(l, e) {
    $("#mdc-dialog-default-label").html(l), $("#mdc-dialog-default-description").html(e), $("#overlay").css("display", "block");
}
$(document).keyup(function (l) {
    27 == l.keyCode && $("#overlay").css("display", "none");
});
function activaTab(n) {
    $('.nav-tabs a[href="#' + n + '"]').tab("show"), HideConvertBtn();
}
function ShowConvertBtn() {
    $("#btn_convert").css("visibility", "visible");
}
function HideConvertBtn() {
    $("#btn_convert").css("visibility", "hidden");
}
