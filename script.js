//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", function() {
            if (this.value.length > 0 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", function(e) {
            if (e.key === "Backspace") {
                if (this.value === "" && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });

        input.addEventListener("paste", function(e) {
            e.preventDefault();
            const pasteData = e.clipboardData.getData("text").trim();
            if (pasteData.length === inputs.length) {
                inputs.forEach((input, i) => {
                    input.value = pasteData[i];
                });
                inputs[inputs.length - 1].focus();
            }
        });
    });

    // Auto-focus the first input on load
    inputs[0].focus();
});
