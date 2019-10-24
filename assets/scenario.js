const contacts = ["Alice", "H", "Benjamin", "Nathan", "Ninon", "Galoup", "Jeanne", "Marco"];

var chapitres = [
	{
		scenes: [
			{
				contact: "Alice",
				dialogues: [
					{ perso: "Alice", message: "Alors, prêt pour le début du jeu ?" },
					{ perso: "Julien", message: "Évidemment. T'es où ?" },
					{ perso: "Julien", message: "Moi je suis en salle informatique" },
					{ perso: "Alice", message: "À la BU" },
					{ perso: "Alice", message: "Je ne suis pas la seule à attendre le début du jeu" },
					{ perso: "Alice", message: "Certains ont l’air tendu 😄" },
					{ perso: "Julien", message: "C’est normal, beaucoup veulent rejoindre l’Organisation" },
					{ perso: "Julien", message: "On va tous recevoir quelque chose sur nos portables ?" },
					{ perso: "Alice", message: "Oui, une photo, un code, une citation…" },
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
					{ perso: "Alice", message: "Bon c'est facile, il suffit de rentrer son nom" }
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
				{ perso: "H", message: "<a href='https://drive.google.com/file/d/1TjCTBTRP_a5GkBazDxkP1BjcFIWnfab1/view?usp=sharing' target='_blank'>Clique sur ce lien</a>" },
				{ perso: "H", message: "Quelle heure est-il ?" }
			],
			suite: "Alice"
		},
		{
			contact: "Alice",
			dialogues: [
				{ perso: "Alice", message: "Ok j'ai trouvé" },
				{ perso: "Alice", message: "Julien, si tu as besoin d'aide, demande moi en privé" },
				{ perso: "Julien", message: "Aide moi Ô Puissante Alice" },
				{ perso: "Alice", message: "\"Aide moi\" suffira" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["01:45", "1:45", "01h45", "1h45", "13:45", "13h45"],
			erreurs: "Non ce n'est pas ça. Les apparences sont parfois trompeuses",
			reussite: "Félicitations"
		},
		indices: [
			{
				perso: "Alice",
				message: "La photo est modifiée"
			},
			{
				perso: "Alice",
				message: "Télécharge la photo, puis fais une recherche par image inversée"
			}
		]
	}
];
