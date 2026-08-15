(function () {
  var header = document.querySelector(".site-header");
  var menuBtn = document.querySelector(".menu-btn");
  var mobileNav = document.querySelector(".mobile-nav");
  var form = document.getElementById("contact-form");
  var success = document.getElementById("form-success");
  var quizForm = document.getElementById("energy-quiz");
  var quizResult = document.getElementById("quiz-result");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 72);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "Close" : "Menu";
      header.classList.add("is-solid");
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "Menu";
      });
    });
  }

  if (form && success) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.classList.add("is-hidden");
      form.style.display = "none";
      success.classList.add("is-visible");
    });
  }

  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var answers = Array.from(quizForm.querySelectorAll("input[type='radio']:checked"));
      if (answers.length < 5) {
        quizResult.hidden = false;
        quizResult.innerHTML =
          "<p>Please answer each question so the summary can meet you where you are.</p>";
        return;
      }

      var scores = { introvert: 0, ambivert: 0, extrovert: 0 };
      answers.forEach(function (input) {
        scores[input.value] += 2;
      });

      var winner = Object.keys(scores).sort(function (a, b) {
        return scores[b] - scores[a];
      })[0];

      var copy = {
        introvert: {
          title: "You lean introvert",
          summary:
            "Quiet is not a lack of warmth. Your answers suggest you restore yourself in stillness, depth, and unhurried connection.",
        },
        ambivert: {
          title: "You live in the middle — an ambivert",
          summary:
            "Your answers suggest a flexible rhythm: you enjoy people and you need rest. That adaptability is a gift.",
        },
        extrovert: {
          title: "You lean extrovert",
          summary:
            "Your answers suggest you come alive in company. Connection fuels you — and rest still matters, even when it does not come first.",
        },
      }[winner];

      quizResult.hidden = false;
      quizResult.innerHTML =
        "<h3>" +
        copy.title +
        "</h3><p>" +
        copy.summary +
        '</p><p class="tiny">This is a gentle reflection, not a diagnosis. If you would like to explore it more deeply, you are welcome to book a session.</p>';
    });
  }
})();
