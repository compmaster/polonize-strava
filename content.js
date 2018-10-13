/**
 * Common strings that are replaced in all text nodes.
 * To be moved into separate file after Chromium has introduced ES6 import/export.
 * @type {Map<string, string>}
 */
const COMMON_STRINGS = new Map([
	['About Our Maps', 'O naszych mapach'],
	['About', 'O nas'],
	['Accept this Request', 'Rozpatrz wniosek'],
	['Achievements', 'Osiągnięcia'],
	['Activities', 'Aktywności'],
	['Activity Feed', 'Tablica aktywności'],
	['Add a description', 'Dodaj opis'],
	['Add manual entry', 'Wprowadź aktywność'],
	['All-time', 'Od początku'],
	['Analysis', 'Analiza'],
	['Analyze', 'Analizuj'],
	['Apps', 'Aplikacje'],
	['Athlete Search', 'Wyszukaj sportowca'],
	['Athlete Settings', 'Ustawienia sportowca'],
	['Athlete', 'Sportowiec'],
	['Athletes', 'Sportowcy'],
	['Avg climbing speed', 'Średnia prędkość na podjazdach'],
	['Avg', 'Śr'],
	['Be the first to give kudos!', 'Polub aktywność pierwszy!'],
	['Best 20min Heart Rate', 'Najwyższy puls 20min'],
	['Best 20min Speed', 'Najwyższa prędkość 20min'],
	['Best splits', 'Najlepsze fragmenty'],
	['Cadence', 'Obroty'],
	['Calories', 'Kalorie'],
	['Cancel', 'Anuluj'],
	['Careers', 'Kariera'],
	['Challenges', 'Wyzwania'],
	['Clubs', 'Kluby'],
	['Compare', 'Porównaj'],
	['Create a new segment', 'Utwórz nowy odcinek'],
	['Create a post', 'Napisz post'],
	['Create a route', 'Utwórz trasę'],
	['Dashboard | Strava', 'Strona główna | Strava'],
	['Dashboard', 'Strona główna'],
	['Developers', 'Twórcy'],
	['Distance (?)', 'Dystans (?)'],
	['Distance', 'Dystans'],
	['Don\'t see the segment you\'re looking for?', 'Nie widzisz odcinka, którego szukasz?'],
	['Elapsed Time', 'Całkowity czas'],
	['Elevation Gain', 'Suma przewyższeń'],
	['Elevation', 'Przewyższenie'],
	['Elev Diff', 'Różn. wys.'],
	['Energy Output', 'Zużyta energia'],
	['Est 25W Distribution', 'Rozkład 25W'],
	['Est Power', 'Szac. moc'],
	['Est Power Curve', 'Krzywa mocy'],
	['Estimated Avg Power', 'Średnia moc'],
	['Estimated Best 20min Power', 'Szacowana największa moc 20min'],
	['Estimated Watts Per Kilograms', 'Szacowana moc na masę'],
	['Estimated Weighted Avg Power', 'Szacowana ważona moc'],
	['Explore', 'Odkrywaj'],
	['Features', 'Funkcje'],
	['Find and Invite Your Friends', 'Znajdź i zaproś znajomych'],
	['Fitness & Freshness', 'Sprawność i świeżość'],
	['Fitness Trend', 'Krzywa formy'],
	['Follow', 'Bądź na bieżąco'],
	['Followers', 'Obserwuje'],
	['Following', 'Obserwowani'],
	['Force refresh odo', 'Odśwież ponownie'],
	['Give Kudos', 'Lubię to!'],
	['Global Heatmap', 'Mapa popularności'],
	['Global Settings', 'Ustawienia globalne'],
	['Heart Rate', 'Tętno'],
	['Heatmaps', 'Mapy popularności'],
	['Help', 'Pomoc'],
	['Hide', 'Ukryj'],
	['I\'m following', 'Subskrybowani'],
	['Invide Friends', 'Zaproś znajomych'],
	['Invite Friends', 'Zaproś znajomych'],
	['Join Club', 'Dołącz do klubu'],
	['Labs', 'Funkcje eksperymentalne'],
	['Latest Activity', 'Ostatnia aktywność'],
	['Learn more about segments', 'Dowiedz się więcej o odcinkach'],
	['Local', 'Otoczenie'],
	['Log Out', 'Wyloguj'],
	['Manage your goals', 'Zarządzaj swoimi celami'],
	['Median Cadence', 'Mediana kadencji'],
	['Men', 'Mężczyźni'],
	['More', 'Więcej'],
	['Move Ratio', 'Współczynnik ruchu'],
	['Moving Time', 'Czas jazdy'],
	['My Activities', 'Moje aktywności'],
	['My Goals', 'Moje cele'],
	['My Profile', 'Mój profil'],
	['My Routes', 'Moje trasy'],
	['My Segments', 'Moje odcinki'],
	['My profile', 'Mój profil'],
	['My results', 'Moje wyniki'],
	['Name', 'Nazwa'],
	['Overview', 'Podsumowanie'],
	['Pedaling Time', 'Czas pedałowania'],
	['Power Curve', 'Krzywa mocy'],
	['Power', 'Moc'],
	['Privacy Policy', 'Polityka prywatności'],
	['Pros on Strava', 'Zawodowcy'],
	['Rank', 'Pozycja'],
	['Rate', 'Oceń'],
	['Read our blog - adventure stories, training tips and insights from the community.',
		'Przeczytaj naszego bloga - przygody, porady treningowe i spostrzeżenia społeczności.'],
	['Remote Views', 'Inne widoki'],
	['Report bug', 'Zgłoś błąd'],
	['RESULTS', 'WYNIKI'],
	['Running Races', 'Zawody biegowe'],
	['Segment Explore', 'Mapa odcinków'],
	['Segment Search', 'Wyszukaj odcinek'],
	['Segment efforts', 'Próby na odcinkach'],
	['Segments', 'Odcinki'],
	['Set Goal', 'Ustal cel'],
	['Settings', 'Ustawienia'],
	['Share', 'Udostępnij'],
	['Show Less', 'Pokaż mniej'],
	['Show More', 'Pokaż więcej'],
	['Show extended statistics', 'Pokaż rozszerzone statystyki'],
	['Speed', 'Prędkość'],
	['Strava Android App', 'Aplikacja Strava dla Androida'],
	['Strava Blog', 'Blog Stravy'],
	['Strava Community Standards', 'Standardy społeczności'],
	['Suggested Friends', 'Polecani znajomi'],
	['Support', 'Wsparcie'],
	['This Effort', 'Ta próba'],
	['THIS WEEK', 'W TYM TYGODNIU'],
	['THIS YEAR', 'W TYM ROKU'],
	['This year', 'W tym roku'],
	['TOP', 'NAJLEPSZE'],
	['Terms and Conditions', 'Regulamin'],
	['Time climbing', 'Czas wspinaczki'],
	['Time', 'Czas'],
	['Today', 'Dziś'],
	['Top 10', '10 najlepszych'],
	['Training Calendar', 'Kalendarz'],
	['Training Log', 'Dziennik'],
	['Training Plans', 'Plany treningowe'],
	['Training Videos', 'Samouczki filmowe'],
	['Training', 'Trening'],
	['Upload activity', 'Wgraj aktywność'],
	['View All Challenges', 'Pokaż wszystkie wyzwania'],
	['View All Clubs', 'Pokaż wszystkie kluby'],
	['View all', 'Wszystko'],
	['View full leaderboard', 'Pokaż pełny ranking'],
	['View in Google Maps', 'Pokaż w Mapach Google'],
	['Weather', 'Pogoda'],
	['What\'s next?', 'Co dalej?'],
	['Women', 'Kobiety'],
	['would like to follow you on Strava.', ' chce cię obserwować na Stravie. '],
	['Year Progressions', 'Postępy roczne'],
	['Yesterday', 'Wczoraj'],
	['Your Activities', 'Twoje aktytwności'],
	['Your Challenges', 'Twoje wyzwania'],
	['Your Recent Activities', 'Twoje ostatnie aktywności'],
	['Your Training Log', 'Twój dziennik'],
	['Your clubs', 'Twoje kluby'],
	['– Race', '– wyścig'],
	['– Ride', '– jazda'],
	['– Swim', '– pływanie'],
	['– Workout', '– trening'],
]);

