function faq(e) {
    const ans = $(e).parents(".card").children(".collapse").hasClass("show");
    if (!ans) {
        $(e).children(".plus-minus").children(".minus").css({
            transform: "rotate(180deg)",
        });
        $(e).parent(".pertanyaan").parent(".card-header").css({
            "background-color": "#080808",
        });
    } else {
        $(e).children(".plus-minus").children(".minus").css({
            transform: "rotate(90deg)",
        });
        $(e).parent(".pertanyaan").parent(".card-header").css({
            "background-color": "#202020",
        });
    }
}

// For Event Section --> Carousel Single Item
$(document).ready(function () {
    $(".event-carousel").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: ".event-next",
        prevArrow: ".event-prev",
    });
});

// For Classes Section --> Carousel Center Mode
$(document).ready(function () {
    $(".carousel").slick({
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                    mobileFirst: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    mobileFirst: true,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
        nextArrow: ".next",
        prevArrow: ".prev",
    });
});

function validateEmail() {
    const regex = new RegExp("^((?!.)[w-_.]*[^.])(@w+)(.w+(.w+)?[^.W])$");

    if (!$("#email").toString().val().match(regex)) {
        $("#email")[0].setCustomValidity("Email is not valid");
        $("#email-message").text("Email is not valid");
    } else {
        $("#email")[0].setCustomValidity("");
        $("#email-message").text("");
    }
}

function validatePassword() {
    const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}");
    if (!$("#pass").val().match(regex)) {
        $("#pass")[0].setCustomValidity(
            "Password must contain at least 8 characters, including uppercase and lowercase"
        );
        $("#pass-message").text(
            "Password must contain at least 8 characters, including uppercase and lowercase"
        );
    } else {
        $("#pass")[0].setCustomValidity("");
        $("#pass-message").text("");
    }
}

function confirmPassword() {
    if ($("#pass").val() == $("#confirm-pass").val()) {
        $("#confirm-pass")[0].setCustomValidity("");
        $("#confirmPass-message").text("");
    } else {
        $("#confirm-pass")[0].setCustomValidity("Match your password");
        $("#confirmPass-message").text("Match your password");
    }
}

function validateNIM() {
    const nim = $("#NIM").val();

    if (String(nim).startsWith("24") && String(nim).length == 10) {
        $("#NIM")[0].setCustomValidity("");
        $("#NIM-message").text("");
    } else {
        $("#NIM")[0].setCustomValidity("Binusian ID Error");
        $("#NIM-message").text("Binusian ID Error");
    }
}

function validatePhone() {
    const number = $("#phone-number").val();
    if (number.length == 12) {
        $("#phone-number")[0].setCustomValidity("");
        $("#phone-message").text("");
    } else {
        $("#phone-number")[0].setCustomValidity("Number invalid");
        $("#phone-message").text("Number invalid");
    }
}

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.match(regex)) {
        $("#email")[0].setCustomValidity("");
        $("#email-message").text("");
    } else {
        $("#email")[0].setCustomValidity("Email not valid");
        $("#email-message").text("Email not valid");
    }
}

var major = document.getElementById("major"),
    arr = [
        "Accounting",
        "Architecture",

        "Business Creation",
        "Business Law",

        "Chinese",
        "Civil Engineering",
        "Computer Engineering",
        "Computer Science",
        "Computer Science & Mathematics",
        "Computer Science & Statistics",
        "Cyber Security",

        "DKV Animation",
        "DKV Creative Advertising",
        "DKV New Media",

        "English",

        "Film",
        "Finance",
        "Food Technology",

        "Game Application and Technology",
        "Global Business Marketing",

        "Hotel Management (D4)",

        "Industrial Engineering",
        "Information Systems",
        "Information Systems Accounting and Auditing",
        "Interior Design",
        "International Business Management",
        "International Relations",
        "Information Systems and Management",

        "Japanese",

        "Management",
        "Marketing Communication",
        "Mass Communication",
        "Mobile Application and Technology",

        "Pendidikan Guru Sekolah Dasar",
        "Psychology",

        "Tourism",
    ];

for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value", arr[i]);
    major.insertBefore(option, major.lastChild);
}

function setRequired() {
    var campusLocation = document.getElementById("campus-select");
    if (campusLocation.value.match("AlamSutera")) {
        document.getElementById("brief-schedule").required = false;
        document.getElementById("brief-schedule").disabled = true;
        document.getElementById("course").required = false;
        document.getElementById("course").disabled = true;
        check = false;
    }
    // Kemanggisan
    else {
        document.getElementById("brief-schedule").required = true;
        document.getElementById("brief-schedule").disabled = false;
        document.getElementById("course").required = true;
        document.getElementById("course").disabled = false;
        check = true;
    }
}

// DYNAMIC DROPDOWN CAMPUS LOCATION & YOUR PREFERENCES
var course = {
    Kemanggisan: [
        "Web Programming",
        "UI/UX",
        "Mobile Apps",
        "Web Design",
        "Java Programming",
    ],
    AlamSutera: ["Coming soon for Alsut"],
};

var briefing = {
    Kemanggisan: [],
    AlamSutera: ["Coming soon for Alsut"],
};

var campusSelect = document.getElementById("campus-select");
var briefSchedule = document.getElementById("brief-schedule");
var courseSelect = document.getElementById("course");

campusSelect.addEventListener("change", function () {
    var selected_course = course[this.value];
    var selected_briefing = briefing[this.value];
    while (briefSchedule.options.length > 0) {
        briefSchedule.options.remove(0);
    }
    while (courseSelect.options.length > 0) {
        courseSelect.options.remove(0);
    }

    Array.from(selected_course).forEach(function (e1) {
        let option = new Option(e1, e1);
        courseSelect.appendChild(option);
    });

    Array.from(selected_briefing).forEach(function (e1) {
        let option = new Option(e1, e1);
        briefSchedule.appendChild(option);
    });
});