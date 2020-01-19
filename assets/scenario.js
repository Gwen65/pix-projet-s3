const contacts = ["Alice", "H", "Benjamin", "Nathan", "Ninon", "Galoup", "Jeanne", "Marco"];

// Déclaration des src des images présentes dans les messages à afficher en popup après un click. Utilisation de ce src dans la fonction popupImage() des fichiers contact.html
const popIm = ["assets/images/labyrintheh.jpg"];

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
	},
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "<a href='ascii_h.html' target='_blank'>Clique sur ce lien</a>" },
				{ perso: "H", message: "01100101<br />01100110<br />01100111" },
				{ perso: "H", message: "Quel est le nombre qui suit ?" }
			],
			suite: "Alice"
		},
		{
			contact: "Alice",
			dialogues: [
				{ perso: "Alice", message: "Ok j’ai trouvé. N’oublie pas que tu peux me demander de l’aide" },
				{ perso: "Alice", message: "Mais cherche par toi même au maximum &#128515;" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["01101000"],
			erreurs: "Ce n’est pas ce que j’attends",
			reussite: "Bravo"
		},
		indices: [
			{
				perso: "Alice",
				message: "Il s’agit d’un code informatique. Le code binaire"
			},
			{
				perso: "Alice",
				message: "Le code binaire est la base de l’informatique. Chaque nombre correspond à un signe ou une lettre. Trouve les correspondances. Tu peux aussi utiliser un convertisseur sur internet"
			},
			{
				perso: "Alice",
				message: "Je ne vais pas tout faire à ta place"
			}
		]
	},
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "Maintenant résous cette énigme" },
				{ perso: "H", message: "Des parties de code se trouvent dans “decimal”" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["100 101 099", "100101099", "100101 099", "100 101099", "099 100 101", "099100101", "099100 101", "099 100101", "099 101 100", "099101100", "099101 100", "099 101100", "100 099 101", "100099101", "100099 101", "100 099101", "100 101 099", "100101099", "100101 099", "100 101099", "101 099 100", "101099100", "101099 100", "101 099100", "101 100 099", "101100099", "101100 099", "101 100099"],
			erreurs: "Ce n’est pas ce que j’attends",
			reussite: "Maintenant, <a href='horloge_h.html' target='_blank'>Clique sur ce lien</a>"
		},
		indices: [
			{
				perso: "Alice",
				message: "Il y a des lettres en commun entre les deux mots, “code” et “decimal”"
			},
			{
				perso: "Alice",
				message: "Convertis ces lettres communes en nombres, en utilisant la grille décimale"
			},
			{
				perso: "Alice",
				message: "Je ne vais pas tout faire à ta place"
			}
		]
	},
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "Quel est le mot clé ?" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["localisation", "Localisation", "LOCALISATION"],
			erreurs: "Ce n’est pas ce que j’attends",
			reussite: "Correct"
		},
		indices: [
			{
				perso: "Alice",
				message: "C’est encore la table ASCII. Les nombres de l’horloge correspondent à un mot"
			},
			{
				perso: "Alice",
				message: "Convertis les nombres en lettres, en utilisant la grille hexadécimale"
			},
			{
				perso: "Alice",
				message: "Le mot se lit dans le sens des aiguilles de l’horloge, en commençant par le nombre placé à mid"
			},
			{
				perso: "Alice",
				message: "Je ne vais pas tout faire à ta place"
			}
		]
	},
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "L’indice se trouve dans le code source de la page" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["CLST N", "CLSTN", "C L S T N", "clstn", "c l s t n"],
			erreurs: "Ce n’est pas ce que j’attends",
			reussite: "Bravo"
		},
		indices: [
			{
				perso: "Alice",
				message: "Il faut afficher le code source de la page. C’est ce qui permet de visualiser le code HTML de la page. Fais clic droit dans la page, puis “examiner l’élément”, ou bien “code source de la page”"
			},
			{
				perso: "Alice",
				message: "Suis la procédure indiquée dans les consignes, à partir du mot “localisation”"
			},
			{
				perso: "Alice",
				message: "Tu dois arriver à 5 lettres"
			},
			{
				perso: "Alice",
				message: "Je ne vais pas tout faire à ta place"
			}
		]
	},
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "Tu as presque passé ce premier round" },
				// nbrIm renvoie à la case du tableau popIm correspondante
				{ perso: "H", message: "<img src='assets/images/labyrintheh.jpg' onclick='nbrIm = 0; popupImage()'/>" },
				{ perso: "H", message: "Sors du labyrinthe en 5 commandes" },
				{ perso: "H", message: "De type: direction (nombre de cases)" },
				{ perso: "H", message: "Envoie une commande après l'autre par message" }
			]
		}],
		questions: [

		{
			perso: "H",
			/** reponses: ["droite(3) haut(2) gauche(2)", "droite(3)haut(2)gauche(2)", "droite(3), haut(2), gauche(2)", "droite(3),haut(2),gauche(2)", "Droite(3) Haut(2) Gauche(2)", "Droite(3)Haut(2)Gauche(2)", "Droite(3), Haut(2), Gauche(2)", "Droite(3),Haut(2),Gauche(2)", "DROITE(3) HAUT(2) GAUCHE(2)", "DROITE(3)HAUT(2)GAUCHE(2)", "DROITE(3), HAUT(2), GAUCHE(2)", "DROITE(3),HAUT(2),GAUCHE(2)", "droite(3) haut(2) gauche(2) haut(1) droite(2)", "droite(3), haut(2), gauche(2), haut(1), droite(2)", "droite(3),haut(2),gauche(2),haut(1),droite(2)", "droite(3)haut(2)gauche(2)haut(1)droite(2)", "Droite(3) Haut(2) Gauche(2) Haut(1) Droite(2)", "Droite(3), Haut(2), Gauche(2), Haut(1), Droite(2)", "Droite(3),Haut(2),Gauche(2),Haut(1),Droite(2)", "Droite(3)Haut(2)Gauche(2)Haut(1)Droite(2)", "DROITE(3) HAUT(2) GAUCHE(2) HAUT(1) DROITE(2)", "DROITE(3), HAUT(2), GAUCHE(2), HAUT(1), DROITE(2)", "DROITE(3),HAUT(2),GAUCHE(2),HAUT(1),DROITE(2)", "DROITE(3)HAUT(2)GAUCHE(2)HAUT(1)DROITE(2)","droite(3) haut(2) gauche(2) haut(1) droite(3)", "droite(3), haut(2), gauche(2), haut(1), droite(3)", "droite(3),haut(2),gauche(2),haut(1),droite(3)", "droite(3)haut(2)gauche(2)haut(1)droite(3)", "Droite(3) Haut(2) Gauche(2) Haut(1) Droite(3)", "Droite(3), Haut(2), Gauche(2), Haut(1), Droite(3)", "Droite(3),Haut(2),Gauche(2),Haut(1),Droite(3)", "Droite(3)Haut(2)Gauche(2)Haut(1)Droite(3)", "DROITE(3) HAUT(2) GAUCHE(2) HAUT(1) DROITE(3)", "DROITE(3), HAUT(2), GAUCHE(2), HAUT(1), DROITE(3)", "DROITE(3),HAUT(2),GAUCHE(2),HAUT(1),DROITE(3)", "DROITE(3)HAUT(2)GAUCHE(2)HAUT(1)DROITE(3)"], **/
			reponses: ["droite(3)", "Droite(3)", "DROITE(3)"],
			erreurs: "Non. Recommence",
			reussite: "Oui"
		},
		{
			perso: "H",
			reponses: ["haut(2)", "Haut(2)", "HAUT(2)"],
			erreurs: "Non. Recommence",
			reussite: "Oui"
		},
		{
			perso: "H",
			reponses: ["gauche(2)", "Gauche(2)", "GAUCHE(2)"],
			erreurs: "Non. Recommence",
			reussite: "Oui"
		},
		{
			perso: "H",
			reponses: ["haut(1)", "Haut(1)", "HAUT(1)"],
			erreurs: "Non. Recommence",
			reussite: "Oui"
		},
		{
			perso: "H",
			reponses: ["droite(2)", "Droite(2)", "DROITE(2)", "droite(3)", "Droite(3)", "DROITE(3)"],
			erreurs: "Non. Recommence",
			reussite: "Oui"
		}],
		indices: [
			{
				perso: "Alice",
				message: "C’est de la programmation. Remplace direction par gauche, droite, haut ou bas. Pour le (nombre de cases), compte le nombre nécessaire pour te déplacer. Attention, ne compte pas 2 fois la case sur laquelle tu es déjà"
			},
			{
				perso: "Alice",
				message: "Tu devrais obtenir une liste de 5 commandes:<br />gauche(2)<br />haut(4)<br />droite(1)<br />…<br />À toi de trouver les bonnes pour rejoindre la flèche &#128512;"
			},
			{
				perso: "Alice",
				message: "Envoie ta liste de 5 commandes à H. Une commande par message"
			},
			{
				perso: "Alice",
				message: "Je ne vais pas tout faire à ta place"
			}
		]
	},
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "Tu sembles être un joueur sérieux. Tu fais partie de ceux qui ont réussi" },
				{ perso: "H", message: "D’autres épreuves t’attendent" },
				{ perso: "H", message: "Seras-tu le gagnant ?" }
			]
		}]
	}
];