/**
 * Polish month names in genitive case.
 * We need this because most browsers natively return month names in nominative case.
 * @type {Map<string, string>}
 */
const GENITIVE_MONTH_NAMES = new Map([
	['January', 'stycznia'],
	['February', 'lutego'],
	['March', 'marca'],
	['April', 'kwietnia'],
	['May', 'maja'],
	['June', 'czerwca'],
	['July', 'lipca'],
	['August', 'sierpnia'],
	['September', 'września'],
	['October', 'października'],
	['November', 'listopada'],
	['December', 'grudnia']
]);

/**
 * Polish day of week names in nominative case.
 * @type {Map<string, string>}
 */
const NOMINATIVE_DAY_OF_WEEK_NAMES = new Map([
	['Monday', 'Poniedziałek'],
	['Tuesday', 'Wtorek'],
	['Wednesday', 'Środa'],
	['Thursday', 'Czwartek'],
	['Friday', 'Piątek'],
	['Saturday', 'Sobota'],
	['Sunday', 'Niedziela']
]);

/**
 * Polish day of week names in accusative case.
 * @type {Map<string, string>}
 */
const ACCUSATIVE_DAY_OF_WEEK_NAMES = new Map([
	['Monday', 'Poniedziałek'],
	['Tuesday', 'Wtorek'],
	['Wednesday', 'Środę'],
	['Thursday', 'Czwartek'],
	['Friday', 'Piątek'],
	['Saturday', 'Sobotę'],
	['Sunday', 'Niedzielę']
]);

