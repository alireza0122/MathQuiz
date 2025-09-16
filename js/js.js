// تبریک / * فانکشن / تایمر */  *استایل
let totalQuestions = 5;
action(1, 5, 'sum')
    function checkAllCorrect() {
    let allCorrect = true;
    for (let i = 1; i <= totalQuestions; i++) {
        let input = document.getElementById(`result${i}`);
        let tr = document.getElementById(`tr${i}`);
        if (tr.innerHTML !== "✅") {
            allCorrect = false;
            break;
        }

    }

    if (allCorrect) {
        document.querySelectorAll('.my-item').forEach((item, i) => {
            setTimeout(() => {
                item.classList.add('show');
            }, 50);
            item.classList.remove('show');
        });
        setTimeout(() => {
            confetti({
                particleCount: 900,
                spread: 120,
                origin: { y: 0.1},
                colors: ['#ff0', '#f0f', '#0ff', '#ff6600', '#00ff00'] // رنگ‌های شاد
            });
        }, 300);
    }


}
let time = document.getElementById("time");
time.innerHTML = "00:00";
var mmt = 60;

let interval = setInterval(() => {
    let minutes = Math.floor(mmt / 60);
    let seconds = mmt % 60;
    let display =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    time.innerHTML = display;
    mmt--;
    if (mmt < 0) {
        time.style.color="#000001"
        time.style.padding="15px"
        time.style.fontSize="25px"
        time.innerHTML = "   زمان شما به پایان رسید!!";
        clearInterval(interval);
    }
}, 1000);
let btns = document.querySelectorAll(".btn-Quiz");

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        btns.forEach(b => b.classList.remove("selected"));
        btns.forEach(b => b.classList.remove("rr"));
        this.classList.add("selected");
    });
});

function action(startNumber, endNumber, type) {
    mmt = 60;
    for (let i = 1; i <= totalQuestions; i++) {
        generateQuestion(i);
    }

    document.querySelectorAll('.my-item').forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 50);
        item.classList.remove('show');
    });

    function generateQuestion(index) {
        const num1_span = document.getElementById(`inp-num${index}`);
        const num2_span = document.getElementById(`inp-nu${index}`);
        const sum_span = document.getElementById(`sum${index}`);
        const result_mos = document.getElementById(`result_mos${index}`);
        const result_input = document.getElementById(`result${index}`);
        const tr = document.getElementById(`tr${index}`);
        tr.innerHTML = "";
        result_mos.innerHTML = "=";


        const num1 = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
        const num2 = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;


        num1_span.innerHTML = num1;
        num2_span.innerHTML = num2;
        result_input.style.border = "2px solid #ccc";
        result_input.value = "";

        let correctSum;

        if (type === "sum") {
            sum_span.innerHTML = "+";
            correctSum = num1 + num2;
        } else if (type === "min") {

            sum_span.innerHTML = "-";
            correctSum = num1 - num2;
        } else if (type === "zarb") {

            sum_span.innerHTML = "*";
            correctSum = num1 * num2;
        }

        // var i = 0
        result_input.addEventListener("input", function () {
            if (result_input.value === "") {
                result_input.style.border = "2px solid #ccc";
                tr.innerHTML = "";
            } else if (Number(result_input.value) === correctSum) {
                result_input.style.border = "2px solid green";
                tr.innerHTML = "✅";
                checkAllCorrect();
                let nextInput = document.getElementById(`result${index + 1}`);
                if (nextInput) nextInput.focus();
            } else {
                result_input.style.border = "2px solid red";
                tr.innerHTML = "🤔";
            }

        });


    }
}


function Multiplication(type){
    mmt = 60;
    for (let i = 1; i <= totalQuestions; i++) {
        generateQuestion(i);
    }
    document.querySelectorAll('.my-item').forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 50);
        item.classList.remove('show');
    });
    function generateQuestion(index) {
        const tr = document.getElementById(`tr${index}`);
        const num1_span = document.getElementById(`inp-num${index}`);
        const num2_span = document.getElementById(`inp-nu${index}`);
        const sum_span = document.getElementById(`sum${index}`);
        const result_mos = document.getElementById(`result_mos${index}`);
        const result_input = document.getElementById(`result${index}`);
        result_mos.innerHTML = "=";
        sum_span.innerHTML = "*";
        tr.innerHTML = "";
        result_input.style.border = "2px solid #ccc";
        result_input.value=""
        var num1

        if (type === "2") {
            num1 = (2);
        }
        if (type === "3") {
            num1 = 3;
        }
        if (type === "4") {
            num1 = 4;
        }
        if (type === "5") {
            num1 = 5;
        }
        if (type === "6") {
            num1 = 6;
        }
        if (type === "7") {
            num1 = 7;
        }
        if (type === "8") {
            num1 = 8;
        }
        if (type === "9") {
            num1 = 9;
        }
        var num2 = Math.floor(Math.random() * 10) + 1;
        let correctSum = num1 * num2;
        num1_span.innerHTML = num1;
        num2_span.innerHTML = num2;
        result_input.addEventListener("input", function () {
            if (result_input.value === "") {
                result_input.style.border = "2px solid #ccc";
            } else if (Number(result_input.value) === correctSum) {
                result_input.style.border = "2px solid green";
                tr.innerHTML = "✅";
                checkAllCorrect();
                let nextInput = document.getElementById(`result${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            } else {
                result_input.style.border = "2px solid red";
                tr.innerHTML = "🤔";
            }
        });
    }
}












