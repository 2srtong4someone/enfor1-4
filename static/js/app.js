(() => {
  const storageKey = "engkids-progress-v1";
  const lessonByGrade = {
    1: {
      title: "Давай знакомиться!",
      wordTitle: "Скажи «Привет!»",
      word: "Hello",
      translation: "Привет!",
      quizTitle: "Что значит «Hello»?",
      prompt: "Выбери правильный ответ:",
      answers: ["Пока!", "Привет!", "Спасибо!"],
      answerEmoji: ["👋", "😊", "💛"],
      answer: 1,
      phrase: "Hello, Leo!",
      success: "Правильно! Hello значит «Привет!» 🌟",
      keyword: "hello",
    },
    2: {
      title: "Друзья-животные",
      wordTitle: "Познакомься с котёнком",
      word: "A cat",
      translation: "Кошка",
      quizTitle: "Кто такой cat?",
      prompt: "Вспомни нового друга Лео:",
      answers: ["Собака", "Кошка", "Птица"],
      answerEmoji: ["🐶", "🐱", "🐦"],
      answer: 1,
      phrase: "I see a cat!",
      success: "Верно! A cat — это кошка! 🌟",
      keyword: "cat",
    },
    3: {
      title: "Я люблю фрукты",
      wordTitle: "Яблоко по-английски",
      word: "An apple",
      translation: "Яблоко",
      quizTitle: "Что значит «apple»?",
      prompt: "Выбери фрукт:",
      answers: ["Банан", "Апельсин", "Яблоко"],
      answerEmoji: ["🍌", "🍊", "🍎"],
      answer: 2,
      phrase: "I like apples!",
      success: "Точно! An apple — это яблоко! 🌟",
      keyword: "apple",
    },
    4: {
      title: "Мой день",
      wordTitle: "Поздоровайся утром",
      word: "Good morning",
      translation: "Доброе утро!",
      quizTitle: "Когда говорят «Good morning»?",
      prompt: "Подумай, в какое время дня:",
      answers: ["Утром", "Вечером", "Перед сном"],
      answerEmoji: ["🌅", "🌇", "🌙"],
      answer: 0,
      phrase: "Good morning, Leo!",
      success: "Отлично! Good morning говорят утром! 🌟",
      keyword: "morning",
    },
  };
  const defaultProgress = { grade: 1, starsByGrade: {} };
  const colors = ["#ffd43b", "#ff5fa2", "#19c8c0", "#8cf06e", "#7b5cff", "#ff8a3d"];
  const statusMessage = document.querySelector("#status-message");
  let progress = loadProgress();

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (!saved) return { ...defaultProgress };
      const starsByGrade = {};
      for (const grade of [1, 2, 3, 4]) {
        const savedStars = saved.starsByGrade?.[grade] ?? (saved.grade === grade ? saved.stars : []);
        starsByGrade[grade] = [...new Set(
          (Array.isArray(savedStars) ? savedStars : [])
            .filter((star) => ["heard", "answer", "speak"].includes(star)),
        )];
      }
      return {
        grade: Number.isInteger(saved.grade) && saved.grade >= 1 && saved.grade <= 4 ? saved.grade : 1,
        starsByGrade,
      };
    } catch (error) {
      console.warn("Не удалось прочитать прогресс Engkids из хранилища браузера.", error);
      return { ...defaultProgress };
    }
  }

  function stars() {
    return progress.starsByGrade[progress.grade] || [];
  }

  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch (error) {
      console.warn("Не удалось сохранить прогресс Engkids в хранилище браузера.", error);
      statusMessage.textContent = "Прогресс не удалось сохранить на этом устройстве.";
    }
  }

  function updateProgress() {
    const total = stars().length;
    document.querySelector("#progress-label").textContent = `${total} из 3 звёзд`;
    document.querySelector("#progress-fill").style.width = `${(total / 3) * 100}%`;
    document.querySelector("#lesson-grade").textContent = progress.grade;
    document.querySelectorAll(".class-card").forEach((button) => {
      button.setAttribute("aria-pressed", String(Number(button.dataset.grade) === progress.grade));
    });
    document.querySelector("#heard-button").classList.toggle("is-complete", stars().includes("heard"));
    document.querySelector("#said-button").classList.toggle("is-complete", stars().includes("speak"));
    document.querySelectorAll(".answer-button").forEach((button, index) => {
      button.classList.toggle(
        "is-correct",
        stars().includes("answer") && index === lessonByGrade[progress.grade].answer,
      );
    });
  }

  function updateLesson() {
    const lesson = lessonByGrade[progress.grade];
    document.querySelector("#lesson-title").textContent = lesson.title;
    document.querySelector("#word-task-title").textContent = lesson.wordTitle;
    const wordButton = document.querySelector("#word-button");
    wordButton.firstChild.textContent = `${lesson.word} `;
    wordButton.dataset.say = lesson.word;
    document.querySelector("#word-translation").textContent = lesson.translation;
    document.querySelector("#quiz-title").textContent = lesson.quizTitle;
    document.querySelector("#quiz-prompt").textContent = lesson.prompt;
    document.querySelector("#speak-phrase").textContent = lesson.phrase;
    document.querySelector("#speak-task-title").textContent = lesson.phrase === "Hello, Leo!"
      ? "Поздоровайся с Лео!"
      : "Скажи фразу Лео!";
    document.querySelector("#speak-button").setAttribute("aria-label", `Включить микрофон: ${lesson.phrase}`);
    document.querySelector("#answer-feedback").textContent = stars().includes("answer")
      ? lesson.success
      : "";
    document.querySelector("#speech-feedback").textContent = stars().includes("speak")
      ? "Здорово! Лео услышал твою фразу! 🌟"
      : "Нажми на микрофон — он будет слушать до 12 секунд";
    document.querySelectorAll(".answer-button").forEach((button, index) => {
      button.classList.remove("is-correct", "is-wrong");
      button.firstChild.textContent = `${lesson.answers[index]} `;
      button.querySelector("span").textContent = lesson.answerEmoji[index];
      button.hidden = index >= lesson.answers.length;
    });
    updateProgress();
  }

  function celebrate() {
    const layer = document.querySelector("#confetti");
    for (let index = 0; index < 36; index += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[index % colors.length];
      piece.style.animationDelay = `${Math.random() * 350}ms`;
      piece.style.transform = `rotate(${Math.random() * 180}deg)`;
      layer.append(piece);
      window.setTimeout(() => piece.remove(), 1700);
    }
  }

  function earnStar(step) {
    if (stars().includes(step)) return;
    progress.starsByGrade[progress.grade] = [...stars(), step];
    saveProgress();
    updateProgress();
    statusMessage.textContent = "Молодец! Ты получил звёздочку.";
    celebrate();
    if (stars().length === 3) {
      document.querySelector("#answer-feedback").textContent = "Ура! Ты прошёл урок! Лео тобой гордится! 🎉";
    }
  }

  document.querySelectorAll(".class-card").forEach((button) => {
    button.addEventListener("click", () => {
      progress.grade = Number(button.dataset.grade);
      saveProgress();
      updateLesson();
      statusMessage.textContent = `Выбран ${progress.grade} класс.`;
    });
  });

  document.querySelector("#word-button").addEventListener("click", () => {
    if (!("speechSynthesis" in window)) {
      statusMessage.textContent = "Озвучивание недоступно в этом браузере. Прочитай слово вслух.";
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(lessonByGrade[progress.grade].word);
    utterance.lang = "en-US";
    utterance.rate = 0.78;
    window.speechSynthesis.speak(utterance);
  });

  document.querySelector("#heard-button").addEventListener("click", () => earnStar("heard"));

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => {
      const lesson = lessonByGrade[progress.grade];
      const isCorrect = Number(button.dataset.choice) === lesson.answer;
      const feedback = document.querySelector("#answer-feedback");
      document.querySelectorAll(".answer-button").forEach((choice) => {
        choice.classList.remove("is-correct", "is-wrong");
      });
      if (isCorrect) {
        button.classList.add("is-correct");
        feedback.textContent = lesson.success;
        earnStar("answer");
      } else {
        button.classList.add("is-wrong");
        feedback.textContent = "Почти! Попробуй ещё раз и подумай над словом.";
      }
    });
  });

  document.querySelector("#said-button").addEventListener("click", () => {
    document.querySelector("#speech-feedback").textContent = "Здорово! Лео услышал твою фразу! 🌟";
    earnStar("speak");
  });

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const speakButton = document.querySelector("#speak-button");
  const speechFeedback = document.querySelector("#speech-feedback");
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    let listening = false;
    let recognizedSpeech = false;
    let recognitionError = null;
    let listenTimeout;
    let restartTimeout;
    let listenDeadline;

    function stopListening(message) {
      listening = false;
      window.clearTimeout(listenTimeout);
      window.clearTimeout(restartTimeout);
      speakButton.classList.remove("is-listening");
      speakButton.setAttribute("aria-pressed", "false");
      if (message) speechFeedback.textContent = message;
      try {
        recognition.stop();
      } catch (error) {
        console.warn("Не удалось остановить распознавание речи.", error);
      }
    }

    speakButton.addEventListener("click", () => {
      if (listening) {
        stopListening("Прослушивание остановлено. Нажми на микрофон, чтобы попробовать ещё раз.");
        return;
      }
      recognizedSpeech = false;
      recognitionError = null;
      speechFeedback.textContent = "Подключаю микрофон...";
      try {
        recognition.start();
      } catch (error) {
        console.warn("Не удалось начать распознавание речи.", error);
        speechFeedback.textContent = error.name === "InvalidStateError"
          ? "Микрофон ещё занят. Подожди немного и нажми снова."
          : "Браузер не запустил микрофон. Проверь разрешение для сайта и попробуй ещё раз.";
      }
    });

    recognition.addEventListener("start", () => {
      if (!listening) {
        listening = true;
        listenDeadline = Date.now() + 12000;
        listenTimeout = window.setTimeout(() => {
          stopListening(
            recognizedSpeech
              ? "Время прослушивания закончилось. Лео услышал тебя! 🌟"
              : "Я не услышал фразу за 12 секунд. Нажми на микрофон и попробуй ещё раз.",
          );
        }, 12000);
      }
      speakButton.classList.add("is-listening");
      speakButton.setAttribute("aria-pressed", "true");
      speechFeedback.textContent = `Слушаю до 12 секунд. Скажи: ${lessonByGrade[progress.grade].phrase}`;
    });

    recognition.addEventListener("result", (event) => {
      const heard = Array.from(event.results)
        .slice(event.resultIndex)
        .filter((result) => result.isFinal)
        .map((result) => result[0].transcript.toLowerCase())
        .join(" ");
      const keyword = lessonByGrade[progress.grade].keyword;
      if (heard && heard.includes(keyword)) {
        recognizedSpeech = true;
        speechFeedback.textContent = `Отлично сказано! Лео услышал “${lessonByGrade[progress.grade].phrase}” 🦁`;
        earnStar("speak");
        stopListening();
      } else {
        speechFeedback.textContent = `Слушаю... Попробуй сказать: ${lessonByGrade[progress.grade].phrase}`;
      }
    });

    recognition.addEventListener("error", (event) => {
      if (event.error === "no-speech") {
        speechFeedback.textContent = "Пока не слышу речь. Продолжаю слушать — скажи фразу сейчас.";
        return;
      }
      recognitionError = event.error;
      const messages = {
        "not-allowed": "Нет доступа к микрофону. Разреши его для этого сайта в настройках Safari.",
        "service-not-allowed": "Safari не разрешил распознавание речи. Проверь настройки сайта и микрофона.",
        "audio-capture": "Микрофон не найден или занят другим приложением.",
        network: "Сервис распознавания недоступен. Проверь интернет и попробуй ещё раз.",
        "language-not-supported": "В браузере недоступно распознавание английской речи.",
        aborted: "Прослушивание остановлено. Нажми на микрофон, чтобы попробовать снова.",
      };
      stopListening(messages[event.error] || `Распознавание не удалось (${event.error}). Проверь микрофон и попробуй ещё раз.`);
    });

    recognition.addEventListener("end", () => {
      if (!listening) return;
      if (recognizedSpeech || recognitionError) {
        listening = false;
        window.clearTimeout(listenTimeout);
        speakButton.classList.remove("is-listening");
        speakButton.setAttribute("aria-pressed", "false");
        if (recognitionError) {
          speechFeedback.textContent = "Прослушивание завершилось из-за ошибки. Проверь сообщение и попробуй снова.";
        }
        return;
      }
      if (Date.now() >= listenDeadline) {
        stopListening("Я не услышал фразу. Нажми на микрофон, чтобы попробовать ещё раз.");
        return;
      }
      speechFeedback.textContent = "Safari прервал прослушивание — подключаю микрофон снова...";
      restartTimeout = window.setTimeout(() => {
        if (!listening) return;
        try {
          recognition.start();
        } catch (error) {
          console.warn("Не удалось возобновить распознавание речи.", error);
          stopListening("Не удалось подключить микрофон. Проверь разрешение Safari и попробуй ещё раз.");
        }
      }, 250);
    });
  } else {
    speakButton.addEventListener("click", () => {
      speechFeedback.textContent = "В этом браузере распознавание речи не поддерживается. Разреши микрофон в поддерживаемом браузере или выполни задание без автоматической проверки кнопкой ниже.";
    });
  }

  updateLesson();
})();
