var glossaire = [
	{
		mot: "Adresse IP",
		def: "<p>Une adresse IP (avec IP pour Internet Protocol) est un numéro d’identification qui est attribué de façon permanente ou provisoire à chaque appareil connecté à un réseau informatique. L’adresse IP est à la base du système d’acheminement (le routage) des messages sur les réseaux informatiques, c’est l’équivalent des numéros de téléphone du réseau téléphonique.</p><p>Ce n’est pas parce qu’un ordinateur a une adresse IP qu’il a forcément accès à Internet/au web. Il existe en effet par convention des plages d’adresses IP reservées aux reseaux locaux. Et enfin ce n’est pas parce qu’un ordinateur a un accès à Internet/au web qu’il est pour autant visible et accessible aux autres ordinateurs.</p><p>Il existe des adresses IP de version 4 (IPv4) et de version 6 (IPv6). Les plages d’adresses IPv4 étant proches de la saturation, la transition d’IPv4 vers IPv6 est de plus en plus nécessaire.</p>",
		warn: [
			"L’adresse IP est différente de l’adresse MAC."
		]
	},
	{
		mot: "Adresse MAC",
		def: "<p>Une adresse MAC, pour Media Access Control, est un identifiant physique stocké dans la carte réseau de chaque appareil connecté qui l’identifie en principe de manière unique.</p>",
		warn: [
			"Il est possible de modifier les adresses MAC de certains appareils. Il arrive également, mais très rarement, que certains appareils aient des adresses MAC identiques. Ce n’est donc pas une garantie absolue d’unicité.",
			"L’adresse MAC est différente de l’adresse IP.",
			"L’adresse MAC n’a rien à voir spécifiquement avec les systèmes Apple."
		]
	},
	{
		mot: "Agence nationale de la sécurité des systèmes d’information (ANSSI)",
		def: "<p>L’Agence nationale de la sécurité des systèmes d’information (ANSSI) est chargée de proposer les règles à appliquer pour la protection des systèmes d’information de l’État et de vérifier l’application des mesures adoptées. Dans le domaine de la défense des systèmes d’information, elle assure un service de veille, de détection, d’alerte et de réaction aux attaques informatiques, notamment sur les réseaux de l’État. L’ANSSI apporte son expertise et son assistance technique aux administrations et aux entreprises avec une mission renforcée au profit des opérateurs d’importance vitale.</p>",
		warn: []
	},
	{
		mot: "Algorithme",
		def: "<p>Un algorithme, notion à la fois mathématique et informatique, est la spécification de la série d’opérations et d’instructions à réaliser pour résoudre un problème ou obtenir un résultat.</p><p>Lorsqu’un algorithme est écrit dans un langage de programmation (comme JavaScript par exemple), celui-ci devient un programme exécutable par un ordinateur.</p><p>Avec l’avènement du numérique, les traitements de données automatisés se multiplient et nos vies sont de plus en plus analysées par des algorithmes. De par leurs impacts commerciaux ou éthiques, certains algorithmes deviennent des sujets importants pour nos sociétés. Impossible de faire une liste de tous les algorithmes controversés. On peut citer pêle-mêle : les algorithmes de calcul de prime d’assurances, les algorithmes d’affectation d’élèves dans les établissements scolaires, les algorithmes qui font apparaître des résultats de recherche ou des vidéos de manière préférentielle à d’autres sur Google, Youtube, etc. Aussi il est de plus en plus réclamé que les algorithmes à fort impact sur la société soient rendus publics de manière à être évalués de façon contradictoire et indépendante et éventuellement ajustés en conséquence.</p>",
		warn: []
	},
	{
		mot: "API",
		def: "<p>API veut dire Application Programming Interface en anglais.</p>",
		warn: []
	},
	{
		mot: "Blog",
		def: "<p>Un blog, venant de l’anglais weblog, journal sur le web, est un type de site web – ou une partie d’un site web – utilisé pour la publication périodique et régulière d’articles personnels, généralement succincts, rendant compte d’une actualité autour d’un sujet donné ou d’une profession. À la manière d’un journal intime, ces articles ou « billets » sont typiquement datés, signés et se succèdent dans un ordre antéchronologique, c’est-à-dire du plus récent au plus ancien.</p>",
		warn: []
	},
	{
		mot: "Chaîne de blocs",
		def: "<p>La chaîne de blocs (« Blockchain » en anglais) est une base de données distribuée (c’est à dire répartie sur de nombreux systèmes informatiques) de manière transparente, sécurisée, et fonctionnant sans organe central de contrôle.</p><p>Une chaîne de blocs est donc un registre distribué et sécurisé de toutes les transactions effectuées depuis le démarrage du système réparti. L’application phare de cette technologie est celle des crypto-monnaies.</p>",
		warn: []
	},
	{
		mot: "Chiffrement",
		def: "<p>Le chiffrement est un procédé de cryptographie grâce auquel on souhaite rendre la compréhension d’un document impossible à toute personne qui n’a pas la clé de (dé)chiffrement.</p><p>On classe le chiffrement en deux grandes catégories : le chiffrement symétrique et le chiffrement asymétrique.</p>",
		warn: [
			"Il ne faut pas utiliser le terme « cryptage », qui n’est pas reconnu par le dictionnaire de l’Académie française ni par le Référentiel Général de Sécurité de l’ANSSI qui le qualifie d’incorrect : on doit plutôt dire « le chiffrement »."
		]
	},
	{
		mot: "Chiffrement asymétrique",
		def: "<p>Un chiffrement est dit asymétrique lorsqu’il utilise des clés différentes : une paire de clés (appelée biclé) composée d’une clé publique, servant à chiffrer, et d’une clé privée, servant à déchiffrer.</p><p>Concrètement ce type de chiffrement permet deux choses distinctes que ne permet le chiffrement symétrique :<ul><li>Authentifier l’auteur/émetteur d’un message, d’une information</li><li>Chiffrer le message, l’information</li></ul></p><p>Ce type de chiffrement est très récent, il a été inventé dans les années 1970.</p>",
		warn: []
	},
	{
		mot: "Chiffrement symétrique",
		def: "<p>Un chiffrement est dit symétrique lorsqu’il utilise la même clé pour chiffrer et déchiffrer. C’est à dire que les différentes parties en présence doivent toutes connaître une même clé secrète, un même secret.</p><p>Il s’agit de la plus ancienne forme de chiffrement. On a des traces de son utilisation par les Égyptiens vers 2000 av. J.-C.</p>",
		warn: []
	},
	{
		mot: "Chiffrer",
		def: "<p>En cryptographie, chiffrer correspond à l’action de réaliser un chiffrement.</p><p>Exemple : « Le serveur de notre prestataire chiffre toutes les données qui sont stockées, ces données ne sont donc jamais stockées en clair. »</p>",
		warn: []
	},
	{
		mot: "Commission nationale de l’informatique et des libertés (CNIL)",
		def: "<p>La Commission nationale de l’informatique et des libertés (CNIL) est une autorité administrative indépendante française. La CNIL est chargée de veiller à ce que l’informatique soit au service du citoyen et qu’elle ne porte atteinte ni à l’identité humaine, ni aux droits de l’Homme, ni à la vie privée, ni aux libertés individuelles ou publiques.</p>",
		warn: []
	},
	{
		mot: "Crypto-monnaie",
		def: "<p>Une crypto-monnaie est une monnaie électronique basée sur les principes de la cryptographie pour valider les transactions et émettre la monnaie elle-même.</p><p>Il existe de nombreuses crypto-monnaies, la plus connue actuellement est surement le bitcoin, qui est toutefois loin d’être la seule crypto-monnaie : il en existe de multiples autres comme l’ether de la chaîne de blocs Ethereum.</p>",
		warn: []
	},
	{
		mot: "Cryptographie",
		def: "<p>La cryptographie est une discipline s’attachant à protéger des messages (assurant confidentialité, authenticité et intégrité) en s’aidant souvent de secrets ou clés.</p><p>Le chiffrement et le déchiffrement sont des procédés de cryptographie.</p>",
		warn: []
	},
	{
		mot: "CSS",
		def: "<p>Les CSS, de l’anglais Cascading Style Sheets, sont des feuilles de style en cascade qui forment un langage informatique pour gérer la présentation des documents HTML et XML. La bonne utilisation des CSS permet de séparer le contenu (c’est à dire le texte écrit de manière purement sémantique) de la présentation (couleur et mise en page) en créant ainsi des documents faciles à mettre à jour tout en étant accessibles (en terme d’accessibilité numérique).</p>",
		warn: []
	},
	{
		mot: "Cyber-assurance",
		def: "<p>Une cyber-assurance est une assurance proposant une protection contre des cyber-risques.</p>",
		warn: []
	},
	{
		mot: "Cyber-risque",
		def: "<p>Les cyber-risques sont l’ensemble des risques encourus par l’utilisation de l’informatique. On peut notamment citer :<ul><li>acte de malveillance informatique</li><li>virus informatique</li><li>piratage informatique</li><li>cyber espionnage économique ou industriel</li><li>vol de données</li><li>tentative de cyber extorsion de fonds</li><li>diffamations, injures, dénigrements sur Internet</li><li>usurpation d’identité</li></ul></p>",
		warn: []
	},
	{
		mot: "Délégué à la protection des données (DPD)",
		def: "<p>Le délégué à la protection des données est la personne chargée de contrôler la conformité au RGPD de l’organisme qui l’a désignée.</p><p>Le délégué à la protection des données est obligatoire pour les organismes exerçant des activités de profilage ou traitant des données sensibles à grande échelle.</p>",
		warn: []
	},
	{
		mot: "Des entreprises aux entreprises",
		def: "<p>Le principe des entreprises aux entreprises, ou en anglais Business to Business (B2B, à prononcer [biː.tuː.biː]) désigne l’ensemble des architectures techniques et logiciels informatiques permettant de mettre en relation des entreprises dans un cadre de relations clients/fournisseurs.</p>",
		warn: []
	},
	{
		mot: "Des entreprises aux particuliers",
		def: "<p>Le principe des entreprises aux particuliers, ou en anglais Business to Consumer (B2C, à prononcer [biː.tuː.siː]) désigne l’ensemble des architectures techniques et logiciels informatiques permettant de mettre en relation des entreprises directement avec les consommateurs.</p>",
		warn: []
	},
	{
		mot: "DNS",
		def: "<p>Le DNS (qui veut dire Domain Name System en anglais et système de noms de domaine en français) est un service permettant de traduire un nom de domaine informatique (comme par exemple www.cncc.fr) en l’adresse IP (comme par exemple 217.19.62.115) d’un ordinateur.</p>",
		warn: []
	},
	{
		mot: "Donnée à caractère personnel",
		def: "<p>Une donnée à caractère personnel est toute information relative à une personne physique non anonyme. Il s’agit donc de toute donnée relative à un client, un salarié, un prospect, un agent, un visiteur non anonyme, etc.</p><p>Les données à caractère personnel ne sont donc pas limitées aux photos, empreintes, adresses postales, adresses email, numéros de téléphone, adresses IP, adresses MAC, enregistrements vocaux, etc.</p><p>Il existe un sous-ensemble particulier de données à caractère personnel : les données sensibles.</p>",
		warn: []
	},
	{
		mot: "Donnée sensible",
		def: "<p>Une donnée sensible est une donnée à caractère personnel dont le traitement est par principe interdit, car présentant un risque plus important pour les droits et libertés fondamentaux des personnes. Il existe néanmoins des exceptions limitées autorisées, notamment le consentement au traitement de données expressément consenti par la personne.</p><p>Le RGPD et la loi informatique et libertés définissent les catégories suivantes de données à caractère personnel comme étant des données sensibles :<ul><li>Origine raciale ou ethnique</li><li>Opinions politiques, religieuses, ou philosophiques</li><li>Appartenance syndicale</li><li>Données génétiques, données biométriques ou concernant la santé</li><li>Données concernant la vie sexuelle ou l’orientation sexuelle</li><li>Données relatives aux condamnations et infractions administratives et pénales</li><li>Numéro de sécurité sociale</li></ul></p><p>Les données sensibles ne sont néanmoins pas limitées à ces catégories officielles, l’organisme gestionnaire devant systématiquement évaluer la sensibilité des données suivant le contexte.</p>",
		warn: []
	},
	{
		mot: "Données ouverte",
		def: "<p>Les données ouvertes sont des données numériques diffusées de manière structurée selon une licence ouverte garantissant leur utilisation par tous, sans restriction technique, juridique ou financière mais avec possiblement des obligations associées sur les sujets de la mention de l’origine, de la revente, des modifications, etc.</p><p>Ces données peuvent être d’origine publique ou privée, produites notamment par une collectivité, un service public ou une entreprise.</p><p>L’ouverture des données est à la fois un mouvement, une philosophie d’accès à l’information et une pratique de publication de données librement accessibles et exploitables. Elle s’inscrit dans une tendance qui considère l’information publique comme un bien commun dont la diffusion est d’intérêt public et général.</p>",
		warn: []
	},
	{
		mot: "eIDAS",
		def: "<p>Règlement No 910/2014 du Parlement européen et du Conseil sur l’identification électronique et les services de confiance pour les transactions électroniques au sein du marché intérieur. À la base eIDAS veut dire « electronic IDentification Authentication and Signature ». eIDAS définit l’environnement réglementaire pour la réalisation de transactions électroniques par l’utilisation de signatures électroniques.</p>",
		warn: []
	},
	{
		mot: "Exploration de données",
		def: "<p>L’exploration de données consiste à extraire, par des méthodes automatiques ou semi-automatiques, un savoir à partir de mégadonnées.</p><p>L’exploration de données utilise un ensemble d’algorithmes issus de disciplines scientifiques diverses telles que les statistiques, l’intelligence artificielle ou l’informatique, pour construire des modèles à partir des données, c’est-à-dire trouver des structures intéressantes ou des motifs et d’en extraire un maximum de connaissances. Cela permet de résoudre des problèmes très divers, allant de la gestion de la relation client à la maintenance préventive, en passant par la détection de fraudes ou encore l’optimisation de sites web. C’est aussi le mode de travail du journalisme de données.</p>",
		warn: []
	},
	{
		mot: "Financement participatif",
		def: "<p>Le financement participatif (« Crowdfunding » en anglais) est un financement de projet qui fait appel à un grand nombre de personnes indépendantes.</p><p>Ce mode de financement décentralisé se fait sans l’aide des acteurs traditionnels du financement, il est dit désintermédié. L’émergence des plateformes de financement participatif a été permise grâce à Internet et aux réseaux sociaux.</p>",
		warn: []
	},
	{
		mot: "Freemium",
		def: "<p>Le freemium est une stratégie commerciale associant une offre gratuite, en libre accès, comme produit d’appel et une offre « premium », plus haut de gamme, en accès payant.</p>",
		warn: []
	},
	{
		mot: "Gestion des relations avec les clients (GRC)",
		def: "<p>La gestion de la relation client est l’ensemble des outils (notamment les applications informatiques) et techniques destinés à capter, traiter, analyser les informations relatives aux clients et aux prospects, dans le but de les fidéliser en leur offrant le meilleur service.</p>",
		warn: []
	},
	{
		mot: "Hameçonnage",
		def: "<p>L’hameçonnage (« Phishing » en anglais) correspond au fait de révéler des informations sensibles (identifiant, mot de passe, date de naissance, données de cartes bancaires, etc.) à des escrocs sous couvert de communications électroniques légitimes. Les attaques d’hameçonnage sont souvent conduites en envoyant des courriels, des messages de messagerie instantanée, des SMS frauduleux pointant sur des sites web contrefaits dans lequels la victime est invitée à entrer les informations qui vont être volées.</p>",
		warn: []
	},
	{
		mot: "HTML",
		def: "<p>Le HTML pour HyperText Markup Language est le format de données dans lequel les pages web sont écrites.</p><p>HTML est un langage de balisage, comme le XML, permettant d’écrire de l’hypertexte, c’est à dire d’avoir des hyperliens vers d’autres documents. Contrairement au PDF par exemple, HTML permet de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web. HTML est souvent utilisé conjointement avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS).</p>",
		warn: []
	},
	{
		mot: "HTTP",
		def: "<p>HTTP est le protocole de communication non-sécurisé utilisé pour accéder aux pages web.</p>",
		warn: []
	},
	{
		mot: "HTTPS",
		def: "<p>HTTPS est le protocole de communication sécurisé par chiffrement utilisé pour accéder aux pages web.</p>",
		warn: []
	},
	{
		mot: "Informatique en nuage",
		def: "<p>L’informatique en nuage (« Cloud computing » en anglais) est l’exploitation de la puissance de calcul ou de stockage de serveurs informatiques distants par l’intermédiaire d’un réseau. Du point de vue économique, l’informatique en nuage est essentiellement une offre commerciale d’abonnement à des services externes auprès d’un fournisseur. Il existe 3 catégories de services qui sont proposées en informatique en nuage :<ul><li>Infrastructure en tant que service / Infrastructure as a Service (IaaS)</li><li>Plate-forme en tant que service / Platform as a Service (PaaS)</li><li>Logiciel en tant que service / Software as a Service (SaaS)</li></ul></p>",
		warn: []
	},
	{
		mot: "Infrastructure en tant que service",
		def: "<p>Ce service d’informatique en nuage consiste à fournir un accès à un parc informatique de machines virtuelles, gérées par le fournisseur, sur lesquelles le consommateur peut installer un système d’exploitation et des applications. Le consommateur est ainsi dispensé de l’achat de matériel informatique.</p>",
		warn: []
	},
	{
		mot: "Innovation ouverte",
		def: "<p>L’innovation ouverte désigne dans les domaines de la recherche et du développement des modes d’innovation fondés sur le partage et la collaboration.</p><p>Cette approche est compatible avec une économie de marché (via les brevets et licences) et avec l’intelligence économique. Elle permet des approches alternatives éthiques ou solidaires de partage libre des savoirs et savoir-faire modernes ou traditionnels, avec notamment l’utilisation de licences libres. Selon les cas, l’approche peut donc apparaître altruiste ou au contraire comme un moyen de distribuer ou de partager le risque et l’investissement vers l’extérieur d’une organisation.</p>",
		warn: []
	},
	{
		mot: "Interface",
		def: "<p>Une interface est la couche limite par laquelle ont lieu les échanges et les interactions entre deux éléments.</p><p>En informatique et en électronique, domaines qui nous occupent dans ce lexique, une interface peut être :<ul><li>une interface humain-machine qui permet des échanges entre un humain et une machine</li><li>une interface de programmation qui permet des échanges entre plusieurs logiciels, appelée API</li></ul></p>",
		warn: []
	},
	{
		mot: "Internet des objets (IdO)",
		def: "<p>L’Internet des objets (« Internet of Things (IoT) » en anglais) représente l’extension d’Internet à des choses et à des lieux du monde physique.</p><p>Alors qu’Internet ne se prolonge habituellement pas au-delà du monde électronique, l’Internet des objets connectés représente les échanges d’informations et de données provenant de dispositifs présents dans le monde réel, notamment dans les domaines de la domotique (systèmes de télésurveillance, ampoules connectées, gestion des températures, etc.), de la santé et de la mesure de soi, vers le réseau Internet.</p>",
		warn: []
	},
	{
		mot: "Interopérabilité",
		def: "<p>L’interopérabilité est la capacité que possède un produit ou un système, dont les interfaces sont intégralement connues, à fonctionner avec d’autres produits ou systèmes existants ou futurs et ce sans restriction d’accès ou de mise en œuvre. Il faut distinguer « interopérabilité » et « compatibilité ». L’interopérabilité est considérée comme très importante voire critique dans de nombreux domaines, dont l’informatique. C’est pourquoi en France, le référentiel général d’interopérabilité a un caractère obligatoire pour les administrations et services concernés.</p><p>L’interopérabilité repose sur l’utilisation de standards ouverts.</p>",
		warn: []
	},
	{
		mot: "JavaScript",
		def: "<p>JavaScript est un langage de programmation populaire principalement employé dans les pages web interactives mais aussi pour les serveurs.</p>",
		warn: []
	},
	{
		mot: "Licence",
		def: "<p>Les licences d’exploitation des œuvres de l’esprit sont des contrats passés entre des auteurs ou ayants droit et d’autres personnes à qui elles concèdent des droits dont ils ont acquis l’exclusivité au titre du droit d’auteur.</p>",
		warn: []
	},
	{
		mot: "Licence libre",
		def: "<p>Une licence libre est une licence s’appliquant à une œuvre de l’esprit par laquelle l’auteur concède tout ou une partie des droits que lui confère le droit d’auteur, en laissant au minimum quatre droits, considérés fondamentaux, aux utilisateurs :<ul><li>usage de l’œuvre</li><li>étude de l’œuvre pour en comprendre le fonctionnement ou l’adapter à ses besoins</li><li>modification (amélioration, extension, transformation) ou incorporation de l’œuvre en une œuvre dérivée</li><li>redistribution de l’œuvre, c’est-à-dire sa diffusion à d’autres usagers, y compris commercialement</li></ul></p>",
		warn: []
	},
	{
		mot: "Logiciel en tant que service",
		def: "<p>Ce service d’informatique en nuage consiste à fournir un accès à des systèmes d’exploitation et des outils d’infrastructure préinstallés et gérés par le fournisseur. Le consommateur peut ajouter ses propres outils et applications. Le consommateur est ainsi dispensé de l’achat de matériel informatique et d’une partie de l’admnistration des systèmes.</p>",
		warn: []
	},
	{
		mot: "Logiciel libre",
		def: "<p>Un logiciel libre est un logiciel distribué suivant une licence libre.</p>",
		warn: []
	},
	{
		mot: "Machine virtuelle",
		def: "<p>En informatique, une machine virtuelle est la simulation d’un appareil informatique créée par un logiciel d’émulation. Le logiciel d’émulation simule la présence de ressources matérielles et logicielles telles que la mémoire, le processeur, les capacités de stockage. Quelques intérêts des machines virtuelles :</p><p><ul><li>pouvoir exécuter des logiciels sur un système d’exploitation pour lequel ils n’étaient pas prévus à la base (par exemple : pouvoir exécuter sur Mac OS et GNU-Linux des logiciels développés uniquement pour Windows)</li><li>pouvoir faire fonctionner plusieurs systèmes d’exploitation, potentiellement différents, simultanément sur un seul et même ordinateur, créant ainsi la disponibilité de plusieurs ordinateurs</li></p>",
		warn: []
	},
	{
		mot: "Mégadonnées",
		def: "<p>Les mégadonnées (« Big Data » en anglais) désignent des ensembles de données qui deviennent tellement volumineux qu’ils en deviennent difficiles à travailler avec des outils classiques de gestion de base de données ou de gestion de l’information.</p><p>Les mégadonnées sont apparues avec l’augmentation des capacités de stockage informatique. Un des principes des mégadonnées est de stocker le plus d’informations possibles sur les plus longues périodes de temps possibles pour pouvoir ensuite en tirer des analyses puissantes et des conclusions insoupçonnées. Cette démarche est reconnue comme formidable par exemple pour le domaine climatique. Mais elle pose des problèmes, notamment éthiques et de respect de la vie privée, dans d’autres domaines comme par exemple les comportements des personnes.</p>",
		warn: []
	},
	{
		mot: "Métadonnées",
		def: "<p>Les métadonnées (« Metadata » en anglais) sont des données servant à définir ou décrire une autre donnée.</p><p>Si on prend l’exemple du téléphone : les conversations d’une personne avec ses correspondants sont les données, alors que les numéros appelés, les heures et les durées des appels sont les métadonnées.</p><p>Si on prend l’exemple de la bureautique informatique : les fichiers bureautiques contiennent la date à laquelle ils ont été modifiés la dernière fois. Ils peuvent également contenir les noms de tous les rédacteurs qui sont intervenus, la liste de toutes les modifications effectuées, etc.</p><p>On le comprend, les métadonnées apportent des informations aussi importantes que les données elles-mêmes.</p>",
		warn: []
	},
	{
		mot: "Microcode",
		def: "<p>Un microcode (« Firmware » en anglais) est un programme intégré dans un matériel informatique participant à son fonctionnement.</p><p>Tout matériel informatique dispose d’au moins un microcode pour pouvoir démarrer et de plus en plus de matériels de notre vie quotidienne sont devenus des matériels informatiques (ordinateur, photocopieur, disque dur, routeur, téléphone portable, ordiphone, appareil photo numérique, cafetière électronique, voiture, etc.).</p><p>L’utilisateur final n’a, d’ordinaire, pas accès directement au microcode mais peut parfois le modifier par l’installation de mises à jour pour profiter d’améliorations ou de corrections d’anomalies.</p>",
		warn: []
	},
	{
		mot: "Modèle d'affaires",
		def: "<p>Le modèle d’affaires (« Business model » en anglais) d’une entreprise est la formalisation de l’origine de la valeur ajoutée d’une entreprise et de son partage entre les différentes parties prenantes.</p><p>Les modèles d’affaires de l’économie numérique sont souvent mal identifiés et mal compris par le grand public. Et pour cause, dans l’économie numérique il y a de nombreux cas où ce sont les données personnelles récupérées auprès du public qui constituent la valeur ajoutée.</p>",
		warn: []
	},
	{
		mot: "Monnaie électronique",
		def: "<p>La monnaie électronique est définie comme étant tout ce qui est distinct de la monnaie physique (pièces et billets). Plus spécifiquement cette notion est définie par la directive monnaie électronique 2009/110/CE comme étant « une valeur monétaire qui est stockée sous une forme électronique, y compris magnétique, représentant une créance sur l’émetteur, qui est émise contre la remise de fonds aux fins d’opérations de paiement […] et qui est acceptée par une personne physique ou morale autre que l’émetteur de monnaie électronique ».</p><p>Des sous-ensembles très notables de monnaies électroniques sont les monnaies virtuelles et les crypto-monnaies.</p>",
		warn: []
	},
	{
		mot: "Monnaie virtuelle",
		def: "<p>Une monnaie virtuelle est un type de monnaie électronique, non régulée,qui est émise et contrôlée par ses développeurs, et utilisée et acceptée au sein de la communauté de ses utilisateurs.</p><p>Les monnaies virtuelles pourraient avoir un impact très important pour les états, qui se trouvent questionnés dans le monopole de la monnaie et des transactions financières, mais aussi pour les banques et l’économie tout entière.</p>",
		warn: []
	},
	{
		mot: "Numérique",
		def: "<p>On dit numérique une information qui se présente sous forme de nombres associés à une indication de la grandeur à laquelle ils s’appliquent, permettant des calculs, des statistiques. « Le numérique » est le mouvement global qui cherche à interconnecter le monde physique et le monde informatique. Plus concrètement le numérique cherche principalement à :<ul><li>rendre disponibles, sous forme de données exploitables par des ordinateurs, les informations du monde physique</li><li>faciliter, pour les personnes, la compréhension d’informations et les aider à la décision</li><li>déclencher des actions dans le monde informatique</li><li>agir sur le monde physique depuis le monde informatique</li></ul></p>",
		warn: [
			"Il ne faut pas utiliser le terme « le digital », qui est un anglicisme : on doit plutôt dire « le numérique »."
		]
	},
	{
		mot: "Numériser",
		def: "<p>Numériser est l’action de réaliser la conversion des informations d’un support (texte, image, audio, vidéo) ou d’un signal électrique en données numériques, que des dispositifs informatiques ou d’électronique numérique pourront traiter. On parle de numériser un document papier, de numériser une voix, une empreinte digitale, etc.</p>",
		warn: [
			"Il ne faut pas utiliser le terme « scanner », qui est un anglicisme : on doit plutôt dire « numériser »."
		]
	},
	{
		mot: "Opt-in",
		def: "<p>L’opt-in est un terme marketing ou légal définissant un consentement à obtenir auprès d’une personne pour déclencher un traitement la concernant.</p><p>On distingue l’opt-in actif, qui nécessite un consentement donné par une action explicite de changement d’état, et l’opt-in passif, qui nécessite une simple validation.</p>",
		warn: []
	},
	{
		mot: "Opt-out",
		def: "<p>L’opt-out est un terme marketing ou légal définissant un consentement à obtenir auprès d’une personne pour la soustraire d’un traitement la concernant.</p><p>On distingue l’opt-out actif, qui nécessite un consentement donné par une action explicite de changement d’état, et l’opt-out passif, qui nécessite une simple validation.</p>",
		warn: []
	},
	{
		mot: "Optimisation pour moteurs de recherche",
		def: "<p>L’optimisation pour les moteurs de recherche est un ensemble de techniques pour optimiser la visibilité d’un site web, ou de pages web spécifiques, dans les pages de résultats de recherche.</p><p>Ces techniques travaillant sur la sémantique consistent à améliorer la compréhension, par les robots d’indexation des moteurs de recherche, du contenu des pages web. L’objectif est généralement d’augmenter le trafic naturel vers le site web.</p>",
		warn: []
	},
	{
		mot: "Ordiphone",
		def: "<p>Un ordiphone (« Smartphone » en anglais) ou téléphone intelligent est un téléphone mobile disposant en général d’un écran tactile, d’un appareil photographique numérique, et des fonctions d’un ordinateur portable. La saisie des données se fait le plus souvent par le biais d’un écran tactile ou, plus rarement d’un clavier ou d’un stylet.</p>",
		warn: []
	},
	{
		mot: "Plateforme en tant que service",
		def: "<p>Ce service d’informatique en nuage consiste à fournir un accès à des applications préinstallées et gérées par le fournisseur. Le consommateur est ainsi dispensé de l’achat de matériel informatique, de l’admnistration des systèmes, des mises à jour fonctionnelles et de sécurité.</p>",
		warn: []
	},
	{
		mot: "Production participative",
		def: "<p>La production participative (« Crowdsourcing » en anglais) est l’utilisation de la créativité, de l’intelligence, du savoir-faire et de la main d’oeuvre d’un grand nombre de personnes indépendantes, en sous-traitance.</p><p>Ce mode de production décentralisé a été rendu possible grâce à Internet et aux réseaux sociaux.</p>",
		warn: []
	},
	{
		mot: "Progiciel de gestion intégré (PGI)",
		def: "<p>Un progiciel de gestion intégré (« Enterprise resource planning (ERP) » en anglais) est un logiciel massif définit par :<ul><li>sa capacité à fournir à l’ensemble des acteurs de l’entreprise une image unique, intègre, cohérente et homogène de l’ensemble de l’information dont ils ont besoin pour jouer pleinement leur rôle</li><li>sa capacité de fédérer l’ensemble des processus de l’entreprise dans chacun des domaines qui la constituent et ce, dans une approche transversale qui optimise sa productivité</li></ul></p><p>Plusieurs autres dénominations sont utilisées pour ce type de logiciel, comme : progiciel, progiciel intégré, progiciel applicatif, progiciel applicatif intégré, progiciel de gestion.</p>",
		warn: []
	},
	{
		mot: "Rançongiciel",
		def: "<p>Un rançongiciel (« Ransomware » en anglais) est un logiciel malveillant qui prend en otage des données informatiques. Pour ce faire, ce logiciel malveillant chiffre les données puis demande à leur propriétaire d’envoyer de l’argent en échange de la clé qui permettra de les déchiffrer.</p>",
		warn: []
	},
	{
		mot: "Référentiel Général d’Interopérabilité (RGI)",
		def: "<p>Le Référentiel Général d’Interopérabilité est un document décrivant un ensemble de normes, notamment les formats de fichiers (fichiers bureautiques, fichiers d’export de données, etc.), et de bonnes pratiques communes aux administrations publiques françaises dans le domaine informatique.</p><p>Le RGI, tout comme le RGS, a force obligatoire et s’applique donc aux administrations, collectivités territoriales et établissements publics à caractère administratif. Toute prestation réalisée dans le cadre d’un marché public devra être conforme aux stipulations du marché définies par ces spécifications techniques.</p>",
		warn: []
	},
	{
		mot: "Référentiel Général de Sécurité (RGS)",
		def: "<p>Le Référentiel Général de Sécurité est un document fixe, selon le niveau de sécurité requis, les règles que doivent respecter certaines fonctions contribuant à la sécurité des informations, parmi lesquelles la signature électronique, l’authentification, la confidentialité ou encore l’horodatage.</p><p>Le RGS, tout comme le RGI, a force obligatoire et s’applique donc aux administrations, collectivités territoriales et établissements publics à caractère administratif. Toute prestation réalisée dans le cadre d’un marché public devra être conforme aux stipulations du marché définies par ces spécifications techniques.</p>",
		warn: []
	},
	{
		mot: "Règlement général sur la protection des données (RGPD)",
		def: "<p>Le Règlement général sur la protection des données est un règlement européen relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données.</p><p>Ce règlement prévoit des marges de manoeuvre importantes pour les États et la loi informatique et libertés est en cours de révision dans cette optique.</p><p>Ce règlement est applicable à partir du 25 mai 2018.</p><p>Les points importants :<ul><li>Application à tous les organismes (entreprises, établissements publics, associations, etc.) qui gèrent des données à caractère personnel</li><li>Renforcement des obligations de respect des personnes, de sécurisation des données et de suppression des données inutiles</li><li>Inversion de la charge de preuve : l’organisme doit démontrer qu’il est en conformité</li><li>Obligation de documenter et prouver la conformité au moyen d’un registre des traitements des données à caractère personnel (pour les organismes traitant des données sensibles ou ayant plus de 250 personnes)</li><li>Obligation de désigner un DPO pour les organismes exerçant des activités de profilage ou traitant des données sensibles à grande échelle</li><li>Obligation d’alerter la CNIL en cas de compromission de données, et obligation d’alerter les personnes touchées en cas de risque important pour elles</li><li>Amendes dissuasives pour les infractions : le maximum entre 20 millions d’euros et 4% du chiffre d’affaires annuel mondial</li></ul></p>",
		warn: []
	},
	{
		mot: "Réseau privé virtuel",
		def: "<p>Un réseau privé virtuel (« Virtual Private Network (VPN) » en anglais) est un système permettant de créer un tunnel entre des ordinateurs distants ne se trouvant pas sur les mêmes réseaux. Les ordinateurs ainsi connectés se retrouvent virtuellement sur le même réseau.</p><p>Un réseau privé virtuel peut être utilisé pour plusieurs raisons. On peut néanmoins présenter quelques cas fréquents :<ul><li>Pour se connecter au réseau interne de son organisation (entreprise, organisation, etc.) en étant à l’extérieur de celle-ci, par exemple pour les personnes en situation de télétravail ou de déplacement. C’est le cas principal d’utilisation.</li><li>Pour la sécurité, de manière à utiliser une connexion sûre à Internet dans des contextes potentiellement dangereux en terme de sécurité informatique (chambre d’hôtel, conférence, aéroports, lieux publics, etc.).</li><li>Pour échapper aux restrictions de la géolocalisation par adresse IP qui empêchent l’accès de certains sites web en fonction du pays duquel vient le visiteur.</li><li>Pour échapper à la surveillance (échapper à la censure de son pays, échapper à la surveillance de son fournisseur d’accès Internet, etc.).</li></ul><p>Attention, tous les réseaux privés virtuels ne sont pas de sécurité équivalente, la sécurisation du tunnel (notamment par chiffrement, mais pas uniquement) n’est en effet pas toujours aussi bien réalisée selon les prestataires et les entreprises qui les mettent en oeuvre. Dans le cas d’entreprises, un audit sécurité de la configuration du réseau privé virtuel peut s’avérer pertinent. On pourra se reporter à l’article How to pick the best VPN service.</p>",
		warn: []
	},
	{
		mot: "Réseaux sociaux",
		def: "<p>L’expression réseaux sociaux renvoie à l’usage d’Internet et recouvre l’utilisation des différentes plateformes web reliant des communautés de personnes physiques et morales entre elles. Les plateformes les plus connues sont Facebook, Twitter, Google+, Linkedin, Instagram. Ces plateformes web servent aux personnes à se constituer un réseau social virtuel dans le but de faciliter, par exemple, la diffusion d’informations, la visibilité artistique, la gestion des carrières professionnelles, les rencontres privées, etc. On parle de plateformes web plutôt que de sites web, car ils ne s’agit pas uniquement d’un seul site web par entité, mais pour chaque entité de nombreux sites et services web ainsi que d’applications mobiles.</p>",
		warn: []
	},
	{
		mot: "Serveur",
		def: "<p>En informatique un serveur, par analogie avec la restauration, est une machine ou un programme qui offre un service à un client. Exemples : serveur web, serveur de courriel, serveur SMTP, serveur IMAP, serveur de base de données, etc.</p><p>Un serveur fonctionne en permanence, répondant automatiquement aux requêtes qui lui sont envoyées, selon le principe dit client-serveur. Les serveurs sont utilisés par les entreprises, les institutions et les opérateurs de télécommunication.</p>",
		warn: []
	},
	{
		mot: "Signature électronique",
		def: "<p>La signature électronique est un mécanisme, reposant sur la cryptographie, permettant de garantir l’intégrité d’un document électronique et d’en authentifier l’auteur, par analogie avec la signature manuscrite d’un document papier.</p>",
		warn: []
	},
	{
		mot: "Standard ouvert",
		def: "<p>On entend par standard ouvert tout protocole de communication, d’interconnexion ou d’échange et tout format de données interopérable dont les spécifications techniques sont publiques et sans restriction d’accès ni de mise en œuvre.</p><p>L’interopérabilité repose sur l’utilisation de standards ouverts.</p>",
		warn: []
	},
	{
		mot: "Système d’exploitation",
		def: "<p>En informatique, un système d’exploitation (« Operating System (OS) » en anglais) est un ensemble de programmes de bas niveau qui dirige l’utilisation des ressources d’un appareil (processeur, mémoire, stockage, périphériques, etc.) et qui offre des fonctionnalités de base notamment dans les domaines de l’accès aux données (avec des systèmes de fichiers) et de la communication (avec des protocoles réseau).</p><p>Il existe sur le marché des dizaines de systèmes d’exploitation différents, souvent livrés avec l’appareil informatique. Les systèmes d’exploitation les plus connus sont Windows, Mac OS, iOS, les distributions Linux (pour lequel il existe de très nombreuses variantes, notamment Debian, Ubuntu, Red Hat, etc.) et enfin Android (lui-même basé sur le noyau Linux).</p><p>Les deux familles de systèmes d’exploitation les plus populaires sont Unix (Linux, Mac OS, iOS, Android, etc.) d’une part et Windows tout seul d’autre part.</p>",
		warn: []
	},
	{
		mot: "Système de gestion de contenu (SGC)",
		def: "<p>Un système de gestion de contenu est une application fournissant une chaîne de publication de contenus prenant en compte différents rôles avec des permissions associées, séparant les opérations de gestion de la forme et du contenu, et permettant le travail collaboratif notamment sur un même document. Les systèmes de gestion électronique de documents (GED), sont un type de système de gestion de contenu, dédié aux documents, qu’ils soient fichiers bureautiques ou numérisations de contenus physiques.</p>",
		warn: []
	},
	{
		mot: "Technologie de rupture",
		def: "<p>Une technologie de rupture est une innovation technologique qui porte sur un produit ou un service et qui finit par remplacer une technologie dominante sur un marché. Par exemple, les crypto-monnaies pourraient être une technologie de rupture.</p>",
		warn: []
	},
	{
		mot: "Traitement de données",
		def: "<p>Le traitement de données correspond à une série de processus, d’opérations, qui permettent de collecter, de gérer, d’extraire de l’information ou de produire du savoir à partir de données brutes.</p><p>Les traitements de données emploient généralement des algorithmes.</p>",
		warn: []
	},
	{
		mot: "URL",
		def: "<p>Les URL pour Uniform Resource Locator sont les adresses web des ressources d’Internet : documents HTML, images, vidéos, etc.</p><p>Quelques exemples d’URL :<ul><li>https://www.cncc.fr/</li><li>https://www.cncc.fr/img/hero-16avenuemessine.jpg</li><li>https://www.youtube.com/channel/UCFKlB0ouiym-SlBNB6DT3eQ</li><li>http://references.modernisation.gouv.fr/referentiels</li></ul></p>",
		warn: []
	},
	{
		mot: "XML",
		def: "<p>Le XML pour Extensible Markup Language est un métalangage informatique de balisage générique pour structurer des données. L’objectif est de faciliter l’échange automatisé de contenus complexes (arbrescences, texte riche, etc.) entre systèmes d’informations hétérogènes (interopérabilité). Des exemples très connus de langages écrit en XML : XHTML, ODF, SVG, RSS.</p>",
		warn: []
	}
];
