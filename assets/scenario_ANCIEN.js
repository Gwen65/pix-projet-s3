const contacts = ["Alice, Benjamin", "H", "Alice", "Benjamin", "Nathan", "Ninon", "Galoup", "Jeanne", "Marco"];

var chapitres = [
	{
		scenes: [
			{
				contact: "Alice, Benjamin",
				dialogues: [
					{ perso: "Alice", message: "Alors, prêt pour le début du jeu ?" },
					{ perso: "Benjamin", message: "Je suis à fond" },
					{ perso: "Julien", message: "Évidemment, Alice" },
					{ perso: "Benjamin", message: "J’attends ce jour depuis mon admission à la fac" },
					{ perso: "Benjamin", message: "Ça va, Ju ?" },
					{ perso: "Julien", message: "Ça va. Vous êtes où ?" },
					{ perso: "Julien", message: "Moi je suis en salle informatique" },
					{ perso: "Alice", message: "À la BU" },
					{ perso: "Benjamin", message: "En amphi. J’essaye de me faire discret, le prof a l’air tendu" },
					{ perso: "Alice", message: "Ils savent qu’on attend l’énigme. Ça ne leur plait pas du tout" },
					{ perso: "Benjamin", message: "On est majeurs et responsables" },
					{ perso: "Alice", message: "😄" },
					{ perso: "Alice", message: "Benjamin « responsable »" },
					{ perso: "Julien", message: "Un concept assez étrange" },
					{ perso: "Benjamin", message: "On va tous recevoir quelque chose sur nos téléphones ?" },
					{ perso: "Alice", message: "Oui, une photo, un code, une citation…" },
					{ perso: "Alice", message: "C’est comme ça que le jeu commence" },
					{ perso: "Julien", message: "C’est déjà assez spécial d’avoir ajouté le contact d’un inconnu" },
					{ perso: "Benjamin", message: "Oui, H" },
					{ perso: "Alice", message: "C’est le maître du jeu" },
					{ perso: "Julien", message: "Ce ne sera plus un inconnu si on gagne le Jeu" },
					{ perso: "Benjamin", message: "Je suis prêt à tout" },
					{ perso: "Alice", message: "Même à perdre ?" },
					{ perso: "Benjamin", message: "Dans tes rêves" },
					{ perso: "Julien", message: "…" },
					{ perso: "Benjamin", message: "Ça y est on a reçu le premier message !" },
					{ perso: "Benjamin", message: "Allez voir dans vos contacts !!! 😱" }
				],
				suite: "H"
			},
			{
				contact: "H",
				dialogues: [
					{ perso: "H", message: "Qui entre en jeu ?" }
				],
				suite: "Alice, Benjamin"
			},
			{
				contact: "Alice, Benjamin",
				dialogues: [
					{ perso: "Benjamin", message: "Moi !" },
					{ perso: "Alice", message: "Moi" },
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
			suite: "Alice, Benjamin"
		},
		{
			contact: "Alice, Benjamin",
			dialogues: [
				{ perso: "Alice", message: "Ok j'ai trouvé" },
				{ perso: "Alice", message: "Julien, si tu as besoin d'aide, demande moi en privé" },
				{ perso: "Benjamin", message: "Aide moi Ô Puissante Alice" },
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
