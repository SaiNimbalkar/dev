// Attach event after page loads
window.onload = function () {

    document.getElementById("addBtn").onclick = function () {

        let n1 = parseInt(document.getElementById("num1").value);
        let n2 = parseInt(document.getElementById("num2").value);

        let sum = n1 + n2;

        document.getElementById("result").innerText = "Result: " + sum;
    };

};