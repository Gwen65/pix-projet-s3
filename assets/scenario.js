const contacts = ["Alice", "H", "Benjamin", "Nathan", "Ninon", "Galoup", "Jeanne", "Marco"];

var chapitres = [
	{
		scenes: [
			{
				contact: "Alice",
				dialogues: [
					{ perso: "Alice", message: "Salut Julien" },
					{ perso: "Alice", message: "Tu vas bien ?" },
					{ perso: "Alice", message: "Prêt pour le début du jeu ?" },
					{ perso: "Julien", message: "Évidemment Alice. T'es où ?" },
					{ perso: "Julien", message: "Moi je suis en salle informatique" },
					{ perso: "Alice", message: "À la BU" },
					{ perso: "Alice", message: "La première énigme ne va pas tarder" },
					{ perso: "Julien", message: "On va tous recevoir quelque chose sur nos portables ?" },
					{ perso: "Alice", message: "Oui, une photo, un code, une citation…" },
					{ perso: "Alice", message: "Envoyé par H, le Maître du jeu" },
					{ perso: "Alice", message: "C’est comme ça que le jeu commence" },
					{ perso: "Alice", message: "Ça y est on a reçu le premier message ! 😱" }
				],
				suite: "H"
			},
			{
				contact: "H",
				dialogues: [
					{ perso: "H", message: "Qui entre en jeu ?" }
				],
				suite: "Alice"
			},
			{
				contact: "Alice",
				dialogues: [
					{ perso: "Alice", message: "Bon c'est facile" },
					{ perso: "Alice", message: "Il suffit de répondre \"moi\"" }
				]
			}
		],
		question: {
			perso: "H",
			reponses: ["moi", "julien"],
			erreurs: "Ce n'est pas ce que j'attends",
			reussite: "Bienvenue"
		}
	},
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "<a href='https://www.univ-jfc.fr/albi' target='_blank'>Clique sur ce lien</a>" },
				{ perso: "H", message: "Quelle heure est-il ?" }
			],
			suite: "Alice"
		},
		{
			contact: "Alice",
			dialogues: [
				{ perso: "Alice", message: "Ok j'ai trouvé" },
				{ perso: "Alice", message: "Julien, tu peux me demander de l’aide si besoin" },
				{ perso: "Alice", message: "Il te suffit de m’envoyer \"aide moi\"" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["02:40", "2:40", "02h40", "2h40", "14:40", "14h40"],
			erreurs: "Non ce n'est pas ça. Les apparences sont parfois trompeuses",
			reussite: "Félicitations"
		},
		indices: [
			{
				perso: "Alice",
				message: "Il faut regarder l’image interactive en bas de la page et envoyer l’horaire de l’horloge"
			},
			{
				perso: "Alice",
				message: "Les flèches de navigation t’aident à te déplacer dans l’image"
			}
		]
	}
];
