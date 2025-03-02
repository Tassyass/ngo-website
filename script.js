// Counter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize counters only if elements exist
    const number1 = document.querySelector("#number1");
    const number2 = document.querySelector("#number2");
    const number3 = document.querySelector("#number3");
    const number4 = document.querySelector("#number4");

    // Counter 1 - Education
    if (number1) {
        let count1 = 3100;
        const num1 = setInterval(() => {
            count1++;
            number1.innerHTML = count1;
            if (count1 >= 3500) clearInterval(num1);
        }, 10);
    }

    // Counter 2 - Food
    if (number2) {
        let count2 = 1500;
        const num2 = setInterval(() => {
            count2++;
            number2.innerHTML = count2;
            if (count2 >= 1850) clearInterval(num2);
        }, 10);
    }

    // Counter 3 - Water
    if (number3) {
        let count3 = 1800;
        const num3 = setInterval(() => {
            count3++;
            number3.innerHTML = count3;
            if (count3 >= 2100) clearInterval(num3);
        }, 10);
    }

    // Counter 4 - Health
    if (number4) {
        let count4 = 12;
        const num4 = setInterval(() => {
            count4++;
            number4.innerHTML = count4;
            if (count4 >= 350) clearInterval(num4);
        }, 10);
    }
});