// Array of phrases with their types, descriptions, and responses
const phrases = [
    {
        id: 1,
        text: "Ты мне не доверяешь.",
        type: "Обвинение",
        description: "Перекидывает ответственность на близкого, вызывая чувство вины.",
        responses: [
            "Я доверяю тебе как человеку, но не болезни, с которой ты борешься.",
            "Моё опасение не значит, что я тебя не люблю.",
            "Если ты чувствуешь недоверие, я готов(а) обсудить это, но без вины."
        ]
    },
    {
        id: 2,
        text: "Все пьют, и ничего.",
        type: "Рационализация",
        description: "Попытка обесценить проблему, сравнивая с другими. Уводит от сути.",
        responses: [
            "То, что делают другие, не отменяет последствий именно для тебя.",
            "Сравнение с другими не помогает справиться с твоими трудностями.",
            "Я говорю о нас и нашей ситуации — не об остальных."
        ]
    },
    {
        id: 3,
        text: "Ты сама довела меня до этого.",
        type: "Перенос вины",
        description: "Подмена ролей, обвинение близкого в собственном деструктивном поведении.",
        responses: [
            "Твои поступки — твой выбор. Даже если я ошиблась, решение было за тобой.",
            "Я не могу нести ответственность за то, что делаешь ты.",
            "Я не готова принимать на себя твою вину."
        ]
    },
    {
        id: 4,
        text: "Я не виноват, просто была тяжёлая неделя.",
        type: "Оправдание",
        description: "Объяснение с целью снять ответственность за срыв или разрушительное поведение.",
        responses: [
            "Жизнь бывает тяжёлой, но это не повод разрушать себя и других.",
            "Стресс — это не причина, а повод задуматься, что с ним делать.",
            "Я хочу, чтобы ты учился справляться — не убегать."
        ]
    },
    {
        id: 5,
        text: "Ты хочешь, чтобы я умер?",
        type: "Эмоциональный шантаж",
        description: "Манипуляция через запугивание и вину. Может быть особенно травматичной.",
        responses: [
            "Мне больно это слышать. Но шантаж — не решение.",
            "Я хочу, чтобы ты жил. Но ты сам несёшь ответственность за свою жизнь.",
            "Я не позволю страху управлять моими решениями. Давай говорить по-другому."
        ]
    },
    // Adding more phrases to reach 15 total
    {
        id: 6,
        text: "Если бы ты меня любил(а), ты бы не контролировал(а) меня.",
        type: "Обвинение",
        description: "Использует чувства близкого для манипуляции и снятия ограничений.",
        responses: [
            "Любовь и забота — это в том числе и установка здоровых границ.",
            "Я делаю это не для контроля, а потому что беспокоюсь о тебе.",
            "Настоящая любовь не требует слепого доверия в ущерб здоровью."
        ]
    },
    {
        id: 7,
        text: "Это последний раз, клянусь.",
        type: "Оправдание",
        description: "Обещание, которое часто не выполняется, но снимает напряжение в моменте.",
        responses: [
            "Я уже слышал(а) это раньше. Мне нужны действия, а не обещания.",
            "Я верю в твои намерения, но не могу верить словам без изменений.",
            "Давай сосредоточимся на реальных шагах, а не на обещаниях."
        ]
    },
    {
        id: 8,
        text: "Ты слишком много драматизируешь.",
        type: "Рационализация",
        description: "Обесценивание чувств и опасений близкого человека.",
        responses: [
            "Мои чувства реальны и важны, даже если ты их не разделяешь.",
            "Это не драматизация — это моя реакция на происходящее.",
            "Давай не обесценивать чувства друг друга, а пытаться понять."
        ]
    },
    {
        id: 9,
        text: "Без этого я не могу расслабиться/уснуть/работать.",
        type: "Рационализация",
        description: "Оправдание зависимости «необходимостью» для нормального функционирования.",
        responses: [
            "Есть здоровые способы справиться с этими трудностями.",
            "Это иллюзия, которую создаёт зависимость.",
            "Давай вместе поищем другие методы, которые не разрушают тебя."
        ]
    },
    {
        id: 10,
        text: "Если ты уйдёшь, я что-нибудь с собой сделаю.",
        type: "Эмоциональный шантаж",
        description: "Удержание близкого через страх и чувство ответственности за жизнь зависимого.",
        responses: [
            "Я не могу нести ответственность за твои решения. Если ты говоришь о самоповреждении, нам нужна профессиональная помощь.",
            "Это шантаж, и я не буду на него реагировать. Но я готов(а) помочь тебе найти поддержку.",
            "Твоя жизнь ценна, но ты сам(а) отвечаешь за свои поступки."
        ]
    },
    {
        id: 11,
        text: "Ты такой же, просто скрываешь.",
        type: "Перенос вины",
        description: "Попытка уравнять поведение и снять с себя ответственность.",
        responses: [
            "Даже если у меня есть свои проблемы, это не оправдывает твои действия.",
            "Мы говорим о твоём поведении, которое вредит нам обоим.",
            "Давай не сравнивать, а решать конкретную ситуацию."
        ]
    },
    {
        id: 12,
        text: "Я взрослый человек и сам решаю, что мне делать.",
        type: "Рационализация",
        description: "Использование идеи свободы выбора для оправдания деструктивного поведения.",
        responses: [
            "Взрослость — это не только свобода, но и ответственность за последствия.",
            "Твои решения влияют не только на тебя, но и на близких.",
            "Я уважаю твою свободу, но не могу игнорировать вред, который это причиняет."
        ]
    },
    {
        id: 13,
        text: "Тебе всё равно не понять.",
        type: "Обвинение",
        description: "Отстранение близкого, создание барьера для коммуникации.",
        responses: [
            "Я действительно могу не всё понимать, но я стараюсь и хочу слушать.",
            "Помоги мне понять, вместо того чтобы отталкивать.",
            "Даже если я не пойму полностью, я могу поддержать тебя."
        ]
    },
    {
        id: 14,
        text: "Ты меня провоцируешь специально.",
        type: "Перенос вины",
        description: "Перекладывание ответственности за свои реакции на близкого.",
        responses: [
            "Я не контролирую твои реакции — только ты решаешь, как реагировать.",
            "Это не провокация, а попытка обсудить важную для нас проблему.",
            "Давай говорить о фактах, а не о предполагаемых намерениях."
        ]
    },
    {
        id: 15,
        text: "Я могу бросить в любой момент, просто не хочу.",
        type: "Оправдание",
        description: "Отрицание зависимости и иллюзия контроля над ситуацией.",
        responses: [
            "Если это так, давай проверим — попробуй остановиться на время.",
            "Настоящий контроль — это способность изменить поведение, когда оно вредит.",
            "Возможно, ты действительно так думаешь, но зависимость часто создаёт такую иллюзию."
        ]
    },
    // Новые фразы
    {
        id: 16,
        text: "Если бы ты меня любил(а), ты бы не контролировал(а) меня.",
        type: "Эмоциональное давление",
        description: "Манипуляция через подмену понятий: контроль представлен как отсутствие любви.",
        responses: [
            "Я люблю тебя, но любовь не означает потакание разрушению.",
            "Границы — это не контроль, а забота и ответственность.",
            "Ты имеешь право на выбор, но и я имею право на свои границы."
        ]
    },
    {
        id: 17,
        text: "Ты больше заботишься о себе, чем обо мне.",
        type: "Обвинение",
        description: "Попытка вызвать вину за здоровую самозащиту и самоценность.",
        responses: [
            "Я не могу заботиться о других, если разрушаюсь сам(а).",
            "Моя забота о себе — это не отказ от тебя, а способ выжить.",
            "Я выбираю быть устойчивым(ой), чтобы помогать из ресурса."
        ]
    },
    {
        id: 18,
        text: "Мне просто нужно расслабиться.",
        type: "Рационализация",
        description: "Уменьшение значимости деструктивного поведения под видом «права на отдых».",
        responses: [
            "Ты имеешь право на отдых, но не на саморазрушение.",
            "Есть способы расслабиться, которые не ведут к срывам.",
            "Я не могу поддерживать путь, который тебя разрушает."
        ]
    },
    {
        id: 19,
        text: "Я не просил(а) тебя помогать.",
        type: "Отвержение границ",
        description: "Обесценивание помощи, чтобы освободиться от её «цены» — ответственности.",
        responses: [
            "Помощь — это мой выбор, но не твоя лазейка от последствий.",
            "Если ты не хочешь поддержки, я могу её остановить.",
            "Я помогал(а) не для признания, а из любви. Но теперь я выбираю иначе."
        ]
    },
    {
        id: 20,
        text: "У всех бывают трудности, не делай из мухи слона.",
        type: "Обесценивание",
        description: "Попытка свести проблему к «норме», чтобы избежать ответственности.",
        responses: [
            "Да, трудности — часть жизни. Но это не отменяет масштаба твоих последствий.",
            "Мы говорим не о муке, а о разрушении, которое это вызывает.",
            "Я не согласен(на) делать вид, что всё нормально."
        ]
    },
    {
        id: 21,
        text: "Ты сам(а) пьёшь/куришь/ругаешься — а мне запрещаешь.",
        type: "Контратака",
        description: "Перенос фокуса, чтобы избежать признания своих действий.",
        responses: [
            "Моя ошибка не отменяет твоей ответственности.",
            "Я тоже учусь. Но сейчас мы говорим о тебе.",
            "Обесценивание не поможет ни тебе, ни мне."
        ]
    },
    {
        id: 22,
        text: "Я не знаю, зачем вообще жить.",
        type: "Эмоциональный шантаж",
        description: "Манипуляция угрозой саморазрушения для получения контроля или жалости.",
        responses: [
            "Я слышу твою боль, но не готов(а) брать на себя такую ответственность.",
            "Ты не один(одна), но помощь начинается с тебя.",
            "Я рядом, если ты готов(а) искать смысл — а не давить на меня."
        ]
    },
    {
        id: 23,
        text: "Ты хочешь, чтобы я спился окончательно?",
        type: "Подмена вины",
        description: "Делает близкого виноватым в потенциальной катастрофе, если тот не соглашается потакать.",
        responses: [
            "Я не управляю твоим выбором. Это твоя жизнь — и твоя ответственность.",
            "Я хочу, чтобы ты жил. Но не буду спасать тебя любой ценой.",
            "Моя граница — не провокация, а защита и уважение."
        ]
    },
    {
        id: 24,
        text: "Ты никогда меня не поддерживаешь.",
        type: "Обесценивание + обвинение",
        description: "Игнорирует прошлую поддержку, чтобы вызвать вину и склонить к уступке.",
        responses: [
            "Я был(а) рядом, когда ты выбирал жить — но не тогда, когда ты разрушаешь.",
            "Я готов(а) поддерживать путь выздоровления. Но не путь разрушения.",
            "Поддержка — это не потакание. И я выбираю осознанность."
        ]
    },
    {
        id: 25,
        text: "Хочешь, я прямо сейчас уйду?",
        type: "Шантаж уходом",
        description: "Угроза оставить/разрушить отношения, если не получить нужную реакцию.",
        responses: [
            "Это твой выбор. Я не держу, но и не шантажирую.",
            "Я не готов(а) жить в режиме угроз. Это не диалог.",
            "Если тебе важно остаться — давай говорить спокойно."
        ]
    }
];
