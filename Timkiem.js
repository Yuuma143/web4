const songList = {
    "hope is the thing with feathers": "thongtinRobin.html",
    "white night": "thongtinWhite.html",
    "across the wind": "thongtinAcross.html",
    "android girl": "thongtinAndroid.html",
    "haru": "thongtinharu.html",
    "idol": "thongtinIdol.html",
    "kaijuu": "thongtinKaijuu.html",
    "monitoring": "thongtinmonitor.html",
    "nights sky patrol of tomorrow": "thongtinnightsky.html",
    "reforge": "thongtinReforge.html",
    "surges": "thongtinSurge.html",
    "the night": "thongtinTheNights.html",
    "home": "thongtinhome.html",
    "forget it": "thongtinWasurete.html",
    "wasurete kudasai": "thongtinWasurete.html"
};


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = form.querySelector('input[name="tenbaihat"]');
    const suggestionsBox = form.querySelector('.suggestions');

    function updateSuggestionsWidth() {
        suggestionsBox.style.width = input.offsetWidth + "px";
    }
    
    updateSuggestionsWidth();
    window.addEventListener('resize', updateSuggestionsWidth);

    input.addEventListener('input', function() {
        const query = input.value.trim().toLowerCase();
        suggestionsBox.innerHTML = "";

        if (query.length === 0) {
            return;
        }

        for (const name of Object.keys(songList)) {
            if (name.includes(query)) {
                const div = document.createElement('div');
                div.textContent = name;
                div.addEventListener('click', function() {
                    input.value = name;
                    suggestionsBox.innerHTML = "";
                });
                suggestionsBox.appendChild(div);
            }
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = input.value.trim().toLowerCase();
        let found = false;

        for (const [name, url] of Object.entries(songList)) {
            if (name.includes(query)) {
                window.location.href = url;
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Theresa Music không tìm thấy bài hát \"" + input.value + "\" trong hệ thống.");
        }
    });
});