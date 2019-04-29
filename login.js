window.onload = function () {
    document.getElementById('email_address').value = 'nicola.toscan';
    document.getElementById('matricola').value = '202236';
    document.getElementById("signin").click()
}


setInterval(async function () {

    let daRichiedere = false;
    let today = new Date().toISOString().split("T")[0]
    
    if (localStorage.getItem("lastToken") !=  today) {
        daRichiedere = true
    }

    if (daRichiedere) {
        let el = document.getElementById('date')
        if (el != null) {
            el.value = today
            document.getElementById('tokenrequest').click()
            localStorage.setItem("lastToken", today)
        }
    }
}, 200);
