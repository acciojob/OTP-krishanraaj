document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        // When user types a number, move to next input
        input.addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, ""); // Only allow digits
            if (this.value.length > 0 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Handle backspace
        input.addEventListener("keydown", function(e) {
            if (e.key === "Backspace") {
                if (this.value === "" && index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });

        // Handle paste
        input.addEventListener("paste", function(e) {
            e.preventDefault();
            const pasteData = e.clipboardData.getData("text").trim().slice(0, inputs.length);
            for (let i = 0; i < pasteData.length; i++) {
                inputs[i].value = pasteData[i];
            }
            if (pasteData.length > 0) {
                inputs[Math.min(pasteData.length, inputs.length - 1)].focus();
            }
        });
    });

    // Auto-focus first input on page load
    inputs[0].focus();
});
