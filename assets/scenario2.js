const contacts = ["Alice", "H", "Benjamin", "Nathan", "Ninon", "Galoup", "Jeanne", "Marco"];

var chapitres = [
	{
		scenes: [{
			contact: "H",
			dialogues: [
				{ perso: "H", message: "<a href='ascii_h.html' target='_blank'>Clique sur ce lien</a>" },
				{ perso: "H", message: "01101000<br />01101001<br />01101010" },
				{ perso: "H", message: "Quel est le nombre qui suit ?" }
			],
			suite: "Alice"
		},
		{
			contact: "Alice",
			dialogues: [
				{ perso: "Alice", message: "Ok j’ai trouvé" },
				{ perso: "Alice", message: "Julien, tu peux me demander de l’aide si besoin" },
				{ perso: "Alice", message: "Il te suffit de m’envoyer “aide moi”" }
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
				message: "Il s’agit d’un code informatique"
			},
			{
				perso: "Alice",
				message: "C’est le code binaire. Chaque nombre correspond à une lettre. C’est la base de l’informatique. Trouve une grille ou un convertisseur"
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
				{ perso: "H", message: "Des parties de code se trouvent dans 'decimal'" }
			],
			suite: "Alice"
		},
		{
			contact: "Alice",
			dialogues: [
				{ perso: "Alice", message: "Bonne chance Julien. N’oublie pas que je suis là si tu es vraiment coincé" },
				{ perso: "Alice", message: "Mais cherche par toi même au maximum &#128515;" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["100 101 099", "100101099", "100101 099", "100 101099", "099 100 101", "099100101", "099100 101", "099 100101", "099 101 100", "099101100", "099101 100", "099 101100", "100 099 101", "100099101", "100099 101", "100 099101", "100 101 099", "100101099", "100101 099", "100 101099", "101 099 100", "101099100", "101099 100", "101 099100", "101 100 099", "101100099", "101100 099", "101 100099"],
			erreurs: "Ce n’est pas ce que j’attends",
			reussite: "<a href='horloge_h.html' target='_blank'>Clique sur ce lien</a>"
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
				{ perso: "H", message: "Quel est l’indice ?" }
			]
		}],
		question: {
			perso: "H",
			reponses: ["localisation", "Localisation", "LOCALISATION"],
			erreurs: "Ce n’est pas ce que j’attends",
			reussite: "Bravo"
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
				message: "Le mot se lit dans le sens des aiguilles de l’horloge"
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
				{ perso: "H", message: "Tu as presque terminé ce premier round" },
				{ perso: "H", message: "<a href='labyrinthe_h.html' target='_blank'>Clique sur ce lien</a>" },
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
	}
];