/**
 * Regular expressions to check within text nodes.
 * @type {Map<RegExp, Function | string>}
 */
const COMMON_REGEXS = new Map([
	[/^(\d)(st|rd|nd|th) overall$/, '$1 miejsce'],
	[/^(\d+) kudos?$/, (match, num) => `${num} ${declinateKudos(num)}`],
	[/^(.*?) at (\d{1,2}):(\d{1,2}) (PM|AM)$/, (match, date, hour, min, suffix) => {
		let dateString;
		if (COMMON_STRINGS.has(date)) {
			dateString = COMMON_STRINGS.get(date);
		} else {
			let match = date.match(/^([A-Za-z]) (\d{1,2}), (\d{1,4})$/);
			if (match != null) {
				dateString = `${match[2]} ${GENITIVE_MONTH_NAMES.get(match[1])} ${match[3]}`;
			}
		}
		let timeString = (suffix === 'PM' ? parseInt(hour, 10) + 12 : hour) + ':' + min;
		return dateString + ' o ' + timeString;
	}],
	[/^(\d{1,2}):(\d{1,2}) (PM|AM) on (\w+), (\w+) (\d{1,2}), (\d{1,4})$/,
		(match, hour, min, suffix, dayOfWeek, month, day, year) => {
			let polishDayOfWeek = ACCUSATIVE_DAY_OF_WEEK_NAMES.get(dayOfWeek) || dayOfWeek;
			let polishMonth = GENITIVE_MONTH_NAMES.get(month) || month;
			let timeString = (suffix === 'PM' ? parseInt(hour, 10) + 12 : hour) + ':' + min;
			return timeString + ' w ' + polishDayOfWeek + ', ' + day + ' ' + polishMonth + ' ' + year;
		}],
	[/^(\w+), (\w+) (\d{1,2}), (\d{1,4})$/, (match, dayOfWeek, month, day, year) => {
		let polishDayOfWeek = NOMINATIVE_DAY_OF_WEEK_NAMES.get(dayOfWeek) || dayOfWeek;
		let polishMonth = GENITIVE_MONTH_NAMES.get(month) || month;
		return polishDayOfWeek + ', ' + day + ' ' + polishMonth + ' ' + year;
	}],
	[/^Show (\d+) hidden efforts$/, (match, num) => `Pokaż ${num} ${declinateHiddenEffort(num)}`],
	[/^Hide (\d+) hidden efforts$/, (match, num) => `Ukryj ${num} ${declinateHiddenEffort(num)}`]
]);

