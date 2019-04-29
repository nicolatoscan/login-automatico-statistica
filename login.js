window.onload = function () {
    document.getElementById('email_address').value = 'nicola.toscan';
    document.getElementById('matricola').value = '202236';
    document.getElementById("signin").click()
}


setInterval(async function () {

    let el = document.getElementById('date')
    if (el != null) {

        let daRichiedere = false;
        let today = new Date().toISOString().split("T")[0]

        if (localStorage.getItem("lastToken") != today) {
            daRichiedere = true
        }

        if (daRichiedere) {
            el.value = today
            document.getElementById('tokenrequest').click()
            localStorage.setItem("lastToken", today)
        }
    }
}, 100);
