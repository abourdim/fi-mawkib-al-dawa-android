/* في موكب الدعوة — IN THE PROCESSION OF DAWAH — app.js v1.0 */
/* Based on "Fi Mawkib al-Dawa" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'في موكب الدعوة',
    splashSub: 'مقالات في العدالة والإصلاح الإسلامي',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة فصلت ٤١: ٣٣',
    tabHome: 'الرئيسية', tabLessons: 'الدروس', tabTimeline: 'المسار', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    lessonsTitle: 'دروس الدعوة',
    lessonsDesc: '٢٠ درساً في الدعوة والإصلاح من كتاب في موكب الدعوة',
    timelineTitle: 'مسار الدعوة عبر التاريخ',
    timelineDesc: 'محطات بارزة في تاريخ الدعوة الإسلامية',
    quizTitle: 'من يريد أن يكون داعية؟',
    quizDesc: 'اختبر معرفتك بأساليب الدعوة ومبادئها',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الداعية',
    dailyLabel: '✨ درس اليوم',
    searchPlaceholder: 'ابحث في الدروس...',
    share: 'مشاركة',
    verse: 'الآية',
    theme: 'الموضوع',
    method: 'المنهج',
    reflection: 'تأمل',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع المهام!',
    // Quiz
    quizStart: 'ابدأ الاختبار',
    quizNext: 'السؤال التالي',
    quizResult: 'النتيجة',
    quizAgain: 'أعد الاختبار',
    quizCorrect: 'إجابة صحيحة!',
    quizWrong: 'إجابة خاطئة',
    quizScore: 'النقاط',
    quizLifeline5050: '50/50',
    quizLifelineHint: 'استخارة',
    quizLifelineSheikh: 'اسأل الشيخ',
    // XP & Badges
    xpLabel: 'نقاط الخبرة',
    badgesTitle: 'الأوسمة',
    levelBeginner: 'مبتدئ',
    levelReader: 'قارئ',
    levelScholar: 'عالم',
    levelPersistent: 'مثابر',
    levelExpert: 'خبير',
    // Age mode
    youngMode: 'مستكشف صغير 🌱',
    teenMode: 'باحث شاب 📚',
    splashFeatures: [
      '٢٠ درساً في الدعوة والإصلاح',
      'مسار تاريخي للدعوة الإسلامية',
      'اختبار "من يريد أن يكون داعية"',
      'نظام نقاط وأوسمة'
    ],
  },
  en: {
    appTitle: 'In the Procession of Dawah',
    splashSub: 'Essays on justice and Islamic reform',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Fussilat 41:33',
    tabHome: 'Home', tabLessons: 'Lessons', tabTimeline: 'Timeline', tabQuiz: 'Quiz', tabAbout: 'Book',
    lessonsTitle: 'Dawah Lessons',
    lessonsDesc: '20 lessons in dawah and reform from the book In the Procession of Dawah',
    timelineTitle: 'Dawah Through the Ages',
    timelineDesc: 'Key milestones in the history of Islamic preaching',
    quizTitle: 'Who Wants to Be a Preacher?',
    quizDesc: 'Test your knowledge of dawah methods and principles',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Preacher\'s Duas',
    dailyLabel: '✨ Today\'s Lesson',
    searchPlaceholder: 'Search lessons...',
    share: 'Share',
    verse: 'Verse',
    theme: 'Theme',
    method: 'Method',
    reflection: 'Reflection',
    streakMsg: 'day streak!',
    allDone: 'Well done! All tasks completed!',
    quizStart: 'Start Quiz',
    quizNext: 'Next Question',
    quizResult: 'Result',
    quizAgain: 'Retake Quiz',
    quizCorrect: 'Correct!',
    quizWrong: 'Wrong answer',
    quizScore: 'Score',
    quizLifeline5050: '50/50',
    quizLifelineHint: 'Guidance',
    quizLifelineSheikh: 'Ask the Sheikh',
    xpLabel: 'Experience Points',
    badgesTitle: 'Badges',
    levelBeginner: 'Beginner',
    levelReader: 'Reader',
    levelScholar: 'Scholar',
    levelPersistent: 'Persistent',
    levelExpert: 'Expert',
    youngMode: 'Young Explorer 🌱',
    teenMode: 'Teen Scholar 📚',
    splashFeatures: [
      '20 lessons in dawah and reform',
      'Historical timeline of Islamic preaching',
      '"Who Wants to Be a Preacher?" quiz',
      'XP points and badges system'
    ],
  },
  fr: {
    appTitle: 'Dans le Cortege de la Predication',
    splashSub: 'Essais sur la justice et la reforme islamique',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Fussilat 41:33',
    tabHome: 'Accueil', tabLessons: 'Lecons', tabTimeline: 'Parcours', tabQuiz: 'Quiz', tabAbout: 'Livre',
    lessonsTitle: 'Lecons de Predication',
    lessonsDesc: '20 lecons de predication et de reforme tirees du livre Dans le Cortege de la Predication',
    timelineTitle: 'La Predication a Travers les Ages',
    timelineDesc: 'Etapes cles de l\'histoire de la predication islamique',
    quizTitle: 'Qui Veut Etre Predicateur ?',
    quizDesc: 'Testez vos connaissances sur les methodes et principes de la predication',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Predicateur',
    dailyLabel: '✨ Lecon du Jour',
    searchPlaceholder: 'Rechercher les lecons...',
    share: 'Partager',
    verse: 'Verset',
    theme: 'Theme',
    method: 'Methode',
    reflection: 'Reflexion',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les taches accomplies !',
    quizStart: 'Commencer le Quiz',
    quizNext: 'Question Suivante',
    quizResult: 'Resultat',
    quizAgain: 'Refaire le Quiz',
    quizCorrect: 'Correct !',
    quizWrong: 'Mauvaise reponse',
    quizScore: 'Score',
    quizLifeline5050: '50/50',
    quizLifelineHint: 'Guidance',
    quizLifelineSheikh: 'Demander au Cheikh',
    xpLabel: 'Points d\'Experience',
    badgesTitle: 'Badges',
    levelBeginner: 'Debutant',
    levelReader: 'Lecteur',
    levelScholar: 'Savant',
    levelPersistent: 'Perseverant',
    levelExpert: 'Expert',
    youngMode: 'Jeune Explorateur 🌱',
    teenMode: 'Jeune Savant 📚',
    splashFeatures: [
      '20 lecons de predication et de reforme',
      'Chronologie historique de la predication islamique',
      'Quiz « Qui Veut Etre Predicateur ? »',
      'Systeme de points XP et badges'
    ],
  }
};

// ═══════════════ 20 DAWAH LESSONS ═══════════════
const LESSONS = [
  {
    id:1, emoji:'📢',
    ar:{title:'موكب الدعوة عبر الأجيال',desc:'يرى الغزالي: مجموعة مقالات من أوائل الخمسينات — يغطي حرب فلسطين، فدائيي القناة، خلع فاروق، واغتيال الإمام حسن البنا. يرى الغزالي الدعوة موكباً مستمراً عبر التاريخ — كل جيل يرفع الراية. الدعوة واجب كل مسلم، لا وظيفة رجال الدين.',verse:'وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا',verseRef:'فصلت ٤١: ٣٣',reflection:'هل دعوت أحداً إلى الخير هذا الأسبوع؟'},
    en:{title:'Dawah Before All Else',desc:'Al-Ghazali sees: Calling people to God is not the job of clergy alone — it is the duty of every Muslim. Whoever is silent about truth is a mute devil.',verse:'And who is better in speech than one who invites to Allah and does righteousness',verseRef:'Fussilat 41:33',reflection:'Have you invited someone to goodness this week?'},
    fr:{title:'La Predication Avant Tout',desc:'Al-Ghazali voit: Appeler les gens vers Dieu n\'est pas le travail des seuls religieux — c\'est le devoir de chaque musulman. Celui qui se tait face a la verite est un diable muet.',verse:'Qui profere plus belle parole que celui qui appelle a Dieu et fait le bien',verseRef:'Fussilat 41:33',reflection:'Avez-vous invite quelqu\'un au bien cette semaine ?'}
  },
  {
    id:2, emoji:'⚖️',
    ar:{title:'العدالة الاجتماعية في الإسلام',desc:'يرى الغزالي: الإسلام لا يقبل أن يشبع أحد وجاره جائع. العدالة ليست شعاراً بل نظام حياة فرضه الله على المسلمين.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ١٦: ٩٠',reflection:'كيف يمكنك المساهمة في العدالة من حولك؟'},
    en:{title:'Social Justice in Islam',desc:'Al-Ghazali sees: Islam does not accept that one person is full while their neighbor is hungry. Justice is not a slogan but a way of life ordained by God for Muslims.',verse:'Indeed, Allah orders justice and good conduct',verseRef:'An-Nahl 16:90',reflection:'How can you contribute to justice around you?'},
    fr:{title:'La Justice Sociale en Islam',desc:'Al-Ghazali voit: L\'Islam n\'accepte pas qu\'une personne soit rassasiee tandis que son voisin a faim. La justice n\'est pas un slogan mais un mode de vie ordonne par Dieu.',verse:'Certes, Dieu commande la justice et la bienfaisance',verseRef:'An-Nahl 16:90',reflection:'Comment pouvez-vous contribuer a la justice autour de vous ?'}
  },
  {
    id:3, emoji:'🗣️',
    ar:{title:'قول الحق أمام السلطان الجائر',desc:'يرى الغزالي: أفضل الجهاد كلمة حق عند سلطان جائر. الداعية الحقيقي لا يخاف إلا الله ولا يبيع دينه بدنياه.',verse:'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ',verseRef:'البقرة ٢: ٤٢',reflection:'هل تجرأت على قول الحق في موقف صعب؟'},
    en:{title:'Speaking Truth to Power',desc:'Al-Ghazali sees: The greatest struggle is a word of truth before an unjust ruler. The true preacher fears only God and does not sell their religion for worldly gain.',verse:'And do not mix the truth with falsehood or conceal the truth while you know it',verseRef:'Al-Baqarah 2:42',reflection:'Have you dared to speak truth in a difficult situation?'},
    fr:{title:'Dire la Verite Face au Pouvoir',desc:'Al-Ghazali voit: Le plus grand combat est une parole de verite devant un dirigeant injuste. Le vrai predicateur ne craint que Dieu et ne vend pas sa religion.',verse:'Ne melez pas le vrai avec le faux et ne cachez pas la verite alors que vous la savez',verseRef:'Al-Baqarah 2:42',reflection:'Avez-vous ose dire la verite dans une situation difficile ?'}
  },
  {
    id:4, emoji:'🕊️',
    ar:{title:'حقوق المرأة في الإسلام',desc:'يرى الغزالي: الإسلام رفع مكانة المرأة قبل أي حضارة. من يضطهد المرأة باسم الدين فهو يفتري على الله كذباً.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢: ٢٢٨',reflection:'هل تعامل نساء حياتك بالعدل والإحسان؟'},
    en:{title:'Women\'s Rights in Islam',desc:'Al-Ghazali sees: Islam elevated women\'s status before any civilization. Whoever oppresses women in the name of religion fabricates lies against God.',verse:'And women have rights similar to what is expected of them, according to what is reasonable',verseRef:'Al-Baqarah 2:228',reflection:'Do you treat the women in your life with justice and kindness?'},
    fr:{title:'Les Droits des Femmes en Islam',desc:'Al-Ghazali voit: L\'Islam a eleve le statut des femmes avant toute civilisation. Quiconque opprime les femmes au nom de la religion forge des mensonges contre Dieu.',verse:'Elles ont des droits equivalents a leurs obligations, conformement a la bienscance',verseRef:'Al-Baqarah 2:228',reflection:'Traitez-vous les femmes de votre vie avec justice et bienveillance ?'}
  },
  {
    id:5, emoji:'🏛️',
    ar:{title:'محاربة الاستبداد',desc:'يرى الغزالي: الاستبداد عدو الدعوة الأول. لا دعوة حقيقية في ظل حاكم يكمّم الأفواه ويسجن الأحرار.',verse:'وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ',verseRef:'هود ١١: ١١٣',reflection:'كيف تقاوم الظلم في محيطك بالحكمة؟'},
    en:{title:'Fighting Despotism',desc:'Al-Ghazali sees: Despotism is the greatest enemy of dawah. There is no true preaching under a ruler who silences mouths and imprisons the free.',verse:'And do not incline toward those who do wrong, lest the Fire should touch you',verseRef:'Hud 11:113',reflection:'How do you resist injustice in your surroundings with wisdom?'},
    fr:{title:'Combattre le Despotisme',desc:'Al-Ghazali voit: Le despotisme est le plus grand ennemi de la predication. Il n\'y a pas de vraie predication sous un dirigeant qui musele les bouches et emprisonne les libres.',verse:'Ne vous inclinez pas vers les injustes, sinon le Feu vous touchera',verseRef:'Hud 11:113',reflection:'Comment resistez-vous a l\'injustice autour de vous avec sagesse ?'}
  },
  {
    id:6, emoji:'🎭',
    ar:{title:'فضح النفاق الديني',desc:'يرى الغزالي: أخطر أعداء الإسلام ليسوا في الخارج بل في الداخل: العلماء الذين يبررون الظلم ويسكتون عن الحق.',verse:'أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ وَتَنسَوْنَ أَنفُسَكُمْ',verseRef:'البقرة ٢: ٤٤',reflection:'هل أفعالك تطابق أقوالك؟'},
    en:{title:'Exposing Religious Hypocrisy',desc:'Al-Ghazali sees: The most dangerous enemies of Islam are not outside but within: scholars who justify oppression and stay silent about truth.',verse:'Do you order righteousness of the people and forget yourselves?',verseRef:'Al-Baqarah 2:44',reflection:'Do your actions match your words?'},
    fr:{title:'Denoncer l\'Hypocrisie Religieuse',desc:'Al-Ghazali voit: Les ennemis les plus dangereux de l\'Islam ne sont pas a l\'exterieur mais a l\'interieur : les savants qui justifient l\'oppression et se taisent face a la verite.',verse:'Commandez-vous aux gens la bonte tout en vous oubliant vous-memes ?',verseRef:'Al-Baqarah 2:44',reflection:'Vos actes correspondent-ils a vos paroles ?'}
  },
  {
    id:7, emoji:'🇵🇸',
    ar:{title:'قضية فلسطين',desc:'فلسطين ليست قضية شعب واحد بل قضية الأمة كلها. التخاذل عنها خيانة للدين قبل أن يكون خيانة للوطن.',verse:'وَمَا لَكُمْ لَا تُقَاتِلُونَ فِي سَبِيلِ اللَّهِ وَالْمُسْتَضْعَفِينَ',verseRef:'النساء ٤: ٧٥',reflection:'ماذا قدمت لأخوتك المستضعفين هذا الشهر؟'},
    en:{title:'The Palestine Cause',desc:'Palestine is not the cause of one people alone but of the entire Ummah. Abandoning it is a betrayal of religion before it is a betrayal of nation.',verse:'And what is wrong with you that you fight not in the cause of Allah and the oppressed?',verseRef:'An-Nisa 4:75',reflection:'What have you done for your oppressed brothers and sisters this month?'},
    fr:{title:'La Cause Palestinienne',desc:'La Palestine n\'est pas la cause d\'un seul peuple mais de toute la Oumma. L\'abandonner est une trahison de la religion avant d\'etre une trahison de la nation.',verse:'Qu\'avez-vous a ne pas combattre dans le sentier de Dieu et pour les opprimes ?',verseRef:'An-Nisa 4:75',reflection:'Qu\'avez-vous fait pour vos freres et soeurs opprimes ce mois-ci ?'}
  },
  {
    id:8, emoji:'📖',
    ar:{title:'فهم القرآن بالعقل والقلب',desc:'القرآن ليس للتلاوة فقط بل للتدبر والعمل. من قرأ القرآن دون فهم فقد جعله زينة لا دليلاً.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',verseRef:'محمد ٤٧: ٢٤',reflection:'متى آخر مرة تدبرت آية وطبقتها في حياتك؟'},
    en:{title:'Understanding the Quran with Mind and Heart',desc:'The Quran is not just for recitation but for reflection and action. Whoever reads without understanding has made it decoration, not guidance.',verse:'Then do they not reflect upon the Quran, or are there locks upon their hearts?',verseRef:'Muhammad 47:24',reflection:'When was the last time you reflected on a verse and applied it?'},
    fr:{title:'Comprendre le Coran avec l\'Esprit et le Coeur',desc:'Le Coran n\'est pas seulement pour la recitation mais pour la reflexion et l\'action. Celui qui lit sans comprendre en fait un ornement, pas un guide.',verse:'Ne meditent-ils donc pas sur le Coran, ou y a-t-il des cadenas sur leurs coeurs ?',verseRef:'Muhammad 47:24',reflection:'Quand avez-vous pour la derniere fois medite un verset et l\'avez applique ?'}
  },
  {
    id:9, emoji:'🔥',
    ar:{title:'الحماس المنضبط',desc:'الداعية الناجح يجمع بين الحماس والحكمة. الحماس بلا علم تهور، والعلم بلا حماس جمود.',verse:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٦: ١٢٥',reflection:'هل توازن بين الحماس والحكمة في دعوتك؟'},
    en:{title:'Disciplined Enthusiasm',desc:'The successful preacher combines enthusiasm with wisdom. Enthusiasm without knowledge is recklessness, and knowledge without enthusiasm is rigidity.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 16:125',reflection:'Do you balance enthusiasm and wisdom in your calling?'},
    fr:{title:'L\'Enthousiasme Discipline',desc:'Le predicateur qui reussit combine enthousiasme et sagesse. L\'enthousiasme sans savoir est temerite, et le savoir sans enthousiasme est rigidite.',verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 16:125',reflection:'Equilibrez-vous enthousiasme et sagesse dans votre predication ?'}
  },
  {
    id:10, emoji:'🌍',
    ar:{title:'الإسلام والحضارة',desc:'الإسلام بنى حضارة عظيمة عندما فُهم بشكل صحيح. التخلف ليس من الدين بل من سوء فهم الدين.',verse:'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',verseRef:'آل عمران ٣: ١١٠',reflection:'كيف تساهم في بناء حضارة إسلامية معاصرة؟'},
    en:{title:'Islam and Civilization',desc:'Islam built a great civilization when it was properly understood. Backwardness does not come from religion but from misunderstanding religion.',verse:'You are the best nation produced for mankind',verseRef:'Aal Imran 3:110',reflection:'How do you contribute to building a contemporary Islamic civilization?'},
    fr:{title:'Islam et Civilisation',desc:'L\'Islam a bati une grande civilisation quand il a ete correctement compris. Le retard ne vient pas de la religion mais de la mauvaise comprehension de la religion.',verse:'Vous etes la meilleure communaute suscitee pour les gens',verseRef:'Aal Imran 3:110',reflection:'Comment contribuez-vous a batir une civilisation islamique contemporaine ?'}
  },
  {
    id:11, emoji:'🧹',
    ar:{title:'تطهير الدعوة من الخرافات',desc:'كثير مما يُنسب للدين هو خرافات وبدع. الداعية الحقيقي ينقّي الإسلام مما علق به من شوائب الجهل.',verse:'وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا',verseRef:'الحشر ٥٩: ٧',reflection:'هل تتحقق من صحة المعلومات الدينية قبل نشرها؟'},
    en:{title:'Purifying Dawah from Superstitions',desc:'Much of what is attributed to religion is superstition and innovation. The true preacher purifies Islam from the impurities of ignorance.',verse:'Whatever the Messenger has given you, take it; and what he has forbidden you, refrain from it',verseRef:'Al-Hashr 59:7',reflection:'Do you verify religious information before sharing it?'},
    fr:{title:'Purifier la Predication des Superstitions',desc:'Beaucoup de ce qui est attribue a la religion est superstition et innovation. Le vrai predicateur purifie l\'Islam des impuretes de l\'ignorance.',verse:'Ce que le Messager vous donne, prenez-le ; ce qu\'il vous interdit, abstenez-vous-en',verseRef:'Al-Hashr 59:7',reflection:'Verifiez-vous les informations religieuses avant de les partager ?'}
  },
  {
    id:12, emoji:'💰',
    ar:{title:'محاربة الفساد المالي',desc:'الفساد يأكل المجتمعات كما تأكل النار الحطب. لا دعوة مع فقر مهين وثراء فاحش.',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'الحشر ٥٩: ٧',reflection:'هل تساهم في محاربة الفساد في محيطك؟'},
    en:{title:'Fighting Financial Corruption',desc:'Corruption devours societies like fire devours wood. There is no dawah alongside humiliating poverty and obscene wealth.',verse:'So that wealth does not circulate only among the wealthy among you',verseRef:'Al-Hashr 59:7',reflection:'Do you contribute to fighting corruption in your environment?'},
    fr:{title:'Combattre la Corruption Financiere',desc:'La corruption devore les societes comme le feu devore le bois. Il n\'y a pas de predication avec une pauvrete humiliante et une richesse obscene.',verse:'Afin que la richesse ne circule pas seulement entre les riches parmi vous',verseRef:'Al-Hashr 59:7',reflection:'Contribuez-vous a combattre la corruption dans votre environnement ?'}
  },
  {
    id:13, emoji:'📚',
    ar:{title:'العلم سلاح الداعية',desc:'الداعية الجاهل يضر أكثر مما ينفع. اطلب العلم أولاً ثم ادعُ الناس على بصيرة.',verse:'قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ عَلَىٰ بَصِيرَةٍ',verseRef:'يوسف ١٢: ١٠٨',reflection:'ماذا تعلمت من العلم الشرعي هذا الشهر؟'},
    en:{title:'Knowledge Is the Preacher\'s Weapon',desc:'The ignorant preacher does more harm than good. Seek knowledge first, then call people with insight.',verse:'Say: This is my way; I invite to Allah with insight',verseRef:'Yusuf 12:108',reflection:'What Islamic knowledge have you learned this month?'},
    fr:{title:'Le Savoir Est l\'Arme du Predicateur',desc:'Le predicateur ignorant fait plus de mal que de bien. Cherchez le savoir d\'abord, puis appelez les gens avec clairvoyance.',verse:'Dis : Voici ma voie ; j\'appelle a Dieu avec clairvoyance',verseRef:'Yusuf 12:108',reflection:'Quel savoir islamique avez-vous appris ce mois-ci ?'}
  },
  {
    id:14, emoji:'🤝',
    ar:{title:'وحدة الأمة',desc:'التفرق هو سبب ضعف المسلمين. الغزالي يدعو إلى وحدة تقوم على الأساسيات لا على الخلافات الفرعية.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ٣: ١٠٣',reflection:'هل تبني جسوراً مع من يختلف معك في الفروع؟'},
    en:{title:'Unity of the Ummah',desc:'Division is the cause of Muslim weakness. Al-Ghazali calls for unity based on fundamentals, not on secondary disagreements.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Aal Imran 3:103',reflection:'Do you build bridges with those who differ from you on secondary matters?'},
    fr:{title:'L\'Unite de la Oumma',desc:'La division est la cause de la faiblesse des musulmans. Al-Ghazali appelle a une unite basee sur les fondamentaux, pas sur les divergences secondaires.',verse:'Cramponnez-vous tous ensemble au cable de Dieu et ne soyez pas divises',verseRef:'Aal Imran 3:103',reflection:'Construisez-vous des ponts avec ceux qui different de vous sur les points secondaires ?'}
  },
  {
    id:15, emoji:'🌙',
    ar:{title:'الإيمان والعمل',desc:'الإيمان ليس كلاماً يُقال بل عمل يُرى. المسلم الحقيقي يُعرف بأخلاقه لا بمظهره.',verse:'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا',verseRef:'الكهف ١٨: ١٠٧',reflection:'هل إيمانك ينعكس في تعاملك اليومي مع الناس؟'},
    en:{title:'Faith and Action',desc:'Faith is not words spoken but actions seen. A true Muslim is known by their character, not their appearance.',verse:'Indeed, those who believed and did righteous deeds — for them are the Gardens of Paradise as lodging',verseRef:'Al-Kahf 18:107',reflection:'Does your faith reflect in your daily dealings with people?'},
    fr:{title:'La Foi et l\'Action',desc:'La foi n\'est pas des paroles prononcees mais des actes vus. Un vrai musulman est connu par son caractere, pas par son apparence.',verse:'Ceux qui ont cru et fait de bonnes oeuvres auront pour residence les Jardins du Paradis',verseRef:'Al-Kahf 18:107',reflection:'Votre foi se reflete-t-elle dans vos relations quotidiennes ?'}
  },
  {
    id:16, emoji:'🔄',
    ar:{title:'التجديد لا التبديد',desc:'الإسلام يدعو إلى التجديد المبني على الأصول لا التبديد الذي يهدم الثوابت. التجديد حاجة والجمود خطر.',verse:'إِنَّ اللَّهَ يَبْعَثُ لِهَٰذِهِ الْأُمَّةِ عَلَىٰ رَأْسِ كُلِّ مِائَةِ سَنَةٍ مَن يُجَدِّدُ لَهَا دِينَهَا',verseRef:'حديث رواه أبو داود',reflection:'كيف تجدد فهمك للإسلام دون أن تفقد الثوابت؟'},
    en:{title:'Renewal Not Destruction',desc:'Islam calls for renewal rooted in principles, not destruction that demolishes constants. Renewal is a need and rigidity is a danger.',verse:'Allah will send for this Ummah at the head of every century someone who will renew its religion',verseRef:'Hadith — Abu Dawud',reflection:'How do you renew your understanding of Islam without losing the constants?'},
    fr:{title:'Renouveau et Non Destruction',desc:'L\'Islam appelle au renouveau enracine dans les principes, pas a la destruction qui demolit les constantes. Le renouveau est un besoin et la rigidite est un danger.',verse:'Dieu enverra a cette Oumma a la tete de chaque siecle quelqu\'un qui renouvellera sa religion',verseRef:'Hadith — Abou Dawoud',reflection:'Comment renouvelez-vous votre comprehension de l\'Islam sans perdre les constantes ?'}
  },
  {
    id:17, emoji:'🧒',
    ar:{title:'الشباب عماد الدعوة',desc:'الشباب هم وقود التغيير. من أهمل تربية الشباب فقد خسر المستقبل قبل أن يأتي.',verse:'نَحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِالْحَقِّ ۚ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ',verseRef:'الكهف ١٨: ١٣',reflection:'كيف تدعم شاباً أو شابة في طريق الخير؟'},
    en:{title:'Youth Are the Pillar of Dawah',desc:'Youth are the fuel of change. Whoever neglects educating youth has lost the future before it arrives.',verse:'We relate to you their story in truth. Indeed, they were youths who believed in their Lord',verseRef:'Al-Kahf 18:13',reflection:'How do you support a young person on the path of goodness?'},
    fr:{title:'La Jeunesse, Pilier de la Predication',desc:'La jeunesse est le carburant du changement. Celui qui neglige l\'education des jeunes a perdu l\'avenir avant qu\'il n\'arrive.',verse:'Nous te racontons leur histoire en toute verite. Ce sont des jeunes qui ont cru en leur Seigneur',verseRef:'Al-Kahf 18:13',reflection:'Comment soutenez-vous un jeune sur le chemin du bien ?'}
  },
  {
    id:18, emoji:'🛡️',
    ar:{title:'مواجهة التيارات المنحرفة',desc:'الغزالي واجه التشدد والانحلال معاً. الإسلام وسط بين الغلو والتفريط.',verse:'وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ٢: ١٤٣',reflection:'هل تتبع منهج الوسطية في فهمك للدين؟'},
    en:{title:'Confronting Deviant Trends',desc:'Al-Ghazali confronted both extremism and moral decay. Islam is a middle path between excess and negligence.',verse:'And thus We have made you a just community',verseRef:'Al-Baqarah 2:143',reflection:'Do you follow the path of moderation in your understanding of religion?'},
    fr:{title:'Affronter les Courants Deviants',desc:'Al-Ghazali a confronte a la fois l\'extremisme et la decadence morale. L\'Islam est un chemin du milieu entre exces et negligence.',verse:'Et ainsi Nous avons fait de vous une communaute du juste milieu',verseRef:'Al-Baqarah 2:143',reflection:'Suivez-vous le chemin de la moderation dans votre comprehension de la religion ?'}
  },
  {
    id:19, emoji:'✍️',
    ar:{title:'الكلمة مسؤولية',desc:'الكلمة سلاح ذو حدين. الداعية مسؤول عن كل كلمة يقولها — إن أصلحت فله الأجر وإن أفسدت فعليه الوزر.',verse:'مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ',verseRef:'ق ٥٠: ١٨',reflection:'هل تزن كلماتك قبل أن تنطقها؟'},
    en:{title:'Words Are a Responsibility',desc:'Words are a double-edged sword. The preacher is responsible for every word — if it reforms, they earn reward; if it corrupts, they bear the burden.',verse:'Man does not utter any word except that with him is an observer prepared',verseRef:'Qaf 50:18',reflection:'Do you weigh your words before speaking them?'},
    fr:{title:'Les Mots Sont une Responsabilite',desc:'Les mots sont une epee a double tranchant. Le predicateur est responsable de chaque mot — s\'il reforme, il gagne une recompense ; s\'il corrompt, il porte le fardeau.',verse:'L\'homme ne prononce aucune parole sans avoir aupres de lui un observateur pret',verseRef:'Qaf 50:18',reflection:'Pesez-vous vos mots avant de les prononcer ?'}
  },
  {
    id:20, emoji:'🌅',
    ar:{title:'الأمل في مستقبل الأمة',desc:'رغم كل التحديات، الغزالي متفائل بمستقبل الأمة. النصر آتٍ لمن صبر وعمل وأخلص.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ',verseRef:'آل عمران ٣: ١٣٩',reflection:'ما الذي يمنحك الأمل في مستقبل أفضل؟'},
    en:{title:'Hope for the Ummah\'s Future',desc:'Despite all challenges, al-Ghazali is optimistic about the Ummah\'s future. Victory comes to those who are patient, work hard, and are sincere.',verse:'So do not weaken and do not grieve, for you will be superior if you are believers',verseRef:'Aal Imran 3:139',reflection:'What gives you hope for a better future?'},
    fr:{title:'L\'Espoir pour l\'Avenir de la Oumma',desc:'Malgre tous les defis, al-Ghazali est optimiste pour l\'avenir de la Oumma. La victoire vient a ceux qui patientent, travaillent et sont sinceres.',verse:'Ne faiblissez pas et ne vous attristez pas alors que vous etes les superieurs si vous etes croyants',verseRef:'Aal Imran 3:139',reflection:'Qu\'est-ce qui vous donne espoir pour un avenir meilleur ?'}
  }
];

// ═══════════════ TIMELINE DATA ═══════════════
const TIMELINE = [
  {year:'610',emoji:'🕋',ar:{title:'بداية الوحي',desc:'نزول الوحي على النبي محمد في غار حراء — بداية أعظم دعوة في التاريخ'},en:{title:'Revelation Begins',desc:'Revelation descends upon Prophet Muhammad in the cave of Hira — the start of the greatest dawah in history'},fr:{title:'Debut de la Revelation',desc:'La revelation descend sur le Prophete Muhammad dans la grotte de Hira — le debut de la plus grande predication de l\'histoire'}},
  {year:'613',emoji:'📢',ar:{title:'الدعوة الجهرية',desc:'النبي يعلن دعوته للناس بعد ثلاث سنوات من الدعوة السرية'},en:{title:'Public Dawah',desc:'The Prophet publicly declares his message after three years of secret preaching'},fr:{title:'Predication Publique',desc:'Le Prophete declare publiquement son message apres trois ans de predication secrete'}},
  {year:'622',emoji:'🐪',ar:{title:'الهجرة إلى المدينة',desc:'هجرة النبي إلى المدينة — تأسيس أول مجتمع إسلامي قائم على العدالة'},en:{title:'Migration to Madinah',desc:'The Prophet migrates to Madinah — establishing the first Islamic society built on justice'},fr:{title:'Emigration a Medine',desc:'Le Prophete emigre a Medine — fondation de la premiere societe islamique basee sur la justice'}},
  {year:'632',emoji:'🌟',ar:{title:'خطبة الوداع',desc:'النبي يودّع أمته بخطبة جامعة تلخص مبادئ الإسلام الكبرى'},en:{title:'Farewell Sermon',desc:'The Prophet bids farewell with a comprehensive sermon summarizing Islam\'s great principles'},fr:{title:'Sermon d\'Adieu',desc:'Le Prophete fait ses adieux avec un sermon complet resumant les grands principes de l\'Islam'}},
  {year:'711',emoji:'🏰',ar:{title:'فتح الأندلس',desc:'وصول الإسلام إلى أوروبا — حضارة نورت العالم ثمانية قرون'},en:{title:'Opening of Andalusia',desc:'Islam reaches Europe — a civilization that enlightened the world for eight centuries'},fr:{title:'Ouverture de l\'Andalousie',desc:'L\'Islam atteint l\'Europe — une civilisation qui a eclaire le monde pendant huit siecles'}},
  {year:'1258',emoji:'📕',ar:{title:'سقوط بغداد',desc:'سقوط الخلافة العباسية — درس في أن الانحراف عن الدعوة يؤدي للسقوط'},en:{title:'Fall of Baghdad',desc:'The fall of the Abbasid Caliphate — a lesson that deviation from dawah leads to downfall'},fr:{title:'Chute de Bagdad',desc:'La chute du Califat Abbasside — une lecon que la deviation de la predication mene a la chute'}},
  {year:'1798',emoji:'⚔️',ar:{title:'الحملة الفرنسية على مصر',desc:'بداية الاستعمار الحديث — صدمة أيقظت الأمة من سبات طويل'},en:{title:'French Campaign in Egypt',desc:'The beginning of modern colonialism — a shock that awakened the Ummah from a long slumber'},fr:{title:'Campagne de France en Egypte',desc:'Le debut du colonialisme moderne — un choc qui a reveille la Oumma d\'un long sommeil'}},
  {year:'1917',emoji:'👶',ar:{title:'ولادة محمد الغزالي',desc:'ولادة الشيخ محمد الغزالي في قرية نكلا العنب بمحافظة البحيرة في مصر'},en:{title:'Birth of Mohammed al-Ghazali',desc:'Sheikh Mohammed al-Ghazali is born in Nikla al-Inab village, Beheira Governorate, Egypt'},fr:{title:'Naissance de Mohammed al-Ghazali',desc:'Le Sheikh Mohammed al-Ghazali nait au village de Nikla al-Inab, Gouvernorat de Beheira, Egypte'}},
  {year:'1940',emoji:'📝',ar:{title:'بداية التأليف',desc:'بداية مسيرة الغزالي في التأليف والدعوة — أكثر من ٩٤ كتاباً على مدى نصف قرن'},en:{title:'Start of Writing',desc:'Al-Ghazali begins his writing and dawah career — over 94 books spanning half a century'},fr:{title:'Debut de l\'Ecriture',desc:'Al-Ghazali commence sa carriere d\'ecriture et de predication — plus de 94 livres sur un demi-siecle'}},
  {year:'1952',emoji:'🇪🇬',ar:{title:'ثورة يوليو في مصر',desc:'سياق كتاب "في موكب الدعوة" — مقالات كتبها الغزالي قبل الثورة وبعدها عن الإصلاح والعدالة'},en:{title:'July Revolution in Egypt',desc:'The context of this book — articles written by al-Ghazali before and after the revolution on reform and justice'},fr:{title:'Revolution de Juillet en Egypte',desc:'Le contexte de ce livre — articles ecrits par al-Ghazali avant et apres la revolution sur la reforme et la justice'}},
  {year:'1996',emoji:'🕊️',ar:{title:'وفاة الشيخ الغزالي',desc:'رحيل الشيخ الغزالي في الرياض — ترك إرثاً ضخماً من الفكر والدعوة'},en:{title:'Passing of Sheikh al-Ghazali',desc:'Sheikh al-Ghazali passes away in Riyadh — leaving a monumental legacy of thought and dawah'},fr:{title:'Deces du Sheikh al-Ghazali',desc:'Le Sheikh al-Ghazali decede a Riyad — laissant un heritage monumental de pensee et de predication'}}
];

// ═══════════════ QUIZ DATA (15 questions — "Who Wants to Be a Preacher?") ═══════════════
const QUIZ_DATA = [
  {ar:{q:'ما أفضل وسيلة للدعوة حسب القرآن؟',options:['الحكمة والموعظة الحسنة','القوة والإجبار','التجاهل والصمت','السخرية من الآخرين'],correct:0,hint:'ادعُ إلى سبيل ربك بالحكمة...'},
   en:{q:'What is the best method of dawah according to the Quran?',options:['Wisdom and good instruction','Force and compulsion','Ignoring and silence','Mocking others'],correct:0,hint:'Invite to the way of your Lord with wisdom...'},
   fr:{q:'Quelle est la meilleure methode de predication selon le Coran ?',options:['La sagesse et la bonne exhortation','La force et la contrainte','L\'ignorance et le silence','Se moquer des autres'],correct:0,hint:'Appelle au sentier de ton Seigneur par la sagesse...'}},
  {ar:{q:'من وصفه الغزالي بأخطر أعداء الإسلام؟',options:['علماء السلطان المنافقون','الأعداء الخارجيون','الشباب المتحمس','التجار الأغنياء'],correct:0,hint:'العلماء الذين يبررون الظلم...'},
   en:{q:'Who did al-Ghazali describe as the most dangerous enemies of Islam?',options:['Hypocritical court scholars','External enemies','Enthusiastic youth','Wealthy merchants'],correct:0,hint:'Scholars who justify oppression...'},
   fr:{q:'Qui al-Ghazali a-t-il decrit comme les ennemis les plus dangereux de l\'Islam ?',options:['Les savants hypocrites du pouvoir','Les ennemis exterieurs','La jeunesse enthousiaste','Les marchands riches'],correct:0,hint:'Les savants qui justifient l\'oppression...'}},
  {ar:{q:'ما موقف الغزالي من حقوق المرأة؟',options:['الإسلام أنصف المرأة قبل أي حضارة','المرأة مكانها البيت فقط','لا حقوق للمرأة في العمل','المرأة أدنى من الرجل'],correct:0,hint:'رفع الإسلام مكانة المرأة...'},
   en:{q:'What was al-Ghazali\'s position on women\'s rights?',options:['Islam gave women justice before any civilization','Women belong only at home','Women have no work rights','Women are inferior to men'],correct:0,hint:'Islam elevated women\'s status...'},
   fr:{q:'Quelle etait la position d\'al-Ghazali sur les droits des femmes ?',options:['L\'Islam a rendu justice aux femmes avant toute civilisation','Les femmes ne doivent rester qu\'a la maison','Les femmes n\'ont pas de droits au travail','Les femmes sont inferieures aux hommes'],correct:0,hint:'L\'Islam a eleve le statut des femmes...'}},
  {ar:{q:'ما معنى "التجديد" عند الغزالي؟',options:['إحياء الدين مع الحفاظ على الأصول','تغيير أحكام الإسلام','رفض كل ما هو قديم','نسخ الشريعة'],correct:0,hint:'التجديد المبني على الأصول لا التبديد...'},
   en:{q:'What does "renewal" mean according to al-Ghazali?',options:['Reviving religion while preserving fundamentals','Changing Islamic rulings','Rejecting everything old','Abrogating Sharia'],correct:0,hint:'Renewal rooted in principles, not destruction...'},
   fr:{q:'Que signifie le "renouveau" selon al-Ghazali ?',options:['Revivifier la religion en preservant les fondamentaux','Changer les regles islamiques','Rejeter tout ce qui est ancien','Abroger la Charia'],correct:0,hint:'Le renouveau enracine dans les principes, pas la destruction...'}},
  {ar:{q:'ما أفضل الجهاد حسب الحديث النبوي؟',options:['كلمة حق عند سلطان جائر','الجهاد بالسيف','الهجرة إلى بلد آخر','الصمت والعزلة'],correct:0,hint:'أفضل الجهاد كلمة حق...'},
   en:{q:'What is the best struggle according to a Prophetic hadith?',options:['A word of truth before an unjust ruler','Struggle by the sword','Migration to another country','Silence and isolation'],correct:0,hint:'The best struggle is a word of truth...'},
   fr:{q:'Quel est le meilleur combat selon un hadith prophetique ?',options:['Une parole de verite devant un dirigeant injuste','Le combat par l\'epee','L\'emigration vers un autre pays','Le silence et l\'isolement'],correct:0,hint:'Le meilleur combat est une parole de verite...'}},
  {ar:{q:'ما سبب ضعف المسلمين حسب الغزالي؟',options:['التفرق والانقسام','قلة الأعداد','عدم وجود أسلحة','فقر الموارد'],correct:0,hint:'التفرق هو سبب ضعف المسلمين...'},
   en:{q:'What is the cause of Muslim weakness according to al-Ghazali?',options:['Division and fragmentation','Small numbers','Lack of weapons','Lack of resources'],correct:0,hint:'Division is the cause of weakness...'},
   fr:{q:'Quelle est la cause de la faiblesse des musulmans selon al-Ghazali ?',options:['La division et la fragmentation','Le petit nombre','Le manque d\'armes','Le manque de ressources'],correct:0,hint:'La division est la cause de la faiblesse...'}},
  {ar:{q:'ما الذي يميز الداعية الناجح؟',options:['الجمع بين الحماس والحكمة','الحماس فقط','العلم فقط','المظهر الديني'],correct:0,hint:'الحماس المنضبط بالعلم والحكمة...'},
   en:{q:'What distinguishes a successful preacher?',options:['Combining enthusiasm with wisdom','Enthusiasm alone','Knowledge alone','Religious appearance'],correct:0,hint:'Disciplined enthusiasm with wisdom...'},
   fr:{q:'Qu\'est-ce qui distingue un predicateur qui reussit ?',options:['Combiner enthousiasme et sagesse','L\'enthousiasme seul','Le savoir seul','L\'apparence religieuse'],correct:0,hint:'L\'enthousiasme discipline avec sagesse...'}},
  {ar:{q:'أين درّس الشيخ الغزالي في الجزائر؟',options:['جامعة الأمير عبد القادر بقسنطينة','جامعة الجزائر','جامعة وهران','جامعة تلمسان'],correct:0,hint:'جامعة الأمير عبد القادر في قسنطينة...'},
   en:{q:'Where did Sheikh al-Ghazali teach in Algeria?',options:['University of Emir Abdelkader in Constantine','University of Algiers','University of Oran','University of Tlemcen'],correct:0,hint:'University of Emir Abdelkader in Constantine...'},
   fr:{q:'Ou le Sheikh al-Ghazali a-t-il enseigne en Algerie ?',options:['Universite Emir Abdelkader a Constantine','Universite d\'Alger','Universite d\'Oran','Universite de Tlemcen'],correct:0,hint:'Universite Emir Abdelkader a Constantine...'}},
  {ar:{q:'ما موقف الإسلام من الوسطية؟',options:['الإسلام وسط بين الغلو والتفريط','الغلو مطلوب','التفريط أفضل','لا وسطية في الدين'],correct:0,hint:'وكذلك جعلناكم أمة وسطاً...'},
   en:{q:'What is Islam\'s position on moderation?',options:['Islam is a middle path between extremism and negligence','Extremism is required','Negligence is better','There is no moderation in religion'],correct:0,hint:'And thus We have made you a just community...'},
   fr:{q:'Quelle est la position de l\'Islam sur la moderation ?',options:['L\'Islam est un juste milieu entre extremisme et negligence','L\'extremisme est requis','La negligence est mieux','Il n\'y a pas de moderation en religion'],correct:0,hint:'Et ainsi Nous avons fait de vous une communaute du juste milieu...'}},
  {ar:{q:'ما واجب كل مسلم في الدعوة؟',options:['الدعوة واجب كل مسلم','الدعوة لرجال الدين فقط','الصمت أفضل','الدعوة للعلماء فقط'],correct:0,hint:'الدعوة ليست وظيفة رجال الدين فقط...'},
   en:{q:'What is every Muslim\'s duty regarding dawah?',options:['Dawah is every Muslim\'s duty','Dawah is only for clergy','Silence is better','Dawah is only for scholars'],correct:0,hint:'Dawah is not the job of clergy alone...'},
   fr:{q:'Quel est le devoir de chaque musulman concernant la predication ?',options:['La predication est le devoir de chaque musulman','La predication est reservee au clerge','Le silence est meilleur','La predication est reservee aux savants'],correct:0,hint:'La predication n\'est pas le travail des seuls religieux...'}},
  {ar:{q:'متى بدأت الدعوة الجهرية في الإسلام؟',options:['بعد ثلاث سنوات من البعثة','فوراً عند نزول الوحي','بعد الهجرة','بعد فتح مكة'],correct:0,hint:'بعد ثلاث سنوات من الدعوة السرية...'},
   en:{q:'When did public dawah begin in Islam?',options:['Three years after the revelation','Immediately upon revelation','After the migration','After the conquest of Makkah'],correct:0,hint:'After three years of secret preaching...'},
   fr:{q:'Quand la predication publique a-t-elle commence en Islam ?',options:['Trois ans apres la revelation','Immediatement lors de la revelation','Apres l\'emigration','Apres la conquete de La Mecque'],correct:0,hint:'Apres trois ans de predication secrete...'}},
  {ar:{q:'ما السياق التاريخي لكتاب "في موكب الدعوة"؟',options:['مقالات قبل وبعد ثورة ١٩٥٢','مقالات من العصر العباسي','خطب مسجدية','رسائل شخصية'],correct:0,hint:'مقالات كتبها الغزالي حول ثورة يوليو 1952...'},
   en:{q:'What is the historical context of the book?',options:['Articles before and after the 1952 revolution','Articles from the Abbasid era','Mosque sermons','Personal letters'],correct:0,hint:'Articles written by al-Ghazali around the 1952 revolution...'},
   fr:{q:'Quel est le contexte historique du livre ?',options:['Articles avant et apres la revolution de 1952','Articles de l\'ere abbasside','Sermons de mosquee','Lettres personnelles'],correct:0,hint:'Articles ecrits par al-Ghazali autour de la revolution de 1952...'}},
  {ar:{q:'ما الدرس من سقوط بغداد ١٢٥٨؟',options:['الانحراف عن الدعوة يؤدي للسقوط','القوة العسكرية كافية','التحالفات تنقذ الأمم','الجغرافيا تحمي الأمم'],correct:0,hint:'الانحراف عن الدعوة يؤدي للسقوط...'},
   en:{q:'What is the lesson from the fall of Baghdad in 1258?',options:['Deviation from dawah leads to downfall','Military strength is enough','Alliances save nations','Geography protects nations'],correct:0,hint:'Deviation from dawah leads to downfall...'},
   fr:{q:'Quelle est la lecon de la chute de Bagdad en 1258 ?',options:['La deviation de la predication mene a la chute','La force militaire suffit','Les alliances sauvent les nations','La geographie protege les nations'],correct:0,hint:'La deviation de la predication mene a la chute...'}},
  {ar:{q:'كم كتاباً ألّف الشيخ الغزالي؟',options:['أكثر من ٩٤ كتاباً','حوالي ٢٠ كتاباً','أقل من ١٠ كتب','حوالي ٥٠ كتاباً'],correct:0,hint:'أكثر من 94 كتاباً في الفكر والدعوة...'},
   en:{q:'How many books did Sheikh al-Ghazali write?',options:['More than 94 books','About 20 books','Less than 10 books','About 50 books'],correct:0,hint:'Over 94 books on thought and dawah...'},
   fr:{q:'Combien de livres le Sheikh al-Ghazali a-t-il ecrit ?',options:['Plus de 94 livres','Environ 20 livres','Moins de 10 livres','Environ 50 livres'],correct:0,hint:'Plus de 94 livres sur la pensee et la predication...'}},
  {ar:{q:'ما واجب الداعية تجاه الكلمة؟',options:['وزن الكلمة لأنها مسؤولية','قول أي شيء بلا تفكير','الصمت دائماً','الكلام كثيراً دون حساب'],correct:0,hint:'الكلمة مسؤولية والداعية محاسب عليها...'},
   en:{q:'What is the preacher\'s duty regarding words?',options:['Weighing words because they carry responsibility','Saying anything without thinking','Always staying silent','Speaking a lot without accountability'],correct:0,hint:'Words carry responsibility and the preacher is accountable...'},
   fr:{q:'Quel est le devoir du predicateur concernant les paroles ?',options:['Peser ses mots car ils portent une responsabilite','Dire n\'importe quoi sans reflechir','Toujours garder le silence','Parler beaucoup sans responsabilite'],correct:0,hint:'Les mots portent une responsabilite et le predicateur en est responsable...'}}
];

// ═══════════════ DUAS ═══════════════
const DUAS = [
  {ar:{label:'دعاء الداعية',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ، وَأَرِنِي الْبَاطِلَ بَاطِلًا وَارْزُقْنِي اجْتِنَابَهُ',tr:'O Allah, show me truth as truth and grant me to follow it, and show me falsehood as falsehood and grant me to avoid it'},en:{label:'Preacher\'s Dua',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ، وَأَرِنِي الْبَاطِلَ بَاطِلًا وَارْزُقْنِي اجْتِنَابَهُ',tr:'O Allah, show me truth as truth and grant me to follow it, and show me falsehood as falsehood and grant me to avoid it'},fr:{label:'Dua du Predicateur',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ، وَأَرِنِي الْبَاطِلَ بَاطِلًا وَارْزُقْنِي اجْتِنَابَهُ',tr:'O Dieu, montre-moi la verite comme verite et accorde-moi de la suivre, et montre-moi le faux comme faux et accorde-moi de l\'eviter'}},
  {ar:{label:'دعاء طلب العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and make firm our feet and give us victory over the disbelieving people'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and make firm our feet and give us victory'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et donne-nous la victoire'}},
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Allah, guide me and make me steadfast'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Allah, guide me and make me steadfast'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et rends-moi ferme'}},
  {ar:{label:'دعاء القبول',text:'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',tr:'Our Lord, accept from us — indeed You are the Hearing, the Knowing'},en:{label:'Dua for Acceptance',text:'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',tr:'Our Lord, accept from us — indeed You are the Hearing, the Knowing'},fr:{label:'Dua pour l\'Acceptation',text:'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',tr:'Notre Seigneur, accepte de nous — Tu es l\'Audient, l\'Omniscient'}},
  {ar:{label:'دعاء النصر',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',tr:'Our Lord, let not our hearts deviate after You have guided us and grant us mercy from Yourself'},en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',tr:'Our Lord, let not our hearts deviate after You have guided us and grant us mercy'},fr:{label:'Dua pour la Fermete',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres nous avoir guides et accorde-nous une misericorde'}}
];

// ═══════════════ STATE ═══════════════
const LS_PREFIX = 'fmd-';
let lang = localStorage.getItem(LS_PREFIX + 'lang') || 'ar';
const themes = ['ocean','night','sky'];
const themeIcons = ['🌊','🌙','☁️'];
const themeNames = {ocean:'Ocean',night:'Night',sky:'Sky'};
let theme = localStorage.getItem(LS_PREFIX + 'theme') || 'ocean';
let currentLessonIdx = 0;
let ageMode = localStorage.getItem(LS_PREFIX + 'age') || 'teen';

// ═══════════════ XP & BADGES SYSTEM ═══════════════
function getXP() { return parseInt(localStorage.getItem(LS_PREFIX + 'xp') || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(LS_PREFIX + 'xp', xp);
  updateXPDisplay();
  checkBadges();
  return xp;
}
function updateXPDisplay() {
  const el = document.getElementById('xpDisplay');
  if (el) el.textContent = getXP();
  const bar = document.getElementById('xpBar');
  if (bar) {
    const level = Math.floor(getXP() / 100);
    const pct = (getXP() % 100);
    bar.style.width = pct + '%';
  }
}

function getBadges() { return JSON.parse(localStorage.getItem(LS_PREFIX + 'badges') || '[]'); }
function awardBadge(id) {
  const badges = getBadges();
  if (!badges.includes(id)) {
    badges.push(id);
    localStorage.setItem(LS_PREFIX + 'badges', JSON.stringify(badges));
    const t = T[lang];
    const names = {beginner:t.levelBeginner,reader:t.levelReader,scholar:t.levelScholar,persistent:t.levelPersistent,expert:t.levelExpert};
    const emojis = {beginner:'🌟',reader:'📖',scholar:'🧠',persistent:'🔥',expert:'🏆'};
    showToast(`${emojis[id]} ${names[id]}`);
    playSound('badge');
    updateBadgesDisplay();
  }
}
function checkBadges() {
  awardBadge('beginner');
  const readCards = parseInt(localStorage.getItem(LS_PREFIX + 'cardsRead') || '0');
  if (readCards >= 10) awardBadge('reader');
  const quizzesDone = parseInt(localStorage.getItem(LS_PREFIX + 'quizzesDone') || '0');
  if (quizzesDone > 0) awardBadge('scholar');
  const streak = getStreak();
  if (streak >= 7) awardBadge('persistent');
  const bestScore = parseInt(localStorage.getItem(LS_PREFIX + 'bestScore') || '0');
  if (bestScore >= 100) awardBadge('expert');
}
function updateBadgesDisplay() {
  const el = document.getElementById('badgesContainer');
  const badges = getBadges();
  const all = [
    {id:'beginner',emoji:'🌟'},{id:'reader',emoji:'📖'},{id:'scholar',emoji:'🧠'},{id:'persistent',emoji:'🔥'},{id:'expert',emoji:'🏆'}
  ];
  el.innerHTML = all.map(b => `<span class="badge-item ${badges.includes(b.id)?'earned':''}">${b.emoji}</span>`).join('');
}

function markCardRead() {
  const count = parseInt(localStorage.getItem(LS_PREFIX + 'cardsRead') || '0') + 1;
  localStorage.setItem(LS_PREFIX + 'cardsRead', count);
  addXP(10);
}

// ═══════════════ STREAK SYSTEM ═══════════════
function getStreak() {
  const d = JSON.parse(localStorage.getItem(LS_PREFIX + 'streak') || '{"count":0,"lastDate":""}');
  return d.count;
}
function updateStreak() {
  const today = new Date().toDateString();
  let d = JSON.parse(localStorage.getItem(LS_PREFIX + 'streak') || '{"count":0,"lastDate":""}');
  if (d.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (d.lastDate === yesterday.toDateString()) { d.count++; } else { d.count = 1; }
  d.lastDate = today;
  localStorage.setItem(LS_PREFIX + 'streak', JSON.stringify(d));
  checkBadges();
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  updateXPDisplay();
  updateBadgesDisplay();
  updateStreak();
  checkBadges();
  renderHome();
  renderLessons();
  renderTimeline();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem(LS_PREFIX + 'lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabLessons', t.tabLessons); set('tabTimeline', t.tabTimeline);
  set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('lessonsTitle', t.lessonsTitle); set('lessonsDesc', t.lessonsDesc);
  set('timelineTitle', t.timelineTitle); set('timelineDesc', t.timelineDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderLessons(); renderTimeline(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem(LS_PREFIX + 'theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % LESSONS.length;
  const lesson = LESSONS[dayIdx];
  const ld = lesson[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${ld.title}</div>
    <div class="daily-body">${ld.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=lessons]').click()">${t.tabLessons} &#8594;</div>
  `;
  // XP bar
  (document.getElementById('xpSection')||{}).innerHTML= `
    <div class="xp-bar-wrap">
      <div class="xp-label">${t.xpLabel}: <strong id="xpDisplay">${getXP()}</strong></div>
      <div class="xp-bar"><div class="xp-fill" id="xpBar" style="width:${getXP()%100}%"></div></div>
    </div>
    <div class="badges-row" id="badgesContainer"></div>
  `;
  updateBadgesDisplay();
  const sections = [
    {icon:'📢',tab:'lessons',title:t.tabLessons,desc:lang==='ar'?'٢٠ درس دعوي':lang==='fr'?'20 lecons':'20 lessons'},
    {icon:'🕰️',tab:'timeline',title:t.tabTimeline,desc:lang==='ar'?'مسار تاريخي':lang==='fr'?'Chronologie':'Timeline'},
    {icon:'🧠',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معلوماتك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: LESSONS ═══════════════
function renderLessons() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="lessonsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterLessons(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = LESSONS.map((lesson, i) => {
    const d = lesson[lang];
    return `
    <div class="lesson-card scroll-reveal" id="lesson-${lesson.id}" data-search="${d.title.toLowerCase()}">
      <div class="lesson-head" onclick="toggleCard('lesson-${lesson.id}');markCardRead()">
        <span class="lesson-num">${lesson.id}</span>
        <span class="lesson-emoji">${lesson.emoji}</span>
        <span class="lesson-title">${d.title}</span>
        <span class="lesson-chev">&#9660;</span>
      </div>
      <div class="lesson-body">
        <div class="lesson-inner">
          <p class="lesson-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💭</span>
            <span>${d.reflection}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareLesson(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('lessonsContainer')||{}).innerHTML= searchBar + cards;
}

function filterLessons(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.lesson-card').forEach(card => {
    const title = card.querySelector('.lesson-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    card.style.display = (!q || titleText.includes(q) || (card.dataset.search || '').includes(q)) ? '' : 'none';
  });
}

async function shareLesson(idx) {
  const lesson = LESSONS[idx];
  const d = lesson[lang];
  const text = `${lesson.emoji} ${d.title}\n\n${d.desc}\n\n💭 ${d.reflection}\n\n— في موكب الدعوة | In the Procession of Dawah`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang==='ar'?'تم النسخ!':lang==='fr'?'Copie !':'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: TIMELINE ═══════════════
function renderTimeline() {
  (document.getElementById('timelineContainer')||{}).innerHTML= TIMELINE.map(t => {
    const d = t[lang];
    return `
    <div class="timeline-item scroll-reveal">
      <div class="timeline-year">${t.year}</div>
      <div class="timeline-content">
        <span class="timeline-emoji">${t.emoji}</span>
        <div class="timeline-info">
          <div class="timeline-title">${d.title}</div>
          <div class="timeline-desc">${d.desc}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ ("Who Wants to Be a Preacher?") ═══════════════
let quizState = { qIndex:0, score:0, answered:false, lifelines:{fifty:true,hint:true,sheikh:true}, shuffledOptions:[] };

function renderQuiz() {
  const t = T[lang];
  quizState = { qIndex:0, score:0, answered:false, lifelines:{fifty:true,hint:true,sheikh:true}, shuffledOptions:[] };
  (document.getElementById('quizContainer')||{}).innerHTML= `
    <div class="quiz-start-screen">
      <div class="quiz-start-icon">🎓</div>
      <div class="quiz-start-title">${t.quizTitle}</div>
      <div class="quiz-start-desc">${t.quizDesc}</div>
      <button class="quiz-submit" onclick="startQuiz()">${t.quizStart}</button>
    </div>
  `;
  document.getElementById('quizResult').classList.add('hidden');
}

function startQuiz() {
  quizState = { qIndex:0, score:0, answered:false, lifelines:{fifty:true,hint:true,sheikh:true}, shuffledOptions:[] };
  addXP(5);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const qd = QUIZ_DATA[quizState.qIndex];
  if (!qd) { finishQuiz(); return; }
  const q = qd[lang];
  // Shuffle options preserving correct index
  const optionsWithIdx = q.options.map((opt, i) => ({text:opt, origIdx:i}));
  for (let i = optionsWithIdx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIdx[i], optionsWithIdx[j]] = [optionsWithIdx[j], optionsWithIdx[i]];
  }
  quizState.shuffledOptions = optionsWithIdx;
  quizState.answered = false;

  const lifelinesHTML = `
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.quizLifeline5050}</button>
      <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.quizLifelineHint}</button>
      <button class="lifeline-btn ${quizState.lifelines.sheikh?'':'used'}" onclick="useSheikh()" ${quizState.lifelines.sheikh?'':'disabled'}>${t.quizLifelineSheikh}</button>
    </div>`;

  (document.getElementById('quizContainer')||{}).innerHTML= `
    <div class="quiz-progress">${quizState.qIndex + 1} / ${QUIZ_DATA.length}</div>
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(quizState.qIndex/QUIZ_DATA.length)*100}%"></div></div>
    ${lifelinesHTML}
    <div class="quiz-question-card">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOptions">
        ${optionsWithIdx.map((opt, i) => `
          <button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt.text}</button>
        `).join('')}
      </div>
      <div class="quiz-hint-box hidden" id="quizHintBox"></div>
    </div>
  `;
}

function answerQuiz(optIdx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const qd = QUIZ_DATA[quizState.qIndex];
  const q = qd[lang];
  const selectedOrigIdx = quizState.shuffledOptions[optIdx].origIdx;
  const isCorrect = selectedOrigIdx === q.correct;

  // Highlight answers
  quizState.shuffledOptions.forEach((opt, i) => {
    const btn = document.getElementById('qopt-' + i);
    btn.disabled = true;
    if (opt.origIdx === q.correct) btn.classList.add('correct');
    if (i === optIdx && !isCorrect) btn.classList.add('wrong');
  });

  if (isCorrect) {
    quizState.score++;
    addXP(5);
    playSound('success');
    showToast(T[lang].quizCorrect);
  } else {
    playSound('click');
    showToast(T[lang].quizWrong);
  }

  // Auto advance after delay
  setTimeout(() => {
    quizState.qIndex++;
    if (quizState.qIndex < QUIZ_DATA.length) {
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  }, 1500);
}

function finishQuiz() {
  const t = T[lang];
  const pct = Math.round(quizState.score / QUIZ_DATA.length * 100);
  localStorage.setItem(LS_PREFIX + 'quizzesDone', (parseInt(localStorage.getItem(LS_PREFIX + 'quizzesDone') || '0') + 1));
  if (pct >= parseInt(localStorage.getItem(LS_PREFIX + 'bestScore') || '0')) {
    localStorage.setItem(LS_PREFIX + 'bestScore', pct);
  }
  addXP(20);
  checkBadges();

  let emoji, title, desc;
  if (pct >= 80) {
    emoji = '🏆'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'أنت داعية متمكن! معرفتك بأساليب الدعوة ممتازة.':lang==='fr'?'Vous etes un predicateur accompli ! Votre connaissance est excellente.':'You are an accomplished preacher! Your knowledge is excellent.';
  } else if (pct >= 50) {
    emoji = '📖'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'معرفتك جيدة لكن هناك المزيد لتتعلمه. راجع الدروس.':lang==='fr'?'Vos connaissances sont bonnes mais il y a plus a apprendre.':'Your knowledge is good but there is more to learn. Review the lessons.';
  } else {
    emoji = '📢'; title = lang==='ar'?'ابدأ الرحلة':lang==='fr'?'Commencez le Voyage':'Start the Journey';
    desc = lang==='ar'?'راجع دروس الدعوة وحاول مرة أخرى!':lang==='fr'?'Revisez les lecons et reessayez !':'Review the dawah lessons and try again!';
  }

  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${QUIZ_DATA.length} (${pct}%)</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${t.quizAgain}</button>
  `;
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  playSound('success');
}

// ═══════════════ LIFELINES ═══════════════
function useFiftyFifty() {
  if (!quizState.lifelines.fifty || quizState.answered) return;
  quizState.lifelines.fifty = false;
  const qd = QUIZ_DATA[quizState.qIndex][lang];
  const wrongOpts = quizState.shuffledOptions.filter(o => o.origIdx !== qd.correct);
  const toHide = wrongOpts.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(opt => {
    const idx = quizState.shuffledOptions.indexOf(opt);
    const btn = document.getElementById('qopt-' + idx);
    if (btn) { btn.style.opacity = '0.2'; btn.disabled = true; }
  });
  playSound('click');
  renderQuizQuestion.__lifelines = true;
  document.querySelectorAll('.lifeline-btn')[0].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[0].disabled = true;
}

function useHint() {
  if (!quizState.lifelines.hint || quizState.answered) return;
  quizState.lifelines.hint = false;
  const qd = QUIZ_DATA[quizState.qIndex][lang];
  // Highlight likely answer with glow
  const correctShuffledIdx = quizState.shuffledOptions.findIndex(o => o.origIdx === qd.correct);
  const btn = document.getElementById('qopt-' + correctShuffledIdx);
  if (btn) btn.classList.add('hinted');
  playSound('click');
  document.querySelectorAll('.lifeline-btn')[1].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[1].disabled = true;
}

function useSheikh() {
  if (!quizState.lifelines.sheikh || quizState.answered) return;
  quizState.lifelines.sheikh = false;
  const qd = QUIZ_DATA[quizState.qIndex][lang];
  const hintBox = document.getElementById('quizHintBox');
  if (hintBox) {
    hintBox.classList.remove('hidden');
    hintBox.innerHTML = `<div class="hint-content">📖 ${qd.hint}</div>`;
  }
  playSound('click');
  document.querySelectorAll('.lifeline-btn')[2].classList.add('used');
  document.querySelectorAll('.lifeline-btn')[2].disabled = true;
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد والدفاع عن حقوق المرأة في الإسلام.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"في موكب الدعوة" مجموعة مقالات كتبها الشيخ الغزالي قبل وبعد ثورة يوليو ١٩٥٢. يتناول فيها العدالة الاجتماعية في الإسلام، محاربة الاستبداد، حقوق المرأة، نقد الحكم الفاسد، قضية فلسطين، ومواجهة التدين المنحرف. الغزالي يكتب بقلم المصلح الحماسي الذي يفضح النفاق ويدعو إلى إسلام حقيقي يحقق العدالة والكرامة.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "في موكب الدعوة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, defending women\'s rights in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"In the Procession of Dawah" is a collection of articles written by Sheikh al-Ghazali before and after the July 1952 revolution. He addresses social justice in Islam, fighting despotism, women\'s rights, critique of corrupt governance, the Palestine cause, and confronting deviant religiosity. Al-Ghazali writes as a passionate reformer exposing hypocrisy and calling for authentic Islam that achieves justice and dignity.',
      sourcesTitle: 'Sources',
      sources: ['"In the Procession of Dawah" (Fi Mawkib al-Dawa) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau, la lutte contre la rigidite et la defense des droits des femmes en Islam.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Dans le Cortege de la Predication » est un recueil d\'articles ecrits par le Sheikh al-Ghazali avant et apres la revolution de juillet 1952. Il aborde la justice sociale en Islam, la lutte contre le despotisme, les droits des femmes, la critique de la gouvernance corrompue, la cause palestinienne et la confrontation de la religiosite deviante. Al-Ghazali ecrit en reformateur passionne denoncant l\'hypocrisie et appelant a un Islam authentique.',
      sourcesTitle: 'Sources',
      sources: ['« Dans le Cortege de la Predication » (Fi Mawkib al-Dawa) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "في موكب الدعوة" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ درساً، مسار تاريخي، اختبار مع شرائح نجاة، نظام نقاط وأوسمة.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم (يمين/يسار) للتنقل بين الدروس. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/fi-mawkib-al-dawa'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"In the Procession of Dawah" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 lessons, historical timeline, quiz with lifelines, XP and badges.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys (left/right) to navigate between lessons. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/fi-mawkib-al-dawa'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« Dans le Cortege de la Predication » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah Prophetique.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 lecons, chronologie historique, quiz avec bouees de sauvetage, XP et badges.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches (gauche/droite) pour naviguer entre les lecons. Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/fi-mawkib-al-dawa'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#1565C0','#42A5F5','#90CAF9','#FFD54F','#66BB6A','#EF5350','#AB47BC'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame<120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.lesson-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-lessons');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'lessonsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.lesson-card')).filter(c => c.style.display !== 'none');
      if (cards.length === 0) return;
      if (currentLessonIdx >= 0 && currentLessonIdx < cards.length) cards[currentLessonIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentLessonIdx = Math.max(0, Math.min(cards.length - 1, currentLessonIdx + dir));
      cards[currentLessonIdx].classList.add('open');
      cards[currentLessonIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t=document.getElementById('toast'); const m=document.getElementById('toastMsg'); if(t&&m){m.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2500);} }
function initScrollTop() { const btn=document.getElementById('scrollTop'); window.addEventListener('scroll',()=>{if(btn)btn.classList.toggle('visible',window.scrollY>300);}); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    else if (type === 'badge') { osc.frequency.value = 659; osc.type = 'sine'; gain.gain.value = 0.07; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.12);
  } catch(e) {}
}

// ═══════════════ TICKER ═══════════════
function initTicker() {
  const el = document.getElementById('tickerText');
  const items = lang==='ar'
    ? ['📢 في موكب الدعوة — الشيخ محمد الغزالي','⚖️ العدالة الاجتماعية في الإسلام','🕊️ حقوق المرأة والإصلاح','🌍 الدعوة واجب كل مسلم']
    : lang==='fr'
    ? ['📢 Dans le Cortege de la Predication — Sheikh al-Ghazali','⚖️ Justice sociale en Islam','🕊️ Droits des femmes et reforme','🌍 La predication est le devoir de chaque musulman']
    : ['📢 In the Procession of Dawah — Sheikh al-Ghazali','⚖️ Social justice in Islam','🕊️ Women\'s rights and reform','🌍 Dawah is every Muslim\'s duty'];
  const sep = '    ✦    ';
  const text = items.join(sep) + sep;
  el.innerHTML = `<span class="tc">${text}</span><span class="tc">${text}</span>`;
  el.style.animation = `tickerMarquee ${text.length * 0.18}s linear infinite`;
}