/**
 * Creates new mutation observer for children list of HTML elements and text nodes.
 */
new MutationObserver(function (mutations) {
	for (let mutation of mutations) {
		if (mutation.type === 'childList') {
			for (let node of mutation.addedNodes) {
				if (node instanceof HTMLElement) {
					translateHtmlElement(node);
					translateKudos(node);
				} else if (node instanceof Text) {
					translateTextNode(node);
					translateKudos(node);
				}
			}
		}
	}
}).observe(document, {
	subtree: true,
	attributes: false,
	characterData: false,
	childList: true
});

/**
 * Translates all text nodes in HTML element.
 * @param {HTMLElement} root
 */
function translateHtmlElement(root) {
	let node;
	let walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
	while (node = walker.nextNode()) {
		translateTextNode(node);
	}
}

/**
 * Translates single text node.
 * @param {Node} node text node
 */
function translateTextNode(node) {
	let trimmedText = node.textContent.trim();
	if (trimmedText === '') {
	} else if (COMMON_STRINGS.has(trimmedText)) {
		node.textContent = COMMON_STRINGS.get(trimmedText);
	} else {
		for (let [regex, fn] of COMMON_REGEXS.entries()) {
			if (regex instanceof RegExp && regex.test(trimmedText)) {
				node.textContent = trimmedText.replace(regex, fn);
				return;
			}
		}
	}
}

/**
 * Detects kudos button.
 * @deprecated create generic mechanism for selector lookup in HTML elements and single text nodes
 * @param {Node} node HTML element or text node
 */
function translateKudos(node) {
	if (node instanceof HTMLElement) {
		node.querySelectorAll('button.js-view-kudos').forEach(kudoButton => translateKudoInButton(kudoButton));
	} else if (node instanceof Text && !isNaN(+node.textContent)) {
		if (node.parentNode instanceof HTMLElement) {
			node = node.parentNode.closest('button.js-view-kudos');
			if (node) {
				translateKudoInButton(node);
			}
		}
	}
}

/**
 * Translates kudos button.
 * @deprecated
 * @param {Node} kudoButton kudo button HTML element
 */
function translateKudoInButton(kudoButton) {
	let num = kudoButton.children[0] && kudoButton.children[0].textContent;
	if (num != null && kudoButton.children[1]) {
		kudoButton.children[1].textContent = declinateKudos(num);
	}
}

/**
 * Declinates Polish word "polubienie" depending of kudos number.
 * @param numStr number of kudos
 * @returns {string} word in proper case
 */
function declinateKudos(numStr) {
	let num = parseInt(numStr, 10);
	if (num === 1) {
		return 'polubienie';
	} else if (num > 0 && parseInt(num % 100 / 10, 10) === 1) {
		return 'polubień';
	} else switch (num % 10) {
		case 2:
		case 3:
		case 4:
			return `polubienia`;
		default:
			return `polubień`;
	}
}

/**
 * Declinates Polish word "effort" depending on efforts number.
 * @param numStr number of efforts
 * @returns {string} word in proper case
 */
function declinateHiddenEffort(numStr) {
	let num = parseInt(numStr, 10);
	if (num === 1) {
		return 'ukrytą próbę';
	} else if (num > 0 && parseInt(num % 100 / 10, 10) === 1) {
		return 'ukrytych prób';
	} else switch (num % 10) {
		case 2:
		case 3:
		case 4:
			return `ukryte próby`;
		default:
			return `ukrytych prób`;
	}
}