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
  const homeworkByGrade = {
    1: [
      { promptEn: 'What does "Hello!" mean?', promptRu: 'Что значит «Hello!»?', options: [["Привет!", "Hello!"], ["Пока!", "Goodbye!"], ["Спасибо!", "Thank you!"]], answer: 0, explanationEn: '"Hello!" is a greeting.', explanationRu: '«Hello!» — это приветствие.' },
      { promptEn: 'How do you say "кошка" in English?', promptRu: 'Как сказать «кошка» по-английски?', options: [["собака", "dog"], ["кошка", "cat"], ["птица", "bird"]], answer: 1, explanationEn: '"Cat" means «кошка».', explanationRu: '«Cat» переводится как «кошка».' },
      { promptEn: 'What does "goodbye" mean?', promptRu: 'Что значит «goodbye»?', options: [["Доброе утро", "Good morning"], ["Пожалуйста", "Please"], ["Пока", "Goodbye"]], answer: 2, explanationEn: '"Goodbye" is what we say when leaving.', explanationRu: '«Goodbye» говорят при прощании.' },
      { promptEn: 'Choose the English word for "синий".', promptRu: 'Выбери английское слово для «синий».', options: [["синий", "blue"], ["красный", "red"], ["зелёный", "green"]], answer: 0, explanationEn: '"Blue" means «синий».', explanationRu: '«Blue» переводится как «синий».' },
      { promptEn: 'What does "thank you" mean?', promptRu: 'Что значит «thank you»?', options: [["Извини", "Sorry"], ["Спасибо", "Thank you"], ["Привет", "Hello"]], answer: 1, explanationEn: '"Thank you" is a polite way to say «спасибо».', explanationRu: '«Thank you» — вежливое «спасибо».' },
    ],
    2: [
      { promptEn: 'What does "I am a student" mean?', promptRu: 'Что значит «I am a student»?', options: [["Я учитель.", "I am a teacher."], ["Я ученик.", "I am a student."], ["Я дома.", "I am at home."]], answer: 1, explanationEn: '"I am a student" means «Я ученик».', explanationRu: '«I am a student» переводится как «Я ученик».' },
      { promptEn: 'Choose the English word for "собака".', promptRu: 'Выбери английское слово для «собака».', options: [["кошка", "cat"], ["рыба", "fish"], ["собака", "dog"]], answer: 2, explanationEn: '"Dog" means «собака».', explanationRu: '«Dog» переводится как «собака».' },
      { promptEn: 'What does "red" mean?', promptRu: 'Что значит «red»?', options: [["Красный", "red"], ["Жёлтый", "yellow"], ["Синий", "blue"]], answer: 0, explanationEn: '"Red" is the colour «красный».', explanationRu: '«Red» — это цвет «красный».' },
      { promptEn: 'How do you say "три" in English?', promptRu: 'Как сказать «три» по-английски?', options: [["два", "two"], ["три", "three"], ["четыре", "four"]], answer: 1, explanationEn: '"Three" means «три».', explanationRu: '«Three» переводится как «три».' },
      { promptEn: 'When do we say "Good morning"?', promptRu: 'Когда говорят «Good morning»?', options: [["Вечером", "In the evening"], ["Утром", "In the morning"], ["Ночью", "At night"]], answer: 1, explanationEn: '"Good morning" is a greeting we use in the morning.', explanationRu: '«Good morning» — приветствие, которое говорят утром.' },
    ],
    3: [
      { promptEn: 'What does "I like apples" mean?', promptRu: 'Что значит «I like apples»?', options: [["Я люблю яблоки.", "I like apples."], ["Я ем хлеб.", "I eat bread."], ["Я вижу кошку.", "I see a cat."]], answer: 0, explanationEn: '"I like" means «мне нравится», and "apples" means «яблоки».', explanationRu: '«I like» значит «мне нравится», а «apples» — «яблоки».' },
      { promptEn: 'Choose the English word for "книга".', promptRu: 'Выбери английское слово для «книга».', options: [["ручка", "pen"], ["книга", "book"], ["сумка", "bag"]], answer: 1, explanationEn: '"Book" means «книга».', explanationRu: '«Book» переводится как «книга».' },
      { promptEn: 'What does "green" mean?', promptRu: 'Что значит «green»?', options: [["Оранжевый", "orange"], ["Фиолетовый", "purple"], ["Зелёный", "green"]], answer: 2, explanationEn: '"Green" is the colour «зелёный».', explanationRu: '«Green» — это цвет «зелёный».' },
      { promptEn: 'How do you say "семь" in English?', promptRu: 'Как сказать «семь» по-английски?', options: [["семь", "seven"], ["шесть", "six"], ["восемь", "eight"]], answer: 0, explanationEn: '"Seven" means «семь».', explanationRu: '«Seven» переводится как «семь».' },
      { promptEn: 'What does "How are you?" mean?', promptRu: 'Что значит «How are you?»?', options: [["Как тебя зовут?", "What is your name?"], ["Как дела?", "How are you?"], ["Где ты живёшь?", "Where do you live?"]], answer: 1, explanationEn: '"How are you?" is a question about how someone feels.', explanationRu: '«How are you?» — вопрос о том, как у кого-то дела.' },
    ],
    4: [
      { promptEn: 'What does "She is my friend" mean?', promptRu: 'Что значит «She is my friend»?', options: [["Он мой брат.", "He is my brother."], ["Она моя подруга.", "She is my friend."], ["Это моя книга.", "It is my book."]], answer: 1, explanationEn: '"She" means «она», and "my friend" means «мой друг / моя подруга».', explanationRu: '«She» значит «она», а «my friend» — «мой друг / моя подруга».' },
      { promptEn: 'What are they doing in "They are playing"?', promptRu: 'Что они делают в предложении «They are playing»?', options: [["Они играют.", "They are playing."], ["Они читают.", "They are reading."], ["Они спят.", "They are sleeping."]], answer: 0, explanationEn: '"They are playing" means «Они играют».', explanationRu: '«They are playing» переводится как «Они играют».' },
      { promptEn: 'What does "yesterday" mean?', promptRu: 'Что значит «yesterday»?', options: [["Завтра", "tomorrow"], ["Сегодня", "today"], ["Вчера", "yesterday"]], answer: 2, explanationEn: '"Yesterday" means the day before today: «вчера».', explanationRu: '«Yesterday» значит день перед сегодняшним: «вчера».' },
      { promptEn: 'What does "Where do you live?" mean?', promptRu: 'Что значит «Where do you live?»?', options: [["Где ты живёшь?", "Where do you live?"], ["Что ты любишь?", "What do you like?"], ["Сколько тебе лет?", "How old are you?"]], answer: 0, explanationEn: 'We ask "Where do you live?" to find out someone’s home or town.', explanationRu: 'Вопрос «Where do you live?» задают, чтобы узнать, где человек живёт.' },
      { promptEn: 'Choose the correct translation of "We have a dog".', promptRu: 'Выбери правильный перевод «We have a dog».', options: [["У нас есть собака.", "We have a dog."], ["У них есть кошка.", "They have a cat."], ["У меня есть птица.", "I have a bird."]], answer: 0, explanationEn: '"We have" means «у нас есть», and "a dog" means «собака».', explanationRu: '«We have» значит «у нас есть», а «a dog» — «собака».' },
    ],
  };
  const defaultProgress = { grade: 1, starsByGrade: {}, homeworkResults: {} };
  const colors = ["#ffd43b", "#ff5fa2", "#19c8c0", "#8cf06e", "#7b5cff", "#ff8a3d"];
  const statusMessage = document.querySelector("#status-message");
  let progress = loadProgress();
  const reviewedHomeworkGrades = new Set();

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
      const homeworkResults = {};
      for (const grade of [1, 2, 3, 4]) {
        const savedAnswers = saved.homeworkResults?.[grade]?.answers;
        if (
          Array.isArray(savedAnswers)
          && savedAnswers.length === homeworkByGrade[grade].length
          && savedAnswers.every((answer, index) => Number.isInteger(answer)
            && answer >= 0
            && answer < homeworkByGrade[grade][index].options.length)
        ) {
          homeworkResults[grade] = { answers: savedAnswers };
        }
      }
      return {
        grade: Number.isInteger(saved.grade) && saved.grade >= 1 && saved.grade <= 4 ? saved.grade : 1,
        starsByGrade,
        homeworkResults,
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
    renderHomework();
    updateProgress();
  }

  function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  }

  function createHomeworkFeedback(question, selectedAnswer) {
    const correctOption = question.options[question.answer];
    const isCorrect = selectedAnswer === question.answer;
    const feedback = document.createElement("div");
    feedback.className = `homework-answer-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
    feedback.setAttribute("role", "status");
    feedback.append(
      createTextElement(
        "p",
        "homework-answer-result",
        isCorrect
          ? `Верно! Ответ: ${correctOption[0]} / Correct! Answer: ${correctOption[1]}`
          : `Неверно. Правильный ответ: ${correctOption[0]} / Not quite. Correct answer: ${correctOption[1]}`,
      ),
      createTextElement("p", "homework-explanation-en", question.explanationEn),
      createTextElement("p", "homework-explanation-ru", question.explanationRu),
    );
    return feedback;
  }

  function renderHomework() {
    const questions = homeworkByGrade[progress.grade];
    const savedResult = progress.homeworkResults[progress.grade];
    const showSavedAnswers = Boolean(savedResult && reviewedHomeworkGrades.has(progress.grade));
    document.querySelector("#homework-level").textContent = `${progress.grade} класс / Grade ${progress.grade}`;
    const list = document.querySelector("#homework-questions");
    const submitButton = document.querySelector("#homework-submit");
    const hint = document.querySelector("#homework-hint");
    const result = document.querySelector("#homework-result");
    list.replaceChildren();
    result.replaceChildren();

    questions.forEach((question, questionIndex) => {
      const item = document.createElement("li");
      item.className = "homework-question";
      const selectedAnswer = showSavedAnswers ? savedResult.answers[questionIndex] : null;
      const prompt = createTextElement("h3", "homework-prompt", `${questionIndex + 1}. ${question.promptEn}`);
      prompt.lang = "en";
      item.append(prompt, createTextElement("p", "homework-translation", question.promptRu));

      const options = document.createElement("div");
      options.className = "homework-options";
      options.setAttribute("role", "radiogroup");
      options.setAttribute("aria-label", `${question.promptEn} / ${question.promptRu}`);
      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        label.className = "homework-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `homework-${progress.grade}-${questionIndex}`;
        input.value = String(optionIndex);
        input.checked = selectedAnswer === optionIndex;
        input.disabled = showSavedAnswers;
        const text = document.createElement("span");
        text.append(
          createTextElement("span", "homework-option-en", option[1]),
          createTextElement("span", "homework-option-ru", option[0]),
        );
        if (selectedAnswer !== null) {
          if (optionIndex === question.answer) label.classList.add("is-correct");
          if (selectedAnswer === optionIndex && selectedAnswer !== question.answer) {
            label.classList.add("is-wrong");
          }
        }
        label.append(input, text);
        options.append(label);
      });
      item.append(options);
      if (selectedAnswer !== null) item.append(createHomeworkFeedback(question, selectedAnswer));
      list.append(item);
    });

    if (savedResult) {
      const score = savedResult.answers.reduce(
        (total, answer, index) => total + Number(answer === questions[index].answer),
        0,
      );
      const grade = score >= 5 ? 5 : score >= 4 ? 4 : score >= 3 ? 3 : 2;
      const outcome = grade === 5
        ? ["Отлично!", "Excellent!"]
        : grade === 4
          ? ["Хорошая работа!", "Good work!"]
          : grade === 3
            ? ["Неплохо! Продолжай тренироваться.", "Not bad! Keep practising."]
            : ["Повтори слова и попробуй ещё раз.", "Review the words and try again."];
      const scoreLine = createTextElement("p", "homework-score", `${score} / ${questions.length}`);
      const gradeLine = createTextElement("p", "homework-grade", `Оценка: ${grade} / 5 · ${outcome[0]}  |  Grade: ${grade} / 5 · ${outcome[1]}`);
      result.append(scoreLine, gradeLine);
      hint.textContent = showSavedAnswers
        ? "Посмотри объяснения к ответам. / Review the explanations for each answer."
        : "Выбери ответы, чтобы начать новую попытку. / Select answers to start a new attempt.";
      submitButton.disabled = false;
      submitButton.innerHTML = showSavedAnswers
        ? "Попробовать ещё раз <span lang=\"en\">Try again</span>"
        : "Новая попытка <span lang=\"en\">New attempt</span>";
      submitButton.dataset.retry = "true";
    } else {
      hint.textContent = "Ответь на все вопросы. / Answer all questions to continue.";
      submitButton.disabled = true;
      submitButton.innerHTML = "Проверить ответы <span lang=\"en\">Check answers</span>";
      delete submitButton.dataset.retry;
    }
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

  document.querySelector("#homework-questions").addEventListener("change", (event) => {
    const selectedInput = event.target.closest('input[type="radio"]');
    if (selectedInput) {
      if (progress.homeworkResults[progress.grade]) {
        delete progress.homeworkResults[progress.grade];
        reviewedHomeworkGrades.delete(progress.grade);
        saveProgress();
        document.querySelector("#homework-result").replaceChildren();
      }
      const submitButton = document.querySelector("#homework-submit");
      delete submitButton.dataset.retry;
      submitButton.innerHTML = "Проверить ответы <span lang=\"en\">Check answers</span>";
      const questionIndex = Number(selectedInput.name.split("-").at(-1));
      const question = homeworkByGrade[progress.grade][questionIndex];
      const item = selectedInput.closest(".homework-question");
      item.querySelectorAll(".homework-option").forEach((option, optionIndex) => {
        option.classList.toggle("is-correct", optionIndex === question.answer);
        option.classList.toggle(
          "is-wrong",
          optionIndex === Number(selectedInput.value) && Number(selectedInput.value) !== question.answer,
        );
      });
      item.querySelector(".homework-answer-feedback")?.remove();
      item.append(createHomeworkFeedback(question, Number(selectedInput.value)));
    }
    const questionCount = homeworkByGrade[progress.grade].length;
    const answeredCount = document.querySelectorAll("#homework-questions input:checked").length;
    document.querySelector("#homework-submit").disabled = answeredCount !== questionCount;
    document.querySelector("#homework-hint").textContent = answeredCount === questionCount
      ? "Готово? Проверь ответы! / Ready? Check your answers!"
      : `Отвечено: ${answeredCount} из ${questionCount}. / Answered: ${answeredCount} of ${questionCount}.`;
  });

  document.querySelector("#homework-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = document.querySelector("#homework-submit");
    if (submitButton.dataset.retry === "true") {
      delete progress.homeworkResults[progress.grade];
      reviewedHomeworkGrades.delete(progress.grade);
      saveProgress();
      renderHomework();
      return;
    }
    const questions = homeworkByGrade[progress.grade];
    const answers = questions.map((_, index) => {
      const selected = document.querySelector(`input[name="homework-${progress.grade}-${index}"]:checked`);
      return selected ? Number(selected.value) : -1;
    });
    if (answers.some((answer) => answer < 0)) {
      document.querySelector("#homework-hint").textContent = "Ответь на все вопросы перед проверкой. / Answer every question before checking.";
      return;
    }
    progress.homeworkResults[progress.grade] = { answers };
    reviewedHomeworkGrades.add(progress.grade);
    saveProgress();
    renderHomework();
    const score = answers.reduce(
      (total, answer, index) => total + Number(answer === questions[index].answer),
      0,
    );
    statusMessage.textContent = `Домашняя работа проверена. Результат: ${score} из ${questions.length}. / Homework checked: ${score} out of ${questions.length}.`;
    if (score === questions.length) celebrate();
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
