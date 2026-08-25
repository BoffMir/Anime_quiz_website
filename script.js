let score = 0;
let currentQuestion = 0;
let selectedDifficulty = "easy";
let selectedAnime = " ";
let quizLength = 10;

let questions = [

    //==================================================================
    // ONE PIECE
    //==================================================================
    {
     anime: "onePiece",  
    text: "Who is the captain of the Straw Hat Pirates?",
    answers: [
        "Roronoa Zoro",
        "Monkey D. Luffy",
        "Sanji",
        "Trafalgar Law"
    ],
    correctAnswer: 1,
    difficulty:  "easy"
},

{
    anime: "onePiece",  
    text: "What is the name of Luffy's first ship?",
    answers: [
        "Thousand Sunny",
        "Red Force",
        "Going Merry",
        "Moby Dick"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is the swordsman of the Straw Hat Pirates?",
    answers: [
        "Sanji",
        "Usopp",
        "Roronoa Zoro",
        "Franky"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What Devil Fruit did Luffy eat?",
    answers: [
        "Gomu Gomu no Mi",
        "Mera Mera no Mi",
        "Hito Hito no Mi",
        "Yami Yami no Mi"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is the navigator of the Straw Hat Pirates?",
    answers: [
        "Robin",
        "Nami",
        "Vivi",
        "Perona"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is the cook of the Straw Hat Pirates?",
    answers: [
        "Zoro",
        "Franky",
        "Sanji",
        "Brook"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "What is the name of Zoro's childhood friend?",
    answers: [
        "Tashigi",
        "Kuina",
        "Perona",
        "Reiju"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who gave Luffy his Straw Hat?",
    answers: [
        "Gol D. Roger",
        "Rayleigh",
        "Shanks",
        "Garp"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What is Usopp's dream?",
    answers: [
        "To find the One Piece",
        "To become a brave warrior of the sea",
        "To become the strongest swordsman",
        "To discover All Blue"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is the archaeologist of the Straw Hat Pirates?",
    answers: [
        "Nami",
        "Boa Hancock",
        "Nico Robin",
        "Vivi"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What is the name of Sanji's dream sea?",
    answers: [
        "Grand Line",
        "Calm Belt",
        "All Blue",
        "New World"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is the doctor of the Straw Hat Pirates?",
    answers: [
        "Tony Tony Chopper",
        "Trafalgar Law",
        "Marco",
        "Dr. Kureha"
    ],
    correctAnswer: 0,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What animal is Tony Tony Chopper?",
    answers: [
        "Wolf",
        "Reindeer",
        "Goat",
        "Deer"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who built the Thousand Sunny?",
    answers: [
        "Iceburg",
        "Tom",
        "Franky",
        "Usopp"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What is Franky's dream?",
    answers: [
        "To become Pirate King",
        "To build a ship that sails around the world",
        "To find All Blue",
        "To become the strongest shipwright"
    ],
    correctAnswer: 1,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who is the musician of the Straw Hat Pirates?",
    answers: [
        "Brook",
        "Franky",
        "Jinbe",
        "Usopp"
    ],
    correctAnswer: 0,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What Devil Fruit did Brook eat?",
    answers: [
        "Hana Hana no Mi",
        "Yomi Yomi no Mi",
        "Soru Soru no Mi",
        "Kage Kage no Mi"
    ],
    correctAnswer: 1,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who is known as the Soul King?",
    answers: [
        "Brook",
        "Big Mom",
        "Kaido",
        "Whitebeard"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who is the helmsman of the Straw Hat Pirates?",
    answers: [
        "Franky",
        "Jinbe",
        "Sanji",
        "Brook"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What species is Jinbe?",
    answers: [
        "Merfolk",
        "Fish-Man",
        "Giant",
        "Mink"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "Who was the captain of the Whitebeard Pirates?",
    answers: [
        "Gol D. Roger",
        "Kaido",
        "Edward Newgate",
        "Shanks"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "What was Whitebeard's Devil Fruit?",
    answers: [
        "Gura Gura no Mi",
        "Mera Mera no Mi",
        "Yami Yami no Mi",
        "Ope Ope no Mi"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who killed Portgas D. Ace?",
    answers: [
        "Blackbeard",
        "Akainu",
        "Aokiji",
        "Kizaru"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "Who was Ace's younger brother?",
    answers: [
        "Sabo",
        "Luffy",
        "Both Sabo and Luffy",
        "None of them"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "What was Ace's Devil Fruit?",
    answers: [
        "Magu Magu no Mi",
        "Mera Mera no Mi",
        "Gomu Gomu no Mi",
        "Hie Hie no Mi"
    ],
    correctAnswer: 1,
     difficulty: "medium"
},

{
    anime: "onePiece",  
    text: "Who inherited Ace's Devil Fruit?",
    answers: [
        "Luffy",
        "Sabo",
        "Sanji",
        "Marco"
    ],
    correctAnswer: 1,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who is the captain of the Heart Pirates?",
    answers: [
        "Eustass Kid",
        "Trafalgar Law",
        "Basil Hawkins",
        "Capone Bege"
    ],
    correctAnswer: 1,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "What Devil Fruit did Trafalgar Law eat?",
    answers: [
        "Ope Ope no Mi",
        "Yami Yami no Mi",
        "Ito Ito no Mi",
        "Nikyu Nikyu no Mi"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who is known as the Surgeon of Death?",
    answers: [
        "Marco",
        "Trafalgar Law",
        "Chopper",
        "Dr. Hogback"
    ],
    correctAnswer: 1,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "What is the name of Trafalgar Law's submarine?",
    answers: [
        "Polar Tang",
        "Victoria Punk",
        "Shark Submerge",
        "Red Force"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who is the captain of the Red Hair Pirates?",
    answers: [
        "Buggy",
        "Shanks",
        "Mihawk",
        "Benn Beckman"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is the world's greatest swordsman?",
    answers: [
        "Roronoa Zoro",
        "Vista",
        "Dracule Mihawk",
        "Shanks"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "What is the name of Zoro's three-sword fighting style?",
    answers: [
        "Santoryu",
        "Rokushiki",
        "Hasshoken",
        "Black Leg Style"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece",  
    text: "Who is the captain of the Kid Pirates?",
    answers: [
        "Killer",
        "Eustass Kid",
        "Scratchmen Apoo",
        "X Drake"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "What is the name of the island where the Straw Hats entered the Grand Line?",
    answers: [
        "Loguetown",
        "Reverse Mountain",
        "Whiskey Peak",
        "Punk Hazard"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "Which sea did Luffy grow up in?",
    answers: [
        "North Blue",
        "West Blue",
        "East Blue",
        "South Blue"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is Luffy's grandfather?",
    answers: [
        "Monkey D. Dragon",
        "Monkey D. Garp",
        "Gol D. Roger",
        "Silvers Rayleigh"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is Luffy's father?",
    answers: [
        "Monkey D. Dragon",
        "Monkey D. Garp",
        "Shanks",
        "Whitebeard"
    ],
    correctAnswer: 0,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What organization does Monkey D. Dragon lead?",
    answers: [
        "World Government",
        "Cross Guild",
        "Revolutionary Army",
        "Baroque Works"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Who is the leader of Baroque Works?",
    answers: [
        "Doflamingo",
        "Crocodile",
        "Moria",
        "Buggy"
    ],
    correctAnswer: 1,
     difficulty: "medium"
},

{
    anime: "onePiece",  
    text: "What is Crocodile's Devil Fruit?",
    answers: [
        "Suna Suna no Mi",
        "Mera Mera no Mi",
        "Gura Gura no Mi",
        "Hie Hie no Mi"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece", 
    text: "Who was the princess of Alabasta?",
    answers: [
        "Rebecca",
        "Shirahoshi",
        "Vivi",
        "Hiyori"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "What is the name of Enel's Devil Fruit?",
    answers: [
        "Goro Goro no Mi",
        "Pika Pika no Mi",
        "Magu Magu no Mi",
        "Hie Hie no Mi"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece",  
    text: "What type of Haki allows someone to predict an opponent's movements?",
    answers: [
        "Armament Haki",
        "Conqueror's Haki",
        "Observation Haki",
        "Supreme Haki"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "Which Haki can only be used by a small number of people with the qualities of a king?",
    answers: [
        "Observation Haki",
        "Armament Haki",
        "Conqueror's Haki",
        "Advanced Haki"
    ],
    correctAnswer: 2,
     difficulty: "medium"
},

{
    anime: "onePiece",  
    text: "Who is the captain of the Big Mom Pirates?",
    answers: [
        "Charlotte Linlin",
        "Charlotte Katakuri",
        "Charlotte Pudding",
        "Charlotte Smoothie"
    ],
    correctAnswer: 0,
     difficulty: "easy"
},

{
    anime: "onePiece",   
    text: "What is Big Mom's Devil Fruit?",
    answers: [
        "Soru Soru no Mi",
        "Gura Gura no Mi",
        "Mochi Mochi no Mi",
        "Bari Bari no Mi"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece",   
    text: "Who is known for using the Mochi Mochi no Mi?",
    answers: [
        "Charlotte Cracker",
        "Charlotte Katakuri",
        "Charlotte Perospero",
        "Charlotte Oven"
    ],
    correctAnswer: 1,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "What is the name of Kaido's pirate crew?",
    answers: [
        "Big Mom Pirates",
        "Red Hair Pirates",
        "Beast Pirates",
        "Heart Pirates"
    ],
    correctAnswer: 2,
     difficulty: "easy"
},

{
    anime: "onePiece",  
    text: "Who was the shogun of Wano before Orochi?",
    answers: [
        "Kozuki Oden",
        "Kozuki Sukiyaki",
        "Shimotsuki Yasuie",
        "Kozuki Momonosuke"
    ],
    correctAnswer: 0,
     difficulty: "medium"
},

{
    anime: "onePiece",  
    text: "What is the name of the ancient weapon associated with the Kozuki family?",
    answers: [
        "Pluton",
        "Poseidon",
        "Uranus",
        "Mother Flame"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "Who was the first person known to possess the Ope Ope no Mi before Trafalgar Law?",
    answers: [
        "Donquixote Doflamingo",
        "Corazon",
        "A former member of the Donquixote Pirates",
        "An unknown World Government agent"
    ],
    correctAnswer: 2,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "What was the name of the giant elephant that carries Zou?",
    answers: [
        "Zunesha",
        "Surume",
        "Laboon",
        "Oars"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "Which Road Poneglyph was located on Zou?",
    answers: [
        "The first Road Poneglyph",
        "The second Road Poneglyph",
        "One of the four Road Poneglyphs",
        "No Road Poneglyph was on Zou"
    ],
    correctAnswer: 2,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "Who was the former captain of the Rocks Pirates?",
    answers: [
        "Gol D. Roger",
        "Rocks D. Xebec",
        "Edward Newgate",
        "Kaido"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "Which two legendary pirates formed an alliance during the God Valley incident?",
    answers: [
        "Roger and Whitebeard",
        "Roger and Garp",
        "Rocks and Roger",
        "Garp and Whitebeard"
    ],
    correctAnswer: 2,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "What is the name of the island where the Ohara scholars lived?",
    answers: [
        "Ohara",
        "Baltigo",
        "Elbaf",
        "Water 7"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "Who was the first known user of the Voice of All Things among the Roger Pirates?",
    answers: [
        "Gol D. Roger",
        "Silvers Rayleigh",
        "Scopper Gaban",
        "Kozuki Oden"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "What is the name of the poneglyph-reading ability passed through the Kozuki family?",
    answers: [
        "Voice of All Things",
        "Ancient Script",
        "Kozuki Clan's ability to read Poneglyphs",
        "Mantra"
    ],
    correctAnswer: 2,
    difficulty: "hard"
},

{
    anime: "onePiece",  
    text: "Who was the previous owner of the sword Enma before Roronoa Zoro?",
    answers: [
        "Kozuki Oden",
        "Shimotsuki Ryuma",
        "Kozuki Sukiyaki",
        "Kaido"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "What is the name of the sword that Oden used alongside Enma?",
    answers: [
        "Wado Ichimonji",
        "Shusui",
        "Ame no Habakiri",
        "Sandai Kitetsu"
    ],
    correctAnswer: 2,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "Which member of CP9 possessed the Neko Neko no Mi, Model: Leopard?",
    answers: [
        "Kaku",
        "Jabra",
        "Rob Lucci",
        "Blueno"
    ],
    correctAnswer: 2,
    difficulty: "hard"
},

{
    anime: "onePiece",  
    text: "What was the name of the ancient kingdom mentioned in connection with the Void Century?",
    answers: [
        "Wano",
        "The Ancient Kingdom",
        "God Valley",
        "Shandora"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "onePiece",   
    text: "Which character was known as the 'Demon Child'?",
    answers: [
        "Boa Hancock",
        "Nico Robin",
        "Perona",
        "Jewelry Bonney"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "onePiece", 
    text: "What is the name of the giant straw hat seen inside Mary Geoise?",
    answers: [
        "Joy Boy's Hat",
        "The Ancient Hat",
        "Its official name has not been revealed",
        "The Pirate King's Hat"
    ],
    correctAnswer: 2,
    difficulty: "hard"

},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the bar where Shanks and his crew often spent time in Foosha Village?",
    answers: ["Baratie", "Partys Bar", "Makino's Bar", "Boodle's Bar"],
    correctAnswer: 2
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of the sea where the Straw Hats entered the Grand Line?",
    answers: ["East Blue", "North Blue", "Reverse Mountain", "Calm Belt"],
    correctAnswer: 2
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of Zoro's childhood sword?",
    answers: ["Wado Ichimonji", "Sandai Kitetsu", "Shusui", "Yubashiri"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Who gave Zoro the sword Wado Ichimonji?",
    answers: ["Dracule Mihawk", "Shimotsuki Koushiro", "Kuina", "Kozuki Oden"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the giant goldfish encountered by the Straw Hats at Little Garden?",
    answers: ["Laboon", "Island Eater", "Sea King", "Umibozu"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the giant whale waiting at Reverse Mountain?",
    answers: ["Laboon", "Surume", "Momoo", "Sea King"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which Baroque Works agent used the ability of the Wax-Wax Fruit?",
    answers: ["Mr. 1", "Mr. 2", "Mr. 3", "Mr. 5"],
    correctAnswer: 2
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the real name of Mr. 2 Bon Clay?",
    answers: ["Bentham", "Daz Bones", "Galdino", "Gem"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of Mr. 1's Devil Fruit?",
    answers: ["Dice-Dice Fruit", "Spin-Spin Fruit", "Steel-Steel Fruit", "Blade-Blade Fruit"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which character was known as the 'Desert King'?",
    answers: ["Crocodile", "Doflamingo", "Smoker", "Enel"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the doctor who treated Nami during the Drum Island arc?",
    answers: ["Dr. Kureha", "Dr. Hiriluk", "Dr. Hogback", "Dr. Vegapunk"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was Dr. Hiriluk's famous dream?",
    answers: ["To cure every disease", "To become Pirate King", "To find the One Piece", "To cure the sea"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the kingdom ruled by Wapol?",
    answers: ["Drum Kingdom", "Alabasta Kingdom", "Goa Kingdom", "Dressrosa"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which animal did Chopper originally believe was his father figure?",
    answers: ["A reindeer", "A gorilla", "A wolf", "A bird"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was Nico Robin's codename in Baroque Works?",
    answers: ["Miss Doublefinger", "Miss All Sunday", "Miss Goldenweek", "Miss Valentine"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of Nico Robin's Devil Fruit?",
    answers: ["Flower-Flower Fruit", "Bloom-Bloom Fruit", "Hand-Hand Fruit", "Clone-Clone Fruit"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the ancient city associated with Robin's childhood?",
    answers: ["Ohara", "Shandora", "Water 7", "Mary Geoise"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the scholar who raised Nico Robin?",
    answers: ["Professor Clover", "Professor Hiriluk", "Professor Cloverfield", "Professor Vegapunk"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which organization did CP9 belong to?",
    answers: ["Marines", "World Government", "Revolutionary Army", "Cipher Pol"],
    correctAnswer: 3
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which CP9 member used the Six Powers technique 'Rankyaku' most prominently?",
    answers: ["Kaku", "Blueno", "Fukuro", "Kalifa"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was Kaku's Devil Fruit?",
    answers: ["Ox-Ox Fruit, Model: Giraffe", "Cat-Cat Fruit, Model: Leopard", "Dog-Dog Fruit, Model: Wolf", "Horse-Horse Fruit"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was Rob Lucci's Devil Fruit?",
    answers: ["Cat-Cat Fruit, Model: Leopard", "Dog-Dog Fruit, Model: Wolf", "Ox-Ox Fruit, Model: Giraffe", "Bird-Bird Fruit"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of Franky's hometown?",
    answers: ["Water 7", "Flevance", "Ohara", "Loguetown"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was Franky's original name?",
    answers: ["Cutty Flam", "Flam D. Cutty", "Franky Flam", "Iceburg Flam"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the shipwright who raised Franky?",
    answers: ["Tom", "Iceburg", "Paulie", "Kokoro"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the train used by the World Government to travel to Enies Lobby?",
    answers: ["Rocketman", "Puffing Tom", "Sea Train", "Aqua Laguna"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the giant wave that threatened Water 7?",
    answers: ["Aqua Laguna", "Sea Surge", "Grand Wave", "Water Crash"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which Shichibukai was known as the 'Heavenly Demon'?",
    answers: ["Crocodile", "Donquixote Doflamingo", "Gecko Moria", "Boa Hancock"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of Doflamingo's brother?",
    answers: ["Rosinante", "Corazon", "Donquixote Rosinante", "All of these"],
    correctAnswer: 3
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which Devil Fruit did Rosinante possess?",
    answers: ["Op-Op Fruit", "Calm-Calm Fruit", "String-String Fruit", "Silence-Silence Fruit"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Who was the previous owner of the Op-Op Fruit before Trafalgar Law?",
    answers: ["Corazon", "Donquixote Doflamingo", "Dr. Hogback", "Bepo"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of Law's childhood homeland?",
    answers: ["Flevance", "Dressrosa", "North Blue", "Minion Island"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was Flevance famously known for?",
    answers: ["Gold", "Amber Lead", "Sea Stone", "Diamonds"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which Supernova was originally from the island of Sabaody's human auction?",
    answers: ["Jewelry Bonney", "Scratchmen Apoo", "Capone Bege", "Basil Hawkins"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of the sword Zoro received in Wano to replace Shusui?",
    answers: ["Enma", "Ame no Habakiri", "Nidai Kitetsu", "Kikoku"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Who originally wielded Enma?",
    answers: ["Kozuki Oden", "Shimotsuki Ryuma", "Kaido", "Kozuki Momonosuke"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of the sword Zoro returned to Wano?",
    answers: ["Enma", "Shusui", "Wado Ichimonji", "Nidai Kitetsu"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Who was the daimyo of Kuri before Orochi's rise?",
    answers: ["Kozuki Oden", "Kozuki Sukiyaki", "Kin'emon", "Denjiro"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of Oden's wife?",
    answers: ["Hiyori", "Toki", "Kikunojo", "Kozuki Toki"],
    correctAnswer: 3
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What was the name of Oden's father?",
    answers: ["Kozuki Sukiyaki", "Kozuki Ryuma", "Kozuki Hiyori", "Kozuki Denjiro"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which two samurai were among Oden's Nine Red Scabbards?",
    answers: ["Kin'emon and Denjiro", "Zoro and Sanji", "Law and Bepo", "Kaku and Lucci"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of the elephant carrying Zou?",
    answers: ["Zunesha", "Surume", "Laboon", "Momoo"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which tribe lives on the back of Zunesha?",
    answers: ["Minks", "Fish-Men", "Lunarians", "Skypieans"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of the mink leader who fought alongside the Straw Hats?",
    answers: ["Inuarashi", "Nekomamushi", "Pedro", "Wanda"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which character was the former ruler of the Mokomo Dukedom alongside Inuarashi?",
    answers: ["Nekomamushi", "Pedro", "Carrot", "Wanda"],
    correctAnswer: 0
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of the mysterious substance used to weaken Logia users?",
    answers: ["Sea-Prism Stone", "Kairoseki", "Both A and B", "Black Stone"],
    correctAnswer: 2
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What does the Japanese term 'Kairoseki' refer to?",
    answers: ["Haki", "Sea-Prism Stone", "Seastone weapons only", "Devil Fruit awakening"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Which ancient weapon is located in Alabasta according to the Poneglyph?",
    answers: ["Poseidon", "Pluton", "Uranus", "Shirahoshi"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "Who is the ancient weapon Poseidon?",
    answers: ["Nico Robin", "Shirahoshi", "Vivi", "Boa Hancock"],
    correctAnswer: 1
},
{
    anime: "onePiece",
    difficulty: "otaku",
    text: "What is the name of the ancient civilization connected to the Void Century?",
    answers: ["The Ancient Kingdom", "Shandora", "Ohara", "Wano"],
    correctAnswer: 0
},

//==================================================================
//NARUTO
//==================================================================

{
    anime: "naruto",
    text: "Who is the main character of Naruto?",
    answers: [
        "Sasuke Uchiha",
        "Naruto Uzumaki",
        "Kakashi Hatake",
        "Shikamaru Nara"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who is Naruto's teammate in Team 7?",
    answers: [
        "Neji Hyuga",
        "Rock Lee",
        "Sasuke Uchiha",
        "Kiba Inuzuka"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who is the leader of Team 7?",
    answers: [
        "Kakashi Hatake",
        "Jiraiya",
        "Iruka Umino",
        "Might Guy"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "What is the name of the fox sealed inside Naruto?",
    answers: [
        "Shukaku",
        "Kurama",
        "Matatabi",
        "Gyuki"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "What village is Naruto from?",
    answers: [
        "Sunagakure",
        "Kirigakure",
        "Konohagakure",
        "Iwagakure"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who is Sasuke's older brother?",
    answers: [
        "Madara Uchiha",
        "Obito Uchiha",
        "Itachi Uchiha",
        "Shisui Uchiha"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "What is Sakura Haruno's specialty?",
    answers: [
        "Medical ninjutsu",
        "Genjutsu only",
        "Puppetry",
        "Swordsmanship"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who taught Naruto the Rasengan?",
    answers: [
        "Kakashi",
        "Jiraiya",
        "Iruka",
        "Orochimaru"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who is the Fifth Hokage?",
    answers: [
        "Tsunade",
        "Kushina",
        "Mei Terumi",
        "Konan"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Which clan does Hinata Hyuga belong to?",
    answers: [
        "Uchiha",
        "Nara",
        "Hyuga",
        "Akimichi"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "What is Rock Lee known for using?",
    answers: [
        "Taijutsu",
        "Puppetry",
        "Genjutsu",
        "Wood Release"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who is the leader of the Akatsuki during much of Naruto Shippuden?",
    answers: [
        "Pain",
        "Kisame",
        "Deidara",
        "Sasori"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What is the name of Sasuke's clan?",
    answers: [
        "Senju",
        "Uchiha",
        "Uzumaki",
        "Hyuga"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who killed the Third Hokage during the invasion of Konoha?",
    answers: [
        "Orochimaru",
        "Kabuto",
        "Gaara",
        "Itachi"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What is Kakashi's famous nickname?",
    answers: [
        "The Copy Ninja",
        "The Yellow Flash",
        "The White Fang",
        "The Demon of Mist"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who was known as the Yellow Flash of the Leaf?",
    answers: [
        "Kakashi Hatake",
        "Minato Namikaze",
        "Jiraiya",
        "Tobirama Senju"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who is Naruto's mother?",
    answers: [
        "Tsunade",
        "Kushina Uzumaki",
        "Mito Uzumaki",
        "Mikoto Uchiha"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who was the First Hokage?",
    answers: [
        "Hashirama Senju",
        "Tobirama Senju",
        "Hiruzen Sarutobi",
        "Minato Namikaze"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "What is the name of the tailed beast sealed inside Gaara?",
    answers: [
        "Kurama",
        "Shukaku",
        "Son Goku",
        "Saiken"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Who is the leader of Team 10?",
    answers: [
        "Asuma Sarutobi",
        "Kurenai Yuhi",
        "Kakashi Hatake",
        "Might Guy"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Which clan is famous for using shadow possession techniques?",
    answers: [
        "Akimichi",
        "Nara",
        "Yamanaka",
        "Aburame"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Which clan is known for expanding their bodies using their techniques?",
    answers: [
        "Akimichi",
        "Hyuga",
        "Nara",
        "Uchiha"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Which clan specializes in mind-related techniques?",
    answers: [
        "Yamanaka",
        "Aburame",
        "Nara",
        "Akimichi"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What is the name of the organization that Sasori belonged to?",
    answers: [
        "ANBU",
        "Akatsuki",
        "Root",
        "Seven Ninja Swordsmen"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who was Sasori's partner in the Akatsuki?",
    answers: [
        "Deidara",
        "Kakuzu",
        "Hidan",
        "Itachi"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What village is Gaara the Kazekage of?",
    answers: [
        "Konoha",
        "Suna",
        "Kiri",
        "Iwa"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who was the Second Hokage?",
    answers: [
        "Hashirama Senju",
        "Tobirama Senju",
        "Hiruzen Sarutobi",
        "Danzo Shimura"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Which technique is associated with Tobirama Senju?",
    answers: [
        "Flying Raijin",
        "Flying Thunder God",
        "Amaterasu",
        "Kamui"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Who created the Rasengan?",
    answers: [
        "Naruto Uzumaki",
        "Jiraiya",
        "Minato Namikaze",
        "Kakashi Hatake"
    ],
    correctAnswer: 2,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Who developed the Chidori?",
    answers: [
        "Sasuke Uchiha",
        "Kakashi Hatake",
        "Itachi Uchiha",
        "Minato Namikaze"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What is the Sharingan primarily associated with?",
    answers: [
        "Uchiha clan",
        "Hyuga clan",
        "Senju clan",
        "Uzumaki clan"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "What is the Byakugan primarily associated with?",
    answers: [
        "Uchiha clan",
        "Nara clan",
        "Hyuga clan",
        "Yamanaka clan"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "naruto",
    text: "Who possessed the Rinnegan during the Fourth Great Ninja War?",
    answers: [
        "Nagato",
        "Neji",
        "Rock Lee",
        "Kiba"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What was Nagato's village of origin?",
    answers: [
        "Amegakure",
        "Sunagakure",
        "Kirigakure",
        "Kumogakure"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Who was Nagato's childhood friend and teammate?",
    answers: [
        "Konan",
        "Tsunade",
        "Mei",
        "Kurenai"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Who was the original leader of the Akatsuki?",
    answers: [
        "Nagato",
        "Yahiko",
        "Obito",
        "Itachi"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "What was the name of the masked man who manipulated the Akatsuki from behind the scenes?",
    answers: [
        "Obito Uchiha",
        "Shisui Uchiha",
        "Izuna Uchiha",
        "Fugaku Uchiha"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Who was the founder of the village of Konoha alongside Madara?",
    answers: [
        "Tobirama",
        "Hashirama",
        "Hiruzen",
        "Danzo"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What was Madara Uchiha's relationship to the Uchiha clan?",
    answers: [
        "He was one of its founders and leaders",
        "He was a former Hyuga",
        "He was an adopted Senju",
        "He was unrelated to the clan"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Which forbidden technique did Orochimaru use to revive previous Hokage?",
    answers: [
        "Edo Tensei",
        "Impure World Reincarnation",
        "Reanimation Jutsu",
        "All three names refer to the same technique"
    ],
    correctAnswer: 3,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "What is the true identity of Tobi?",
    answers: [
        "Obito Uchiha",
        "Madara Uchiha",
        "Shisui Uchiha",
        "Kagami Uchiha"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Who was the jinchuriki of the Eight-Tails?",
    answers: [
        "Killer B",
        "Gaara",
        "Yugito Nii",
        "Roshi"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Which tailed beast is known as the Eight-Tails?",
    answers: [
        "Gyuki",
        "Kurama",
        "Shukaku",
        "Saiken"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "Who was the jinchuriki of the Nine-Tails before Naruto?",
    answers: [
        "Kushina Uzumaki",
        "Mito Uzumaki",
        "Tsunade",
        "Konan"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "What is the name of the Six Paths sage who originally possessed immense chakra and created ninshu?",
    answers: [
        "Hagoromo Otsutsuki",
        "Hamura Otsutsuki",
        "Indra Otsutsuki",
        "Ashura Otsutsuki"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Who was Hagoromo Otsutsuki's younger son?",
    answers: [
        "Indra",
        "Ashura",
        "Hamura",
        "Toneri"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Who was Hagoromo Otsutsuki's elder son?",
    answers: [
        "Ashura",
        "Indra",
        "Hamura",
        "Toneri"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Which clan descended from Indra Otsutsuki?",
    answers: [
        "Uzumaki",
        "Senju",
        "Uchiha",
        "Hyuga"
    ],
    correctAnswer: 2,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Which clan descended from Ashura Otsutsuki?",
    answers: [
        "Uchiha",
        "Senju and Uzumaki",
        "Hyuga",
        "Kaguya"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Who was the mother of Hagoromo and Hamura?",
    answers: [
        "Kaguya Otsutsuki",
        "Mito Uzumaki",
        "Kushina Uzumaki",
        "Tsunade"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "What is the name of Kaguya Otsutsuki's powerful eye technique?",
    answers: [
        "Rinne Sharingan",
        "Mangekyo Sharingan",
        "Byakugan",
        "Eternal Sharingan"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Which technique allows Obito to move parts of his body into another dimension?",
    answers: [
        "Kamui",
        "Amaterasu",
        "Izanagi",
        "Tsukuyomi"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Who used the technique Izanagi to alter reality at the cost of an eye?",
    answers: [
        "Danzo Shimura",
        "Kakashi Hatake",
        "Might Guy",
        "Jiraiya"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "Which member of the Akatsuki was partnered with Hidan?",
    answers: [
        "Kakuzu",
        "Deidara",
        "Sasori",
        "Kisame"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "naruto",
    text: "What is Kakuzu particularly known for?",
    answers: [
        "Having multiple hearts",
        "Using puppets",
        "Controlling sand",
        "Using the Byakugan"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "naruto",
    text: "What was the name of Itachi's special Mangekyo Sharingan technique that trapped opponents in an illusion?",
    answers: [
        "Tsukuyomi",
        "Kamui",
        "Kotoamatsukami",
        "Izanami"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of Kakashi's father?",
    answers: ["Sakumo Hatake", "Danzo Shimura", "Jiraiya", "Hiruzen Sarutobi"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was Sakumo Hatake's famous nickname?",
    answers: ["White Fang of the Leaf", "Copy Ninja", "Yellow Flash", "White Wolf"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who was the first person to teach Naruto the Rasengan?",
    answers: ["Jiraiya", "Kakashi", "Minato", "Ebisu"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "How long did Naruto initially train to learn the Rasengan?",
    answers: ["One week", "Three weeks", "One month", "Three months"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the technique Minato created?",
    answers: ["Chidori", "Rasengan", "Raikiri", "Hiraishin"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who developed the Flying Thunder God technique?",
    answers: ["Tobirama Senju", "Minato Namikaze", "Hiruzen Sarutobi", "Hashirama Senju"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which Hokage was responsible for creating the Reanimation Jutsu?",
    answers: ["Hashirama", "Tobirama", "Hiruzen", "Orochimaru"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the forbidden technique used by Tobirama involving revived corpses?",
    answers: ["Edo Tensei", "Kuchiyose", "Shiki Fujin", "Kage Bunshin"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which clan was famous for its exceptional chakra and longevity?",
    answers: ["Uchiha", "Hyuga", "Uzumaki", "Nara"],
    correctAnswer: 2
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was Kushina Uzumaki's original homeland?",
    answers: ["Land of Fire", "Uzushiogakure", "Konohagakure", "Sunagakure"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the village associated with the Uzumaki clan?",
    answers: ["Kirigakure", "Uzushiogakure", "Iwagakure", "Kumogakure"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who was the jinchuriki of the Three-Tails before Yagura?",
    answers: ["Rin Nohara", "Isobu", "No confirmed previous host in the main story", "Yugito"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the Three-Tails?",
    answers: ["Son Goku", "Isobu", "Saiken", "Kokuo"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the Four-Tails?",
    answers: ["Son Goku", "Kokuo", "Gyuki", "Shukaku"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the Five-Tails?",
    answers: ["Saiken", "Kokuo", "Chomei", "Son Goku"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the Six-Tails?",
    answers: ["Saiken", "Chomei", "Isobu", "Kokuo"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the Seven-Tails?",
    answers: ["Chomei", "Saiken", "Gyuki", "Shukaku"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the Eight-Tails?",
    answers: ["Gyuki", "Matatabi", "Son Goku", "Kokuo"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the Nine-Tails?",
    answers: ["Kurama", "Kyubi", "Shukaku", "Matatabi"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which tailed beast is Shukaku?",
    answers: ["One-Tail", "Two-Tails", "Three-Tails", "Four-Tails"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which tailed beast is Matatabi?",
    answers: ["One-Tail", "Two-Tails", "Three-Tails", "Four-Tails"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who was the jinchuriki of the Two-Tails?",
    answers: ["Yugito Nii", "Fu", "Han", "Yagura"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who was the jinchuriki of the Five-Tails?",
    answers: ["Han", "Roshi", "Yugito", "Killer B"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who was the jinchuriki of the Seven-Tails?",
    answers: ["Fu", "Han", "Roshi", "Yugito"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who was the jinchuriki of the Four-Tails?",
    answers: ["Roshi", "Han", "Yagura", "Killer B"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who was the jinchuriki of the Six-Tails?",
    answers: ["Utakata", "Han", "Fu", "Yagura"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of Killer B's tailed beast?",
    answers: ["Gyuki", "Kurama", "Matatabi", "Son Goku"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which village did Killer B belong to?",
    answers: ["Konohagakure", "Kumogakure", "Kirigakure", "Sunagakure"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the sword Kisame carried?",
    answers: ["Kusanagi", "Samehada", "Kubikiribocho", "Nuibari"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which Seven Swordsman of the Mist wielded the Kubikiribocho?",
    answers: ["Zabuza Momochi", "Kisame Hoshigaki", "Mangetsu Hozuki", "Chojuro"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the sword wielded by Chojuro?",
    answers: ["Hiramekarei", "Samehada", "Kabutowari", "Kubikiribocho"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which member of the Akatsuki used paper-based techniques?",
    answers: ["Konan", "Sasori", "Deidara", "Hidan"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was Konan's relationship with Nagato and Yahiko?",
    answers: ["Teammate", "Sibling", "Sensei", "Cousin"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Who founded the original Akatsuki?",
    answers: ["Obito", "Yahiko", "Nagato", "Madara"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was Nagato's clan?",
    answers: ["Uchiha", "Senju", "Uzumaki", "Hyuga"],
    correctAnswer: 2
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of Nagato's teacher?",
    answers: ["Kakashi", "Jiraiya", "Hiruzen", "Tobirama"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which three legendary ninja trained under Hiruzen Sarutobi?",
    answers: ["Jiraiya, Tsunade and Orochimaru", "Kakashi, Guy and Asuma", "Minato, Kushina and Jiraiya", "Danzo, Hiruzen and Tobirama"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was Tsunade's greatest fear?",
    answers: ["Blood", "Snakes", "Death", "War"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was Jiraiya's nickname among the Legendary Sannin?",
    answers: ["Toad Sage", "White Fang", "Yellow Flash", "Snake Sage"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which village did Orochimaru eventually establish as his base?",
    answers: ["Hidden Sound Village", "Hidden Rain Village", "Hidden Grass Village", "Hidden Stone Village"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of Orochimaru's assistant who later became a major antagonist?",
    answers: ["Kabuto Yakushi", "Kimimaro", "Jugo", "Suigetsu"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was Kimimaro's kekkei genkai?",
    answers: ["Shikotsumyaku", "Byakugan", "Ice Release", "Wood Release"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which clan possessed the Shikotsumyaku?",
    answers: ["Kaguya Clan", "Uchiha Clan", "Hyuga Clan", "Uzumaki Clan"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the forbidden technique that seals a soul inside the Shinigami?",
    answers: ["Edo Tensei", "Reaper Death Seal", "Izanami", "Izanagi"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which Hokage used the Reaper Death Seal against Orochimaru?",
    answers: ["Minato", "Hiruzen", "Tobirama", "Hashirama"],
    correctAnswer: 1
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of the monkey summon associated with Hiruzen?",
    answers: ["Enma", "Gamabunta", "Manda", "Katsuyu"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of Jiraiya's largest toad summon?",
    answers: ["Gamabunta", "Fukasaku", "Gamakichi", "Gerotora"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of Tsunade's slug summon?",
    answers: ["Katsuyu", "Manda", "Aoda", "Gamabunta"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "What was the name of Orochimaru's giant snake summon?",
    answers: ["Manda", "Aoda", "Garaga", "Ryuchi"],
    correctAnswer: 0
},
{
    anime: "naruto",
    difficulty: "otaku",
    text: "Which two elders taught Naruto Sage Mode?",
    answers: ["Fukasaku and Shima", "Jiraiya and Fukasaku", "Gamabunta and Shima", "Fukasaku and Gamakichi"],
    correctAnswer: 0
},

//==================================================================
//BLEACH
//==================================================================

{
    anime: "bleach",
    text: "Who is the main protagonist of Bleach?",
    answers: [
        "Ichigo Kurosaki",
        "Uryu Ishida",
        "Renji Abarai",
        "Byakuya Kuchiki"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is the first Soul Reaper Ichigo meets?",
    answers: [
        "Rukia Kuchiki",
        "Yoruichi Shihoin",
        "Rangiku Matsumoto",
        "Soi Fon"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is Ichigo's Zanpakuto called?",
    answers: [
        "Senbonzakura",
        "Zangetsu",
        "Hyorinmaru",
        "Katen Kyokotsu"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is the name of Rukia's Zanpakuto?",
    answers: [
        "Sode no Shirayuki",
        "Suzumushi",
        "Sakanade",
        "Benihime"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Which Soul Reaper division is Byakuya Kuchiki the captain of?",
    answers: [
        "First Division",
        "Sixth Division",
        "Tenth Division",
        "Thirteenth Division"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is the captain of the Tenth Division?",
    answers: [
        "Kenpachi Zaraki",
        "Toshiro Hitsugaya",
        "Shunsui Kyoraku",
        "Mayuri Kurotsuchi"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is Ichigo's best friend who can use Fullbring-like powers?",
    answers: [
        "Chad",
        "Uryu",
        "Renji",
        "Kon"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is the real name of Chad?",
    answers: [
        "Yasutora Sado",
        "Shukuro Tsukishima",
        "Keigo Asano",
        "Kugo Ginjō"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is Orihime Inoue's main ability?",
    answers: [
        "Controlling fire",
        "Rejecting events with her Shun Shun Rikka",
        "Controlling shadows",
        "Creating ice"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What are Hollows?",
    answers: [
        "Human souls that have lost their hearts",
        "Soul Reaper captains",
        "Quincy weapons",
        "Royal Guard members"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is the name of the Soul Society's main military organization?",
    answers: [
        "Gotei 13",
        "Onmitsukido",
        "Central 46",
        "Royal Guard"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is the captain of the Eleventh Division?",
    answers: [
        "Kenpachi Zaraki",
        "Ikkaku Madarame",
        "Shinji Hirako",
        "Kensei Muguruma"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is the captain of the Twelfth Division?",
    answers: [
        "Kisuke Urahara",
        "Mayuri Kurotsuchi",
        "Jushiro Ukitake",
        "Shinji Hirako"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is the name of Ichigo's father?",
    answers: [
        "Isshin Kurosaki",
        "Ryuken Ishida",
        "Kisuke Urahara",
        "Soken Ishida"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What was Ichigo's father known as when he was a Soul Reaper?",
    answers: [
        "Isshin Shiba",
        "Isshin Kuchiki",
        "Isshin Shihouin",
        "Isshin Kyoraku"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Which clan does Byakuya Kuchiki belong to?",
    answers: [
        "Shiba Clan",
        "Kuchiki Clan",
        "Shihoin Clan",
        "Urahara Clan"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is Rukia's adoptive older brother?",
    answers: [
        "Renji Abarai",
        "Byakuya Kuchiki",
        "Jushiro Ukitake",
        "Shunsui Kyoraku"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who was Rukia's childhood friend and later lieutenant?",
    answers: [
        "Renji Abarai",
        "Izuru Kira",
        "Shuhei Hisagi",
        "Kira Sado"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is Renji Abarai's Zanpakuto called?",
    answers: [
        "Hozukimaru",
        "Sode no Shirayuki",
        "Zabimaru",
        "Kazeshini"
    ],
    correctAnswer: 2,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is the name of Toshiro Hitsugaya's Zanpakuto?",
    answers: [
        "Hyorinmaru",
        "Suzumushi",
        "Tobiume",
        "Wabisuke"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Which Zanpakuto is known for its cherry blossom-like blades?",
    answers: [
        "Senbonzakura",
        "Zangetsu",
        "Hyorinmaru",
        "Sakanade"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is the captain of the Fourth Division?",
    answers: [
        "Retsu Unohana",
        "Isane Kotetsu",
        "Unohana",
        "Both Retsu Unohana and Unohana refer to the same character"
    ],
    correctAnswer: 3,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is the name of the Quincy organization led by Yhwach?",
    answers: [
        "Sternritter",
        "Wandenreich",
        "Gotei 13",
        "Xcution"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Who is the leader of the Wandenreich?",
    answers: [
        "Jugram Haschwalth",
        "Yhwach",
        "Uryu Ishida",
        "Lille Barro"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who is Yhwach?",
    answers: [
        "The Quincy Emperor",
        "The Soul King",
        "A former Gotei 13 captain",
        "A Visored"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What race does Uryu Ishida belong to?",
    answers: [
        "Shinigami",
        "Quincy",
        "Arrancar",
        "Fullbringer"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What weapon do Quincy traditionally use to fight Hollows?",
    answers: [
        "Zanpakuto",
        "Spiritual bows",
        "Asauchi",
        "Kido"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Who was the captain of Squad 5 before Sajin Komamura?",
    answers: [
        "Sosuke Aizen",
        "Shinji Hirako",
        "Gin Ichimaru",
        "Kaname Tosen"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What was Sosuke Aizen's Zanpakuto called?",
    answers: [
        "Kyoka Suigetsu",
        "Katen Kyokotsu",
        "Suzumushi",
        "Benihime"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What ability does Kyoka Suigetsu possess?",
    answers: [
        "Complete hypnosis",
        "Time manipulation",
        "Ice manipulation",
        "Gravity manipulation"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Who was Aizen's lieutenant in Squad 5?",
    answers: [
        "Momo Hinamori",
        "Rangiku Matsumoto",
        "Nanao Ise",
        "Isane Kotetsu"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Which Arrancar is known as Ulquiorra?",
    answers: [
        "Espada Number 4",
        "Espada Number 6",
        "Espada Number 8",
        "Espada Number 10"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Who is the Espada known as Grimmjow Jaegerjaquez?",
    answers: [
        "Espada Number 4",
        "Espada Number 5",
        "Espada Number 6",
        "Espada Number 7"
    ],
    correctAnswer: 2,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is the name of Grimmjow's Zanpakuto?",
    answers: [
        "Pantera",
        "Murcielago",
        "Santa Teresa",
        "Los Lobos"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is Ulquiorra's Zanpakuto called?",
    answers: [
        "Pantera",
        "Murcielago",
        "Tigre Estoque",
        "Arrogante"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Which Espada is known as the Primera Espada?",
    answers: [
        "Ulquiorra Cifer",
        "Grimmjow Jaegerjaquez",
        "Coyote Starrk",
        "Baraggan Louisenbairn"
    ],
    correctAnswer: 2,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is the name of the realm where the Arrancar and Aizen are based?",
    answers: [
        "Soul Society",
        "Hueco Mundo",
        "Dangai",
        "Royal Realm"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is a Menos Grande?",
    answers: [
        "A type of Hollow",
        "A type of Quincy",
        "A Soul Reaper captain",
        "A Fullbringer"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Which type of Menos Grande is considered the most powerful among the three main classes?",
    answers: [
        "Gillian",
        "Adjuchas",
        "Vasto Lorde",
        "Grand Fisher"
    ],
    correctAnswer: 2,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Who is Kisuke Urahara?",
    answers: [
        "Former captain of Squad 12",
        "Former captain of Squad 4",
        "Former captain of Squad 6",
        "Former captain of Squad 10"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is Kisuke Urahara's Zanpakuto called?",
    answers: [
        "Benihime",
        "Shinsou",
        "Suzumushi",
        "Sakanade"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Who was the former captain of Squad 2 and leader of the Onmitsukido?",
    answers: [
        "Yoruichi Shihoin",
        "Soi Fon",
        "Sui-Feng",
        "Lisa Yadomaru"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is Yoruichi Shihoin particularly famous for?",
    answers: [
        "Flash Step mastery",
        "Ice Zanpakuto techniques",
        "Healing techniques",
        "Kido barriers"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is the name of the technique that allows Soul Reapers to move at high speed?",
    answers: [
        "Sonido",
        "Hirenkyaku",
        "Shunpo",
        "Bringer Light"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "Which technique is primarily associated with Arrancar movement?",
    answers: [
        "Shunpo",
        "Sonido",
        "Hirenkyaku",
        "Senka"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "Which technique is primarily associated with Quincy movement?",
    answers: [
        "Sonido",
        "Shunpo",
        "Hirenkyaku",
        "Senka"
    ],
    correctAnswer: 2,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is Ichigo's Bankai called?",
    answers: [
        "Tensa Zangetsu",
        "Daiguren Hyorinmaru",
        "Senbonzakura Kageyoshi",
        "Kannonbiraki Benihime Aratame"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "bleach",
    text: "What is Byakuya's Bankai called?",
    answers: [
        "Senbonzakura Kageyoshi",
        "Hakka no Togame",
        "Tekken Tachikaze",
        "Kannonbiraki Benihime Aratame"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is Toshiro Hitsugaya's Bankai called?",
    answers: [
        "Daiguren Hyorinmaru",
        "Hakka no Togame",
        "Kannonbiraki Benihime Aratame",
        "Suzumushi Tsuishiki"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "bleach",
    text: "What is Rukia Kuchiki's Bankai called?",
    answers: [
        "Hakka no Togame",
        "Senbonzakura Kageyoshi",
        "Katen Kyokotsu Karamatsu Shinju",
        "Minazuki"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "bleach",
    text: "What is the name of the Soul King?",
    answers: [
        "His true personal name has not been revealed",
        "Yhwach",
        "Ichibe Hyosube",
        "Genryusai Yamamoto"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "bleach",
    text: "Who leads the Royal Guard, also known as Squad Zero?",
    answers: [
        "Ichibe Hyosube",
        "Genryusai Yamamoto",
        "Shunsui Kyoraku",
        "Kisuke Urahara"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "bleach",
    text: "What is Ichibe Hyosube's title?",
    answers: [
        "Monk Who Calls the Real Name",
        "Captain Commander",
        "The Kenpachi",
        "God of Swords"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "bleach",
    text: "Which Royal Guard member is responsible for creating and modifying clothing?",
    answers: [
        "Senjumaru Shutara",
        "Kirio Hikifune",
        "Oetsu Nimaiya",
        "Tenjiro Kirinji"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "bleach",
    text: "Which Royal Guard member is known as the creator of Zanpakuto?",
    answers: [
        "Oetsu Nimaiya",
        "Ichibe Hyosube",
        "Tenjiro Kirinji",
        "Senjumaru Shutara"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "bleach",
    text: "What is the name of Kenpachi Zaraki's Zanpakuto?",
    answers: [
        "Nozarashi",
        "Hozukimaru",
        "Kazeshini",
        "Wabisuke"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "bleach",
    text: "Who was the previous Kenpachi before Zaraki?",
    answers: [
        "Retsu Unohana",
        "Jushiro Ukitake",
        "Shunsui Kyoraku",
        "Kensei Muguruma"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of Ichigo's Zanpakuto?",
    answers: ["Zangetsu", "Tensa Zangetsu", "Sode no Shirayuki", "Senbonzakura"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of Rukia's Zanpakuto?",
    answers: ["Sode no Shirayuki", "Hyorinmaru", "Suzumebachi", "Minazuki"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Which Zanpakuto is known as the strongest ice-type Zanpakuto?",
    answers: ["Hyorinmaru", "Sode no Shirayuki", "Katen Kyokotsu", "Senbonzakura"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Who wields Hyorinmaru?",
    answers: ["Toshiro Hitsugaya", "Byakuya Kuchiki", "Gin Ichimaru", "Renji Abarai"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Byakuya Kuchiki's Bankai?",
    answers: ["Senbonzakura Kageyoshi", "Katen Kyokotsu", "Daiguren Hyorinmaru", "Hakka no Togame"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Kenpachi Zaraki's Zanpakuto called?",
    answers: ["Nozarashi", "Hozukimaru", "Kazeshini", "Wabisuke"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Renji Abarai's Zanpakuto?",
    answers: ["Hihio Zabimaru", "Sode no Shirayuki", "Zabimaru", "Hozukimaru"],
    correctAnswer: 2
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Renji's Bankai called?",
    answers: ["Hihiō Zabimaru", "Sōō Zabimaru", "Hihiō Zabimaru", "Sōō Zabimaru"],
    correctAnswer: 3
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Who is the captain of Squad 12 for most of the original Bleach storyline?",
    answers: ["Mayuri Kurotsuchi", "Kisuke Urahara", "Shinji Hirako", "Jushiro Ukitake"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Who was the captain of Squad 12 before Mayuri Kurotsuchi?",
    answers: ["Kisuke Urahara", "Shinji Hirako", "Yoruichi Shihoin", "Ukitake"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Kisuke Urahara's Zanpakuto?",
    answers: ["Benihime", "Ashisogi Jizo", "Katen Kyokotsu", "Suzumushi"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Kisuke Urahara's Bankai called?",
    answers: ["Kannonbiraki Benihime Aratame", "Benihime", "Senbonzakura Kageyoshi", "Minazuki"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Yoruichi Shihoin's nickname?",
    answers: ["Flash Goddess", "Cat Goddess", "God of Speed", "Black Flash"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Which squad was Yoruichi originally the captain of?",
    answers: ["Squad 2", "Squad 4", "Squad 8", "Squad 13"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Soi Fon's Zanpakuto?",
    answers: ["Suzumebachi", "Suzumushi", "Haineko", "Wabisuke"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Soi Fon's Bankai called?",
    answers: ["Jakuhō Raikōben", "Suzumebachi", "Raiju Senkei", "Shunkō"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Shunsui Kyoraku's Zanpakuto?",
    answers: ["Katen Kyokotsu", "Sogyo no Kotowari", "Kyoka Suigetsu", "Sakanade"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Jushiro Ukitake's Zanpakuto?",
    answers: ["Sogyo no Kotowari", "Katen Kyokotsu", "Suzumushi", "Minazuki"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Shinji Hirako's Zanpakuto?",
    answers: ["Sakanade", "Benihime", "Kazeshini", "Wabisuke"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Shinji's Bankai called?",
    answers: ["Sakashima Yokoshima Happofusagari", "Sakanade", "Kannonbiraki", "Tekken Tachikaze"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Shuhei Hisagi's Zanpakuto?",
    answers: ["Kazeshini", "Wabisuke", "Haineko", "Tobiume"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Izuru Kira's Zanpakuto?",
    answers: ["Wabisuke", "Kazeshini", "Hozukimaru", "Ashisogi Jizo"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What does Wabisuke's ability do?",
    answers: ["Doubles the weight of what it strikes", "Cuts spiritual pressure", "Freezes enemies", "Creates illusions"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Rangiku Matsumoto's Zanpakuto?",
    answers: ["Haineko", "Tobiume", "Suzumebachi", "Ruri'iro Kujaku"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Momo Hinamori's Zanpakuto?",
    answers: ["Tobiume", "Haineko", "Wabisuke", "Sode no Shirayuki"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Mayuri Kurotsuchi's Zanpakuto?",
    answers: ["Ashisogi Jizo", "Konjiki Ashisogi Jizo", "Hyorinmaru", "Katen Kyokotsu"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Mayuri's Bankai called?",
    answers: ["Konjiki Ashisogi Jizo", "Ashisogi Jizo", "Mata Ashisogi Jizo", "Kurohitsugi"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Which captain is famous for using a Zanpakuto that can manipulate poison?",
    answers: ["Mayuri Kurotsuchi", "Byakuya Kuchiki", "Toshiro Hitsugaya", "Komamura"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Kaname Tosen's Zanpakuto?",
    answers: ["Suzumushi", "Kazeshini", "Sakanade", "Benihime"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Tosen's Bankai called?",
    answers: ["Suzumushi Tsuishiki: Enma Korogi", "Suzumushi", "Kokujō Tengen Myō'ō", "Senbonzakura Kageyoshi"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Sajin Komamura's Bankai?",
    answers: ["Kokujō Tengen Myō'ō", "Kokujō Tengen Myō'ō: Dangai Jōe", "Hihiō Zabimaru", "Tekken Tachikaze"],
    correctAnswer: 1
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Kensei Muguruma's Zanpakuto?",
    answers: ["Tekken Tachikaze", "Kazeshini", "Haineko", "Suzumebachi"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Kensei's Bankai called?",
    answers: ["Tekken Tachikaze", "Tekken Tachikaze: Tekken Tachikaze", "Tekken Tachikaze: Tekken", "Tekken Tachikaze: Tekken Tachikaze"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Which Visored was previously the captain of Squad 5?",
    answers: ["Shinji Hirako", "Kensei Muguruma", "Love Aikawa", "Hachigen Ushoda"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Which Visored was previously the captain of Squad 9?",
    answers: ["Kensei Muguruma", "Shinji Hirako", "Rose Otoribashi", "Love Aikawa"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Which Visored was previously the captain of Squad 3?",
    answers: ["Rose Otoribashi", "Shinji Hirako", "Kensei Muguruma", "Love Aikawa"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of Ichigo's inner Hollow?",
    answers: ["White", "Zangetsu", "Hollow Ichigo", "All of these refer to related aspects of his Hollow"],
    correctAnswer: 3
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Who originally created the Hollow known as White?",
    answers: ["Aizen", "Quincy researchers", "Kisuke Urahara", "Mayuri"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of the Quincy technique used to steal Bankai?",
    answers: ["Bankai Steal", "Medallion", "Auswählen", "Sankt Altar"],
    correctAnswer: 1
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of the Quincy technique that selects and distributes power?",
    answers: ["Auswählen", "Sankt Altar", "Blut Vene", "Blut Arterie"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of Uryu Ishida's father?",
    answers: ["Ryuken Ishida", "Soken Ishida", "Souken Ishida", "Juha Bach"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What was the name of Uryu's grandfather?",
    answers: ["Soken Ishida", "Ryuken Ishida", "Isshin Shiba", "Masaki Kurosaki"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What was the name of Uryu's mother?",
    answers: ["Masaki Kurosaki", "Kanae Katagiri", "Yoruichi Shihoin", "Unagiya"],
    correctAnswer: 1
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of Ichigo's father?",
    answers: ["Isshin Kurosaki", "Ryuken Ishida", "Kisuke Urahara", "Jushiro Ukitake"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What was Isshin's original surname before living as Ichigo's father?",
    answers: ["Shiba", "Kurosaki", "Kuchiki", "Urahara"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of Isshin's former Zanpakuto?",
    answers: ["Engetsu", "Zangetsu", "Katen Kyokotsu", "Ryujin Jakka"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is the name of Genryusai Yamamoto's Zanpakuto?",
    answers: ["Ryujin Jakka", "Ryujin Jakka", "Zanka no Tachi", "Sakuran"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What is Yamamoto's Bankai called?",
    answers: ["Zanka no Tachi", "Ryujin Jakka", "Senbonzakura Kageyoshi", "Katen Kyokotsu"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "Which Squad 4 captain is famous for her gentle personality but terrifying combat history?",
    answers: ["Retsu Unohana", "Isane Kotetsu", "Nanao Ise", "Lisa Yadomaru"],
    correctAnswer: 0
},
{
    anime: "bleach",
    difficulty: "otaku",
    text: "What was Unohana's original title?",
    answers: ["Yachiru Unohana", "Kenpachi Unohana", "Retsu Yachiru", "Unohana Kenpachi"],
    correctAnswer: 3
},
//==================================================================
//DEATH NOTE
//==================================================================


{
    anime: "deathNote",
    text: "What is the name of the main protagonist of Death Note?",
    answers: [
        "L Lawliet",
        "Light Yagami",
        "Mello",
        "Near"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is the name of the detective known as L?",
    answers: [
        "L Lawliet",
        "Teru Mikami",
        "Touta Matsuda",
        "Soichiro Yagami"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What supernatural object does Light Yagami find?",
    answers: [
        "A cursed sword",
        "A Death Note",
        "A magic mirror",
        "A Shinigami mask"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What happens when a person's name is written in the Death Note?",
    answers: [
        "They lose their memories",
        "They become a Shinigami",
        "They die according to the Death Note's rules",
        "They fall into a permanent sleep"
    ],
    correctAnswer: 2,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "Who is the Shinigami who originally owns Light's Death Note?",
    answers: [
        "Rem",
        "Ryuk",
        "Gelus",
        "Sidoh"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is the name of Light's father?",
    answers: [
        "Soichiro Yagami",
        "Shuichi Aizawa",
        "Watari",
        "Touta Matsuda"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is Misa Amane's occupation?",
    answers: [
        "Detective",
        "Idol and model",
        "Police officer",
        "Journalist"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is the name of Misa's Shinigami?",
    answers: [
        "Ryuk",
        "Rem",
        "Gelus",
        "Sidoh"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What does the Shinigami Eyes deal allow a human to see?",
    answers: [
        "A person's future",
        "A person's true identity and lifespan",
        "A person's memories",
        "A person's emotions"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What must a human usually give up to obtain the Shinigami Eyes?",
    answers: [
        "Half of their remaining lifespan",
        "All of their memories",
        "Their ability to write names",
        "Their physical strength"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What alias does Light use when he becomes known to the public?",
    answers: [
        "Kira",
        "L",
        "X-Kira",
        "N"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What does the name Kira mean in the context of the series?",
    answers: [
        "Killer",
        "God",
        "Judge",
        "Shinigami"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "Who is the leader of the investigation team trying to catch Kira?",
    answers: [
        "L",
        "Near",
        "Mello",
        "Aizawa"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is L's most famous characteristic?",
    answers: [
        "His extraordinary detective skills",
        "His ability to use the Death Note",
        "His Shinigami powers",
        "His position as a police chief"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is the name of the orphanage where Near and Mello were raised?",
    answers: [
        "Wammy's House",
        "Kira Academy",
        "Watari House",
        "Winchester House"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "Who is Mello's main rival among the successors to L?",
    answers: [
        "Light",
        "Near",
        "Matsuda",
        "Aizawa"
    ],
    correctAnswer: 1,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "Who is Near's main rival among the successors to L?",
    answers: [
        "Mello",
        "Light",
        "Mikami",
        "Watari"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is Near's real name?",
    answers: [
        "Nate River",
        "Mihael Keehl",
        "Beyond Birthday",
        "Mail Jeevas"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What is Mello's real name?",
    answers: [
        "Nate River",
        "Mihael Keehl",
        "L Lawliet",
        "Matt Jeevas"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What is the real name of L?",
    answers: [
        "L Lawliet",
        "Lawrence Lawliet",
        "Lind L. Tailor",
        "Ryuzaki"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "Who is Watari?",
    answers: [
        "L's assistant and caretaker",
        "Light's older brother",
        "A Shinigami",
        "Mello's father"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is Watari's real name?",
    answers: [
        "Quillsh Wammy",
        "Roger Ruvie",
        "Andrew Miller",
        "David Hoope"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "Who is the second Kira?",
    answers: [
        "Misa Amane",
        "Teru Mikami",
        "Mello",
        "Kiyomi Takada"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "Who becomes known as X-Kira?",
    answers: [
        "Teru Mikami",
        "Mello",
        "Light Yagami",
        "Halle Lidner"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What profession does Teru Mikami have?",
    answers: [
        "Prosecutor",
        "Police officer",
        "Detective",
        "Journalist"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What is Kiyomi Takada's profession?",
    answers: [
        "Television news anchor",
        "Police detective",
        "Prosecutor",
        "Model"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What is the name of Light's younger sister?",
    answers: [
        "Sayu Yagami",
        "Sachiko Yagami",
        "Naomi Misora",
        "Kiyomi Takada"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is the name of the FBI agent who investigates Light?",
    answers: [
        "Raye Penber",
        "Aiber",
        "Halle Lidner",
        "Stephen Gevanni"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "Who was Raye Penber secretly engaged to?",
    answers: [
        "Naomi Misora",
        "Misa Amane",
        "Kiyomi Takada",
        "Halle Lidner"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What was Naomi Misora's former profession?",
    answers: [
        "FBI agent",
        "Police detective",
        "Prosecutor",
        "Journalist"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What is unusual about the Death Note's ownership rules?",
    answers: [
        "Ownership can be relinquished, causing the human to lose memories related to the Note",
        "Only Shinigami can own it",
        "Ownership can never be transferred",
        "The owner automatically becomes immortal"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What happens to Light's memories when he relinquishes ownership of the Death Note?",
    answers: [
        "He loses his memories connected to the Death Note",
        "He loses all memories from childhood",
        "He permanently loses his intelligence",
        "Nothing happens"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "Who kills L?",
    answers: [
        "Light",
        "Rem",
        "Misa",
        "Ryuk"
    ],
    correctAnswer: 1,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "Why does Rem kill L?",
    answers: [
        "To protect Misa",
        "To help Mello",
        "Because Ryuk ordered her to",
        "Because L threatened the Shinigami King"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What happens to Rem after she kills L and Watari?",
    answers: [
        "She dies",
        "She loses her Death Note",
        "She becomes human",
        "She returns to the Shinigami Realm"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "Which Shinigami dies to save Misa before Rem becomes involved with her?",
    answers: [
        "Gelus",
        "Ryuk",
        "Sidoh",
        "Armonia Justin Beyondormason"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What happens to a Shinigami who intentionally extends a human's life out of love?",
    answers: [
        "The Shinigami dies",
        "The Shinigami becomes human",
        "The Shinigami loses its Death Note",
        "The Shinigami is imprisoned"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "Who ultimately kills Light Yagami?",
    answers: [
        "Ryuk",
        "Near",
        "Matsuda",
        "Mello"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "Why does Ryuk write Light's name in the Death Note?",
    answers: [
        "He decides Light's story is over and refuses to wait for his execution",
        "Near orders him to",
        "Misa asks him to",
        "He wants to become human"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What is the name of the Shinigami Realm's ruler?",
    answers: [
        "The Shinigami King",
        "Ryuk",
        "Sidoh",
        "Gelus"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What is special about the 13-day rule that Light's group once relied upon?",
    answers: [
        "It was a fake rule added to the Death Note",
        "It was the original rule for becoming a Shinigami",
        "It allowed unlimited ownership",
        "It doubled a user's lifespan"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "Who discovers that the 13-day rule is fake?",
    answers: [
        "Near's investigation team",
        "Misa",
        "Ryuk",
        "Soichiro Yagami"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What is the name of the fake detective Light uses as a decoy during the Kira investigation?",
    answers: [
        "Lind L. Tailor",
        "Raye Penber",
        "Aiber",
        "Hitoshi Demegawa"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What mistake helps L narrow down Kira's location early in the investigation?",
    answers: [
        "Kira reacts to a broadcast restricted to the Kanto region",
        "Kira attacks the police station",
        "Kira contacts the FBI directly",
        "Kira reveals his real name"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What is the name of the company that Light and the investigation team infiltrate?",
    answers: [
        "Yotsuba Group",
        "Wammy's House",
        "SPK",
        "Mello's Mafia"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "During the Yotsuba arc, who is secretly using the Death Note?",
    answers: [
        "Kyosuke Higuchi",
        "Reiji Namikawa",
        "Shingo Mido",
        "Hirokazu Ukita"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What is the name of the organization Near leads?",
    answers: [
        "SPK",
        "Yotsuba Group",
        "Task Force",
        "Wammy's House"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "What does Mello use to pressure the Japanese investigation team?",
    answers: [
        "He kidnaps Sayu Yagami",
        "He steals Light's Death Note directly",
        "He exposes Light as Kira",
        "He kidnaps Misa"
    ],
    correctAnswer: 0,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "Who is the first person shown to possess the Death Note in the human world?",
    answers: [
        "Light Yagami",
        "Misa Amane",
        "Teru Mikami",
        "Kiyomi Takada"
    ],
    correctAnswer: 0,
    difficulty: "easy"
},

{
    anime: "deathNote",
    text: "What is one of the main limitations of the Death Note?",
    answers: [
        "The user must have the person's face in mind when writing the name",
        "The user must physically touch the target",
        "The target must be within one kilometer",
        "The user must know the target's address"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},

{
    anime: "deathNote",
    text: "How long does a user have to specify the cause of death after writing a person's name?",
    answers: [
        "40 seconds",
        "6 minutes and 40 seconds",
        "13 days",
        "24 hours"
    ],
    correctAnswer: 1,
    difficulty: "hard"
},

{
    anime: "deathNote",
    text: "What happens if no cause of death is specified after the required time?",
    answers: [
        "The person dies of a heart attack",
        "The name becomes invalid",
        "The Death Note stops working permanently",
        "The target becomes a Shinigami"
    ],
    correctAnswer: 0,
    difficulty: "medium"
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is the name of Light Yagami's Shinigami?",
    answers: ["Ryuk", "Rem", "Gelus", "Sidoh"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is the name of Misa Amane's Shinigami?",
    answers: ["Rem", "Ryuk", "Gelus", "Armonia Justin Beyondormason"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Which Shinigami originally saved Misa's life?",
    answers: ["Gelus", "Rem", "Ryuk", "Sidoh"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What happened to Gelus after saving Misa?",
    answers: ["He lost his Death Note", "He died", "He became human", "He was punished by Ryuk"],
    correctAnswer: 1
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is the rule concerning a Shinigami who kills someone to extend a human's life?",
    answers: ["The Shinigami dies", "The human dies", "The Death Note disappears", "Nothing happens"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is the name of the detective known as L?",
    answers: ["L Lawliet", "Lawliet L", "Lind L. Tailor", "Hideki Ryuga"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Which alias did L use while attending university?",
    answers: ["Hideki Ryuga", "Eraldo Coil", "Deneuve", "Ryuzaki"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was L's fake name when interacting directly with Light?",
    answers: ["Ryuzaki", "Hideki Ryuga", "Lind L. Tailor", "Rue Ryuzaki"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of the criminal used as bait during L's first televised challenge to Kira?",
    answers: ["Lind L. Tailor", "Aiber", "Wedy", "Mello"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What did Lind L. Tailor claim to be?",
    answers: ["The real L", "Kira", "A police detective", "A prosecutor"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of the FBI agent who investigated Light's family?",
    answers: ["Raye Penber", "Aiber", "Matt", "Halle Lidner"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Raye Penber's fiancee's real name?",
    answers: ["Naomi Misora", "Naomi Misora", "Shiori Akino", "Kiyomi Takada"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Naomi Misora's former profession?",
    answers: ["FBI agent", "Police officer", "Journalist", "Lawyer"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What alias did Naomi Misora use when speaking to Light?",
    answers: ["Shoko Maki", "Shiori Akino", "Naomi Misora", "Maki Shoko"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of Light's father?",
    answers: ["Soichiro Yagami", "Sachiko Yagami", "Sayu Yagami", "Touta Matsuda"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What position did Soichiro Yagami hold?",
    answers: ["Chief of the NPA task force", "FBI Director", "Police Commissioner", "Judge"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is Light's mother's name?",
    answers: ["Sachiko Yagami", "Sayu Yagami", "Kiyomi Takada", "Naomi Misora"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is Light's sister's name?",
    answers: ["Sayu Yagami", "Sachiko Yagami", "Misa Amane", "Kiyomi Takada"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Light's rank in the police investigation after joining?",
    answers: ["Special task force member", "Detective Chief", "FBI Agent", "Police Commissioner"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Which task force member was known for being extremely impulsive?",
    answers: ["Touta Matsuda", "Aizawa", "Ide", "Mogi"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of the television presenter who became the second Kira?",
    answers: ["Misa Amane", "Kiyomi Takada", "Halle Lidner", "Naomi Misora"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Misa's profession?",
    answers: ["Model", "Actress", "Singer", "Journalist"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What advantage did the Shinigami Eyes give Misa?",
    answers: ["She could see people's names and lifespans", "She could control Shinigami", "She could erase names", "She could revive people"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What price must a human pay to obtain Shinigami Eyes?",
    answers: ["Half of their remaining lifespan", "Their entire lifespan", "Their memories", "Their Death Note"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Can a human who owns Shinigami Eyes see the lifespan of another Death Note owner?",
    answers: ["Yes", "No", "Only if they are Kira", "Only after touching the Death Note"],
    correctAnswer: 1
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What happens to a person's lifespan when they use the Death Note?",
    answers: ["It is shortened", "Nothing directly", "It is halved", "It becomes visible"],
    correctAnswer: 1
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "How many days can a person specify a cause of death before the default rule applies?",
    answers: ["6 days", "13 days", "23 days", "40 days"],
    correctAnswer: 2
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What happens if the cause of death is physically impossible?",
    answers: ["The person dies of a heart attack", "The Death Note fails", "The user dies", "The target survives"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is the maximum number of days a Death Note can control a person's actions before their death?",
    answers: ["13 days", "23 days", "25 days", "40 days"],
    correctAnswer: 1
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is the famous 13-day rule?",
    answers: ["A rule stating that if the owner does not write a name for 13 days, they die", "A rule concerning ownership", "A rule concerning Shinigami Eyes", "A rule concerning Misa"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Who later revealed that the 13-day rule was fake?",
    answers: ["Near", "Mello", "Ryuk", "Rem"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of the orphanage where Near and Mello were raised?",
    answers: ["Wammy's House", "L's House", "Watari House", "Winchester House"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Who founded Wammy's House?",
    answers: ["Watari", "L", "Near", "Roger"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Watari's real name?",
    answers: ["Quillsh Wammy", "Roger Ruvie", "L Lawliet", "Anthony Carter"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Which successor of L was more willing to use criminal methods?",
    answers: ["Mello", "Near", "Matt", "Roger"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Mello's real name?",
    answers: ["Mihael Keehl", "Nate River", "Mail Jeevas", "Anthony Carter"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Near's real name?",
    answers: ["Nate River", "Mihael Keehl", "Mail Jeevas", "Roger Ruvie"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Matt's real name?",
    answers: ["Mail Jeevas", "Mihael Keehl", "Nate River", "Quillsh Wammy"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Matt's main hobby?",
    answers: ["Video games", "Reading", "Chess", "Motorcycles"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of the corporation that became involved with the Kira investigation?",
    answers: ["Yotsuba Group", "Matsuda Corporation", "Wammy Group", "Sakura TV"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Which Yotsuba executive possessed the Death Note?",
    answers: ["Kyosuke Higuchi", "Reiji Namikawa", "Shingo Mido", "Takeshi Ooi"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was Higuchi's position within Yotsuba?",
    answers: ["Executive", "CEO", "Accountant", "Security Chief"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of the fake Kira broadcast station?",
    answers: ["Sakura TV", "NHN", "Yotsuba TV", "Kira News"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Which Shinigami owned the Death Note that Light eventually picked up?",
    answers: ["Ryuk", "Rem", "Gelus", "Sidoh"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What does Ryuk particularly enjoy eating?",
    answers: ["Apples", "Grapes", "Melons", "Strawberries"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What does Ryuk say apples are like to him?",
    answers: ["Drugs", "Candy", "Heaven", "Alcohol"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What does Rem look like compared with Ryuk?",
    answers: ["A more skeletal pale Shinigami", "A human", "A smaller Shinigami", "A masked Shinigami"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Who killed L?",
    answers: ["Rem", "Light", "Ryuk", "Misa"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Why did Rem kill L?",
    answers: ["To protect Misa", "To help Light", "Because L attacked her", "Because Ryuk ordered her"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What happened to Rem after killing L and Watari?",
    answers: ["She died", "She escaped", "She lost her memories", "She became human"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What is Light's occupation after graduating university?",
    answers: ["Police officer/investigator", "Lawyer", "Doctor", "Journalist"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "What was the name of the actress and Kira supporter who dated Light?",
    answers: ["Kiyomi Takada", "Misa Amane", "Naomi Misora", "Halle Lidner"],
    correctAnswer: 0
},
{
    anime: "deathNote",
    difficulty: "otaku",
    text: "Who eventually kills Light Yagami?",
    answers: ["Ryuk", "Near", "Matsuda", "Mello"],
    correctAnswer: 0
}

];

function getQuestionsByDifficulty(){
    return questions.filter(function(question){
        return question.difficulty === selectedDifficulty && 
               question.anime === selectedAnime;

    });
}

let quizQuestions = [];
   
    

let backToAnimeButton = document.getElementById("backToAnimeButton");
let backToDifficultyButton = document.getElementById("backToDifficultyButton");
let animeSelection = document.getElementById("animeSelection");
let onePieceButton = document.getElementById("onePieceButton");
let narutoButton = document.getElementById("narutoButton");
let bleachButton = document.getElementById("bleachButton");
let deathNoteButton = document.getElementById("deathNoteButton");
let easyButton = document.getElementById("easyButton");
let mediumButton = document.getElementById("mediumButton");
let hardButton = document.getElementById("hardButton");
let otakuButton = document.getElementById("otakuButton");
let quiz = document.getElementById("quiz");
let difficulty = document.getElementById("difficulty");
let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");
console.log("HTML progressText:", progressText);
let scoreNumber = document.getElementById("scoreNumber");
let scoreTotalNumber = document.getElementById("scoreTotalNumber");

let question = document.getElementById("question");
let questionNumber = document.getElementById("questionNumber");
let result = document.getElementById("result");
let finalScore = document.getElementById("finalScore");
let restartButton = document.getElementById("restartButton");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

function showQuestion(){
    answer1.classList.remove("correct");
    answer2.classList.remove("correct");
    answer3.classList.remove("correct");
    answer4.classList.remove("correct");
question.textContent = quizQuestions[currentQuestion].text;
questionNumber.textContent = "Question "+(currentQuestion + 1)+" of "+quizQuestions.length;

    answer1.textContent = quizQuestions[currentQuestion].answers[0];
    answer2.textContent = quizQuestions[currentQuestion].answers[1];
    answer3.textContent = quizQuestions[currentQuestion].answers[2];
    answer4.textContent = quizQuestions[currentQuestion].answers[3];

    let progress = ((currentQuestion) / quizQuestions.length) * 100;

progressBar.style.width = progress + "%";
progressText.textContent = Math.round(progress) + "%";
}

function selectRandomQuestions() {
    quizQuestions = [];
    let filteredQuestions = getQuestionsByDifficulty();
    while (quizQuestions.length < quizLength) {
        let randomIndex = Math.floor(Math.random()* filteredQuestions.length);
        if(!quizQuestions.includes(filteredQuestions[randomIndex])){
            quizQuestions.push(filteredQuestions[randomIndex]);
        }
    }
}

function checkAnswer(answerIndex) {

    if (currentQuestion >= quizQuestions.length) {
        return;
    }

    let correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    let answersButtons = [answer1, answer2, answer3, answer4];

    answersButtons[correctAnswer].classList.add("correct");

    if (answerIndex === correctAnswer) {
        score++;
       scoreNumber.textContent = score;
    }

    currentQuestion++;

    setTimeout(function() {

        if (currentQuestion < quizQuestions.length) {

            showQuestion();

        } else {

            progressBar.style.width = "100%";
            progressText.textContent = "100%";

            quiz.style.display = "none";
            result.style.display = "block";

           finalScore.textContent = score + " / " + quizLength;
        }

    }, 800);
}
    
function startQuiz() {
    score = 0;
    currentQuestion = 0;

  scoreNumber.textContent = 0;
  scoreTotalNumber.context = quizLength;

    selectRandomQuestions();

    animeSelection.style.display = "none";
    difficulty.style.display = "none";
    quiz.style.display = "block";

    backToAnimeButton.style.display = "none";
    backToDifficultyButton.style.display = "block";

    document.getElementById("score").style.display = "block";
    showQuestion();
}

function selectAnime(anime) {
    selectedAnime = anime;

    animeSelection.style.display = "none";
    difficulty.style.display = "block";
    quiz.style.display = "none";

    backToAnimeButton.style.display = "block";
    backToDifficultyButton.style.display = "none";
}

onePieceButton.addEventListener("click", function() {
   selectAnime("onePiece");
});

narutoButton.addEventListener("click", function() {
    selectAnime("naruto");
});

bleachButton.addEventListener("click", function(){
    selectAnime("bleach");
});

deathNoteButton.addEventListener("click", function() {
    selectAnime("deathNote");
});

restartButton.addEventListener("click", function() {
    result.style.display = "none";
    quiz.style.display = "block";
    score =0;
    currentQuestion = 0;
   selectRandomQuestions();
    showQuestion();
});

backToAnimeButton.addEventListener("click", function() {

    difficulty.style.display = "none";
    quiz.style.display = "none";
    animeSelection.style.display = "block";

    backToAnimeButton.style.display = "none";
    backToDifficultyButton.style.display = "none";

    document.getElementById("score").style.display = "none";

});

backToDifficultyButton.addEventListener("click", function() {

    quiz.style.display = "none";
    difficulty.style.display = "block";

    backToDifficultyButton.style.display = "none";
    backToAnimeButton.style.display = "block";

    document.getElementById("score").style.display = "none";
    otakuButton.classList.remove("otaku-active");
    document.body.classList.remove("otaku-mode");

});
answer1.addEventListener("click", function(){
    checkAnswer(0);
});
    
    

answer2.addEventListener("click", function() {
    checkAnswer(1);
});

answer3.addEventListener("click", function() {
   checkAnswer(2);
});

answer4.addEventListener("click", function() {
   checkAnswer(3);
});

easyButton.addEventListener("click", function(){
    selectedDifficulty = "easy";
    startQuiz();
    
});

mediumButton.addEventListener("click", function(){
    selectedDifficulty = "medium";
    startQuiz();
   
});

hardButton.addEventListener("click", function(){
    selectedDifficulty = "hard";
    startQuiz();
   
});

otakuButton.addEventListener("click", function(){
    selectedDifficulty = "otaku";
    otakuButton.classList.add("otaku-active");
    document.body.classList.add("otaku-mode");

    startQuiz();
   
})