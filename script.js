let currentReview = 0;

const reviews = document.querySelectorAll(".review");

function nextReview() {
    reviews[currentReview].classList.remove("active");

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    reviews[currentReview].classList.add("active");
}

setInterval(nextReview, 4000);