const progressValue = document.querySelector(".progress-value");
const circularProgress = document.querySelector(".circular-progress");

if (progressValue && circularProgress) {
    const endValue = parseInt(progressValue.textContent); // Ex: 70
    let startValue = 0;

    let progress = setInterval(() => {
        if (startValue >= endValue) clearInterval(progress);

        progressValue.textContent = `${startValue}%`;
        circularProgress.style.background = `conic-gradient(#d24d3e ${startValue * 3.6}deg, #ededed 0deg)`;

        startValue++;
    }, 20);
}
