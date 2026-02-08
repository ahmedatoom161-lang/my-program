function calculate() {
    let shape = document.getElementById("shape").value;
    let v1 = Number(document.getElementById("value1").value);
    let v2 = Number(document.getElementById("value2").value);
    let text = "";

    if (shape === "square") {
        let area = v1 * v1;
        let perimeter = 4 * v1;
        text = "المساحة: " + area + " | المحيط: " + perimeter;
    }

    if (shape === "rectangle") {
        let area = v1 * v2;
        let perimeter = 2 * (v1 + v2);
        text = "المساحة: " + area + " | المحيط: " + perimeter;
    }

    document.getElementById("result").innerText = text;
}

