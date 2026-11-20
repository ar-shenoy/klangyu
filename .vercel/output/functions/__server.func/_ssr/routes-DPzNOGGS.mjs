import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as ChevronLeft, S as ChevronUp, T as AudioLines, _ as ListMusic, a as SkipForward, b as Heart, c as Share2, d as Repeat, f as Repeat1, g as MicVocal, h as Pause, i as SlidersHorizontal, l as Settings, m as Play, n as Trash2, o as SkipBack, p as Plus, r as Timer, s as Shuffle, u as Search, v as Library, w as ChevronDown, x as Ellipsis, y as House } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DropdownMenuSub, c as DropdownMenuTrigger, i as DropdownMenuPortal, n as DropdownMenuContent, o as DropdownMenuSubContent, r as DropdownMenuItem, s as DropdownMenuSubTrigger, t as DropdownMenu } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DPzNOGGS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var opener = null;
function bindFileOpener(fn) {
	opener = fn;
	return () => {
		if (opener === fn) opener = null;
	};
}
function requestAudioFiles() {
	opener?.();
}
var en = {
	tagline: "Your realm of sound",
	taglineDe: "Dein Klangreich",
	taglineZh: "你的音域",
	navHome: "Home",
	navLibrary: "Library",
	navSearch: "Search",
	navMixes: "Mixes",
	skip: "Skip",
	next: "Next",
	back: "Back",
	close: "Close",
	cancel: "Cancel",
	save: "Save",
	retry: "Try again",
	play: "Play",
	pause: "Pause",
	previous: "Previous",
	playNext: "Play next",
	addQueue: "Add to queue",
	addPlaylist: "Add to playlist",
	favourite: "Favourite",
	unfavourite: "Remove favourite",
	hide: "Hide",
	share: "Share",
	more: "More",
	select: "Select",
	done: "Done",
	delete: "Delete",
	rename: "Rename",
	moveUp: "Move up",
	moveDown: "Move down",
	undo: "Undo",
	greetMorning: "Good morning",
	greetAfternoon: "Good afternoon",
	greetEvening: "Good evening",
	greetNight: "Still up",
	obWelcome: "Your music, understood",
	obCard1t: "The music you already own",
	obCard1b: "Nothing to subscribe to. Files stay on this device.",
	obCard2t: "Private, on device",
	obCard2b: "Analysis, history and lyrics do not leave the phone.",
	obCard3t: "Free to use",
	obCard3b: "Every phone gets the player. Faster ones get more.",
	obMusic: "Add your music",
	obMusicB: "Play the studio sketches now, or open audio files from this device.",
	obDemo: "Play the sketches",
	obFiles: "Add audio files",
	obDevice: "What this device can do",
	obCore: "You get playback, smart queues, Automix, lyrics, karaoke and an equaliser.",
	obEnhanced: "You also get a closer similarity match from on-device audio features.",
	obStudio: "Stem separation is ready on the Android Studio pack. Vocal reduction works here.",
	obScan: "Reading your library",
	obStart: "Start listening",
	continue: "Continue listening",
	mixes: "Mixes",
	recent: "Recently added",
	mostPlayed: "Most played",
	favourites: "Favourites",
	emptyTitle: "No music here yet",
	emptyBody: "Add files you already own, or play the studio sketches.",
	addMusic: "Add music",
	songs: "Songs",
	albums: "Albums",
	artists: "Artists",
	genres: "Genres",
	folders: "Folders",
	playlists: "Playlists",
	sort: "Sort",
	titleAz: "Title",
	artistAz: "Artist",
	recently: "Recently added",
	shuffle: "Shuffle",
	repeat: "Repeat",
	smartQueue: "Smart queue",
	similar: "Similar",
	energyUp: "Energy up",
	energyDown: "Energy down",
	discover: "Discover",
	morning: "Morning",
	focus: "Focus",
	workout: "Workout",
	night: "Night",
	searchPh: "Songs, people, albums",
	recentSearches: "Recent searches",
	clearAll: "Clear all",
	searchEmpty: "Search your library. Umlauts, pinyin and zhuyin work.",
	noResults: "Nothing matches that.",
	lyrics: "Lyrics",
	queue: "Queue",
	eq: "Equaliser",
	sleep: "Sleep timer",
	karaoke: "Karaoke",
	info: "About this sound",
	energyLow: "Low energy",
	energyMid: "Mid energy",
	energyHigh: "High energy",
	notAnalysed: "Not analysed yet",
	monoWarn: "This song is mono. Vocal reduction will not work.",
	stemsNote: "Stem separation ships with the Studio pack on Android. Vocal reduction works on every device.",
	vocal: "Vocal reduction",
	sleepIn: "Sleep in",
	endTrack: "End of track",
	endAlbum: "End of album",
	extend: "Add 10 min",
	queueEmpty: "The queue is empty.",
	savePlaylist: "Save as playlist",
	noLyrics: "No lyrics stored for this song.",
	lyricsNote: "Online lookup stays off here. Sketches and files you add never leave this device.",
	offset: "Lyric offset",
	settings: "Settings",
	playback: "Playback",
	library: "Library",
	smart: "Smart features",
	appearance: "Appearance",
	storage: "Storage",
	support: "Support",
	about: "About",
	gapless: "Gapless albums",
	crossfade: "Crossfade",
	automix: "Automix",
	automixOff: "Off",
	automixSmart: "Smart sessions",
	automixAlways: "Always",
	style: "Style",
	subtle: "Subtle",
	club: "Club",
	radio: "Radio",
	chill: "Chill",
	harmonic: "Harmonic mixes only",
	loudness: "Loudness",
	loudOff: "Off",
	loudTrack: "Track",
	loudAlbum: "Album",
	resume: "Resume where you left off",
	haptics: "Haptics",
	minLen: "Skip tracks shorter than",
	articles: "Ignore The, A and An",
	analysed: "Analysed",
	analyseNow: "Analyse now",
	tier: "Feature level",
	tierAuto: "Auto",
	tierCore: "Core",
	tierEnhanced: "Enhanced",
	tierStudio: "Studio",
	tierWarn: "A higher level can use more battery and heat. Switch back any time.",
	personal: "Personalisation",
	resetTaste: "Reset personalisation",
	queueLen: "Smart queue length",
	sketches: "Show studio sketches",
	theme: "Theme",
	auto: "Auto",
	light: "Light",
	dark: "Dark",
	amoled: "AMOLED",
	palette: "Palette",
	language: "Language",
	clearHistory: "Clear listening history",
	clearData: "Clear all data",
	export: "Export library file",
	import: "Import library file",
	supTitle: "Enjoying Klangyu?",
	supBody: "It is free and always will be. If it has earned a place on your phone, you can support its development with a one-time contribution. Supporters also get extra themes and app icons.",
	supBtn: "Support",
	notNow: "Not now",
	dontAsk: "Don't ask again",
	supScreen: "This preview includes the Supporter themes. Playback is never locked, and nothing is charged here.",
	rate: "Rate on Play",
	shareApp: "Share Klangyu",
	feedback: "Send feedback",
	aboutBody: "Klangyu plays music you already own. This edition runs in the browser: audio stays on your device, and the studio sketches are generated here so Automix, lyrics and Klangbild work before you import anything.",
	privacy: "Music, analysis and listening history stay on this device. There is no account and no ad tracker.",
	notices: "Open-source notices",
	version: "Version",
	klangbild: "Klangbild",
	week: "Week",
	month: "Month",
	year: "Year",
	listeningTime: "Listening time",
	topArtist: "Top artist",
	topTracks: "Top songs",
	timeOfDay: "Time of day",
	streak: "Longest streak",
	newArtists: "New artists",
	signature: "Klang signature",
	closing: "Your picture of sound",
	needPlays: "Play a little more. Klangbild needs at least 20 plays in the period.",
	hideTitles: "Hide titles",
	hideArtists: "Hide artists",
	statsOnly: "Stats only",
	shareCard: "Share card",
	nightOwl: "Night owl",
	earlyBird: "Early listener",
	ring: "Ring",
	wave: "Wave",
	seal: "Seal",
	constellation: "Constellation",
	market: "Market",
	harbor: "Harbor",
	removed: "Removed from queue",
	added: "Added",
	skippedShort: "Skipped short recordings",
	unplayable: "That file could not be played. Moving on.",
	playlistName: "Playlist name",
	newPlaylist: "New playlist",
	emptyPlaylist: "This playlist is empty.",
	noAlbum: "No tracks.",
	playAll: "Play",
	shufflePlay: "Shuffle",
	analysisBanner: "Analysing library",
	partialQueue: "Smart queue is using analysed tracks only.",
	transition: "Next mix",
	skipMix: "Skip transition",
	badMix: "Not a good mix",
	flat: "Flat",
	resetEq: "Reset",
	preamp: "Preamp",
	bass: "Bass",
	hoursShort: "h",
	minShort: "min",
	days: "days",
	song: "song",
	of: "of",
	explain: "BPM is the tempo. The Camelot code is the key, written the way DJs match songs. Energy comes from loudness, rhythm and brightness, scaled across your library.",
	coming: "In",
	deviceNote: "Checked on this device",
	importOk: "Library file imported",
	importBad: "That file could not be read",
	supportMail: "Feedback",
	preset: "Preset",
	outputNote: "One equaliser for this browser. Per-device profiles ship on Android.",
	seconds: "s",
	onboardingStep: "Step",
	nowPlaying: "Now playing",
	artist: "Artist",
	album: "Album",
	genre: "Genre",
	folder: "Folder",
	playNextOne: "Play next",
	hiddenBack: "Hidden tracks",
	restore: "Restore",
	noneHidden: "Nothing hidden.",
	clearConfirm: "This removes playlists, history and imported files from this browser.",
	yesClear: "Clear",
	tasteReset: "Personalisation reset",
	mixInto: "into the next song",
	lowConf: "Beat match unsure, so this is a short blend.",
	gaplessOn: "Gapless, because these tracks belong together.",
	open: "Open",
	create: "Create",
	tracks: "tracks",
	sketch: "Sketch",
	file: "File",
	queueSaved: "Playlist saved",
	already: "Already in the queue",
	browser: "Browser edition"
};
var tables = {
	en,
	de: {
		tagline: "Dein Klangreich",
		taglineDe: "Dein Klangreich",
		taglineZh: "你的音域",
		navHome: "Start",
		navLibrary: "Mediathek",
		navSearch: "Suche",
		navMixes: "Mixes",
		skip: "Überspringen",
		next: "Weiter",
		back: "Zurück",
		close: "Schließen",
		cancel: "Abbrechen",
		save: "Sichern",
		retry: "Nochmal",
		play: "Wiedergabe",
		pause: "Pause",
		previous: "Vorheriger",
		playNext: "Als Nächstes",
		addQueue: "Zur Warteschlange",
		addPlaylist: "Zur Playlist",
		favourite: "Favorit",
		unfavourite: "Favorit weg",
		hide: "Ausblenden",
		share: "Teilen",
		more: "Mehr",
		select: "Auswählen",
		done: "Fertig",
		delete: "Löschen",
		rename: "Umbenennen",
		moveUp: "Nach oben",
		moveDown: "Nach unten",
		undo: "Rückgängig",
		greetMorning: "Guten Morgen",
		greetAfternoon: "Guten Tag",
		greetEvening: "Guten Abend",
		greetNight: "Noch wach",
		obWelcome: "Deine Musik, verstanden",
		obCard1t: "Die Musik, die du schon hast",
		obCard1b: "Kein Abo. Dateien bleiben auf diesem Gerät.",
		obCard2t: "Privat, auf dem Gerät",
		obCard2b: "Analyse, Verlauf und Texte verlassen das Gerät nicht.",
		obCard3t: "Kostenlos nutzbar",
		obCard3b: "Jedes Gerät bekommt den Player. Schnellere bekommen mehr.",
		obMusic: "Musik hinzufügen",
		obMusicB: "Spiel die Studioskizzen, oder öffne Audiodateien von diesem Gerät.",
		obDemo: "Skizzen abspielen",
		obFiles: "Audiodateien",
		obDevice: "Was dieses Gerät kann",
		obCore: "Du bekommst Wiedergabe, Smart Queues, Automix, Texte, Karaoke und einen Equalizer.",
		obEnhanced: "Dazu eine genauere Ähnlichkeit aus den Audiomerkmalen auf dem Gerät.",
		obStudio: "Stems kommen mit dem Studio-Paket unter Android. Gesangsreduktion geht hier.",
		obScan: "Mediathek wird gelesen",
		obStart: "Loshören",
		continue: "Weiterhören",
		mixes: "Mixes",
		recent: "Zuletzt hinzugefügt",
		mostPlayed: "Am meisten gehört",
		favourites: "Favoriten",
		emptyTitle: "Hier ist noch keine Musik",
		emptyBody: "Füge eigene Dateien hinzu oder spiel die Studioskizzen.",
		addMusic: "Musik hinzufügen",
		songs: "Titel",
		albums: "Alben",
		artists: "Interpreten",
		genres: "Genres",
		folders: "Ordner",
		playlists: "Playlists",
		sort: "Sortierung",
		titleAz: "Titel",
		artistAz: "Interpret",
		recently: "Zuletzt hinzugefügt",
		shuffle: "Zufall",
		repeat: "Wiederholen",
		smartQueue: "Smart Queue",
		similar: "Ähnlich",
		energyUp: "Energie hoch",
		energyDown: "Energie runter",
		discover: "Entdecken",
		morning: "Morgen",
		focus: "Fokus",
		workout: "Training",
		night: "Nacht",
		searchPh: "Titel, Leute, Alben",
		recentSearches: "Letzte Suchen",
		clearAll: "Alles löschen",
		searchEmpty: "Durchsuche die Mediathek. Umlaute, Pinyin und Zhuyin gehen.",
		noResults: "Nichts passt dazu.",
		lyrics: "Text",
		queue: "Warteschlange",
		eq: "Equalizer",
		sleep: "Schlaf-Timer",
		karaoke: "Karaoke",
		info: "Zu diesem Klang",
		energyLow: "Wenig Energie",
		energyMid: "Mittlere Energie",
		energyHigh: "Viel Energie",
		notAnalysed: "Noch nicht analysiert",
		monoWarn: "Dieses Stück ist mono. Gesangsreduktion wirkt nicht.",
		stemsNote: "Stems kommen mit dem Studio-Paket unter Android. Gesangsreduktion geht überall.",
		vocal: "Gesangsreduktion",
		sleepIn: "Schlaf in",
		endTrack: "Ende des Titels",
		endAlbum: "Ende des Albums",
		extend: "10 Min dazu",
		queueEmpty: "Die Warteschlange ist leer.",
		savePlaylist: "Als Playlist sichern",
		noLyrics: "Kein Text zu diesem Titel gespeichert.",
		lyricsNote: "Online-Suche ist hier aus. Skizzen und deine Dateien bleiben auf dem Gerät.",
		offset: "Textversatz",
		settings: "Einstellungen",
		playback: "Wiedergabe",
		library: "Mediathek",
		smart: "Intelligente Funktionen",
		appearance: "Erscheinungsbild",
		storage: "Speicher",
		support: "Unterstützen",
		about: "Über",
		gapless: "Lückenlose Alben",
		crossfade: "Überblendung",
		automix: "Automix",
		automixOff: "Aus",
		automixSmart: "Smarte Sitzungen",
		automixAlways: "Immer",
		style: "Stil",
		subtle: "Dezent",
		club: "Club",
		radio: "Radio",
		chill: "Ruhig",
		harmonic: "Nur harmonische Mixe",
		loudness: "Lautheit",
		loudOff: "Aus",
		loudTrack: "Titel",
		loudAlbum: "Album",
		resume: "An der letzten Stelle weiter",
		haptics: "Haptik",
		minLen: "Titel kürzer als",
		articles: "The, A und An übergehen",
		analysed: "Analysiert",
		analyseNow: "Jetzt analysieren",
		tier: "Funktionsstufe",
		tierAuto: "Auto",
		tierCore: "Kern",
		tierEnhanced: "Erweitert",
		tierStudio: "Studio",
		tierWarn: "Eine höhere Stufe kann Akku und Wärme kosten. Du kannst jederzeit zurück.",
		personal: "Personalisierung",
		resetTaste: "Personalisierung zurücksetzen",
		queueLen: "Länge der Smart Queue",
		sketches: "Studioskizzen zeigen",
		theme: "Thema",
		auto: "Auto",
		light: "Hell",
		dark: "Dunkel",
		amoled: "AMOLED",
		palette: "Palette",
		language: "Sprache",
		clearHistory: "Hörverlauf löschen",
		clearData: "Alle Daten löschen",
		export: "Mediathek exportieren",
		import: "Mediathek importieren",
		supTitle: "Gefällt dir Klangyu?",
		supBody: "Es ist kostenlos und bleibt es. Wenn es einen Platz auf deinem Gerät hat, kannst du die Entwicklung einmalig unterstützen. Unterstützer bekommen zusätzliche Themen und Symbole.",
		supBtn: "Unterstützen",
		notNow: "Nicht jetzt",
		dontAsk: "Nicht mehr fragen",
		supScreen: "Diese Vorschau enthält die Unterstützer-Themen. Wiedergabe ist nie gesperrt, und hier wird nichts berechnet.",
		rate: "Im Play Store bewerten",
		shareApp: "Klangyu teilen",
		feedback: "Rückmeldung",
		aboutBody: "Klangyu spielt Musik, die dir schon gehört. Diese Ausgabe läuft im Browser: Audio bleibt auf dem Gerät, und die Skizzen entstehen hier, damit Automix, Texte und Klangbild sofort gehen.",
		privacy: "Musik, Analyse und Hörverlauf bleiben auf diesem Gerät. Kein Konto, kein Werbe-Tracker.",
		notices: "Open-Source-Hinweise",
		version: "Version",
		klangbild: "Klangbild",
		week: "Woche",
		month: "Monat",
		year: "Jahr",
		listeningTime: "Hörzeit",
		topArtist: "Top-Interpret",
		topTracks: "Top-Titel",
		timeOfDay: "Tageszeit",
		streak: "Längste Serie",
		newArtists: "Neue Interpretinnen",
		signature: "Klangsignatur",
		closing: "Dein Klangbild",
		needPlays: "Hör noch ein wenig. Klangbild braucht mindestens 20 Wiedergaben im Zeitraum.",
		hideTitles: "Titel ausblenden",
		hideArtists: "Namen ausblenden",
		statsOnly: "Nur Zahlen",
		shareCard: "Karte teilen",
		nightOwl: "Nachteule",
		earlyBird: "Frühhörer",
		ring: "Ring",
		wave: "Welle",
		seal: "Siegel",
		constellation: "Sternbild",
		market: "Markt",
		harbor: "Hafen",
		removed: "Aus der Warteschlange genommen",
		added: "Hinzugefügt",
		skippedShort: "Kurze Aufnahmen übersprungen",
		unplayable: "Die Datei ließ sich nicht abspielen. Es geht weiter.",
		playlistName: "Name der Playlist",
		newPlaylist: "Neue Playlist",
		emptyPlaylist: "Diese Playlist ist leer.",
		noAlbum: "Keine Titel.",
		playAll: "Wiedergeben",
		shufflePlay: "Zufall",
		analysisBanner: "Mediathek wird analysiert",
		partialQueue: "Die Smart Queue nutzt nur analysierte Titel.",
		transition: "Nächster Mix",
		skipMix: "Übergang überspringen",
		badMix: "Kein guter Mix",
		flat: "Neutral",
		resetEq: "Zurücksetzen",
		preamp: "Vorverstärkung",
		bass: "Bass",
		hoursShort: "Std",
		minShort: "Min",
		days: "Tage",
		song: "Titel",
		of: "von",
		explain: "BPM ist das Tempo. Der Camelot-Code ist die Tonart, so wie DJs Titel zusammenbringen. Energie kommt aus Lautheit, Rhythmus und Helligkeit, bezogen auf deine Mediathek.",
		coming: "In",
		deviceNote: "Auf diesem Gerät geprüft",
		importOk: "Datei importiert",
		importBad: "Die Datei ließ sich nicht lesen",
		supportMail: "Rückmeldung",
		preset: "Preset",
		outputNote: "Ein Equalizer für diesen Browser. Profile pro Gerät gibt es unter Android.",
		seconds: "s",
		onboardingStep: "Schritt",
		nowPlaying: "Jetzt läuft",
		artist: "Interpret",
		album: "Album",
		genre: "Genre",
		folder: "Ordner",
		playNextOne: "Als Nächstes",
		hiddenBack: "Ausgeblendete Titel",
		restore: "Wiederherstellen",
		noneHidden: "Nichts ausgeblendet.",
		clearConfirm: "Das entfernt Playlists, Verlauf und importierte Dateien aus diesem Browser.",
		yesClear: "Löschen",
		tasteReset: "Personalisierung zurückgesetzt",
		mixInto: "in den nächsten Titel",
		lowConf: "Takt unsicher, deshalb eine kurze Überblendung.",
		gaplessOn: "Lückenlos, diese Titel gehören zusammen.",
		open: "Öffnen",
		create: "Anlegen",
		tracks: "Titel",
		sketch: "Skizze",
		file: "Datei",
		queueSaved: "Playlist gesichert",
		already: "Schon in der Warteschlange",
		browser: "Browser-Ausgabe"
	},
	"zh-TW": {
		tagline: "你的音域",
		taglineDe: "Dein Klangreich",
		taglineZh: "你的音域",
		navHome: "首頁",
		navLibrary: "資料庫",
		navSearch: "搜尋",
		navMixes: "混音",
		skip: "略過",
		next: "下一步",
		back: "返回",
		close: "關閉",
		cancel: "取消",
		save: "儲存",
		retry: "再試一次",
		play: "播放",
		pause: "暫停",
		previous: "上一首",
		playNext: "下一首播放",
		addQueue: "加入佇列",
		addPlaylist: "加入播放清單",
		favourite: "加入最愛",
		unfavourite: "取消最愛",
		hide: "隱藏",
		share: "分享",
		more: "更多",
		select: "選取",
		done: "完成",
		delete: "刪除",
		rename: "重新命名",
		moveUp: "上移",
		moveDown: "下移",
		undo: "復原",
		greetMorning: "早安",
		greetAfternoon: "午安",
		greetEvening: "晚安",
		greetNight: "還醒著",
		obWelcome: "聽懂你的音樂",
		obCard1t: "你已經擁有的音樂",
		obCard1b: "不用訂閱。檔案留在這台裝置上。",
		obCard2t: "就在裝置上，保持私密",
		obCard2b: "分析、聆聽紀錄和歌詞都不會離開裝置。",
		obCard3t: "免費使用",
		obCard3b: "每支手機都有完整播放器。更快的手機得到更多。",
		obMusic: "加入你的音樂",
		obMusicB: "先聽工作室草圖，或從這台裝置開啟音訊檔。",
		obDemo: "播放草圖",
		obFiles: "加入音訊檔",
		obDevice: "這台裝置可以做的事",
		obCore: "你有播放、智慧佇列、Automix、歌詞、卡拉 OK 和等化器。",
		obEnhanced: "另外還有依裝置上音訊特徵做的更準相似度。",
		obStudio: "分軌會隨 Android 的 Studio 套件提供。人聲削弱在這裡就能用。",
		obScan: "正在讀取資料庫",
		obStart: "開始聆聽",
		continue: "繼續聆聽",
		mixes: "混音",
		recent: "最近加入",
		mostPlayed: "播放最多",
		favourites: "最愛",
		emptyTitle: "這裡還沒有音樂",
		emptyBody: "加入你已有的檔案，或先聽工作室草圖。",
		addMusic: "加入音樂",
		songs: "歌曲",
		albums: "專輯",
		artists: "演出者",
		genres: "曲風",
		folders: "資料夾",
		playlists: "播放清單",
		sort: "排序",
		titleAz: "曲名",
		artistAz: "演出者",
		recently: "最近加入",
		shuffle: "隨機",
		repeat: "重複",
		smartQueue: "智慧佇列",
		similar: "相似",
		energyUp: "能量上升",
		energyDown: "能量下降",
		discover: "發現",
		morning: "早晨",
		focus: "專注",
		workout: "運動",
		night: "夜晚",
		searchPh: "歌、人、專輯",
		recentSearches: "最近搜尋",
		clearAll: "全部清除",
		searchEmpty: "搜尋資料庫。注音、拼音和簡繁都能找到。",
		noResults: "沒有符合的結果。",
		lyrics: "歌詞",
		queue: "佇列",
		eq: "等化器",
		sleep: "睡眠計時",
		karaoke: "卡拉 OK",
		info: "關於這段聲音",
		energyLow: "能量低",
		energyMid: "能量中",
		energyHigh: "能量高",
		notAnalysed: "尚未分析",
		monoWarn: "這首歌是單聲道，人聲削弱不會有效。",
		stemsNote: "分軌會隨 Android Studio 套件提供。人聲削弱在每台裝置都能用。",
		vocal: "人聲削弱",
		sleepIn: "入睡於",
		endTrack: "這首歌結束",
		endAlbum: "這張專輯結束",
		extend: "加 10 分鐘",
		queueEmpty: "佇列是空的。",
		savePlaylist: "存成播放清單",
		noLyrics: "這首歌沒有存歌詞。",
		lyricsNote: "這裡不會上網找歌詞。草圖和你的檔案都留在裝置上。",
		offset: "歌詞偏移",
		settings: "設定",
		playback: "播放",
		library: "資料庫",
		smart: "智慧功能",
		appearance: "外觀",
		storage: "儲存空間",
		support: "支持",
		about: "關於",
		gapless: "專輯無間隙",
		crossfade: "交叉淡化",
		automix: "Automix",
		automixOff: "關閉",
		automixSmart: "智慧場次",
		automixAlways: "總是",
		style: "風格",
		subtle: "含蓄",
		club: "俱樂部",
		radio: "電台",
		chill: "放鬆",
		harmonic: "只做和聲銜接",
		loudness: "響度",
		loudOff: "關閉",
		loudTrack: "單曲",
		loudAlbum: "專輯",
		resume: "從上次的位置繼續",
		haptics: "觸覺回饋",
		minLen: "略過短於",
		articles: "忽略開頭的 The、A、An",
		analysed: "已分析",
		analyseNow: "立即分析",
		tier: "功能等級",
		tierAuto: "自動",
		tierCore: "核心",
		tierEnhanced: "增強",
		tierStudio: "工作室",
		tierWarn: "較高等級可能更耗電、更發熱。隨時可以改回來。",
		personal: "個人化",
		resetTaste: "重設個人化",
		queueLen: "智慧佇列長度",
		sketches: "顯示工作室草圖",
		theme: "主題",
		auto: "自動",
		light: "淺色",
		dark: "深色",
		amoled: "AMOLED",
		palette: "配色",
		language: "語言",
		clearHistory: "清除聆聽紀錄",
		clearData: "清除所有資料",
		export: "匯出資料庫檔",
		import: "匯入資料庫檔",
		supTitle: "喜歡 Klangyu 嗎？",
		supBody: "它免費，也會一直免費。如果它在你的手機上有了一個位置，可以用一次性的支持幫助開發。支持者也會得到額外主題和圖示。",
		supBtn: "支持",
		notNow: "先不要",
		dontAsk: "不要再問",
		supScreen: "這個預覽已包含支持者主題。播放永遠不會被鎖住，這裡也不會收費。",
		rate: "到 Play 商店評分",
		shareApp: "分享 Klangyu",
		feedback: "傳送意見",
		aboutBody: "Klangyu 播放你已經擁有的音樂。這個版本在瀏覽器裡運行：聲音留在你的裝置上，工作室草圖在這裡產生，所以還沒匯入檔案就能試 Automix、歌詞和 Klangbild。",
		privacy: "音樂、分析和聆聽紀錄都留在這台裝置。沒有帳號，也沒有廣告追蹤。",
		notices: "開放原始碼聲明",
		version: "版本",
		klangbild: "Klangbild",
		week: "週",
		month: "月",
		year: "年",
		listeningTime: "聆聽時間",
		topArtist: "最常聽的演出者",
		topTracks: "最常聽的歌",
		timeOfDay: "時段",
		streak: "最長連續",
		newArtists: "新的演出者",
		signature: "聲音簽名",
		closing: "你的聲音圖",
		needPlays: "再聽一些。Klangbild 需要這段時間裡至少 20 次播放。",
		hideTitles: "隱藏曲名",
		hideArtists: "隱藏演出者",
		statsOnly: "只顯示數字",
		shareCard: "分享卡片",
		nightOwl: "夜貓子",
		earlyBird: "早起聽眾",
		ring: "唱片",
		wave: "波浪",
		seal: "印章",
		constellation: "星座",
		market: "夜市",
		harbor: "港灣",
		removed: "已從佇列移除",
		added: "已加入",
		skippedShort: "已略過較短的錄音",
		unplayable: "這個檔案無法播放，已跳到下一首。",
		playlistName: "播放清單名稱",
		newPlaylist: "新的播放清單",
		emptyPlaylist: "這份清單是空的。",
		noAlbum: "沒有曲目。",
		playAll: "播放",
		shufflePlay: "隨機播放",
		analysisBanner: "正在分析資料庫",
		partialQueue: "智慧佇列只用已分析的曲目。",
		transition: "下一段銜接",
		skipMix: "略過銜接",
		badMix: "這段銜接不好",
		flat: "平坦",
		resetEq: "重設",
		preamp: "前置增益",
		bass: "低音",
		hoursShort: "小時",
		minShort: "分",
		days: "天",
		song: "首",
		of: "/",
		explain: "BPM 是速度。Camelot 代碼是調性，DJ 用它來接歌。能量來自響度、節奏和亮度，並依你的資料庫調整。",
		coming: "還有",
		deviceNote: "已在這台裝置上檢查",
		importOk: "已匯入資料庫檔",
		importBad: "這個檔案讀不起來",
		supportMail: "意見",
		preset: "預設",
		outputNote: "這個瀏覽器使用一組等化器。各輸出裝置的設定會在 Android 版提供。",
		seconds: "秒",
		onboardingStep: "步驟",
		nowPlaying: "正在播放",
		artist: "演出者",
		album: "專輯",
		genre: "曲風",
		folder: "資料夾",
		playNextOne: "下一首播放",
		hiddenBack: "已隱藏的曲目",
		restore: "還原",
		noneHidden: "沒有隱藏的曲目。",
		clearConfirm: "這會從這個瀏覽器移除播放清單、紀錄和匯入的檔案。",
		yesClear: "清除",
		tasteReset: "已重設個人化",
		mixInto: "接到下一首",
		lowConf: "節拍不確定，所以用短淡化。",
		gaplessOn: "無間隙，因為這些曲子本來就在一起。",
		open: "開啟",
		create: "建立",
		tracks: "首",
		sketch: "草圖",
		file: "檔案",
		queueSaved: "已存成播放清單",
		already: "已經在佇列裡",
		browser: "瀏覽器版"
	}
};
function t(locale, key) {
	return tables[locale][key] ?? en[key];
}
function intlLocale(locale) {
	if (locale === "zh-TW") return "zh-Hant-TW";
	if (locale === "de") return "de";
	return "en";
}
function formatDuration(locale, ms) {
	const mins = Math.round(ms / 6e4);
	if (mins < 60) return `${new Intl.NumberFormat(intlLocale(locale)).format(mins)} ${t(locale, "minShort")}`;
	const h = Math.floor(mins / 60);
	const m = mins % 60;
	const fmt = new Intl.NumberFormat(intlLocale(locale));
	return `${fmt.format(h)} ${t(locale, "hoursShort")} ${fmt.format(m)} ${t(locale, "minShort")}`;
}
function countNoun(locale, n) {
	const fmt = new Intl.NumberFormat(intlLocale(locale)).format(n);
	if (locale === "zh-TW") return `${fmt} 首`;
	if (locale === "de") return n === 1 ? "1 Titel" : `${fmt} Titel`;
	return n === 1 ? "1 song" : `${fmt} songs`;
}
var MAJOR$1 = [
	6.35,
	2.23,
	3.48,
	2.33,
	4.38,
	4.09,
	2.52,
	5.19,
	2.39,
	3.66,
	2.29,
	2.88
];
var MINOR$1 = [
	6.33,
	2.68,
	3.52,
	5.38,
	2.6,
	3.53,
	2.54,
	4.75,
	3.98,
	2.69,
	3.34,
	3.17
];
function downmix(buffer) {
	const srIn = buffer.sampleRate;
	const target = 22050;
	const step = srIn / target;
	const left = buffer.getChannelData(0);
	const right = buffer.numberOfChannels > 1 ? buffer.getChannelData(1) : left;
	const n = Math.min(left.length, Math.floor(srIn * 45));
	const outLen = Math.max(1, Math.floor(n / step));
	const mono = new Float32Array(outLen);
	for (let i = 0; i < outLen; i++) {
		const idx = Math.min(n - 1, Math.floor(i * step));
		mono[i] = .5 * (left[idx] + right[idx]);
	}
	return {
		mono,
		sr: target
	};
}
function goertzel(samples, start, len, sr, freq) {
	const k = Math.round(len * freq / sr);
	const w = 2 * Math.PI * k / len;
	const coeff = 2 * Math.cos(w);
	let s0 = 0;
	let s1 = 0;
	let s2 = 0;
	const end = Math.min(samples.length, start + len);
	for (let i = start; i < end; i++) {
		s0 = samples[i] + coeff * s1 - s2;
		s2 = s1;
		s1 = s0;
	}
	return s1 * s1 + s2 * s2 - coeff * s1 * s2;
}
function correlate(chroma, profile) {
	let c = 0;
	let n1 = 0;
	let n2 = 0;
	const mc = chroma.reduce((a, b) => a + b, 0) / chroma.length;
	const mp = profile.reduce((a, b) => a + b, 0) / profile.length;
	for (let i = 0; i < 12; i++) {
		const a = chroma[i] - mc;
		const b = profile[i] - mp;
		c += a * b;
		n1 += a * a;
		n2 += b * b;
	}
	return c / Math.sqrt(n1 * n2 + 1e-9);
}
function stereoCorrelation(buffer) {
	if (buffer.numberOfChannels < 2) return 1;
	const l = buffer.getChannelData(0);
	const r = buffer.getChannelData(1);
	let num = 0;
	let dl = 0;
	let dr = 0;
	const step = Math.max(1, Math.floor(l.length / 24e3));
	for (let i = 0; i < l.length; i += step) {
		num += l[i] * r[i];
		dl += l[i] * l[i];
		dr += r[i] * r[i];
	}
	return num / Math.sqrt(dl * dr + 1e-9);
}
function peaksFromBuffer(buffer, bars = 48) {
	const data = buffer.getChannelData(0);
	const size = Math.max(1, Math.floor(data.length / bars));
	const peaks = [];
	for (let i = 0; i < bars; i++) {
		let sum = 0;
		let n = 0;
		const start = i * size;
		for (let j = 0; j < size; j += 16) {
			sum += Math.abs(data[start + j] || 0);
			n += 1;
		}
		peaks.push(sum / Math.max(1, n));
	}
	const max = Math.max(...peaks, .001);
	return peaks.map((p) => Math.min(1, p / max));
}
function analyseBuffer(buffer) {
	const { mono, sr } = downmix(buffer);
	const frame = 1024;
	const hop = 512;
	const energies = [];
	for (let i = 0; i + frame < mono.length; i += hop) {
		let e = 0;
		for (let j = 0; j < frame; j += 2) e += mono[i + j] * mono[i + j];
		energies.push(e / frame);
	}
	const flux = energies.map((e, i) => Math.max(0, e - (energies[i - 1] ?? e)));
	const fps = sr / hop;
	let best = 0;
	let bestBpm = 0;
	let sumCorr = 0;
	let trials = 0;
	for (let bpm = 70; bpm <= 180; bpm += 1) {
		const lag = Math.round(fps * 60 / bpm);
		if (lag < 1 || lag >= flux.length) continue;
		let c = 0;
		const limit = Math.min(flux.length - lag, 1500);
		for (let i = 0; i < limit; i += 1) c += flux[i] * flux[i + lag];
		sumCorr += c;
		trials += 1;
		if (c > best) {
			best = c;
			bestBpm = bpm;
		}
	}
	const mean = sumCorr / Math.max(1, trials);
	let confidence = mean > 0 ? Math.min(1, best / (mean * 4)) : 0;
	if (bestBpm < 50 || bestBpm > 220) confidence = 0;
	const chroma = new Array(12).fill(0);
	const win = 8192;
	const windows = 8;
	for (let w = 0; w < windows; w++) {
		const start = Math.floor((mono.length - win) * w / windows);
		if (start < 0) continue;
		for (let midi = 36; midi < 84; midi++) {
			const freq = 440 * 2 ** ((midi - 69) / 12);
			chroma[midi % 12] += goertzel(mono, Math.max(0, start), win, sr, freq);
		}
	}
	let bestKey = 0;
	let bestMode = "major";
	let bestScore = -Infinity;
	let second = -Infinity;
	for (let root = 0; root < 12; root++) {
		const rotated = chroma.map((_, i) => chroma[(i + root) % 12]);
		for (const [mode, profile] of [["major", MAJOR$1], ["minor", MINOR$1]]) {
			const score = correlate(rotated, profile);
			if (score > bestScore) {
				second = bestScore;
				bestScore = score;
				bestKey = root;
				bestMode = mode;
			} else if (score > second) second = score;
		}
	}
	if (bestScore - second < .04) confidence = Math.min(confidence, .45);
	let sq = 0;
	let zc = 0;
	for (let i = 1; i < mono.length; i += 2) {
		sq += mono[i] * mono[i];
		if (mono[i] * mono[i - 1] < 0) zc += 1;
	}
	const rms = Math.sqrt(sq / (mono.length / 2));
	const energy = Math.max(0, Math.min(1, (rms - .015) / .18));
	const brightness = Math.max(0, Math.min(1, (zc / (mono.length / 2) - .01) / .12));
	const danceability = Math.max(0, Math.min(1, confidence * (bestBpm > 100 ? .75 : .45) * (.4 + energy)));
	const lufs = Math.max(-28, Math.min(-6, -.691 + 20 * Math.log10(rms + 1e-6)));
	const corr = stereoCorrelation(buffer);
	return {
		bpm: confidence > 0 ? bestBpm : 0,
		bpmConfidence: Number.isFinite(confidence) ? confidence : 0,
		keyRoot: bestKey,
		mode: bestMode,
		energy,
		brightness,
		danceability,
		loudnessLufs: Number.isFinite(lufs) ? lufs : -14,
		mono: buffer.numberOfChannels < 2 || corr > .98
	};
}
var FREQS = [
	32,
	64,
	125,
	250,
	500,
	1e3,
	2e3,
	4e3,
	8e3,
	16e3
];
function midi(note) {
	return 440 * 2 ** ((note - 69) / 12);
}
function rng(seed) {
	let s = Math.abs(seed) % 2147483646 || 1;
	return () => {
		s = s * 16807 % 2147483647;
		return (s - 1) / 2147483646;
	};
}
function noiseBuffer(ctx, seed) {
	const rand = rng(seed);
	const len = Math.floor(ctx.sampleRate * .25);
	const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < len; i++) data[i] = rand() * 2 - 1;
	return buffer;
}
async function renderSketch(clip) {
	const bpm = Math.max(60, clip.bpm || 110);
	const seconds = 1920 / bpm;
	const ctx = new OfflineAudioContext(2, Math.ceil(seconds * 44100), 44100);
	const dest = ctx.destination;
	const rand = rng((clip.seed ?? 1) + clip.keyRoot * 17);
	const scale = clip.mode === "major" ? [
		0,
		2,
		4,
		5,
		7,
		9,
		11
	] : [
		0,
		2,
		3,
		5,
		7,
		8,
		10
	];
	const root = 36 + (clip.keyRoot % 12 + 12) % 12;
	const leadRoot = root + 24;
	const style = clip.style ?? "indie";
	const energy = clip.energy;
	const sixteenth = 60 / bpm / 4;
	const steps = 128;
	const noise = noiseBuffer(ctx, clip.seed ?? 3);
	const low = ctx.createBiquadFilter();
	low.type = "lowpass";
	low.frequency.value = 280;
	low.connect(dest);
	const hatFilter = ctx.createBiquadFilter();
	hatFilter.type = "highpass";
	hatFilter.frequency.value = 6e3;
	hatFilter.connect(dest);
	const tone = (time, dur, freq, type, peak, target, attack = .012) => {
		if (time < 0 || time > seconds - .05) return;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = type;
		osc.frequency.setValueAtTime(Math.max(30, freq), time);
		const a = Math.min(attack, dur * .4);
		gain.gain.setValueAtTime(1e-4, time);
		gain.gain.exponentialRampToValueAtTime(Math.max(2e-4, peak), time + a);
		gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
		osc.connect(gain);
		gain.connect(target);
		osc.start(time);
		osc.stop(time + dur + .03);
	};
	const panTone = (time, dur, freq, type, peak, pan) => {
		const p = ctx.createStereoPanner();
		p.pan.value = pan;
		p.connect(dest);
		tone(time, dur, freq, type, peak, p, .01);
	};
	const hit = (time, peak, rate, target, dur) => {
		const src = ctx.createBufferSource();
		src.buffer = noise;
		src.playbackRate.value = rate;
		const gain = ctx.createGain();
		gain.gain.setValueAtTime(peak, time);
		gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
		src.connect(gain);
		gain.connect(target);
		src.start(time);
		src.stop(time + dur + .02);
	};
	const degree = (base, deg) => {
		const oct = Math.floor(deg / scale.length);
		const i = (deg % scale.length + scale.length) % scale.length;
		return base + scale[i] + oct * 12;
	};
	let walk = 0;
	for (let i = 0; i < steps; i++) {
		const time = i * sixteenth;
		if (time > seconds - .06) break;
		const pos = i % 16;
		const kickPeak = style === "club" ? .62 : style === "ambient" ? .22 : .42;
		if (style === "club" ? pos % 4 === 0 : style === "ambient" ? pos === 0 && i % 32 === 0 : pos === 0 || pos === 8 || style === "pop" && pos === 10 && rand() > .4) {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(style === "ambient" ? 90 : 150, time);
			osc.frequency.exponentialRampToValueAtTime(42, time + .09);
			gain.gain.setValueAtTime(kickPeak, time);
			gain.gain.exponentialRampToValueAtTime(1e-4, time + (style === "ambient" ? .4 : .22));
			osc.connect(gain);
			gain.connect(dest);
			osc.start(time);
			osc.stop(time + .42);
		}
		if ((style === "club" || style === "pop") && (pos === 4 || pos === 12)) {
			tone(time, .12, midi(leadRoot - 12), "triangle", .12, dest, .005);
			hit(time, .18, .8, dest, .16);
		} else if (style === "indie" && (pos === 4 || pos === 12)) hit(time, .12, .7, dest, .14);
		if (style === "ambient" ? pos === 4 && rand() > .5 : style === "club" ? pos % 2 === 1 : pos % 2 === 0) {
			const p = ctx.createStereoPanner();
			p.pan.value = pos % 4 === 0 ? -.35 : .4;
			p.connect(hatFilter);
			hit(time, style === "club" ? .045 : .03, 1.4, p, .05);
		}
		if (pos % 4 === 0 && style !== "ambient") {
			const pattern = [
				0,
				0,
				4,
				0,
				3,
				4,
				0,
				6
			];
			const deg = pattern[i / 4 % pattern.length];
			tone(time, sixteenth * 3.2, midi(degree(root, deg)), "triangle", .2, low, .008);
		} else if (style === "ambient" && pos === 0) tone(time, sixteenth * 14, midi(degree(root, 0)), "sine", .16, low, .08);
		if (pos % 2 === 0 && rand() < .25 + energy * .55 && style !== "ambient") {
			walk = Math.max(-2, Math.min(9, walk + (rand() < .5 ? -1 : 1) * (rand() < .75 ? 1 : 2)));
			const note = midi(degree(leadRoot, walk));
			tone(time, sixteenth * (rand() > .7 ? 3.5 : 1.7), note, "sine", .075, dest, .02);
			tone(time, sixteenth * 1.6, note * 2, "triangle", .02, dest, .02);
		}
		if (style === "ambient" && pos === 0 && rand() > .3) tone(time, sixteenth * 10, midi(degree(leadRoot, Math.floor(rand() * 5))), "sine", .05, dest, .1);
		if (pos === 0) for (const deg of [
			0,
			2,
			4
		]) {
			const freq = midi(degree(leadRoot - 12, deg));
			panTone(time, Math.min(seconds - time - .08, sixteenth * 15), freq * 1.003, "triangle", style === "club" ? .035 : .05, -.55);
			panTone(time, Math.min(seconds - time - .08, sixteenth * 15), freq * .997, "sine", style === "club" ? .03 : .045, .55);
		}
	}
	const rendered = await ctx.startRendering();
	for (let c = 0; c < rendered.numberOfChannels; c++) {
		const data = rendered.getChannelData(c);
		const n = Math.min(32, data.length);
		for (let i = 0; i < n; i++) data[data.length - 1 - i] *= i / n;
	}
	return rendered;
}
function lufsGain(lufs) {
	return 10 ** (Math.max(-10, Math.min(10, -14 - lufs)) / 20);
}
var KlangEngine = class {
	ctx = null;
	master = null;
	preamp = null;
	filters = [];
	bass = null;
	vocalDry = null;
	vocalWet = null;
	vocalBass = null;
	analyser = null;
	decks = [];
	cache = /* @__PURE__ */ new Map();
	files = /* @__PURE__ */ new Map();
	head = null;
	currentClip = null;
	pausedMs = 0;
	playing = false;
	armed = null;
	armedBuffer = null;
	preparing = false;
	fading = false;
	fadeEnds = 0;
	fadeFrom = 0;
	handoff = null;
	queuedArm = null;
	timer = 0;
	token = 0;
	listeners = /* @__PURE__ */ new Set();
	handlers = {};
	loudnessOn = true;
	setHandlers(handlers) {
		this.handlers = handlers;
	}
	subscribe(fn) {
		this.listeners.add(fn);
		return () => {
			this.listeners.delete(fn);
		};
	}
	emit() {
		for (const fn of this.listeners) fn();
	}
	snapshot() {
		const positionMs = this.positionMs();
		const durationMs = this.head?.durationMs ?? 0;
		const transition = this.armed && this.head ? {
			technique: this.armed.technique,
			fallback: this.armed.fallback,
			reason: this.armed.reason,
			inMs: Math.max(0, durationMs - positionMs)
		} : null;
		return {
			playing: this.playing,
			positionMs,
			currentId: this.head?.id ?? null,
			durationMs,
			transition
		};
	}
	positionMs() {
		if (!this.playing || !this.head || !this.ctx) return this.pausedMs;
		return this.head.anchorMs + (this.ctx.currentTime - this.head.anchorCtx) * 1e3;
	}
	async unlock() {
		const ctx = this.ensure();
		if (ctx.state === "suspended") await ctx.resume();
	}
	setUserBuffer(id, buffer) {
		this.files.set(id, buffer);
		if (this.files.size > 4) {
			const oldest = this.files.keys().next().value;
			if (oldest && oldest !== id) this.files.delete(oldest);
		}
	}
	forgetUser(id) {
		this.files.delete(id);
		this.cache.delete(id);
	}
	clearUsers() {
		this.files.clear();
	}
	setLoudness(on) {
		this.loudnessOn = on;
	}
	setEq(bands, preampDb, bassDb) {
		if (!this.ctx) this.pendingEq = {
			bands,
			preampDb,
			bassDb
		};
		else this.applyEq(bands, preampDb, bassDb);
	}
	pendingEq = null;
	pendingVocal = 0;
	applyEq(bands, preampDb, bassDb) {
		if (!this.preamp || !this.bass) return;
		this.preamp.gain.value = 10 ** (Math.max(-12, Math.min(12, preampDb)) / 20);
		this.bass.gain.value = Math.max(0, Math.min(12, bassDb));
		bands.forEach((g, i) => {
			if (this.filters[i]) this.filters[i].gain.value = Math.max(-12, Math.min(12, g));
		});
	}
	setVocal(amount) {
		const v = Math.max(0, Math.min(1, amount));
		this.pendingVocal = v;
		if (!this.vocalDry || !this.vocalWet || !this.vocalBass) return;
		this.vocalDry.gain.value = 1 - v;
		this.vocalWet.gain.value = v;
		this.vocalBass.gain.value = v * .9;
	}
	readFreq(target) {
		if (!this.analyser) return;
		this.analyser.getByteFrequencyData(target);
	}
	arm(next) {
		if (this.fading || this.handoff) {
			this.queuedArm = next;
			return;
		}
		this.armed = next;
		this.armedBuffer = null;
		this.preparing = false;
		this.emit();
	}
	async play(clip, startMs = 0) {
		this.currentClip = clip;
		const token = ++this.token;
		const ctx = this.ensure();
		if (ctx.state === "suspended") await ctx.resume();
		if (this.master) this.master.gain.setValueAtTime(1, ctx.currentTime);
		const buffer = await this.bufferFor(clip);
		if (token !== this.token) return;
		this.stopAll();
		this.fading = false;
		this.handoff = null;
		const ms = Math.max(0, Math.min(startMs, Math.max(0, clip.durationMs - 400)));
		this.startDeck(0, buffer, ctx.currentTime + .02, ms / 1e3 % buffer.duration, 1);
		this.applyLoudness(0, clip.lufs);
		this.head = {
			id: clip.id,
			durationMs: clip.durationMs,
			deck: 0,
			anchorCtx: ctx.currentTime + .02,
			anchorMs: ms,
			lufs: clip.lufs
		};
		this.pausedMs = ms;
		this.playing = true;
		this.armedBuffer = null;
		this.emit();
		this.session();
	}
	pause() {
		if (!this.ctx || !this.playing) return;
		this.pausedMs = this.positionMs();
		this.stopAll();
		this.playing = false;
		this.fading = false;
		this.handoff = null;
		this.emit();
		this.session();
	}
	async resume() {
		if (!this.head || !this.currentClip || this.playing) return;
		await this.play(this.currentClip, this.pausedMs);
	}
	seek(ms) {
		if (!this.head) return;
		const next = Math.max(0, Math.min(ms, this.head.durationMs - 200));
		this.pausedMs = next;
		if (!this.playing) {
			this.emit();
			return;
		}
		if (!this.currentClip) return;
		this.play(this.currentClip, next);
	}
	fadeOut(seconds) {
		if (!this.ctx || !this.master) return;
		const now = this.ctx.currentTime;
		this.master.gain.cancelScheduledValues(now);
		this.master.gain.setValueAtTime(this.master.gain.value, now);
		this.master.gain.linearRampToValueAtTime(1e-4, now + seconds);
	}
	restoreGain() {
		if (!this.ctx || !this.master) return;
		const now = this.ctx.currentTime;
		this.master.gain.cancelScheduledValues(now);
		this.master.gain.setValueAtTime(1, now);
	}
	updateSession(meta) {
		if (typeof navigator === "undefined" || !("mediaSession" in navigator)) return;
		if (!meta) {
			navigator.mediaSession.playbackState = "none";
			return;
		}
		navigator.mediaSession.metadata = new MediaMetadata({
			title: meta.title,
			artist: meta.artist,
			album: meta.album
		});
		navigator.mediaSession.playbackState = this.playing ? "playing" : "paused";
	}
	session() {
		if (typeof navigator === "undefined" || !("mediaSession" in navigator)) return;
		navigator.mediaSession.playbackState = this.playing ? "playing" : "paused";
	}
	ensure() {
		if (this.ctx) return this.ctx;
		const ctx = new AudioContext();
		this.ctx = ctx;
		const preamp = ctx.createGain();
		this.preamp = preamp;
		let node = preamp;
		this.filters = FREQS.map((freq) => {
			const filter = ctx.createBiquadFilter();
			filter.type = "peaking";
			filter.frequency.value = freq;
			filter.Q.value = 1.15;
			filter.gain.value = 0;
			node.connect(filter);
			node = filter;
			return filter;
		});
		const bass = ctx.createBiquadFilter();
		bass.type = "lowshelf";
		bass.frequency.value = 90;
		bass.gain.value = 0;
		this.bass = bass;
		node.connect(bass);
		const vocalIn = ctx.createGain();
		bass.connect(vocalIn);
		const splitter = ctx.createChannelSplitter(2);
		const sideL = ctx.createGain();
		const sideR = ctx.createGain();
		sideR.gain.value = -1;
		const side = ctx.createGain();
		side.gain.value = .5;
		const hp = ctx.createBiquadFilter();
		hp.type = "highpass";
		hp.frequency.value = 150;
		const lp = ctx.createBiquadFilter();
		lp.type = "lowpass";
		lp.frequency.value = 150;
		const dry = ctx.createGain();
		const wet = ctx.createGain();
		const bassBack = ctx.createGain();
		const vocalOut = ctx.createGain();
		this.vocalDry = dry;
		this.vocalWet = wet;
		this.vocalBass = bassBack;
		vocalIn.connect(dry);
		vocalIn.connect(splitter);
		splitter.connect(sideL, 0);
		splitter.connect(sideR, 1);
		sideL.connect(side);
		sideR.connect(side);
		side.connect(hp);
		hp.connect(wet);
		vocalIn.connect(lp);
		lp.connect(bassBack);
		dry.connect(vocalOut);
		wet.connect(vocalOut);
		bassBack.connect(vocalOut);
		dry.gain.value = 1;
		wet.gain.value = 0;
		bassBack.gain.value = 0;
		const comp = ctx.createDynamicsCompressor();
		comp.threshold.value = -2;
		comp.knee.value = 3;
		comp.ratio.value = 12;
		comp.attack.value = .004;
		comp.release.value = .08;
		vocalOut.connect(comp);
		const analyser = ctx.createAnalyser();
		analyser.fftSize = 64;
		analyser.smoothingTimeConstant = .82;
		this.analyser = analyser;
		comp.connect(analyser);
		const master = ctx.createGain();
		this.master = master;
		analyser.connect(master);
		master.connect(ctx.destination);
		this.decks = [0, 1].map(() => this.makeDeck(ctx, preamp));
		if (this.pendingEq) this.applyEq(this.pendingEq.bands, this.pendingEq.preampDb, this.pendingEq.bassDb);
		this.setVocal(this.pendingVocal);
		this.timer = window.setInterval(() => this.tick(), 100);
		this.bindSession();
		return ctx;
	}
	makeDeck(ctx, dest) {
		const input = ctx.createGain();
		const hp = ctx.createBiquadFilter();
		hp.type = "highpass";
		hp.frequency.value = 20;
		const lp = ctx.createBiquadFilter();
		lp.type = "lowpass";
		lp.frequency.value = 18e3;
		const fader = ctx.createGain();
		const echoSend = ctx.createGain();
		echoSend.gain.value = 0;
		const delay = ctx.createDelay(1.5);
		delay.delayTime.value = .3;
		const fb = ctx.createGain();
		fb.gain.value = .32;
		const echoReturn = ctx.createGain();
		echoReturn.gain.value = .45;
		input.connect(hp);
		hp.connect(lp);
		lp.connect(fader);
		fader.connect(dest);
		fader.connect(echoSend);
		echoSend.connect(delay);
		delay.connect(echoReturn);
		echoReturn.connect(dest);
		delay.connect(fb);
		fb.connect(delay);
		return {
			input,
			hp,
			lp,
			fader,
			echoSend,
			delay,
			source: null
		};
	}
	bindSession() {
		if (!("mediaSession" in navigator)) return;
		const safe = (type, fn) => {
			try {
				navigator.mediaSession.setActionHandler(type, fn);
			} catch {}
		};
		safe("play", () => this.handlers.onAdvance && document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "play" })));
		safe("pause", () => document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "pause" })));
		safe("nexttrack", () => document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "next" })));
		safe("previoustrack", () => document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "prev" })));
		safe("seekto", () => {});
	}
	async bufferFor(clip) {
		if (clip.source === "file") {
			const found = this.files.get(clip.id);
			if (found) return found;
			throw new Error("missing-file");
		}
		const cached = this.cache.get(clip.id);
		if (cached) return cached;
		const rendered = await renderSketch(clip);
		this.cache.set(clip.id, rendered);
		if (this.cache.size > 8) {
			const oldest = this.cache.keys().next().value;
			if (oldest && oldest !== clip.id) this.cache.delete(oldest);
		}
		return rendered;
	}
	startDeck(index, buffer, when, offset, gain) {
		const ctx = this.ctx;
		if (!ctx) return;
		const deck = this.decks[index];
		this.stopDeck(index);
		const src = ctx.createBufferSource();
		src.buffer = buffer;
		src.loop = true;
		src.connect(deck.input);
		const dur = buffer.duration || 1;
		const off = (offset % dur + dur) % dur;
		src.start(when, off);
		deck.source = src;
		const now = Math.max(when, ctx.currentTime);
		deck.fader.gain.cancelScheduledValues(now);
		deck.fader.gain.setValueAtTime(gain, now);
		deck.hp.frequency.cancelScheduledValues(now);
		deck.lp.frequency.cancelScheduledValues(now);
		deck.hp.frequency.setValueAtTime(20, now);
		deck.lp.frequency.setValueAtTime(18e3, now);
		deck.echoSend.gain.cancelScheduledValues(now);
		deck.echoSend.gain.setValueAtTime(0, now);
	}
	applyLoudness(index, lufs) {
		this.decks[index].input.gain.value = this.loudnessOn ? lufsGain(lufs) : 1;
	}
	stopDeck(index) {
		const deck = this.decks[index];
		if (!deck?.source) return;
		try {
			deck.source.stop();
		} catch {}
		deck.source.disconnect();
		deck.source = null;
	}
	stopAll() {
		this.stopDeck(0);
		this.stopDeck(1);
	}
	tick() {
		if (!this.ctx || !this.head || !this.playing) return;
		const pos = this.positionMs();
		const dur = this.head.durationMs;
		if (this.fading && this.ctx.currentTime >= this.fadeEnds) this.finishFade();
		else if (this.handoff && this.ctx.currentTime >= this.handoff.at) this.finishHandoff();
		else if (!this.fading && !this.handoff && this.armed) {
			const lead = Math.max(2500, this.armed.fadeMs + 1500);
			if (!this.armedBuffer && !this.preparing && pos > dur - lead) {
				this.preparing = true;
				const arm = this.armed;
				this.bufferFor(arm.clip).then((buffer) => {
					if (this.armed?.clip.id === arm.clip.id) this.armedBuffer = buffer;
				}).catch(() => {
					this.armedBuffer = null;
				}).finally(() => {
					this.preparing = false;
				});
			}
			if (this.armedBuffer && this.armed.fadeMs > 40 && pos >= dur - this.armed.fadeMs && pos < dur) this.beginFade();
			else if (this.armed.fadeMs <= 40 && this.armedBuffer && pos >= dur - 120) this.beginHandoff();
			else if (pos >= dur) this.hardEnd();
		} else if (!this.armed && pos >= dur) this.hardEnd();
		this.emit();
	}
	beginFade() {
		if (!this.ctx || !this.head || !this.armed || !this.armedBuffer) return;
		const arm = this.armed;
		const from = this.head.deck;
		const to = from === 0 ? 1 : 0;
		const now = this.ctx.currentTime + .03;
		const seconds = Math.max(.08, arm.fadeMs / 1e3);
		this.startDeck(to, this.armedBuffer, now, 0, 1e-4);
		this.applyLoudness(to, arm.clip.lufs);
		const out = this.decks[from].fader.gain;
		const inn = this.decks[to].fader.gain;
		const steps = 24;
		const cOut = new Float32Array(steps);
		const cIn = new Float32Array(steps);
		for (let i = 0; i < steps; i++) {
			const p = i / 23;
			cOut[i] = Math.cos(p * Math.PI / 2);
			cIn[i] = Math.sin(p * Math.PI / 2);
		}
		try {
			out.cancelScheduledValues(now);
			inn.cancelScheduledValues(now);
			out.setValueAtTime(out.value || 1, now);
			inn.setValueAtTime(1e-4, now);
			out.setValueCurveAtTime(cOut, now, seconds);
			inn.setValueCurveAtTime(cIn, now, seconds);
		} catch {
			out.linearRampToValueAtTime(1e-4, now + seconds);
			inn.linearRampToValueAtTime(1, now + seconds);
		}
		this.shape(from, to, arm, now, seconds);
		this.fading = true;
		this.fadeEnds = now + seconds;
		this.fadeFrom = from;
	}
	shape(from, to, arm, now, seconds) {
		const a = this.decks[from];
		const b = this.decks[to];
		if (arm.technique === "filter") {
			a.lp.frequency.setValueAtTime(16e3, now);
			a.lp.frequency.exponentialRampToValueAtTime(380, now + seconds);
		}
		if (arm.technique === "echo") {
			const beat = 60 / Math.max(60, arm.clip.bpm || 120);
			a.delay.delayTime.setValueAtTime(Math.min(1.2, beat), now);
			a.echoSend.gain.setValueAtTime(.7, now);
			a.echoSend.gain.linearRampToValueAtTime(1e-4, now + seconds);
		}
		if (arm.technique === "bass") {
			b.hp.frequency.setValueAtTime(220, now);
			b.hp.frequency.exponentialRampToValueAtTime(28, now + seconds);
			a.hp.frequency.setValueAtTime(30, now + seconds * .45);
			a.hp.frequency.exponentialRampToValueAtTime(180, now + seconds);
		}
	}
	finishFade() {
		if (!this.head || !this.armed) {
			this.fading = false;
			return;
		}
		const playedMs = this.positionMs();
		const to = this.fadeFrom === 0 ? 1 : 0;
		this.stopDeck(this.fadeFrom);
		const clip = this.armed.clip;
		const startedAt = this.fadeEnds - Math.max(.08, this.armed.fadeMs / 1e3);
		this.head = {
			id: clip.id,
			durationMs: clip.durationMs,
			deck: to,
			anchorCtx: startedAt,
			anchorMs: 0,
			lufs: clip.lufs
		};
		this.currentClip = clip;
		this.pausedMs = Math.max(0, (this.ctx?.currentTime ?? startedAt) - startedAt) * 1e3;
		this.fading = false;
		this.armed = this.queuedArm;
		this.queuedArm = null;
		this.armedBuffer = null;
		this.handlers.onAdvance?.(Math.min(playedMs, 1e7), this.positionMs());
		this.emit();
	}
	beginHandoff() {
		if (!this.ctx || !this.head || !this.armed || !this.armedBuffer) return;
		const endAt = this.head.anchorCtx + (this.head.durationMs - this.head.anchorMs) / 1e3;
		const to = this.head.deck === 0 ? 1 : 0;
		this.startDeck(to, this.armedBuffer, Math.max(this.ctx.currentTime, endAt), 0, 1);
		this.applyLoudness(to, this.armed.clip.lufs);
		this.handoff = {
			at: endAt,
			deck: to,
			clip: this.armed.clip
		};
	}
	finishHandoff() {
		if (!this.head || !this.handoff) return;
		const playedMs = this.head.durationMs;
		this.stopDeck(this.head.deck);
		const clip = this.handoff.clip;
		this.head = {
			id: clip.id,
			durationMs: clip.durationMs,
			deck: this.handoff.deck,
			anchorCtx: this.handoff.at,
			anchorMs: 0,
			lufs: clip.lufs
		};
		this.currentClip = clip;
		this.handoff = null;
		this.armed = this.queuedArm;
		this.queuedArm = null;
		this.armedBuffer = null;
		this.handlers.onAdvance?.(playedMs, 0);
	}
	hardEnd() {
		if (this.armed && this.armedBuffer) {
			const clip = this.armed.clip;
			const played = this.head?.durationMs ?? 0;
			this.playArmedNow(clip, played);
			return;
		}
		this.playing = false;
		this.pausedMs = this.head?.durationMs ?? 0;
		this.stopAll();
		this.handlers.onEnded?.();
		this.emit();
	}
	async playArmedNow(clip, playedMs) {
		this.armed = this.queuedArm;
		this.queuedArm = null;
		this.armedBuffer = null;
		this.handlers.onAdvance?.(playedMs, 0);
		if (!this.playing) return;
		await this.play(clip, 0);
	}
};
var engine = new KlangEngine();
var MAJOR = [
	"8B",
	"3B",
	"10B",
	"5B",
	"12B",
	"7B",
	"2B",
	"9B",
	"4B",
	"11B",
	"6B",
	"1B"
];
var MINOR = [
	"5A",
	"12A",
	"7A",
	"2A",
	"9A",
	"4A",
	"11A",
	"6A",
	"1A",
	"8A",
	"3A",
	"10A"
];
var NAMES = [
	"C",
	"C#",
	"D",
	"Eb",
	"E",
	"F",
	"F#",
	"G",
	"Ab",
	"A",
	"Bb",
	"B"
];
function toCamelot(keyRoot, mode) {
	const i = (keyRoot % 12 + 12) % 12;
	return mode === "major" ? MAJOR[i] : MINOR[i];
}
function keyLabel(keyRoot, mode) {
	return `${NAMES[(keyRoot % 12 + 12) % 12]} ${mode === "major" ? "major" : "minor"}`;
}
function camelotSteps(a, b) {
	const pa = parseCamelot(a);
	const pb = parseCamelot(b);
	if (!pa || !pb) return 6;
	let num = Math.abs(pa.n - pb.n);
	num = Math.min(num, 12 - num);
	return Math.min(6, num + (pa.m === pb.m ? 0 : 1));
}
function parseCamelot(value) {
	const match = /^(\d{1,2})([AB])$/.exec(value);
	if (!match) return null;
	const n = Number(match[1]);
	if (n < 1 || n > 12) return null;
	return {
		n,
		m: match[2]
	};
}
/** Nearest same / half / double tempo, scaled to 0–1. An octave fold lands at 0. */
function tempoDist(bpmA, bpmB) {
	if (!(bpmA > 0) || !(bpmB > 0)) return 1;
	const ratio = bpmB / bpmA;
	const best = Math.min(Math.abs(Math.log2(ratio)), Math.abs(Math.log2(ratio / 2)), Math.abs(Math.log2(ratio * 2)));
	return Math.min(1, best * 2);
}
/** Absolute tempo gap after folding half and double time, as a fraction. */
function tempoGap(bpmA, bpmB) {
	if (!(bpmA > 0) || !(bpmB > 0)) return 1;
	const ratio = bpmB / bpmA;
	const folded = [
		ratio,
		ratio / 2,
		ratio * 2
	].reduce((best, r) => {
		const d = Math.abs(Math.log2(r));
		return d < best.d ? {
			d,
			r
		} : best;
	}, {
		d: Infinity,
		r: ratio
	});
	return Math.abs(folded.r - 1);
}
function keyHue(camelot) {
	const parsed = parseCamelot(camelot);
	if (!parsed) return 8;
	return (parsed.n - 1) / 12 * 360 + (parsed.m === "A" ? 0 : 16);
}
function hashString(value) {
	let h = 2166136261;
	for (let i = 0; i < value.length; i++) {
		h ^= value.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0) / 4294967296;
}
function makePeaks(seed, energy) {
	let s = Math.abs(seed) % 2147483646 || 1;
	const rnd = () => {
		s = s * 48271 % 2147483647;
		return s / 2147483647;
	};
	return Array.from({ length: 48 }, (_, i) => {
		const beat = i % 4 === 0 ? 1 : i % 4 === 2 ? .72 : .4;
		return Math.min(1, .18 + energy * .55 * beat + rnd() * .22);
	});
}
function formatClock(ms) {
	if (!Number.isFinite(ms) || ms < 0) ms = 0;
	const total = Math.floor(ms / 1e3);
	return `${Math.floor(total / 60)}:${(total % 60).toString().padStart(2, "0")}`;
}
function energyLabel(energy) {
	if (energy < .4) return "low";
	if (energy < .7) return "mid";
	return "high";
}
var ROWS = [
	{
		id: "nordkai",
		title: "Nordkai",
		artist: "Lena Voss",
		album: "Hafenlicht",
		genre: "Indie",
		year: 2023,
		trackNo: 1,
		durationMs: 186e3,
		folder: "Internal/Indie",
		bpm: 96,
		bpmConfidence: .9,
		keyRoot: 9,
		mode: "minor",
		energy: .36,
		brightness: .42,
		loudnessLufs: -14.2,
		danceability: .48,
		style: "indie",
		seed: 11,
		lyrics: [
			{
				t: 2,
				text: "Kalter Wind am Kai"
			},
			{
				t: 18,
				text: "Die Stadt hält still"
			},
			{
				t: 36,
				text: "Ich zähl die Lichter"
			},
			{
				t: 54,
				text: "und geh mit"
			},
			{
				t: 78,
				text: "Salz auf der Jacke"
			},
			{
				t: 102,
				text: "Niemand ruft"
			},
			{
				t: 132,
				text: "Nur das Wasser"
			},
			{
				t: 156,
				text: "kennt den Takt"
			}
		]
	},
	{
		id: "papierboot",
		title: "Papierboot",
		artist: "Lena Voss",
		album: "Hafenlicht",
		genre: "Indie",
		year: 2023,
		trackNo: 2,
		durationMs: 174e3,
		folder: "Internal/Indie",
		bpm: 112,
		bpmConfidence: .88,
		keyRoot: 0,
		mode: "major",
		energy: .52,
		brightness: .58,
		loudnessLufs: -13.1,
		danceability: .6,
		style: "indie",
		seed: 12
	},
	{
		id: "uferweg",
		title: "Uferweg",
		artist: "Lena Voss",
		album: "Hafenlicht",
		genre: "Indie",
		year: 2023,
		trackNo: 3,
		durationMs: 198e3,
		folder: "Internal/Indie",
		bpm: 104,
		bpmConfidence: .84,
		keyRoot: 2,
		mode: "minor",
		energy: .44,
		brightness: .4,
		loudnessLufs: -14.8,
		danceability: .5,
		style: "indie",
		seed: 13
	},
	{
		id: "mueller",
		title: "Müllerstraße",
		artist: "Lena Voss",
		album: "Hafenlicht",
		genre: "Indie",
		year: 2023,
		trackNo: 4,
		durationMs: 168e3,
		folder: "Internal/Indie",
		bpm: 118,
		bpmConfidence: .91,
		keyRoot: 7,
		mode: "major",
		energy: .6,
		brightness: .52,
		loudnessLufs: -12.6,
		danceability: .66,
		style: "pop",
		seed: 14,
		aliases: ["Muellerstrasse", "Mullerstrasse"]
	},
	{
		id: "yuetai",
		title: "月台",
		artist: "林安可",
		album: "夜車",
		genre: "Mandopop",
		year: 2024,
		trackNo: 1,
		durationMs: 204e3,
		folder: "SD card/Mandopop",
		bpm: 94,
		bpmConfidence: .86,
		keyRoot: 5,
		mode: "major",
		energy: .34,
		brightness: .48,
		loudnessLufs: -13.8,
		danceability: .46,
		style: "pop",
		seed: 21,
		pinyin: "lin anke yue tai",
		zhuyin: "ㄌㄧㄣ ㄢ ㄎㄜ ㄩㄝ ㄊㄞ",
		aliases: ["月臺"],
		lyrics: [
			{
				t: 4,
				text: "月台的燈還亮著"
			},
			{
				t: 22,
				text: "你說過等下一班"
			},
			{
				t: 44,
				text: "風從隧道過來"
			},
			{
				t: 66,
				text: "我把傘收好"
			},
			{
				t: 96,
				text: "廣播說著站名"
			},
			{
				t: 124,
				text: "我沒有下去"
			},
			{
				t: 156,
				text: "車門再開一次"
			},
			{
				t: 180,
				text: "城市就亮了"
			}
		]
	},
	{
		id: "nihong",
		title: "霓虹",
		artist: "林安可",
		album: "夜車",
		genre: "Mandopop",
		year: 2024,
		trackNo: 2,
		durationMs: 192e3,
		folder: "SD card/Mandopop",
		bpm: 108,
		bpmConfidence: .87,
		keyRoot: 9,
		mode: "minor",
		energy: .58,
		brightness: .66,
		loudnessLufs: -12.2,
		danceability: .7,
		style: "pop",
		seed: 22,
		pinyin: "lin anke ni hong",
		zhuyin: "ㄋㄧ ㄏㄨㄥ"
	},
	{
		id: "moban",
		title: "末班車",
		artist: "林安可",
		album: "夜車",
		genre: "Mandopop",
		year: 2024,
		trackNo: 3,
		durationMs: 21e4,
		folder: "SD card/Mandopop",
		bpm: 88,
		bpmConfidence: .8,
		keyRoot: 3,
		mode: "major",
		energy: .3,
		brightness: .36,
		loudnessLufs: -15.1,
		danceability: .4,
		style: "ambient",
		seed: 23,
		pinyin: "mo ban che",
		zhuyin: "ㄇㄛ ㄅㄢ ㄔㄜ",
		aliases: ["末班车"]
	},
	{
		id: "aiyu",
		title: "愛與靜",
		artist: "林安可",
		album: "夜車",
		genre: "Mandopop",
		year: 2024,
		trackNo: 4,
		durationMs: 188e3,
		folder: "SD card/Mandopop",
		bpm: 100,
		bpmConfidence: .85,
		keyRoot: 0,
		mode: "major",
		energy: .42,
		brightness: .5,
		loudnessLufs: -13.4,
		danceability: .55,
		style: "pop",
		seed: 24,
		pinyin: "ai yu jing",
		zhuyin: "ㄞ ㄩ ㄐㄧㄥ",
		aliases: ["爱与静"]
	},
	{
		id: "sublevel",
		title: "Sublevel",
		artist: "Jonas Keller",
		album: "Grid Room",
		genre: "Electronic",
		year: 2025,
		trackNo: 1,
		durationMs: 214e3,
		folder: "Internal/Electronic",
		bpm: 128,
		bpmConfidence: .96,
		keyRoot: 5,
		mode: "minor",
		energy: .86,
		brightness: .48,
		loudnessLufs: -10.8,
		danceability: .9,
		style: "club",
		seed: 31,
		lyrics: [
			{
				t: 6,
				text: "Hold the low end"
			},
			{
				t: 24,
				text: "Count the flashes"
			},
			{
				t: 48,
				text: "Don't look up"
			},
			{
				t: 72,
				text: "The room is moving"
			},
			{
				t: 108,
				text: "Bass on the bar line"
			},
			{
				t: 140,
				text: "Leave the lights"
			},
			{
				t: 172,
				text: "We are still in time"
			}
		]
	},
	{
		id: "brass",
		title: "Brass Circuit",
		artist: "Jonas Keller",
		album: "Grid Room",
		genre: "Electronic",
		year: 2025,
		trackNo: 2,
		durationMs: 206e3,
		folder: "Internal/Electronic",
		bpm: 124,
		bpmConfidence: .94,
		keyRoot: 7,
		mode: "minor",
		energy: .78,
		brightness: .44,
		loudnessLufs: -11.2,
		danceability: .86,
		style: "club",
		seed: 32
	},
	{
		id: "softclip",
		title: "Softclip",
		artist: "Jonas Keller",
		album: "Grid Room",
		genre: "Electronic",
		year: 2025,
		trackNo: 3,
		durationMs: 198e3,
		folder: "Internal/Electronic",
		bpm: 126,
		bpmConfidence: .93,
		keyRoot: 10,
		mode: "minor",
		energy: .8,
		brightness: .62,
		loudnessLufs: -11,
		danceability: .84,
		style: "club",
		seed: 33
	},
	{
		id: "afterimage",
		title: "Afterimage",
		artist: "Jonas Keller",
		album: "Grid Room",
		genre: "Electronic",
		year: 2025,
		trackNo: 4,
		durationMs: 22e4,
		folder: "Internal/Electronic",
		bpm: 132,
		bpmConfidence: .92,
		keyRoot: 9,
		mode: "minor",
		energy: .9,
		brightness: .7,
		loudnessLufs: -10.4,
		danceability: .88,
		style: "club",
		seed: 34
	},
	{
		id: "slowglass",
		title: "Slow Glass",
		artist: "Mira Feld",
		album: "Glasshouse",
		genre: "Ambient",
		year: 2022,
		trackNo: 1,
		durationMs: 228e3,
		folder: "Internal/Ambient",
		bpm: 80,
		bpmConfidence: .46,
		keyRoot: 3,
		mode: "major",
		energy: .2,
		brightness: .55,
		loudnessLufs: -16.4,
		danceability: .22,
		style: "ambient",
		seed: 41
	},
	{
		id: "greenhouse",
		title: "Greenhouse",
		artist: "Mira Feld",
		album: "Glasshouse",
		genre: "Ambient",
		year: 2022,
		trackNo: 2,
		durationMs: 196e3,
		folder: "Internal/Ambient",
		bpm: 90,
		bpmConfidence: .72,
		keyRoot: 0,
		mode: "major",
		energy: .28,
		brightness: .6,
		loudnessLufs: -15.6,
		danceability: .3,
		style: "ambient",
		seed: 42
	},
	{
		id: "stamp",
		title: "Stamp Duty",
		artist: "The North Market",
		album: "Late Checkout",
		genre: "City pop",
		year: 2024,
		trackNo: 1,
		durationMs: 184e3,
		folder: "SD card/Imports",
		bpm: 118,
		bpmConfidence: .89,
		keyRoot: 4,
		mode: "minor",
		energy: .64,
		brightness: .57,
		loudnessLufs: -12.4,
		danceability: .74,
		style: "pop",
		seed: 51
	},
	{
		id: "window",
		title: "Window Seat",
		artist: "The North Market",
		album: "Late Checkout",
		genre: "City pop",
		year: 2024,
		trackNo: 2,
		durationMs: 176e3,
		folder: "SD card/Imports",
		bpm: 102,
		bpmConfidence: .83,
		keyRoot: 2,
		mode: "major",
		energy: .48,
		brightness: .63,
		loudnessLufs: -13,
		danceability: .62,
		style: "pop",
		seed: 52
	}
];
function rowToTrack(row) {
	const camelot = toCamelot(row.keyRoot, row.mode);
	return {
		...row,
		albumArtist: row.artist,
		camelot,
		hue: keyHue(camelot),
		peaks: makePeaks(row.seed, row.energy),
		source: "sketch",
		analysis: "done",
		favourite: false,
		playCount: 0,
		skipCount: 0,
		lastPlayedAt: null,
		hidden: false,
		lyricOffsetMs: 0,
		mono: false
	};
}
function createCatalog() {
	return ROWS.map(rowToTrack);
}
function seedHistory(tracks, now = Date.now()) {
	const next = tracks.map((t) => ({ ...t }));
	const picks = [
		0,
		1,
		5,
		9,
		10,
		2,
		6,
		14,
		8,
		4,
		3,
		7,
		11,
		0,
		9,
		5,
		15,
		12,
		1,
		8,
		10,
		6,
		2,
		14
	];
	const hours = [
		8,
		9,
		8,
		18,
		19,
		22,
		23,
		7,
		12,
		13,
		18,
		21,
		22,
		9,
		19,
		8,
		17,
		23,
		12,
		21,
		7,
		18,
		22,
		13
	];
	const events = picks.map((ti, i) => {
		const track = next[ti % next.length];
		const completed = i % 7 !== 0;
		const startedAt = now - i % 8 * 864e5 - hours[i] * 36e5;
		const playedMs = completed ? Math.min(track.durationMs - 8e3, 15e4) : 12e3;
		return {
			id: `seed-${i}`,
			trackId: track.id,
			startedAt,
			playedMs,
			completed,
			hourOfDay: hours[i]
		};
	});
	for (const event of events) {
		const track = next.find((t) => t.id === event.trackId);
		if (!track) continue;
		if (event.completed) track.playCount += 1;
		else track.skipCount += 1;
		track.lastPlayedAt = Math.max(track.lastPlayedAt ?? 0, event.startedAt);
	}
	for (const id of [
		"nordkai",
		"yuetai",
		"sublevel"
	]) {
		const track = next.find((t) => t.id === id);
		if (track) track.favourite = true;
	}
	return {
		tracks: next,
		events
	};
}
var DB = "klangyu";
var STORE = "files";
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB, 1);
		req.onupgradeneeded = () => {
			if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
async function idbPut(id, blob) {
	const db = await openDb();
	await new Promise((resolve, reject) => {
		const tx = db.transaction(STORE, "readwrite");
		tx.objectStore(STORE).put(blob, id);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
	db.close();
}
async function idbGet(id) {
	const db = await openDb();
	const blob = await new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readonly").objectStore(STORE).get(id);
		req.onsuccess = () => resolve(req.result ?? null);
		req.onerror = () => reject(req.error);
	});
	db.close();
	return blob;
}
async function idbClear() {
	const db = await openDb();
	await new Promise((resolve, reject) => {
		const tx = db.transaction(STORE, "readwrite");
		tx.objectStore(STORE).clear();
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
	db.close();
}
function mulberry(seed) {
	let s = seed % 2147483646 || 1;
	return () => {
		s = s * 16807 % 2147483647;
		return (s - 1) / 2147483646;
	};
}
function planTransition(a, b, settings, allowAutomix) {
	if (!allowAutomix) {
		const seconds = settings.crossfadeSeconds;
		return {
			technique: seconds > 0 ? "blend" : "cut",
			seconds,
			fallback: true,
			reason: seconds > 0 ? "crossfade" : "cut"
		};
	}
	const steps = camelotSteps(a.camelot, b.camelot);
	const gap = tempoGap(a.bpm, b.bpm);
	const conf = Math.min(a.bpmConfidence, b.bpmConfidence);
	const style = settings.automixStyle;
	if (settings.automixHarmonicOnly && steps > 2) return {
		technique: "cut",
		seconds: 0,
		fallback: true,
		reason: "harmonic"
	};
	if (conf < .55 || !Number.isFinite(gap)) return {
		technique: "blend",
		seconds: Math.min(3, 3),
		fallback: true,
		reason: "low-confidence"
	};
	if (gap > .2) return {
		technique: "blend",
		seconds: 3,
		fallback: true,
		reason: "tempo"
	};
	if (style === "RADIO" && conf >= .6) return {
		technique: "cut",
		seconds: .15,
		fallback: false,
		reason: "radio"
	};
	if (style === "CHILL" || steps >= 3) return {
		technique: "filter",
		seconds: style === "CHILL" ? 11 : 6,
		fallback: false,
		reason: steps >= 3 ? "key" : "chill"
	};
	if (style === "CLUB" && gap <= .08 && steps <= 1 && conf >= .6) return {
		technique: "bass",
		seconds: 8,
		fallback: false,
		reason: "club"
	};
	if (gap > .08 && gap <= .2 && conf < .85) return {
		technique: "echo",
		seconds: 4,
		fallback: false,
		reason: "echo"
	};
	return {
		technique: "blend",
		seconds: 6,
		fallback: false,
		reason: "blend"
	};
}
function automixAllowed(a, b, settings, smartSession, albumOrder) {
	if (settings.automixMode === "OFF") return false;
	if (settings.automixMode === "SMART_SESSIONS" && !smartSession) return false;
	if (settings.gaplessAlbums && albumOrder && a.album === b.album && a.folder === b.folder) return false;
	if (a.durationMs > 12e5 || b.durationMs > 12e5) return false;
	if (a.durationMs < 6e4 || b.durationMs < 6e4) return false;
	const genre = `${a.genre} ${b.genre} ${a.folder} ${b.folder}`.toLowerCase();
	if (genre.includes("podcast") || genre.includes("audiobook")) return false;
	return true;
}
function weight(track, tier) {
	if (tier >= 1) return {
		e: .25,
		b: .1,
		t: .25,
		k: .2,
		g: .1,
		emb: .1
	};
	const base = {
		e: .25,
		b: .1,
		t: .25,
		k: .2,
		g: .1
	};
	const sum = base.e + base.b + base.t + base.k + base.g;
	return {
		e: base.e / sum,
		b: base.b / sum,
		t: base.t / sum,
		k: base.k / sum,
		g: base.g / sum,
		emb: 0
	};
}
function embed(track) {
	return [
		track.energy,
		track.brightness,
		track.danceability,
		Math.min(track.bpm, 220) / 220
	];
}
function cosine(a, b) {
	let dot = 0;
	let na = 0;
	let nb = 0;
	for (let i = 0; i < a.length; i++) {
		dot += a[i] * b[i];
		na += a[i] * a[i];
		nb += b[i] * b[i];
	}
	if (na === 0 || nb === 0) return 1;
	return 1 - dot / Math.sqrt(na * nb);
}
function buildSmartQueue(seed, library, mode, length, tier, personalisation, taste, recentIds) {
	const usable = library.filter((t) => !t.hidden && t.analysis === "done" && t.bpmConfidence > 0 && t.bpm >= 50 && t.bpm <= 220);
	const recent = new Set(recentIds.slice(-50));
	const w = weight(seed, tier);
	const picked = [seed];
	const artistCounts = /* @__PURE__ */ new Map([[seed.artist, 1]]);
	const rnd = mulberry(seed.title.length * 97 + seed.bpm);
	const targetLen = Math.min(length, usable.length);
	for (let i = 1; i < targetLen; i++) {
		const progress = i / Math.max(1, targetLen - 1);
		const targetEnergy = mode === "up" ? seed.energy + .3 * progress : mode === "down" ? seed.energy - .3 * progress : seed.energy;
		const last = picked[picked.length - 1];
		const scored = usable.filter((t) => !picked.some((p) => p.id === t.id) && !recent.has(t.id)).map((t) => {
			const dEnergy = Math.abs(t.energy - targetEnergy);
			const dBright = Math.abs(t.brightness - seed.brightness);
			const dTempo = tempoDist(seed.bpm, t.bpm);
			const dKey = camelotSteps(seed.camelot, t.camelot) / 6;
			const genre = t.genre === seed.genre ? 0 : 1;
			const emb = tier >= 1 ? cosine(embed(seed), embed(t)) : 0;
			let d = w.e * dEnergy + w.b * dBright + w.t * dTempo + w.k * dKey + w.g * genre + w.emb * emb;
			if (mode === "discover") d *= 1 + Math.min(2, t.playCount / 4);
			if (personalisation) {
				const factor = 1 + Math.max(-1, Math.min(1, taste[t.id] ?? 0)) * .3;
				d /= factor;
			}
			return {
				t,
				d
			};
		}).filter((row) => {
			const count = artistCounts.get(row.t.artist) ?? 0;
			if (row.t.artist === last.artist) return false;
			if (count >= 3) return false;
			return true;
		}).sort((a, b) => a.d - b.d).slice(0, 10);
		const pool = scored.length > 0 ? scored : usable.filter((t) => !picked.some((p) => p.id === t.id)).map((t) => ({
			t,
			d: 1
		}));
		if (pool.length === 0) break;
		const weights = pool.map((row) => Math.exp(-row.d / .3));
		const sum = weights.reduce((a, b) => a + b, 0);
		let r = rnd() * sum;
		let choice = pool[0];
		for (let k = 0; k < pool.length; k++) {
			r -= weights[k];
			if (r <= 0) {
				choice = pool[k];
				break;
			}
		}
		picked.push(choice.t);
		artistCounts.set(choice.t.artist, (artistCounts.get(choice.t.artist) ?? 0) + 1);
	}
	return {
		ids: picked.map((t) => t.id),
		analysed: usable.length,
		total: library.filter((t) => !t.hidden).length
	};
}
function contextMix(id, tracks, hour) {
	return tracks.filter((t) => !t.hidden && t.durationMs >= 6e4).map((t) => {
		let score = 0;
		if (id === "morning") score = (1 - Math.abs(t.energy - .45)) * 2 + t.brightness;
		if (id === "focus") score = (1 - t.energy) * 1.4 + (1 - t.danceability) + (t.bpm < 110 ? .4 : 0);
		if (id === "workout") score = t.energy + (t.bpm > 118 ? .5 : 0) + t.danceability;
		if (id === "night") score = (1 - t.energy) * 1.3 + (t.mode === "minor" ? .35 : 0) + (hour >= 21 || hour < 5 ? .2 : 0);
		if (id === "discover") score = 1 / (1 + t.playCount) + (t.analysis === "done" ? .2 : 0);
		return {
			t,
			score
		};
	}).sort((a, b) => b.score - a.score).slice(0, 18).map((row) => row.t);
}
var EQ_FREQS = [
	32,
	64,
	125,
	250,
	500,
	1e3,
	2e3,
	4e3,
	8e3,
	16e3
];
var EQ_PRESETS = {
	Flat: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	Bass: [
		6,
		5,
		3,
		1,
		0,
		0,
		0,
		0,
		0,
		0
	],
	Treble: [
		0,
		0,
		0,
		0,
		0,
		1,
		2,
		4,
		5,
		4
	],
	Vocal: [
		-2,
		-1,
		0,
		2,
		4,
		3,
		1,
		0,
		-1,
		-1
	],
	Rock: [
		4,
		3,
		1,
		0,
		-1,
		0,
		2,
		3,
		3,
		2
	],
	Electronic: [
		5,
		4,
		1,
		0,
		-1,
		1,
		2,
		3,
		4,
		3
	],
	Acoustic: [
		2,
		1,
		0,
		1,
		2,
		1,
		2,
		2,
		1,
		0
	],
	Classical: [
		0,
		0,
		0,
		0,
		0,
		0,
		-1,
		-2,
		-2,
		-3
	],
	Podcast: [
		-3,
		-2,
		0,
		3,
		4,
		3,
		1,
		0,
		-2,
		-3
	]
};
var seeded = seedHistory(createCatalog());
var defaultSettings = {
	locale: "en",
	theme: "dark",
	palette: "default",
	gaplessAlbums: true,
	crossfadeSeconds: 0,
	automixMode: "SMART_SESSIONS",
	automixStyle: "SUBTLE",
	automixHarmonicOnly: false,
	loudnessMode: "TRACK",
	resumeOnLaunch: true,
	haptics: true,
	minTrackSeconds: 30,
	ignoreArticles: true,
	tierOverride: "AUTO",
	personalisation: true,
	smartQueueLength: 12,
	showSketches: true
};
var defaultEq = {
	bands: [...EQ_PRESETS.Flat],
	preamp: 0,
	bass: 0
};
var undos = /* @__PURE__ */ new Map();
function uid() {
	return crypto.randomUUID();
}
function haptic(on) {
	if (on && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(8);
}
function toClip(track, settings, tracks) {
	let lufs = track.loudnessLufs || -14;
	if (settings.loudnessMode === "ALBUM") {
		const peers = tracks.filter((t) => t.album === track.album && t.loudnessLufs);
		if (peers.length) lufs = peers.reduce((sum, t) => sum + t.loudnessLufs, 0) / peers.length;
	}
	return {
		id: track.id,
		durationMs: track.durationMs,
		lufs,
		source: track.source,
		style: track.style,
		seed: track.seed,
		bpm: track.bpm || 120,
		keyRoot: track.keyRoot,
		mode: track.mode,
		energy: track.energy
	};
}
function peekNext(state) {
	if (state.order.length === 0) return null;
	if (state.repeat === "one") return state.order[state.index] ?? null;
	const next = state.index + 1;
	if (next < state.order.length) return state.order[next];
	if (state.repeat === "all") return state.order[0] ?? null;
	return null;
}
async function ensureBuffer(track) {
	if (track.source !== "file") return;
	const blob = await idbGet(track.id);
	if (!blob) throw new Error("missing-file");
	const ctx = new AudioContext();
	const audio = await ctx.decodeAudioData(await blob.arrayBuffer());
	await ctx.close();
	engine.setUserBuffer(track.id, audio);
}
var useStore = create()(persist((set, get) => ({
	onboarded: false,
	firstLaunch: Date.now(),
	promptState: "later",
	promptDismissals: 0,
	lastPromptAt: 0,
	tab: "home",
	sheet: null,
	tracks: seeded.tracks,
	playlists: [],
	events: seeded.events,
	settings: defaultSettings,
	eq: defaultEq,
	vocal: 0,
	source: [],
	order: [],
	index: 0,
	shuffle: false,
	repeat: "off",
	positionMs: 0,
	smartSession: false,
	recentSearches: [],
	badMixes: [],
	taste: {},
	toasts: [],
	sleep: { kind: "off" },
	probe: {
		tier: 0,
		ramGb: null,
		cores: 4
	},
	supportOpen: false,
	promptedSession: false,
	setProbe: (probe) => set({ probe }),
	setTab: (tab) => set({ tab }),
	setSheet: (sheet) => set({ sheet }),
	setOnboarded: () => set({ onboarded: true }),
	patchSettings: (patch) => {
		set({ settings: {
			...get().settings,
			...patch
		} });
		engine.setLoudness(get().settings.loudnessMode !== "OFF");
		get().rearm();
	},
	patchTrack: (id, patch) => set({ tracks: get().tracks.map((t) => t.id === id ? {
		...t,
		...patch
	} : t) }),
	visible: () => {
		const { tracks, settings } = get();
		return visibleTracks(tracks, settings.showSketches, settings.minTrackSeconds);
	},
	track: (id) => get().tracks.find((t) => t.id === id),
	current: () => get().track(get().order[get().index]),
	effectiveTier: () => {
		const { settings, probe } = get();
		if (settings.tierOverride === "CORE") return 0;
		if (settings.tierOverride === "ENHANCED") return 1;
		if (settings.tierOverride === "STUDIO") return 2;
		return probe.tier;
	},
	playIds: (ids, start = 0, smart = false) => {
		const playable = ids.filter((id) => get().track(id) && !get().track(id)?.hidden);
		if (playable.length === 0) return;
		set({
			source: playable,
			order: playable,
			index: Math.max(0, Math.min(start, playable.length - 1)),
			smartSession: smart,
			positionMs: 0,
			shuffle: false
		});
		haptic(get().settings.haptics);
		startCurrent(0);
	},
	resumePlayback: () => {
		if (get().order.length === 0) return;
		haptic(get().settings.haptics);
		startCurrent(get().positionMs);
	},
	toggle: () => {
		const snap = engine.snapshot();
		if (snap.playing) {
			engine.pause();
			set({ positionMs: engine.positionMs() });
			return;
		}
		if (get().order.length === 0) {
			const ids = get().visible().map((t) => t.id);
			if (ids[0]) get().playIds(ids, 0, false);
			return;
		}
		const track = get().current();
		if (!track) return;
		if (snap.currentId === track.id) engine.resume();
		else startCurrent(get().positionMs);
	},
	next: () => {
		const state = get();
		const cur = state.current();
		if (cur) rememberPlay(cur, engine.positionMs());
		let index = state.index + 1;
		if (index >= state.order.length) {
			if (state.repeat === "all") index = 0;
			else {
				engine.pause();
				return;
			}
		}
		set({
			index,
			positionMs: 0
		});
		startCurrent(0);
	},
	prev: () => {
		if (engine.positionMs() > 3e3) {
			engine.seek(0);
			set({ positionMs: 0 });
			return;
		}
		const cur = get().current();
		if (cur) rememberPlay(cur, engine.positionMs());
		set({
			index: Math.max(0, get().index - 1),
			positionMs: 0
		});
		startCurrent(0);
	},
	seek: (ms) => {
		engine.seek(ms);
		set({ positionMs: ms });
	},
	toggleShuffle: () => {
		const state = get();
		if (state.order.length === 0) return;
		if (!state.shuffle) {
			const current = state.order[state.index];
			const rest = state.order.filter((_, i) => i !== state.index);
			for (let i = rest.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[rest[i], rest[j]] = [rest[j], rest[i]];
			}
			set({
				shuffle: true,
				order: current ? [current, ...rest] : rest,
				index: 0
			});
		} else {
			const current = state.order[state.index];
			const index = Math.max(0, state.source.indexOf(current));
			set({
				shuffle: false,
				order: state.source,
				index
			});
		}
		get().rearm();
	},
	cycleRepeat: () => {
		set({ repeat: get().repeat === "off" ? "all" : get().repeat === "all" ? "one" : "off" });
		get().rearm();
	},
	toggleFavourite: (id) => {
		const track = get().track(id);
		if (!track) return;
		const favourite = !track.favourite;
		get().patchTrack(id, { favourite });
		bumpTaste(id, favourite ? .4 : -.4);
		haptic(get().settings.haptics);
	},
	hideTrack: (id) => {
		get().patchTrack(id, { hidden: true });
		const state = get();
		if (state.order[state.index] !== id) return;
		const order = state.order.filter((trackId) => trackId !== id);
		set({
			order,
			source: state.source.filter((trackId) => trackId !== id),
			index: Math.min(state.index, Math.max(0, order.length - 1))
		});
		if (order.length) startCurrent(0);
		else engine.pause();
	},
	restoreTrack: (id) => get().patchTrack(id, { hidden: false }),
	playNext: (id) => {
		const state = get();
		if (state.order.length === 0) {
			get().playIds([id], 0, false);
			return;
		}
		const order = state.order.slice();
		const source = state.source.slice();
		order.splice(state.index + 1, 0, id);
		source.splice(Math.min(source.length, state.index + 1), 0, id);
		set({
			order,
			source
		});
		get().rearm();
		say("playNext");
	},
	enqueue: (ids) => {
		if (get().order.length === 0) {
			get().playIds(ids, 0, false);
			return;
		}
		set({
			order: [...get().order, ...ids],
			source: [...get().source, ...ids]
		});
		get().rearm();
		say("addQueue");
	},
	removeFromOrder: (index) => {
		const state = get();
		const removed = state.order[index];
		const order = state.order.filter((_, i) => i !== index);
		const source = state.source.filter((id, i) => !(id === removed && i === index));
		let nextIndex = state.index;
		if (index < state.index) nextIndex -= 1;
		if (nextIndex >= order.length) nextIndex = Math.max(0, order.length - 1);
		const snapshot = {
			order: state.order,
			source: state.source,
			index: state.index
		};
		set({
			order,
			source,
			index: nextIndex
		});
		if (index === state.index && order.length) startCurrent(0);
		else get().rearm();
		say("removed", () => set(snapshot));
	},
	moveOrder: (index, dir) => {
		const order = get().order.slice();
		const j = index + dir;
		if (j < 0 || j >= order.length) return;
		[order[index], order[j]] = [order[j], order[index]];
		let next = get().index;
		if (get().index === index) next = j;
		else if (get().index === j) next = index;
		set({
			order,
			index: next
		});
		get().rearm();
	},
	smartFrom: (id, mode) => {
		const seed = get().track(id);
		if (!seed) return;
		const recent = get().events.slice(-50).map((e) => e.trackId);
		const built = buildSmartQueue(seed, get().visible(), mode, get().settings.smartQueueLength, get().effectiveTier(), get().settings.personalisation, get().taste, recent);
		get().playIds(built.ids, 0, true);
		if (built.analysed < built.total) say("partialQueue");
	},
	mix: (id) => {
		const hour = (/* @__PURE__ */ new Date()).getHours();
		const tracks = contextMix(id, get().visible(), hour);
		if (tracks.length === 0) return;
		get().playIds(tracks.map((t) => t.id), 0, true);
	},
	saveQueue: (name) => {
		const ids = get().order;
		if (!name.trim() || ids.length === 0) return;
		set({ playlists: [{
			id: uid(),
			name: name.trim(),
			trackIds: ids,
			createdAt: Date.now()
		}, ...get().playlists] });
		say("queueSaved");
	},
	createPlaylist: (name, ids = []) => {
		if (!name.trim()) return;
		set({ playlists: [{
			id: uid(),
			name: name.trim(),
			trackIds: ids,
			createdAt: Date.now()
		}, ...get().playlists] });
	},
	renamePlaylist: (id, name) => set({ playlists: get().playlists.map((p) => p.id === id ? {
		...p,
		name
	} : p) }),
	deletePlaylist: (id) => set({ playlists: get().playlists.filter((p) => p.id !== id) }),
	addToPlaylist: (playlistId, ids) => set({ playlists: get().playlists.map((p) => p.id === playlistId ? {
		...p,
		trackIds: [...p.trackIds, ...ids]
	} : p) }),
	movePlaylistTrack: (playlistId, index, dir) => set({ playlists: get().playlists.map((p) => {
		if (p.id !== playlistId) return p;
		const trackIds = p.trackIds.slice();
		const j = index + dir;
		if (j < 0 || j >= trackIds.length) return p;
		[trackIds[index], trackIds[j]] = [trackIds[j], trackIds[index]];
		return {
			...p,
			trackIds
		};
	}) }),
	removePlaylistTrack: (playlistId, index) => set({ playlists: get().playlists.map((p) => p.id === playlistId ? {
		...p,
		trackIds: p.trackIds.filter((_, i) => i !== index)
	} : p) }),
	addUserTrack: (track) => set({ tracks: [track, ...get().tracks] }),
	setEq: (eq) => {
		set({ eq });
		engine.setEq(eq.bands, eq.preamp, eq.bass);
	},
	setVocal: (vocal) => {
		set({ vocal });
		engine.setVocal(vocal);
	},
	setSleep: (sleep) => {
		set({ sleep });
		if (sleep.kind === "track" || sleep.kind === "album") get().rearm();
	},
	clearSleep: () => set({ sleep: { kind: "off" } }),
	extendSleep: () => {
		const sleep = get().sleep;
		if (sleep.kind === "time") set({ sleep: {
			kind: "time",
			until: sleep.until + 6e5
		} });
	},
	rememberSearch: (query) => {
		const q = query.trim();
		if (!q) return;
		set({ recentSearches: [q, ...get().recentSearches.filter((item) => item !== q)].slice(0, 8) });
	},
	clearSearches: () => set({ recentSearches: [] }),
	markBadMix: () => {
		const state = get();
		const a = state.order[state.index];
		const b = peekNext(state);
		if (!a || !b) return;
		const pair = `${a}>${b}`;
		set({ badMixes: state.badMixes.includes(pair) ? state.badMixes : [...state.badMixes, pair] });
		bumpTaste(b, -.25);
		get().rearm();
		say("badMix");
	},
	skipTransition: () => get().next(),
	resetTaste: () => {
		set({ taste: {} });
		say("tasteReset");
	},
	clearHistory: () => set({
		events: [],
		tracks: get().tracks.map((t) => ({
			...t,
			playCount: 0,
			skipCount: 0,
			lastPlayedAt: null
		})),
		taste: {}
	}),
	clearAll: async () => {
		engine.pause();
		engine.clearUsers();
		await idbClear();
		set({
			tracks: createCatalog(),
			playlists: [],
			events: [],
			order: [],
			source: [],
			index: 0,
			taste: {},
			badMixes: [],
			recentSearches: [],
			positionMs: 0
		});
	},
	exportData: () => JSON.stringify({
		version: 1,
		settings: get().settings,
		playlists: get().playlists,
		events: get().events,
		tracks: get().tracks,
		taste: get().taste,
		eq: get().eq
	}, null, 2),
	importData: (raw) => {
		try {
			const data = JSON.parse(raw);
			if (!data.tracks && !data.playlists && !data.settings) return false;
			set({
				settings: data.settings ? {
					...defaultSettings,
					...data.settings
				} : get().settings,
				playlists: data.playlists ?? get().playlists,
				events: data.events ?? get().events,
				tracks: data.tracks ?? get().tracks,
				taste: data.taste ?? get().taste,
				eq: data.eq ?? get().eq
			});
			return true;
		} catch {
			return false;
		}
	},
	toast: (text, undo) => {
		const id = uid();
		if (undo) undos.set(id, undo);
		set({ toasts: [...get().toasts, {
			id,
			text,
			undo: Boolean(undo)
		}] });
		window.setTimeout(() => get().dismissToast(id), 4200);
	},
	undoToast: (id) => {
		undos.get(id)?.();
		undos.delete(id);
		get().dismissToast(id);
	},
	dismissToast: (id) => {
		undos.delete(id);
		set({ toasts: get().toasts.filter((t) => t.id !== id) });
	},
	onAdvance: (playedMs) => {
		const state = get();
		const prev = state.current();
		if (prev) rememberPlay(prev, playedMs);
		if (state.sleep.kind === "track") {
			engine.pause();
			set({ sleep: { kind: "off" } });
			return;
		}
		if (state.sleep.kind === "album") {
			const nxtId = peekNext(state);
			const nxt = nxtId ? state.track(nxtId) : void 0;
			if (!nxt || nxt.album !== prev?.album) {
				engine.pause();
				set({ sleep: { kind: "off" } });
				return;
			}
		}
		let index = state.index + 1;
		if (state.repeat === "one") index = state.index;
		else if (index >= state.order.length) index = state.repeat === "all" ? 0 : state.index;
		set({
			index,
			positionMs: 0
		});
		const track = get().current();
		if (track) engine.updateSession({
			title: track.title,
			artist: track.artist,
			album: track.album
		});
		get().rearm();
	},
	onEnded: () => {
		const track = get().current();
		if (track) rememberPlay(track, track.durationMs);
		engine.pause();
	},
	notePosition: (ms) => set({ positionMs: ms }),
	openSupport: () => set({
		supportOpen: true,
		sheet: "support"
	}),
	dismissPrompt: (forever) => set({
		supportOpen: false,
		promptState: forever ? "never" : "later",
		promptDismissals: get().promptDismissals + (forever ? 3 : 1),
		lastPromptAt: Date.now(),
		promptedSession: true
	}),
	rearm: () => {
		const state = get();
		engine.setLoudness(state.settings.loudnessMode !== "OFF");
		const cur = state.current();
		const nextId = peekNext(state);
		const blocking = state.sleep.kind === "track" || state.sleep.kind === "album" && nextId && state.track(nextId)?.album !== cur?.album;
		if (!cur || !nextId || blocking) {
			engine.arm(null);
			return;
		}
		const nxt = state.track(nextId);
		if (!nxt) {
			engine.arm(null);
			return;
		}
		const albumOrder = nxt.album === cur.album && Math.abs(nxt.trackNo - cur.trackNo) === 1 && state.order[state.index + 1] === nxt.id;
		const blocked = state.badMixes.includes(`${cur.id}>${nxt.id}`);
		const allow = !blocked && automixAllowed(cur, nxt, state.settings, state.smartSession, albumOrder);
		const plan = planTransition(cur, nxt, state.settings, allow && !blocked);
		if (blocked) {
			engine.arm({
				clip: toClip(nxt, state.settings, state.tracks),
				fadeMs: 0,
				technique: "cut",
				fallback: true,
				reason: "cut"
			});
			return;
		}
		engine.arm({
			clip: toClip(nxt, state.settings, state.tracks),
			fadeMs: plan.seconds * 1e3,
			technique: plan.technique,
			fallback: plan.fallback || !allow,
			reason: !allow && state.settings.gaplessAlbums && albumOrder ? "gapless" : plan.reason
		});
	}
}), {
	name: "klangyu",
	skipHydration: true,
	version: 1,
	partialize: (state) => ({
		onboarded: state.onboarded,
		firstLaunch: state.firstLaunch,
		promptState: state.promptState,
		promptDismissals: state.promptDismissals,
		lastPromptAt: state.lastPromptAt,
		tracks: state.tracks,
		playlists: state.playlists,
		events: state.events,
		settings: state.settings,
		eq: state.eq,
		vocal: state.vocal,
		source: state.source,
		order: state.order,
		index: state.index,
		shuffle: state.shuffle,
		repeat: state.repeat,
		positionMs: state.positionMs,
		smartSession: state.smartSession,
		recentSearches: state.recentSearches,
		badMixes: state.badMixes,
		taste: state.taste
	})
}));
var visibleCache = null;
function visibleTracks(tracks, showSketches, minTrackSeconds) {
	if (visibleCache && visibleCache.tracks === tracks && visibleCache.show === showSketches && visibleCache.min === minTrackSeconds) return visibleCache.result;
	const result = tracks.filter((t) => {
		if (t.hidden) return false;
		if (!showSketches && t.source === "sketch") return false;
		if (t.durationMs < minTrackSeconds * 1e3) return false;
		return true;
	});
	visibleCache = {
		tracks,
		show: showSketches,
		min: minTrackSeconds,
		result
	};
	return result;
}
function bumpTaste(id, delta) {
	if (!useStore.getState().settings.personalisation) return;
	const taste = { ...useStore.getState().taste };
	taste[id] = Math.max(-2, Math.min(2, (taste[id] ?? 0) + delta));
	useStore.setState({ taste });
}
function rememberPlay(track, playedMs) {
	if (playedMs < 1500) return;
	const completed = playedMs > track.durationMs * .85;
	const event = {
		id: uid(),
		trackId: track.id,
		startedAt: Date.now() - playedMs,
		playedMs: Math.round(playedMs),
		completed,
		hourOfDay: (/* @__PURE__ */ new Date()).getHours()
	};
	const tracks = useStore.getState().tracks.map((t) => t.id === track.id ? {
		...t,
		playCount: t.playCount + (completed || playedMs > 3e4 ? 1 : 0),
		skipCount: t.skipCount + (!completed && playedMs < 2e4 ? 1 : 0),
		lastPlayedAt: Date.now()
	} : t);
	useStore.setState({
		tracks,
		events: [...useStore.getState().events, event].slice(-2e3)
	});
	if (!completed && playedMs < 2e4) bumpTaste(track.id, -.3);
	else if (completed) bumpTaste(track.id, .2);
}
function say(key, undo) {
	const locale = useStore.getState().settings.locale;
	useStore.getState().toast({
		removed: {
			en: "Removed from queue",
			de: "Aus der Warteschlange genommen",
			"zh-TW": "已從佇列移除"
		},
		playNext: {
			en: "Playing next",
			de: "Als Nächstes",
			"zh-TW": "下一首播放"
		},
		addQueue: {
			en: "Added to queue",
			de: "Zur Warteschlange hinzugefügt",
			"zh-TW": "已加入佇列"
		},
		partialQueue: {
			en: "Smart queue is using analysed tracks only.",
			de: "Die Smart Queue nutzt nur analysierte Titel.",
			"zh-TW": "智慧佇列只用已分析的曲目。"
		},
		badMix: {
			en: "Noted. That pair will not mix.",
			de: "Gemerkt. Dieses Paar wird nicht gemischt.",
			"zh-TW": "已記下，這兩首不會再混接。"
		},
		tasteReset: {
			en: "Personalisation reset",
			de: "Personalisierung zurückgesetzt",
			"zh-TW": "已重設個人化"
		},
		queueSaved: {
			en: "Playlist saved",
			de: "Playlist gesichert",
			"zh-TW": "已存成播放清單"
		}
	}[key][locale], undo);
}
async function startCurrent(ms) {
	const state = useStore.getState();
	const track = state.current();
	if (!track) return;
	engine.setLoudness(state.settings.loudnessMode !== "OFF");
	engine.setEq(state.eq.bands, state.eq.preamp, state.eq.bass);
	engine.setVocal(state.vocal);
	const clip = toClip(track, state.settings, state.tracks);
	try {
		await engine.play(clip, ms);
	} catch {
		try {
			await ensureBuffer(track);
			await engine.play(clip, ms);
		} catch {
			useStore.getState().toast(state.settings.locale === "de" ? "Die Datei ließ sich nicht abspielen. Es geht weiter." : state.settings.locale === "zh-TW" ? "這個檔案無法播放，已跳到下一首。" : "That file could not be played. Moving on.");
			useStore.getState().next();
			return;
		}
	}
	engine.updateSession({
		title: track.title,
		artist: track.artist,
		album: track.album
	});
	useStore.getState().rearm();
}
function probeDevice() {
	const nav = navigator;
	const ram = typeof nav.deviceMemory === "number" ? nav.deviceMemory : null;
	const cores = navigator.hardwareConcurrency || 2;
	let tier = 0;
	if (cores >= 4 && (ram === null || ram >= 4)) tier = 1;
	if (ram !== null && ram >= 8 && cores >= 8) tier = 2;
	return {
		tier,
		ramGb: ram,
		cores
	};
}
async function importAudioFiles(files) {
	const { settings } = useStore.getState();
	let added = 0;
	let skipped = 0;
	for (const file of files) {
		const durationMs = await readDuration(file);
		if (!durationMs || durationMs < settings.minTrackSeconds * 1e3) {
			skipped += 1;
			continue;
		}
		const id = uid();
		await idbPut(id, file);
		const base = file.name.replace(/\.[^.]+$/, "").replaceAll("_", " ");
		const parts = base.split(" - ");
		const artist = parts.length > 1 ? parts[0].trim() : "Unknown";
		const track = {
			id,
			title: (parts.length > 1 ? parts.slice(1).join(" - ") : base).trim() || base,
			artist,
			album: "Imported",
			albumArtist: artist,
			genre: "Unknown",
			year: (/* @__PURE__ */ new Date()).getFullYear(),
			trackNo: added + 1,
			durationMs: Math.round(durationMs),
			folder: "Imported",
			bpm: 0,
			bpmConfidence: 0,
			keyRoot: 0,
			mode: "major",
			camelot: "–",
			energy: .4,
			brightness: .4,
			loudnessLufs: -14,
			danceability: .4,
			hue: 12,
			peaks: Array.from({ length: 48 }, () => .35),
			source: "file",
			analysis: "pending",
			favourite: false,
			playCount: 0,
			skipCount: 0,
			lastPlayedAt: null,
			hidden: false,
			lyricOffsetMs: 0
		};
		useStore.getState().addUserTrack(track);
		added += 1;
	}
	const locale = useStore.getState().settings.locale;
	if (added) useStore.getState().toast(locale === "de" ? `${added} Titel hinzugefügt` : locale === "zh-TW" ? `已加入 ${added} 首` : `Added ${added}`);
	if (skipped) useStore.getState().toast(locale === "de" ? "Kurze Aufnahmen übersprungen" : locale === "zh-TW" ? "已略過較短的錄音" : "Skipped short recordings");
	pumpAnalysis();
}
function readDuration(file) {
	return new Promise((resolve) => {
		const url = URL.createObjectURL(file);
		const audio = document.createElement("audio");
		audio.preload = "metadata";
		const done = (value) => {
			URL.revokeObjectURL(url);
			resolve(value);
		};
		audio.onloadedmetadata = () => done(Number.isFinite(audio.duration) ? audio.duration * 1e3 : 0);
		audio.onerror = () => done(0);
		window.setTimeout(() => done(0), 8e3);
		audio.src = url;
	});
}
var pumping = false;
async function pumpAnalysis() {
	if (pumping) return;
	pumping = true;
	try {
		for (;;) {
			const track = useStore.getState().tracks.find((t) => t.source === "file" && t.analysis === "pending");
			if (!track) break;
			try {
				const blob = await idbGet(track.id);
				if (!blob) throw new Error("missing");
				const ctx = new AudioContext();
				const audio = await ctx.decodeAudioData(await blob.arrayBuffer());
				await ctx.close();
				const result = analyseBuffer(audio);
				const camelot = toCamelot(result.keyRoot, result.mode);
				engine.setUserBuffer(track.id, audio);
				useStore.getState().patchTrack(track.id, {
					bpm: result.bpm,
					bpmConfidence: result.bpmConfidence,
					keyRoot: result.keyRoot,
					mode: result.mode,
					camelot,
					hue: keyHue(camelot),
					energy: result.energy,
					brightness: result.brightness,
					danceability: result.danceability,
					loudnessLufs: result.loudnessLufs,
					mono: result.mono,
					peaks: peaksFromBuffer(audio),
					analysis: result.bpmConfidence > 0 ? "done" : "done",
					durationMs: Math.round(audio.duration * 1e3)
				});
			} catch {
				useStore.getState().patchTrack(track.id, { analysis: "failed" });
			}
		}
	} finally {
		pumping = false;
	}
}
function maybePrompt() {
	const state = useStore.getState();
	if (!state.onboarded || state.promptState === "never" || state.promptedSession || state.supportOpen) return false;
	if (Date.now() - state.firstLaunch < 6048e5) return false;
	if (state.events.reduce((sum, event) => sum + event.playedMs, 0) < 18e6) return false;
	const gap = state.promptDismissals >= 3 ? 20 : 10;
	if (state.lastPromptAt && Date.now() - state.lastPromptAt < gap * 864e5) return false;
	return true;
}
engine.setHandlers({
	onAdvance: (playedMs) => useStore.getState().onAdvance(playedMs, 0),
	onEnded: () => useStore.getState().onEnded()
});
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TO_SIMP = {
	愛: "爱",
	與: "与",
	靜: "静",
	車: "车",
	臺: "台",
	燈: "灯",
	說: "说",
	過: "过",
	個: "个",
	樂: "乐",
	開: "开",
	門: "门",
	長: "长",
	東: "东",
	風: "风",
	為: "为",
	這: "这",
	麼: "么",
	會: "会",
	來: "来",
	時: "时",
	間: "间",
	聽: "听",
	書: "书",
	國: "国"
};
var TO_TRAD = Object.fromEntries(Object.entries(TO_SIMP).map(([trad, simp]) => [simp, trad]));
function mapChars(value, table) {
	let out = "";
	for (const ch of value) out += table[ch] ?? ch;
	return out;
}
function foldForms(value) {
	const lower = value.toLowerCase().trim();
	if (!lower) return [];
	const scripts = Array.from(/* @__PURE__ */ new Set([
		lower,
		mapChars(lower, TO_SIMP),
		mapChars(lower, TO_TRAD)
	]));
	const forms = /* @__PURE__ */ new Set();
	for (const text of scripts) {
		const ae = text.replaceAll("ä", "ae").replaceAll("ö", "oe").replaceAll("ü", "ue").replaceAll("ß", "ss");
		const base = text.replaceAll("ä", "a").replaceAll("ö", "o").replaceAll("ü", "u").replaceAll("ß", "ss").normalize("NFD").replace(/\p{M}/gu, "");
		const aeBase = ae.normalize("NFD").replace(/\p{M}/gu, "");
		for (const form of [
			text,
			ae,
			base,
			aeBase
		]) {
			forms.add(form);
			forms.add(form.replaceAll(" ", ""));
		}
	}
	return Array.from(forms).filter(Boolean);
}
function trackMatches(track, query) {
	const needles = foldForms(query);
	if (needles.length === 0) return true;
	const hay = foldForms([
		track.title,
		track.artist,
		track.album,
		track.genre,
		track.folder,
		track.pinyin ?? "",
		track.zhuyin ?? "",
		...track.aliases ?? []
	].join(" "));
	return needles.some((needle) => hay.some((h) => h.includes(needle)));
}
function sortTitle(title, ignoreArticles) {
	if (!ignoreArticles) return title;
	return title.replace(/^(the|a|an)\s+/i, "");
}
var mark_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20width='512'%20height='512'%20role='img'%20aria-label='Klangyu'%3e%3crect%20width='512'%20height='512'%20rx='112'%20fill='%2314161C'/%3e%3cline%20x1='156.4'%20y1='156.4'%20x2='156.4'%20y2='355.6'%20stroke='%23F4F1EA'%20stroke-width='42.7'%20stroke-linecap='round'/%3e%3cline%20x1='175.4'%20y1='256'%20x2='289.2'%20y2='156.4'%20stroke='%23F4F1EA'%20stroke-width='42.7'%20stroke-linecap='round'/%3e%3cline%20x1='175.4'%20y1='256'%20x2='284.4'%20y2='350.8'%20stroke='%23F4F1EA'%20stroke-width='42.7'%20stroke-linecap='round'/%3e%3crect%20x='260.7'%20y='260.7'%20width='94.8'%20height='94.8'%20rx='14.2'%20fill='%23D8342C'/%3e%3cg%20transform='translate(279.4%20329.9)%20scale(0.05712%20-0.05712)'%3e%3cpath%20fill='%23F4F1EA'%20d='M35%20611H313V497H35ZM125%20836H237V165H125ZM26%20151Q79%20173%20155%20211Q230%20249%20306%20289L341%20183Q274%20144%20203%20104Q133%2063%2071%2031ZM329%20712H959V603H329ZM298%20130Q342%20138%20398%20150Q455%20162%20518%20176Q581%20191%20644%20205L655%20106Q571%2082%20484%2059Q397%2037%20326%2018ZM647%20849H762Q760%20749%20763%20649Q766%20549%20773%20457Q780%20364%20791%20285Q801%20207%20815%20148Q828%2089%20844%2056Q859%2023%20875%2023Q886%2023%20892%2053Q898%2082%20900%20149Q917%20129%20939%20111Q962%2093%20981%2083Q973%2017%20959%20-21Q945%20-59%20921%20-74Q898%20-89%20859%20-89Q816%20-89%20783%20-52Q751%20-14%20728%2054Q704%20122%20689%20212Q673%20302%20665%20407Q656%20512%20652%20624Q648%20737%20647%20849ZM780%20791%20848%20849Q877%20829%20909%20801Q941%20774%20958%20752L888%20687Q871%20709%20840%20739Q809%20768%20780%20791ZM838%20537%20945%20518Q899%20317%20810%20165Q722%2012%20589%20-83Q581%20-73%20565%20-59Q549%20-44%20533%20-30Q516%20-16%20503%20-7Q635%2076%20717%20215Q799%20355%20838%20537ZM446%20445V322H522V445ZM358%20537H615V230H358Z'/%3e%3c/g%3e%3c/svg%3e";
function Seal({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: mark_default,
		alt: "",
		className: cn("shrink-0", className)
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("font-medium tracking-tight", className),
		children: ["Klangy", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative inline-block",
			children: ["u", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute -top-1.5 left-1/2 flex -translate-x-1/2 gap-0.5",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent" })]
			})]
		})]
	});
}
function AlbumArt({ track, className, playing }) {
	const seed = `${track.album}-${track.seed ?? track.title}`;
	const rings = 3 + Math.floor(hashString(seed) * 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: cn("bg-surface text-accent", className),
		role: "img",
		"aria-label": track.title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "100",
				height: "100",
				fill: `hsl(${track.hue} 32% 14%)`
			}),
			Array.from({ length: rings }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: 50 + (hashString(seed + i) - .5) * 18,
				cy: 48 + (hashString(seed + "y" + i) - .5) * 16,
				r: 16 + i * 9,
				fill: "none",
				stroke: `hsl(${track.hue + i * 16} 48% ${62 - i * 8}%)`,
				strokeWidth: "1.6"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "64",
				y: "64",
				width: "20",
				height: "20",
				rx: "3",
				fill: "currentColor"
			}),
			playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "eq-bars",
				fill: "hsl(40 30% 92%)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "18",
						y: "70",
						width: "3",
						height: "12",
						rx: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "24",
						y: "64",
						width: "3",
						height: "18",
						rx: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "30",
						y: "68",
						width: "3",
						height: "14",
						rx: "1.5"
					})
				]
			}) : null
		]
	});
}
function IconButton({ label, children, className, active, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		"aria-pressed": active,
		className: cn("inline-flex h-12 w-12 items-center justify-center rounded-full text-fg hover:bg-surface-2 disabled:opacity-40", active && "text-accent", className),
		...props,
		children
	});
}
function PrimaryButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 font-medium text-accent-fg disabled:opacity-40", className),
		...props
	});
}
function GhostButton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex h-12 items-center justify-center rounded-full bg-surface-2 px-5 font-medium text-fg ring-1 ring-line", className),
		...props
	});
}
function usePlayback() {
	const [snap, setSnap] = (0, import_react.useState)(() => engine.snapshot());
	(0, import_react.useEffect)(() => engine.subscribe(() => setSnap(engine.snapshot())), []);
	return snap;
}
function TrackMenu({ track }) {
	const locale = useStore((s) => s.settings.locale);
	const playlists = useStore((s) => s.playlists);
	const playNext = useStore((s) => s.playNext);
	const enqueue = useStore((s) => s.enqueue);
	const toggleFavourite = useStore((s) => s.toggleFavourite);
	const hideTrack = useStore((s) => s.hideTrack);
	const addToPlaylist = useStore((s) => s.addToPlaylist);
	const createPlaylist = useStore((s) => s.createPlaylist);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": t(locale, "more"),
			className: "inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-5" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		className: "z-50 min-w-48 rounded-2xl bg-surface p-1 text-sm text-fg shadow-xl ring-1 ring-line",
		sideOffset: 6,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
				onSelect: () => playNext(track.id),
				children: t(locale, "playNext")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
				onSelect: () => enqueue([track.id]),
				children: t(locale, "addQueue")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
				onSelect: () => toggleFavourite(track.id),
				children: track.favourite ? t(locale, "unfavourite") : t(locale, "favourite")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubTrigger, {
				className: "rounded-xl px-3 py-2 outline-none data-[highlighted]:bg-surface-2",
				children: t(locale, "addPlaylist")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
				className: "z-50 min-w-44 rounded-2xl bg-surface p-1 text-sm ring-1 ring-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
					onSelect: () => createPlaylist(`${t(locale, "newPlaylist")} ${playlists.length + 1}`, [track.id]),
					children: t(locale, "newPlaylist")
				}), playlists.map((playlist) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
					onSelect: () => addToPlaylist(playlist.id, [track.id]),
					children: playlist.name
				}, playlist.id))]
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
				onSelect: () => hideTrack(track.id),
				children: t(locale, "hide")
			})
		]
	}) })] });
}
function Item({ children, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
		className: "rounded-xl px-3 py-2 outline-none data-[highlighted]:bg-surface-2",
		onSelect,
		children
	});
}
function TrackRow({ track, onPlay }) {
	const locale = useStore((s) => s.settings.locale);
	const toggleFavourite = useStore((s) => s.toggleFavourite);
	const snap = usePlayback();
	const active = snap.currentId === track.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3 rounded-2xl px-2 py-1.5", active && "bg-surface"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onPlay,
				className: "flex min-w-0 flex-1 items-center gap-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumArt, {
					track,
					playing: active && snap.playing,
					className: "size-12 rounded-xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate font-medium",
						children: track.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block truncate text-sm text-muted",
						children: [
							track.artist,
							" · ",
							formatClock(track.durationMs)
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": track.favourite ? t(locale, "unfavourite") : t(locale, "favourite"),
				onClick: () => toggleFavourite(track.id),
				className: cn("inline-flex h-11 w-11 items-center justify-center rounded-full", track.favourite ? "text-accent" : "text-muted"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-5", track.favourite && "fill-current") })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				"aria-hidden": true,
				children: active && snap.playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackMenu, { track })
		]
	});
}
function SheetFrame({ title, onClose, children, wide }) {
	const locale = useStore((s) => s.settings.locale);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-40 flex items-end justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-scrim",
			"aria-label": t(locale, "close"),
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			className: cn("relative z-10 flex max-h-[92%] w-full flex-col rounded-t-3xl bg-bg ring-1 ring-line", wide ? "max-w-3xl" : "max-w-lg"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-medium",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
					label: t(locale, "close"),
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "text-xl leading-none",
						children: "×"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 overflow-y-auto px-4 pb-8",
				children
			})]
		})]
	});
}
function Segmented({ value, options, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": label,
		className: "flex flex-wrap gap-2",
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "radio",
			"aria-checked": value === option.id,
			onClick: () => onChange(option.id),
			className: cn("h-11 rounded-full px-4 text-sm", value === option.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-fg ring-1 ring-line"),
			children: option.label
		}, option.id))
	});
}
function ToggleRow({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-label": label,
			onClick: () => onChange(!checked),
			className: cn("relative h-8 w-14 rounded-full", checked ? "bg-accent" : "bg-surface-2 ring-1 ring-line"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-1 size-6 rounded-full bg-paper transition-all", checked ? "left-7" : "left-1") })
		})]
	});
}
function greet(locale) {
	const hour = (/* @__PURE__ */ new Date()).getHours();
	if (hour < 5 || hour >= 22) return t(locale, "greetNight");
	if (hour < 12) return t(locale, "greetMorning");
	if (hour < 17) return t(locale, "greetAfternoon");
	return t(locale, "greetEvening");
}
function collator(locale) {
	return new Intl.Collator(intlLocale(locale), { sensitivity: "base" });
}
function sortedTracks(tracks, sort, ignore, locale) {
	const cmp = collator(locale);
	const copy = tracks.slice();
	if (sort === "recent") return copy.sort((a, b) => b.year - a.year || cmp.compare(a.title, b.title));
	if (sort === "artist") return copy.sort((a, b) => cmp.compare(a.artist, b.artist) || cmp.compare(a.title, b.title));
	return copy.sort((a, b) => cmp.compare(sortTitle(a.title, ignore), sortTitle(b.title, ignore)));
}
function letterOf(title, ignore) {
	const ch = sortTitle(title, ignore).trim()[0] ?? "#";
	return /[a-z]/i.test(ch) ? ch.toUpperCase() : ch;
}
function HomeView() {
	const locale = useStore((s) => s.settings.locale);
	const visible = useStore((s) => s.visible());
	const order = useStore((s) => s.order);
	const index = useStore((s) => s.index);
	const playIds = useStore((s) => s.playIds);
	const resumePlayback = useStore((s) => s.resumePlayback);
	const mix = useStore((s) => s.mix);
	const setSheet = useStore((s) => s.setSheet);
	const currentId = order[index];
	const current = visible.find((track) => track.id === currentId) ?? useStore.getState().track(currentId);
	const recent = visible.slice(0, 8);
	const played = visible.filter((track) => track.playCount > 0).sort((a, b) => b.playCount - a.playCount).slice(0, 6);
	const favourites = visible.filter((track) => track.favourite).slice(0, 6);
	const mixes = [
		"morning",
		"focus",
		"workout",
		"night",
		"discover"
	];
	const mixKey = {
		morning: "morning",
		focus: "focus",
		workout: "workout",
		night: "night",
		discover: "discover"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 px-4 pb-6 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { className: "size-11 rounded-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm text-muted",
						children: greet(locale)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
					label: t(locale, "settings"),
					onClick: () => setSheet("settings"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
				})
			]
		}), visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyLibrary, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => resumePlayback(),
				className: "flex w-full items-center gap-4 rounded-3xl bg-surface p-3 text-left ring-1 ring-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumArt, {
					track: current,
					className: "size-16 rounded-2xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs tracking-wide text-muted uppercase",
							children: t(locale, "continue")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block truncate text-lg font-medium",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm text-muted",
							children: current.artist
						})
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-sm tracking-wide text-muted uppercase",
				children: t(locale, "mixes")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3 overflow-x-auto pb-1",
				children: mixes.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => mix(id),
					className: "h-28 w-36 shrink-0 rounded-3xl bg-surface-2 p-4 text-left ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-lg font-medium",
						children: t(locale, mixKey[id])
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm text-muted",
						children: t(locale, "smartQueue")
					})]
				}, id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
				title: t(locale, "recent"),
				tracks: recent,
				onPlay: (track) => playIds([track.id], 0, false)
			}),
			played.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
				title: t(locale, "mostPlayed"),
				tracks: played,
				onPlay: (track) => playIds([track.id], 0, false)
			}) : null,
			favourites.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, {
				title: t(locale, "favourites"),
				tracks: favourites,
				onPlay: (track) => playIds(favourites.map((item) => item.id), favourites.findIndex((item) => item.id === track.id), false)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setSheet("klangbild"),
				className: "flex w-full items-center justify-between rounded-3xl bg-ink px-5 py-4 text-left text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-lg font-medium",
					children: t(locale, "klangbild")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-paper/70",
					children: t(locale, "closing")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-brass-ui",
					children: t(locale, "open")
				})]
			})
		] })]
	});
}
function Rail({ title, tracks, onPlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mb-3 text-sm tracking-wide text-muted uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-3 overflow-x-auto pb-1",
		children: tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onPlay(track),
			className: "w-32 shrink-0 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumArt, {
					track,
					className: "aspect-square w-full rounded-2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block truncate text-sm font-medium",
					children: track.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-xs text-muted",
					children: track.artist
				})
			]
		}, track.id))
	})] });
}
function EmptyLibrary() {
	const locale = useStore((s) => s.settings.locale);
	const patchSettings = useStore((s) => s.patchSettings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-surface px-5 py-8 text-center ring-1 ring-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { className: "mx-auto size-16 rounded-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-xl font-medium",
				children: t(locale, "emptyTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(locale, "emptyBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					onClick: () => patchSettings({ showSketches: true }),
					children: t(locale, "obDemo")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					onClick: () => requestAudioFiles(),
					children: t(locale, "addMusic")
				})]
			})
		]
	});
}
function LibraryView() {
	const locale = useStore((s) => s.settings.locale);
	const ignore = useStore((s) => s.settings.ignoreArticles);
	const visible = useStore((s) => s.visible());
	const tracks = useStore((s) => s.tracks);
	const playlists = useStore((s) => s.playlists);
	const playIds = useStore((s) => s.playIds);
	const smartFrom = useStore((s) => s.smartFrom);
	const createPlaylist = useStore((s) => s.createPlaylist);
	const deletePlaylist = useStore((s) => s.deletePlaylist);
	const renamePlaylist = useStore((s) => s.renamePlaylist);
	const movePlaylistTrack = useStore((s) => s.movePlaylistTrack);
	const removePlaylistTrack = useStore((s) => s.removePlaylistTrack);
	const [tab, setTab] = (0, import_react.useState)("songs");
	const [sort, setSort] = (0, import_react.useState)("title");
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [naming, setNaming] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [selecting, setSelecting] = (0, import_react.useState)(false);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [mode, setMode] = (0, import_react.useState)("similar");
	const songs = (0, import_react.useMemo)(() => sortedTracks(visible, sort, ignore, locale), [
		visible,
		sort,
		ignore,
		locale
	]);
	const tabs = [
		{
			id: "songs",
			label: t(locale, "songs")
		},
		{
			id: "albums",
			label: t(locale, "albums")
		},
		{
			id: "artists",
			label: t(locale, "artists")
		},
		{
			id: "genres",
			label: t(locale, "genres")
		},
		{
			id: "folders",
			label: t(locale, "folders")
		},
		{
			id: "playlists",
			label: t(locale, "playlists")
		}
	];
	if (detail?.kind === "playlist") {
		const playlist = playlists.find((item) => item.id === detail.id);
		if (!playlist) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setDetail(null),
				className: "inline-flex h-11 items-center gap-1 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }),
					" ",
					t(locale, "back")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: t(locale, "emptyPlaylist")
			})]
		});
		const rows = playlist.trackIds.map((id) => tracks.find((track) => track.id === id)).filter((track) => Boolean(track));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 pb-6 pt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setDetail(null),
					className: "mb-3 inline-flex h-11 items-center gap-1 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }),
						" ",
						t(locale, "back")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-medium",
					children: playlist.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: countNoun(locale, rows.length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						disabled: rows.length === 0,
						onClick: () => playIds(rows.map((track) => track.id), 0, false),
						children: t(locale, "playAll")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						disabled: rows.length === 0,
						onClick: () => smartFrom(rows[0].id, mode),
						children: t(locale, "smartQueue")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChips, {
						value: mode,
						onChange: setMode,
						locale
					})
				}),
				rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted",
					children: t(locale, "emptyPlaylist")
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2",
					children: rows.map((track, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-w-0 flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackRow, {
									track,
									onPlay: () => playIds(rows.map((item) => item.id), row, false)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: t(locale, "moveUp"),
								onClick: () => movePlaylistTrack(playlist.id, row, -1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: t(locale, "moveDown"),
								onClick: () => movePlaylistTrack(playlist.id, row, 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								label: t(locale, "delete"),
								onClick: () => removePlaylistTrack(playlist.id, row),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						]
					}, `${track.id}-${row}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					className: "mt-4",
					onClick: () => {
						const next = window.prompt(t(locale, "rename"), playlist.name);
						if (next?.trim()) renamePlaylist(playlist.id, next.trim());
					},
					children: t(locale, "rename")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-3 block text-sm text-accent",
					onClick: () => {
						deletePlaylist(playlist.id);
						setDetail(null);
					},
					children: t(locale, "delete")
				})
			]
		});
	}
	if (detail) {
		const nameKey = detail.name;
		const rows = visible.filter((track) => {
			if (detail.kind === "album") return track.album === nameKey;
			if (detail.kind === "artist") return track.artist === nameKey || track.albumArtist === nameKey;
			if (detail.kind === "genre") return track.genre === nameKey;
			return track.folder === nameKey;
		}).sort((a, b) => a.trackNo - b.trackNo || a.title.localeCompare(b.title));
		const cover = rows[0];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 pb-6 pt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setDetail(null),
					className: "mb-3 inline-flex h-11 items-center gap-1 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }),
						" ",
						t(locale, "back")
					]
				}),
				cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumArt, {
					track: cover,
					className: "aspect-square w-full rounded-3xl"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-medium",
					children: nameKey
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						detail.kind === "album" ? cover?.albumArtist : t(locale, detail.kind === "artist" ? "artist" : detail.kind === "genre" ? "genre" : "folder"),
						" · ",
						countNoun(locale, rows.length)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							disabled: !cover,
							onClick: () => playIds(rows.map((track) => track.id), 0, false),
							children: t(locale, "playAll")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
							disabled: !cover,
							onClick: () => {
								const bag = rows.slice();
								for (let i = bag.length - 1; i > 0; i--) {
									const j = Math.floor(Math.random() * (i + 1));
									[bag[i], bag[j]] = [bag[j], bag[i]];
								}
								playIds(bag.map((track) => track.id), 0, false);
							},
							children: t(locale, "shufflePlay")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
							disabled: !cover,
							onClick: () => smartFrom(rows[0].id, mode),
							children: t(locale, "smartQueue")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChips, {
						value: mode,
						onChange: setMode,
						locale
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3",
					children: rows.map((track, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackRow, {
						track,
						onPlay: () => playIds(rows.map((item) => item.id), row, false)
					}) }, track.id))
				})
			]
		});
	}
	const groups = /* @__PURE__ */ new Map();
	for (const track of visible) {
		const key = tab === "albums" ? track.album : tab === "artists" ? track.artist : tab === "genres" ? track.genre : track.folder;
		const list = groups.get(key) ?? [];
		list.push(track);
		groups.set(key, list);
	}
	const cards = [...groups.entries()].sort((a, b) => collator(locale).compare(a[0], b[0]));
	const letters = [...new Set(songs.map((track) => letterOf(track.title, ignore)))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-6 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-medium",
					children: t(locale, "navLibrary")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-accent",
					onClick: () => requestAudioFiles(),
					children: t(locale, "addMusic")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-3",
				children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setTab(item.id);
						setSelecting(false);
						setPicked([]);
					},
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm", tab === item.id ? "bg-accent text-accent-fg" : "bg-surface-2 ring-1 ring-line"),
					children: item.label
				}, item.id))
			}),
			tab === "songs" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm text-muted",
						children: [t(locale, "sort"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sort,
							onChange: (event) => setSort(event.target.value),
							className: "ml-2 h-11 rounded-full bg-surface-2 px-3 text-fg ring-1 ring-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "title",
									children: t(locale, "titleAz")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "artist",
									children: t(locale, "artistAz")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "recent",
									children: t(locale, "recently")
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 rounded-full px-3 text-sm",
						onClick: () => {
							setSelecting((value) => !value);
							setPicked([]);
						},
						children: selecting ? t(locale, "done") : t(locale, "select")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: songs.map((track, row) => {
						const letter = letterOf(track.title, ignore);
						const show = row === 0 || letter !== letterOf(songs[row - 1].title, ignore);
						const on = picked.includes(track.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							id: show ? `letter-${letter}` : void 0,
							children: [show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-2 pt-3 text-xs tracking-wide text-brass-ui uppercase",
								children: letter
							}) : null, selecting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									className: "size-5 accent-current",
									checked: on,
									onChange: () => setPicked((ids) => on ? ids.filter((id) => id !== track.id) : [...ids, track.id])
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 flex-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackRow, {
										track,
										onPlay: () => playIds(songs.map((item) => item.id), row, false)
									})
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackRow, {
								track,
								onPlay: () => playIds(songs.map((item) => item.id), row, false)
							})]
						}, track.id);
					}) }), letters.length > 1 && letters.length < 24 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-2 float-right -mt-[100%] flex w-6 flex-col items-center text-[10px] text-muted",
						children: letters.map((letter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-5 w-6",
							onClick: () => document.getElementById(`letter-${letter}`)?.scrollIntoView({ block: "start" }),
							children: letter
						}, letter))
					}) : null]
				}),
				selecting && picked.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky bottom-2 mt-3 flex gap-2 rounded-2xl bg-surface p-2 ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						className: "flex-1",
						onClick: () => playIds(picked, 0, false),
						children: t(locale, "play")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						className: "flex-1",
						onClick: () => useStore.getState().enqueue(picked),
						children: t(locale, "addQueue")
					})]
				}) : null
			] }) : null,
			tab !== "songs" && tab !== "playlists" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: cards.map(([key, rows]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setDetail({
						kind: tab === "albums" ? "album" : tab === "artists" ? "artist" : tab === "genres" ? "genre" : "folder",
						name: key
					}),
					className: "text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumArt, {
							track: rows[0],
							className: "aspect-square w-full rounded-2xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block truncate font-medium",
							children: key
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: countNoun(locale, rows.length)
						})
					]
				}, key))
			}) : null,
			tab === "playlists" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					naming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex gap-2",
						onSubmit: (event) => {
							event.preventDefault();
							if (name.trim()) createPlaylist(name.trim());
							setName("");
							setNaming(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (event) => setName(event.target.value),
							placeholder: t(locale, "playlistName"),
							className: "h-12 min-w-0 flex-1 rounded-full bg-surface-2 px-4 ring-1 ring-line",
							autoFocus: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							type: "submit",
							children: t(locale, "create")
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostButton, {
						onClick: () => setNaming(true),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }),
							" ",
							t(locale, "newPlaylist")
						]
					}),
					playlists.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-4 text-sm text-muted",
						children: t(locale, "emptyPlaylist")
					}) : null,
					playlists.map((playlist) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDetail({
							kind: "playlist",
							id: playlist.id
						}),
						className: "flex w-full items-center justify-between rounded-2xl bg-surface px-4 py-3 text-left ring-1 ring-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: playlist.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: countNoun(locale, playlist.trackIds.length)
						})] })
					}, playlist.id))
				]
			}) : null
		]
	});
}
function ModeChips({ value, onChange, locale }) {
	const options = [
		{
			id: "similar",
			label: t(locale, "similar")
		},
		{
			id: "up",
			label: t(locale, "energyUp")
		},
		{
			id: "down",
			label: t(locale, "energyDown")
		},
		{
			id: "discover",
			label: t(locale, "discover")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		role: "radiogroup",
		"aria-label": t(locale, "smartQueue"),
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "radio",
			"aria-checked": value === option.id,
			onClick: () => onChange(option.id),
			className: cn("h-10 rounded-full px-3 text-sm", value === option.id ? "bg-fg text-bg" : "bg-surface-2 ring-1 ring-line"),
			children: option.label
		}, option.id))
	});
}
function SearchView() {
	const locale = useStore((s) => s.settings.locale);
	const visible = useStore((s) => s.visible());
	const recent = useStore((s) => s.recentSearches);
	const rememberSearch = useStore((s) => s.rememberSearch);
	const clearSearches = useStore((s) => s.clearSearches);
	const playIds = useStore((s) => s.playIds);
	const [query, setQuery] = (0, import_react.useState)("");
	const q = query.trim();
	const hits = q ? visible.filter((track) => trackMatches(track, q)) : [];
	const albums = [...new Set(hits.map((track) => track.album))];
	const artists = [...new Set(hits.map((track) => track.artist))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 pb-6 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3.5 left-4 size-5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				autoFocus: true,
				onChange: (event) => setQuery(event.target.value),
				onBlur: () => {
					if (q) rememberSearch(q);
				},
				placeholder: t(locale, "searchPh"),
				"aria-label": t(locale, "navSearch"),
				className: "h-12 w-full rounded-full bg-surface-2 pr-4 pl-12 ring-1 ring-line"
			})]
		}), !q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm tracking-wide text-muted uppercase",
						children: t(locale, "recentSearches")
					}), recent.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-sm text-accent",
						onClick: () => clearSearches(),
						children: t(locale, "clearAll")
					}) : null]
				}),
				recent.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: t(locale, "searchEmpty")
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: recent.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setQuery(item),
						className: "h-11 rounded-full bg-surface px-4 text-sm ring-1 ring-line",
						children: item
					}, item))
				})
			]
		}) : hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm text-muted",
			children: t(locale, "noResults")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-1 text-sm text-muted",
					children: t(locale, "songs")
				}), hits.slice(0, 20).map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackRow, {
					track,
					onPlay: () => {
						rememberSearch(q);
						playIds(hits.map((item) => item.id), hits.findIndex((item) => item.id === track.id), false);
					}
				}, track.id))] }),
				artists.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-sm text-muted",
					children: t(locale, "artists")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: artists.slice(0, 6).join(" · ")
				})] }) : null,
				albums.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-sm text-muted",
					children: t(locale, "albums")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: albums.slice(0, 6).join(" · ")
				})] }) : null
			]
		})]
	});
}
function MixesView() {
	const locale = useStore((s) => s.settings.locale);
	const visible = useStore((s) => s.visible());
	const mix = useStore((s) => s.mix);
	const smartFrom = useStore((s) => s.smartFrom);
	const [seed, setSeed] = (0, import_react.useState)(visible[0]?.id ?? "");
	const [mode, setMode] = (0, import_react.useState)("similar");
	const pending = useStore((s) => s.tracks.filter((track) => track.analysis === "pending").length);
	const done = useStore((s) => s.tracks.filter((track) => track.analysis === "done").length);
	const total = useStore((s) => s.tracks.filter((track) => !track.hidden).length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-6 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-medium",
				children: t(locale, "navMixes")
			}),
			pending > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-2xl bg-surface px-4 py-3 text-sm ring-1 ring-line",
				children: [
					t(locale, "analysisBanner"),
					" · ",
					done,
					"/",
					total
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					{
						id: "morning",
						key: "morning"
					},
					{
						id: "focus",
						key: "focus"
					},
					{
						id: "workout",
						key: "workout"
					},
					{
						id: "night",
						key: "night"
					},
					{
						id: "discover",
						key: "discover"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => mix(item.id),
					className: "h-32 rounded-3xl bg-surface p-4 text-left ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-medium",
						children: t(locale, item.key)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm text-muted",
						children: countNoun(locale, Math.min(18, visible.length))
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-3xl bg-surface p-4 ring-1 ring-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-medium",
						children: t(locale, "smartQueue")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block text-sm text-muted",
						children: [t(locale, "songs"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: seed,
							onChange: (event) => setSeed(event.target.value),
							className: "mt-1 h-12 w-full rounded-2xl bg-surface-2 px-3 text-fg ring-1 ring-line",
							children: visible.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: track.id,
								children: [
									track.title,
									" — ",
									track.artist
								]
							}, track.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChips, {
							value: mode,
							onChange: setMode,
							locale
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						className: "mt-4 w-full",
						disabled: !seed,
						onClick: () => smartFrom(seed, mode),
						children: t(locale, "smartQueue")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: formatDuration(locale, visible.reduce((sum, track) => sum + track.durationMs, 0))
					})
				]
			})
		]
	});
}
async function sharePlain(title, text) {
	if (typeof navigator !== "undefined" && typeof navigator.share === "function") try {
		await navigator.share({
			title,
			text
		});
		return "shared";
	} catch (err) {
		if (err instanceof Error && err.name === "AbortError") return "dismissed";
	}
	try {
		await navigator.clipboard.writeText(`${title}\n${text}`);
		return "copied";
	} catch {
		return "dismissed";
	}
}
async function shareCanvas(canvas, filename, text) {
	const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
	if (!blob) return "dismissed";
	const file = new File([blob], filename, { type: "image/png" });
	if (typeof navigator.share === "function" && (!navigator.canShare || navigator.canShare({ files: [file] }))) try {
		await navigator.share({
			files: [file],
			text,
			title: "Klangyu"
		});
		return "shared";
	} catch (err) {
		if (err instanceof Error && err.name === "AbortError") return "dismissed";
	}
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
	return "saved";
}
function inRange(events, from, to) {
	return events.filter((e) => e.startedAt >= from && e.startedAt <= to && e.playedMs >= 8e3);
}
function buildReport(events, tracks, from, to) {
	const plays = inRange(events, from, to);
	const byId = new Map(tracks.map((t) => [t.id, t]));
	const totalMs = plays.reduce((sum, e) => sum + e.playedMs, 0);
	const artistMs = /* @__PURE__ */ new Map();
	const trackMs = /* @__PURE__ */ new Map();
	const hours = Array.from({ length: 24 }, () => 0);
	let bpm = 0;
	let energy = 0;
	let weighted = 0;
	const keyMs = /* @__PURE__ */ new Map();
	for (const event of plays) {
		const track = byId.get(event.trackId);
		if (!track) continue;
		artistMs.set(track.artist, (artistMs.get(track.artist) ?? 0) + event.playedMs);
		trackMs.set(track.id, (trackMs.get(track.id) ?? 0) + event.playedMs);
		hours[event.hourOfDay] += event.playedMs;
		bpm += track.bpm * event.playedMs;
		energy += track.energy * event.playedMs;
		weighted += event.playedMs;
		keyMs.set(track.camelot, (keyMs.get(track.camelot) ?? 0) + event.playedMs);
	}
	const topArtists = Array.from(artistMs.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, ms]) => ({
		name,
		ms
	}));
	const topTracks = Array.from(trackMs.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5).flatMap(([id, ms]) => {
		const track = byId.get(id);
		return track ? [{
			track,
			ms
		}] : [];
	});
	const night = hours.slice(22).reduce((a, b) => a + b, 0) + hours.slice(0, 5).reduce((a, b) => a + b, 0);
	const morning = hours.slice(5, 10).reduce((a, b) => a + b, 0);
	let label = null;
	if (totalMs > 0 && night / totalMs > .4) label = "night";
	else if (totalMs > 0 && morning / totalMs > .45) label = "early";
	const days = new Set(plays.map((e) => new Date(e.startedAt).toDateString()));
	let streak = 0;
	const cursor = /* @__PURE__ */ new Date();
	cursor.setHours(0, 0, 0, 0);
	while (days.has(cursor.toDateString())) {
		streak += 1;
		cursor.setDate(cursor.getDate() - 1);
	}
	const firstSeen = /* @__PURE__ */ new Map();
	const ordered = [...events].sort((a, b) => a.startedAt - b.startedAt);
	let newArtists = 0;
	for (const event of ordered) {
		const track = byId.get(event.trackId);
		if (!track) continue;
		if (!firstSeen.has(track.artist)) firstSeen.set(track.artist, event.startedAt);
	}
	for (const event of plays) {
		const track = byId.get(event.trackId);
		if (!track) continue;
		if (firstSeen.get(track.artist) === event.startedAt) newArtists += 1;
	}
	let favouriteKey = "–";
	let best = -1;
	for (const [key, ms] of keyMs) if (ms > best) {
		best = ms;
		favouriteKey = key;
	}
	return {
		plays,
		totalMs,
		topArtists,
		topTracks,
		hours,
		streak,
		newArtists,
		avgBpm: weighted ? Math.round(bpm / weighted) : 0,
		favouriteKey,
		avgEnergy: weighted ? energy / weighted : 0,
		label
	};
}
function rangeFor(kind, now = Date.now()) {
	const to = now;
	const d = new Date(now);
	if (kind === "week") return {
		from: now - 6048e5,
		to
	};
	if (kind === "month") return {
		from: now - 2592e6,
		to
	};
	d.setMonth(0, 1);
	d.setHours(0, 0, 0, 0);
	return {
		from: d.getTime(),
		to
	};
}
function techniqueCopy(locale, technique, reason) {
	if (reason === "gapless") return t(locale, "gaplessOn");
	if (reason === "low-confidence") return t(locale, "lowConf");
	return {
		blend: {
			en: "Blend",
			de: "Überblendung",
			"zh-TW": "淡化"
		},
		bass: {
			en: "Bass swap",
			de: "Bass-Tausch",
			"zh-TW": "低音交換"
		},
		filter: {
			en: "Filter sweep",
			de: "Filterfahrt",
			"zh-TW": "濾波掃過"
		},
		echo: {
			en: "Echo out",
			de: "Echo-Out",
			"zh-TW": "回聲收尾"
		},
		cut: {
			en: "Cut",
			de: "Schnitt",
			"zh-TW": "切入"
		}
	}[technique][locale];
}
function MiniPlayer() {
	const locale = useStore((s) => s.settings.locale);
	const track = useStore((s) => s.current());
	const toggle = useStore((s) => s.toggle);
	const next = useStore((s) => s.next);
	const setSheet = useStore((s) => s.setSheet);
	const sleep = useStore((s) => s.sleep);
	const snap = usePlayback();
	if (!track) return null;
	const dur = snap.durationMs || track.durationMs;
	const ratio = dur ? Math.min(1, snap.positionMs / dur) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-0.5 bg-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-accent",
				style: { width: `${ratio * 100}%` }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 px-2 py-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSheet("now"),
					className: "flex min-w-0 flex-1 items-center gap-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumArt, {
						track,
						playing: snap.playing,
						className: "size-12 rounded-xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate font-medium",
							children: track.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block truncate text-sm text-muted",
							children: [track.artist, sleep.kind !== "off" ? ` · ${t(locale, "sleep")}` : ""]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
					label: snap.playing ? t(locale, "pause") : t(locale, "play"),
					onClick: () => toggle(),
					children: snap.playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
					label: t(locale, "next"),
					onClick: () => next(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-5" })
				})
			]
		})]
	});
}
function Toasts() {
	const toasts = useStore((s) => s.toasts);
	const undo = useStore((s) => s.undoToast);
	const locale = useStore((s) => s.settings.locale);
	if (toasts.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-x-0 bottom-28 z-50 flex flex-col items-center gap-2 px-4",
		children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto flex w-full max-w-lg items-center justify-between gap-3 rounded-2xl bg-ink px-4 py-3 text-sm text-paper shadow-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: toast.text }), toast.undo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "font-medium text-brass-ui",
				onClick: () => undo(toast.id),
				children: t(locale, "undo")
			}) : null]
		}, toast.id))
	});
}
function OverlayHost() {
	const sheet = useStore((s) => s.sheet);
	const setSheet = useStore((s) => s.setSheet);
	const close = () => setSheet(null);
	if (!sheet || sheet === "now") return sheet === "now" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NowPlaying, { onClose: close }) : null;
	if (sheet === "queue") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueueSheet, { onClose: close });
	if (sheet === "lyrics") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LyricsSheet, { onClose: close });
	if (sheet === "eq") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EqSheet, { onClose: close });
	if (sheet === "karaoke") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KaraokeSheet, { onClose: close });
	if (sheet === "sleep") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SleepSheet, { onClose: close });
	if (sheet === "settings") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSheet, { onClose: close });
	if (sheet === "support") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportSheet, { onClose: close });
	if (sheet === "about") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSheet, { onClose: close });
	if (sheet === "klangbild") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KlangbildSheet, { onClose: close });
	if (sheet === "explain") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplainSheet, { onClose: close });
	return null;
}
function NowPlaying({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const track = useStore((s) => s.current());
	const toggle = useStore((s) => s.toggle);
	const next = useStore((s) => s.next);
	const prev = useStore((s) => s.prev);
	const seek = useStore((s) => s.seek);
	const shuffle = useStore((s) => s.shuffle);
	const repeat = useStore((s) => s.repeat);
	const toggleShuffle = useStore((s) => s.toggleShuffle);
	const cycleRepeat = useStore((s) => s.cycleRepeat);
	const toggleFavourite = useStore((s) => s.toggleFavourite);
	const setSheet = useStore((s) => s.setSheet);
	const skipTransition = useStore((s) => s.skipTransition);
	const markBadMix = useStore((s) => s.markBadMix);
	const snap = usePlayback();
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	if (!track) return null;
	const dur = snap.durationMs || track.durationMs;
	const energy = energyLabel(track.energy);
	const energyText = energy === "low" ? t(locale, "energyLow") : energy === "high" ? t(locale, "energyHigh") : t(locale, "energyMid");
	const transition = snap.transition;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 overflow-y-auto bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-full max-w-lg flex-col px-4 pt-3 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							label: t(locale, "close"),
							onClick: onClose,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl leading-none",
								children: "×"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: t(locale, "nowPlaying")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							label: t(locale, "share"),
							onClick: () => {
								shareTrackCard(track, locale);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumArt, {
					track,
					playing: snap.playing,
					className: "mt-2 aspect-square w-full rounded-[2rem]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "truncate text-2xl font-medium",
							children: track.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-muted",
							children: track.artist
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						label: track.favourite ? t(locale, "unfavourite") : t(locale, "favourite"),
						onClick: () => toggleFavourite(track.id),
						className: track.favourite ? "text-accent" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-5", track.favourite && "fill-current") })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wave, {
							peaks: track.peaks,
							ratio: dur ? snap.positionMs / dur : 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							"aria-label": t(locale, "nowPlaying"),
							min: 0,
							max: Math.max(1, dur),
							value: Math.min(dur, snap.positionMs),
							onChange: (event) => seek(Number(event.target.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs text-muted tabular-nums",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatClock(snap.positionMs) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatClock(dur) })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							label: t(locale, "shuffle"),
							active: shuffle,
							onClick: () => toggleShuffle(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							label: t(locale, "previous"),
							onClick: () => prev(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": snap.playing ? t(locale, "pause") : t(locale, "play"),
							onClick: () => toggle(),
							className: "inline-flex size-16 items-center justify-center rounded-full bg-accent text-accent-fg",
							children: snap.playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							label: t(locale, "next"),
							onClick: () => next(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							label: t(locale, "repeat"),
							active: repeat !== "off",
							onClick: () => cycleRepeat(),
							children: repeat === "one" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat1, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "size-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap justify-between gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
							label: t(locale, "lyrics"),
							onClick: () => setSheet("lyrics"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
							label: t(locale, "queue"),
							onClick: () => setSheet("queue"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
							label: t(locale, "eq"),
							onClick: () => setSheet("eq"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
							label: t(locale, "sleep"),
							onClick: () => setSheet("sleep"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, {
							label: t(locale, "karaoke"),
							onClick: () => setSheet("karaoke"),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicVocal, { className: "size-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSheet("explain"),
					className: "mt-4 rounded-full bg-surface-2 px-4 py-2 text-left text-sm ring-1 ring-line",
					children: track.analysis === "done" && track.bpm ? `${Math.round(track.bpm)} BPM · ${track.camelot} · ${energyText}` : t(locale, "notAnalysed")
				}),
				transition && transition.inMs <= 2e4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 rounded-2xl bg-surface p-3 text-sm ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: t(locale, "transition")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1",
							children: [
								t(locale, "coming"),
								" ",
								formatClock(transition.inMs),
								" · ",
								techniqueCopy(locale, transition.technique, transition.reason),
								" ",
								t(locale, "mixInto")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
								className: "h-10 px-3 text-sm",
								onClick: () => skipTransition(),
								children: t(locale, "skipMix")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
								className: "h-10 px-3 text-sm",
								onClick: () => markBadMix(),
								children: t(locale, "badMix")
							})]
						})
					]
				}) : null
			]
		})
	});
}
function Tool({ label, onClick, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex w-16 flex-col items-center gap-1 text-xs text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex size-12 items-center justify-center rounded-full bg-surface-2 text-fg ring-1 ring-line",
			children: icon
		}), label]
	});
}
function Wave({ peaks, ratio }) {
	const step = 100 / peaks.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 16",
		className: "h-8 w-full",
		"aria-hidden": true,
		children: peaks.map((peak, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: i * step + .15,
			y: 8 - peak * 7,
			width: Math.max(.4, step - .35),
			height: Math.max(.6, peak * 14),
			rx: "0.4",
			className: i / peaks.length < ratio ? "fill-accent" : "fill-line"
		}, i))
	});
}
function QueueSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const order = useStore((s) => s.order);
	const index = useStore((s) => s.index);
	const playIds = useStore((s) => s.playIds);
	const remove = useStore((s) => s.removeFromOrder);
	const move = useStore((s) => s.moveOrder);
	const saveQueue = useStore((s) => s.saveQueue);
	const smart = useStore((s) => s.smartSession);
	const [name, setName] = (0, import_react.useState)("");
	const rows = order.map((id) => useStore.getState().track(id)).filter((track) => Boolean(track));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "queue"),
		onClose,
		children: [
			smart ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm text-muted",
				children: "Automix"
			}) : null,
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t(locale, "queueEmpty")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: rows.map((track, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("min-w-0 flex-1", row === index && "rounded-2xl ring-1 ring-accent"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackRow, {
							track,
							onPlay: () => playIds(order, row, smart)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						label: t(locale, "moveUp"),
						onClick: () => move(row, -1),
						children: "↑"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						label: t(locale, "moveDown"),
						onClick: () => move(row, 1),
						children: "↓"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						label: t(locale, "delete"),
						onClick: () => remove(row),
						children: "×"
					})
				]
			}, `${track.id}-${row}`)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 flex gap-2",
				onSubmit: (event) => {
					event.preventDefault();
					saveQueue(name);
					setName("");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: name,
					onChange: (event) => setName(event.target.value),
					placeholder: t(locale, "playlistName"),
					className: "h-12 min-w-0 flex-1 rounded-full bg-surface-2 px-4 ring-1 ring-line"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
					type: "submit",
					children: t(locale, "savePlaylist")
				})]
			})
		]
	});
}
function LyricsSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const track = useStore((s) => s.current());
	const seek = useStore((s) => s.seek);
	const patchTrack = useStore((s) => s.patchTrack);
	const snap = usePlayback();
	const activeRef = (0, import_react.useRef)(null);
	const lines = track?.lyrics ?? [];
	const offset = (track?.lyricOffsetMs ?? 0) / 1e3;
	const seconds = snap.positionMs / 1e3 - offset;
	let active = -1;
	lines.forEach((line, i) => {
		if (line.t <= seconds) active = i;
	});
	(0, import_react.useEffect)(() => {
		activeRef.current?.scrollIntoView({ block: "center" });
	}, [active, track?.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "lyrics"),
		onClose,
		children: [
			!track || lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t(locale, "noLyrics")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1",
				children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: i === active ? activeRef : void 0,
					type: "button",
					onClick: () => seek(line.t * 1e3),
					className: cn("block w-full rounded-xl px-2 py-2 text-left text-lg", i === active ? "text-fg" : "text-muted"),
					children: line.text
				}, `${line.t}-${line.text}`))
			}),
			track ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: t(locale, "offset")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
							className: "h-11 px-3",
							onClick: () => patchTrack(track.id, { lyricOffsetMs: Math.max(-5e3, track.lyricOffsetMs - 500) }),
							children: "−0.5s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-14 text-center text-sm tabular-nums",
							children: (track.lyricOffsetMs / 1e3).toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
							className: "h-11 px-3",
							onClick: () => patchTrack(track.id, { lyricOffsetMs: Math.min(5e3, track.lyricOffsetMs + 500) }),
							children: "+0.5s"
						})
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: t(locale, "lyricsNote")
			})
		]
	});
}
function EqSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const eq = useStore((s) => s.eq);
	const setEq = useStore((s) => s.setEq);
	const setBand = (index, value) => {
		const bands = eq.bands.slice();
		bands[index] = value;
		setEq({
			...eq,
			bands
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "eq"),
		onClose,
		wide: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-2",
				children: Object.keys(EQ_PRESETS).map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setEq({
						...eq,
						bands: [...EQ_PRESETS[name]]
					}),
					className: "h-11 shrink-0 rounded-full bg-surface-2 px-3 text-sm ring-1 ring-line",
					children: name
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex items-end justify-between gap-1",
				children: eq.bands.map((gain, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col items-center gap-2 text-[10px] text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: gain > 0 ? `+${gain}` : gain
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "eq-vert",
							type: "range",
							min: -12,
							max: 12,
							step: 1,
							"aria-label": `${EQ_FREQS[index]} Hz`,
							value: gain,
							onChange: (event) => setBand(index, Number(event.target.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: EQ_FREQS[index] >= 1e3 ? `${EQ_FREQS[index] / 1e3}k` : EQ_FREQS[index] })
					]
				}, EQ_FREQS[index]))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm",
				children: [
					t(locale, "preamp"),
					" ",
					eq.preamp,
					" dB",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: -12,
						max: 12,
						step: 1,
						value: eq.preamp,
						onChange: (event) => setEq({
							...eq,
							preamp: Number(event.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-2 block text-sm",
				children: [
					t(locale, "bass"),
					" ",
					eq.bass,
					" dB",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 12,
						step: 1,
						value: eq.bass,
						onChange: (event) => setEq({
							...eq,
							bass: Number(event.target.value)
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
				className: "mt-3",
				onClick: () => setEq({
					bands: [...EQ_PRESETS.Flat],
					preamp: 0,
					bass: 0
				}),
				children: t(locale, "resetEq")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: t(locale, "outputNote")
			})
		]
	});
}
function KaraokeSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const vocal = useStore((s) => s.vocal);
	const setVocal = useStore((s) => s.setVocal);
	const track = useStore((s) => s.current());
	const tier = useStore((s) => s.effectiveTier());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "karaoke"),
		onClose,
		children: [
			track?.mono ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 rounded-2xl bg-surface px-3 py-2 text-sm",
				children: t(locale, "monoWarn")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm",
				children: [
					t(locale, "vocal"),
					" ",
					Math.round(vocal * 100),
					"%",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 100,
						value: Math.round(vocal * 100),
						onChange: (event) => setVocal(Number(event.target.value) / 100)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: t(locale, "stemsNote")
			}),
			tier < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t(locale, "tierStudio")
			}) : null
		]
	});
}
function SleepSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const sleep = useStore((s) => s.sleep);
	const setSleep = useStore((s) => s.setSleep);
	const clearSleep = useStore((s) => s.clearSleep);
	const extendSleep = useStore((s) => s.extendSleep);
	const [, tick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => tick((n) => n + 1), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const left = sleep.kind === "time" ? Math.max(0, sleep.until - Date.now()) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "sleep"),
		onClose,
		children: [
			sleep.kind === "time" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-sm",
				children: [
					t(locale, "sleepIn"),
					" ",
					formatClock(left)
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					[
						15,
						30,
						45,
						60,
						90
					].map((minute) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostButton, {
						onClick: () => setSleep({
							kind: "time",
							until: Date.now() + minute * 6e4
						}),
						children: [
							minute,
							" ",
							t(locale, "minShort")
						]
					}, minute)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						onClick: () => setSleep({ kind: "track" }),
						children: t(locale, "endTrack")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						onClick: () => setSleep({ kind: "album" }),
						children: t(locale, "endAlbum")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					onClick: () => extendSleep(),
					children: t(locale, "extend")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					onClick: () => clearSleep(),
					children: t(locale, "cancel")
				})]
			})
		]
	});
}
function SettingsSheet({ onClose }) {
	const settings = useStore((s) => s.settings);
	const patch = useStore((s) => s.patchSettings);
	const locale = settings.locale;
	const tracks = useStore((s) => s.tracks);
	const restoreTrack = useStore((s) => s.restoreTrack);
	const resetTaste = useStore((s) => s.resetTaste);
	const clearHistory = useStore((s) => s.clearHistory);
	const clearAll = useStore((s) => s.clearAll);
	const exportData = useStore((s) => s.exportData);
	const importData = useStore((s) => s.importData);
	const toast = useStore((s) => s.toast);
	const setSheet = useStore((s) => s.setSheet);
	const probe = useStore((s) => s.probe);
	const tier = useStore((s) => s.effectiveTier());
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const hidden = tracks.filter((track) => track.hidden);
	const analysed = tracks.filter((track) => track.analysis === "done").length;
	const pending = tracks.filter((track) => track.analysis === "pending").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "settings"),
		onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				label: t(locale, "playback"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "gapless"),
						checked: settings.gaplessAlbums,
						onChange: (gaplessAlbums) => patch({ gaplessAlbums })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block py-2 text-sm",
						children: [
							t(locale, "crossfade"),
							" ",
							settings.crossfadeSeconds,
							t(locale, "seconds"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: 12,
								step: 1,
								value: settings.crossfadeSeconds,
								onChange: (event) => patch({ crossfadeSeconds: Number(event.target.value) })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 text-sm text-muted",
						children: t(locale, "automix")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						label: t(locale, "automix"),
						value: settings.automixMode,
						onChange: (automixMode) => patch({ automixMode }),
						options: [
							{
								id: "OFF",
								label: t(locale, "automixOff")
							},
							{
								id: "SMART_SESSIONS",
								label: t(locale, "automixSmart")
							},
							{
								id: "ALWAYS",
								label: t(locale, "automixAlways")
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-3 text-sm text-muted",
						children: t(locale, "style")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						label: t(locale, "style"),
						value: settings.automixStyle,
						onChange: (automixStyle) => patch({ automixStyle }),
						options: [
							{
								id: "SUBTLE",
								label: t(locale, "subtle")
							},
							{
								id: "CLUB",
								label: t(locale, "club")
							},
							{
								id: "RADIO",
								label: t(locale, "radio")
							},
							{
								id: "CHILL",
								label: t(locale, "chill")
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "harmonic"),
						checked: settings.automixHarmonicOnly,
						onChange: (automixHarmonicOnly) => patch({ automixHarmonicOnly })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 text-sm text-muted",
						children: t(locale, "loudness")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						label: t(locale, "loudness"),
						value: settings.loudnessMode,
						onChange: (loudnessMode) => patch({ loudnessMode }),
						options: [
							{
								id: "OFF",
								label: t(locale, "loudOff")
							},
							{
								id: "TRACK",
								label: t(locale, "loudTrack")
							},
							{
								id: "ALBUM",
								label: t(locale, "loudAlbum")
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "resume"),
						checked: settings.resumeOnLaunch,
						onChange: (resumeOnLaunch) => patch({ resumeOnLaunch })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "haptics"),
						checked: settings.haptics,
						onChange: (haptics) => patch({ haptics })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				label: t(locale, "library"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block py-2 text-sm",
						children: [
							t(locale, "minLen"),
							" ",
							settings.minTrackSeconds,
							"s",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: 60,
								step: 5,
								value: settings.minTrackSeconds,
								onChange: (event) => patch({ minTrackSeconds: Number(event.target.value) })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "articles"),
						checked: settings.ignoreArticles,
						onChange: (ignoreArticles) => patch({ ignoreArticles })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "sketches"),
						checked: settings.showSketches,
						onChange: (showSketches) => patch({ showSketches })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							t(locale, "analysed"),
							" ",
							analysed,
							"/",
							tracks.length,
							pending ? ` · ${pending}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						className: "mt-2",
						onClick: () => void pumpAnalysis(),
						children: t(locale, "analyseNow")
					}),
					hidden.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 text-sm text-muted",
						children: t(locale, "noneHidden")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 text-sm",
						children: t(locale, "hiddenBack")
					}),
					hidden.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between py-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: track.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-accent",
							onClick: () => restoreTrack(track.id),
							children: t(locale, "restore")
						})]
					}, track.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				label: t(locale, "smart"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							t(locale, "deviceNote"),
							": ",
							probe.ramGb ? `${probe.ramGb} GB` : "",
							" · ",
							probe.cores,
							" · ",
							t(locale, tier === 0 ? "tierCore" : tier === 1 ? "tierEnhanced" : "tierStudio")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
							label: t(locale, "tier"),
							value: settings.tierOverride,
							onChange: (tierOverride) => patch({ tierOverride }),
							options: [
								{
									id: "AUTO",
									label: t(locale, "tierAuto")
								},
								{
									id: "CORE",
									label: t(locale, "tierCore")
								},
								{
									id: "ENHANCED",
									label: t(locale, "tierEnhanced")
								},
								{
									id: "STUDIO",
									label: t(locale, "tierStudio")
								}
							]
						})
					}),
					settings.tierOverride === "ENHANCED" || settings.tierOverride === "STUDIO" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 text-sm text-muted",
						children: t(locale, "tierWarn")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "personal"),
						checked: settings.personalisation,
						onChange: (personalisation) => patch({ personalisation })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block py-2 text-sm",
						children: [
							t(locale, "queueLen"),
							" ",
							settings.smartQueueLength,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 8,
								max: 30,
								step: 1,
								value: settings.smartQueueLength,
								onChange: (event) => patch({ smartQueueLength: Number(event.target.value) })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						onClick: () => resetTaste(),
						children: t(locale, "resetTaste")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				label: t(locale, "appearance"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						label: t(locale, "language"),
						value: settings.locale,
						onChange: (next) => patch({ locale: next }),
						options: [
							{
								id: "en",
								label: "English"
							},
							{
								id: "de",
								label: "Deutsch"
							},
							{
								id: "zh-TW",
								label: "繁體中文"
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
							label: t(locale, "theme"),
							value: settings.theme,
							onChange: (theme) => patch({ theme }),
							options: [
								{
									id: "auto",
									label: t(locale, "auto")
								},
								{
									id: "light",
									label: t(locale, "light")
								},
								{
									id: "dark",
									label: t(locale, "dark")
								},
								{
									id: "amoled",
									label: t(locale, "amoled")
								}
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-3 text-sm text-muted",
						children: t(locale, "palette")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 pt-2",
						children: [
							["default", "Klangyu"],
							["mist", "Nebel"],
							["brass", "Messing"],
							["market", t(locale, "market")],
							["harbor", t(locale, "harbor")]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": settings.palette === id,
							onClick: () => patch({ palette: id }),
							className: cn("h-11 rounded-full px-4 text-sm ring-1", settings.palette === id ? "bg-accent text-accent-fg ring-accent" : "ring-line"),
							children: label
						}, id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				label: t(locale, "storage"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						onClick: () => clearHistory(),
						children: t(locale, "clearHistory")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
								onClick: () => {
									const blob = new Blob([exportData()], { type: "application/json" });
									const url = URL.createObjectURL(blob);
									const link = document.createElement("a");
									link.href = url;
									link.download = "klangyu-library.json";
									link.click();
									URL.revokeObjectURL(url);
								},
								children: t(locale, "export")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
								onClick: () => fileRef.current?.click(),
								children: t(locale, "import")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "application/json",
								className: "hidden",
								onChange: (event) => {
									const file = event.target.files?.[0];
									event.target.value = "";
									if (!file) return;
									file.text().then((raw) => toast(importData(raw) ? t(locale, "importOk") : t(locale, "importBad")));
								}
							})
						]
					}),
					confirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-2xl bg-surface-2 p-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(locale, "clearConfirm") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
								onClick: () => {
									clearAll();
									setConfirm(false);
								},
								children: t(locale, "yesClear")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
								onClick: () => setConfirm(false),
								children: t(locale, "cancel")
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-3 text-sm text-accent",
						onClick: () => setConfirm(true),
						children: t(locale, "clearData")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				label: t(locale, "support"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						onClick: () => setSheet("support"),
						children: t(locale, "support")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						className: "mt-2",
						onClick: () => setSheet("klangbild"),
						children: t(locale, "klangbild")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						className: "mt-2",
						onClick: () => setSheet("about"),
						children: t(locale, "about")
					})
				]
			})
		]
	});
}
function Group({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-1 text-xs tracking-wide text-muted uppercase",
			children: label
		}), children]
	});
}
function SupportSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const dismiss = useStore((s) => s.dismissPrompt);
	const toast = useStore((s) => s.toast);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "supTitle"),
		onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { className: "size-16 rounded-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed",
				children: t(locale, "supBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: t(locale, "supScreen")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						onClick: () => {
							toast(locale === "de" ? "Danke. Hier wird nichts berechnet." : locale === "zh-TW" ? "謝謝。這裡不會收費。" : "Thank you. Nothing is charged here.");
							dismiss(true);
							onClose();
						},
						children: t(locale, "supBtn")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
						onClick: () => {
							dismiss(false);
							onClose();
						},
						children: t(locale, "notNow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 text-sm text-muted",
						onClick: () => {
							dismiss(true);
							onClose();
						},
						children: t(locale, "dontAsk")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					onClick: () => {
						sharePlain("Klangyu", t(locale, "tagline"));
					},
					children: t(locale, "shareApp")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
					onClick: () => {
						window.location.href = "mailto:hello@klangyu.app?subject=Klangyu%20feedback";
					},
					children: t(locale, "feedback")
				})]
			})
		]
	});
}
function AboutSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const [notices, setNotices] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "about"),
		onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { className: "size-14 rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: t(locale, "tagline")
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed",
				children: t(locale, "aboutBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed",
				children: t(locale, "privacy")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					t(locale, "version"),
					" 0.9.0 · ",
					t(locale, "browser")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-4 text-sm text-accent",
				onClick: () => setNotices((value) => !value),
				children: t(locale, "notices")
			}),
			notices ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-2 space-y-1 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jost, SIL Open Font License" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lucide, ISC" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Audio engine, analysis and Automix are part of Klangyu" })
				]
			}) : null
		]
	});
}
function ExplainSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const track = useStore((s) => s.current());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "info"),
		onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed",
			children: t(locale, "explain")
		}), track && track.bpm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm",
			children: [
				Math.round(track.bpm),
				" BPM · ",
				track.camelot,
				" · ",
				keyLabel(track.keyRoot, track.mode),
				" · ",
				Math.round(track.loudnessLufs),
				" LUFS"
			]
		}) : null]
	});
}
function KlangbildSheet({ onClose }) {
	const locale = useStore((s) => s.settings.locale);
	const events = useStore((s) => s.events);
	const tracks = useStore((s) => s.tracks);
	const [period, setPeriod] = (0, import_react.useState)("month");
	const [style, setStyle] = (0, import_react.useState)("ring");
	const [hideTitles, setHideTitles] = (0, import_react.useState)(false);
	const [hideArtists, setHideArtists] = (0, import_react.useState)(false);
	const [statsOnly, setStatsOnly] = (0, import_react.useState)(false);
	const range = rangeFor(period);
	const report = (0, import_react.useMemo)(() => buildReport(events, tracks, range.from, range.to), [
		events,
		tracks,
		range.from,
		range.to
	]);
	const marks = (0, import_react.useMemo)(() => collectMarks(report, tracks), [report, tracks]);
	const caption = captionFor(report, locale, hideTitles, hideArtists);
	const ready = report.plays.length >= 20;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetFrame, {
		title: t(locale, "klangbild"),
		onClose,
		wide: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
			label: t(locale, "klangbild"),
			value: period,
			onChange: setPeriod,
			options: [
				{
					id: "week",
					label: t(locale, "week")
				},
				{
					id: "month",
					label: t(locale, "month")
				},
				{
					id: "year",
					label: t(locale, "year")
				}
			]
		}), !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted",
			children: [
				t(locale, "needPlays"),
				" ",
				countNoun(locale, report.plays.length)
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "story-scroll mt-4 flex gap-3 overflow-x-auto pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Story, {
						title: t(locale, "listeningTime"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-medium",
							children: formatDuration(locale, report.totalMs)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-paper/70",
							children: countNoun(locale, report.plays.length)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {
						title: t(locale, "topArtist"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-medium",
							children: hideArtists ? "···" : report.topArtists[0]?.name ?? "—"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {
						title: t(locale, "topTracks"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-1 text-sm",
							children: report.topTracks.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "truncate",
								children: [
									i + 1,
									". ",
									hideTitles ? "···" : row.track.title,
									hideArtists ? "" : ` · ${row.track.artist}`
								]
							}, row.track.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Story, {
						title: t(locale, "timeOfDay"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HourRing, { hours: report.hours }), report.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: report.label === "night" ? t(locale, "nightOwl") : t(locale, "earlyBird")
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Story, {
						title: t(locale, "streak"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-4xl font-medium",
							children: report.streak
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-paper/70",
							children: t(locale, "days")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {
						title: t(locale, "newArtists"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-4xl font-medium",
							children: report.newArtists
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Story, {
						title: t(locale, "signature"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xl font-medium",
								children: [report.avgBpm || "—", " BPM"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-paper/80",
								children: report.favouriteKey
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-1.5 overflow-hidden rounded-full bg-paper/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-brass-ui",
									style: { width: `${Math.round(report.avgEnergy * 100)}%` }
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Story, {
						title: t(locale, "closing"),
						children: [!statsOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KlangArt, {
							marks,
							style
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: caption
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "mt-3 text-paper" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
					label: t(locale, "style"),
					value: style,
					onChange: setStyle,
					options: [
						{
							id: "ring",
							label: t(locale, "ring")
						},
						{
							id: "wave",
							label: t(locale, "wave")
						},
						{
							id: "seal",
							label: t(locale, "seal")
						},
						{
							id: "constellation",
							label: t(locale, "constellation")
						}
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "hideTitles"),
						checked: hideTitles,
						onChange: setHideTitles
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "hideArtists"),
						checked: hideArtists,
						onChange: setHideArtists
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: t(locale, "statsOnly"),
						checked: statsOnly,
						onChange: setStatsOnly
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
				className: "mt-3 w-full",
				onClick: () => {
					shareCanvas(paintCard(report, marks, style, caption, statsOnly, locale), "klangbild.png", caption);
				},
				children: t(locale, "shareCard")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: caption
			})
		] })]
	});
}
function Story({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex aspect-[9/16] w-52 shrink-0 flex-col justify-between rounded-3xl bg-ink p-4 text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-paper/60 uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
	});
}
function collectMarks(report, tracks) {
	const counts = /* @__PURE__ */ new Map();
	for (const event of report.plays) counts.set(event.trackId, (counts.get(event.trackId) ?? 0) + 1);
	return [...counts.entries()].flatMap(([id, plays]) => {
		const track = tracks.find((item) => item.id === id);
		if (!track) return [];
		return [{
			bpm: track.bpm || 100,
			hue: track.hue,
			energy: track.energy,
			plays,
			title: track.title
		}];
	});
}
function KlangArt({ marks, style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 78",
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "100",
			height: "78",
			rx: "8",
			fill: "#14161C"
		}), marks.map((mark, i) => {
			const point = place(mark, i, style, 100, 78);
			const r = 1.2 + mark.energy * 3.2;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: point.x,
				cy: point.y,
				r,
				fill: `hsl(${mark.hue} 62% 62%)`,
				opacity: .35 + Math.min(.65, mark.plays * .12)
			}, `${mark.title}-${i}`);
		})]
	});
}
function place(mark, index, style, w, h) {
	const bpm = mark.bpm || 100;
	if (style === "wave") return {
		x: (bpm * 3 + index * 17) % 86 + 7,
		y: h * .55 + Math.sin((bpm + index) / 7) * (8 + mark.energy * 16)
	};
	if (style === "seal") {
		const col = index % 5;
		const row = Math.floor(index / 5);
		return {
			x: 16 + col * 16,
			y: 16 + row % 4 * 14
		};
	}
	if (style === "constellation") return {
		x: 10 + (bpm * 13 + index * 29) % 80,
		y: 10 + (mark.hue + index * 37) % 58
	};
	const angle = bpm % 180 / 180 * Math.PI * 2 + index * .15;
	const radius = 10 + bpm % 28 * .45;
	return {
		x: w / 2 + Math.cos(angle) * radius * (w / 100),
		y: h / 2 + Math.sin(angle) * radius * .7
	};
}
function HourRing({ hours }) {
	const max = Math.max(1, ...hours);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className: "mx-auto h-28 w-28",
		children: hours.map((value, hour) => {
			const angle = hour / 24 * Math.PI * 2 - Math.PI / 2;
			const len = 12 + value / max * 28;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 50 + Math.cos(angle) * 16,
				y1: 50 + Math.sin(angle) * 16,
				x2: 50 + Math.cos(angle) * (16 + len),
				y2: 50 + Math.sin(angle) * (16 + len),
				stroke: value ? "#C9A24B" : "#3a3e4a",
				strokeWidth: "3",
				strokeLinecap: "round"
			}, hour);
		})
	});
}
function captionFor(report, locale, hideTitles, hideArtists) {
	const time = formatDuration(locale, report.totalMs);
	const artist = hideArtists ? "" : report.topArtists[0]?.name;
	const song = hideTitles ? "" : report.topTracks[0]?.track.title;
	if (locale === "de") return `Klangbild: ${time}${artist ? `, meist ${artist}` : ""}${song ? `, Titel ${song}` : ""}. ${report.avgBpm || "—"} BPM, ${report.favouriteKey}.`;
	if (locale === "zh-TW") return `音域圖：${time}${artist ? `，最常聽 ${artist}` : ""}${song ? `，${song}` : ""}。${report.avgBpm || "—"} BPM，${report.favouriteKey}。`;
	return `Klangbild: ${time} listened${artist ? `, mostly ${artist}` : ""}${song ? `, including ${song}` : ""}. ${report.avgBpm || "—"} BPM, key ${report.favouriteKey}.`;
}
function paintCard(report, marks, style, caption, statsOnly, locale) {
	const canvas = document.createElement("canvas");
	canvas.width = 1080;
	canvas.height = 1920;
	const ctx = canvas.getContext("2d");
	if (!ctx) return canvas;
	ctx.fillStyle = "#14161C";
	ctx.fillRect(0, 0, 1080, 1920);
	if (!statsOnly) for (let i = 0; i < marks.length; i++) {
		const mark = marks[i];
		const point = place(mark, i, style, 100, 150);
		ctx.beginPath();
		ctx.fillStyle = `hsla(${mark.hue}, 62%, 62%, ${.35 + Math.min(.6, mark.plays * .1)})`;
		ctx.arc(point.x * 10.8, 280 + point.y * 8, 10 + mark.energy * 28, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.fillStyle = "#F4F1EA";
	ctx.font = "600 72px Jost, sans-serif";
	ctx.fillText(formatDuration(locale, report.totalMs), 80, 1500);
	ctx.font = "500 36px Jost, sans-serif";
	ctx.fillStyle = "#C9A24B";
	ctx.fillText(`${report.avgBpm || "—"} BPM · ${report.favouriteKey}`, 80, 1580);
	ctx.fillStyle = "#A39E93";
	ctx.font = "400 28px Jost, sans-serif";
	wrapText(ctx, caption, 80, 1660, 920, 40);
	ctx.fillStyle = "#D8342C";
	ctx.fillRect(80, 1760, 36, 36);
	ctx.fillStyle = "#F4F1EA";
	ctx.font = "500 32px Jost, sans-serif";
	ctx.fillText("Klangyu", 132, 1790);
	return canvas;
}
function wrapText(ctx, text, x, y, max, line) {
	const words = text.split(" ");
	let row = "";
	let yy = y;
	for (const word of words) {
		const trial = row ? `${row} ${word}` : word;
		if (ctx.measureText(trial).width > max) {
			ctx.fillText(row, x, yy);
			row = word;
			yy += line;
		} else row = trial;
	}
	if (row) ctx.fillText(row, x, yy);
}
async function shareTrackCard(track, locale) {
	const canvas = document.createElement("canvas");
	canvas.width = 1080;
	canvas.height = 1080;
	const ctx = canvas.getContext("2d");
	if (!ctx) return;
	ctx.fillStyle = `hsl(${track.hue} 32% 12%)`;
	ctx.fillRect(0, 0, 1080, 1080);
	ctx.strokeStyle = `hsl(${track.hue} 48% 62%)`;
	ctx.lineWidth = 8;
	for (let i = 0; i < 4; i++) {
		ctx.beginPath();
		ctx.arc(540, 460, 120 + i * 70, 0, Math.PI * 2);
		ctx.stroke();
	}
	ctx.fillStyle = "#D8342C";
	ctx.fillRect(860, 860, 120, 120);
	ctx.fillStyle = "#F4F1EA";
	ctx.font = "600 64px Jost, sans-serif";
	ctx.fillText(track.title.slice(0, 28), 80, 860);
	ctx.font = "400 36px Jost, sans-serif";
	ctx.fillStyle = "#C9C3B6";
	ctx.fillText(track.artist.slice(0, 36), 80, 920);
	const energy = energyLabel(track.energy);
	const chip = track.bpm ? `${Math.round(track.bpm)} BPM · ${track.camelot} · ${energy}` : t(locale, "notAnalysed");
	ctx.fillStyle = "#C9A24B";
	ctx.font = "500 32px Jost, sans-serif";
	ctx.fillText(chip, 80, 990);
	await shareCanvas(canvas, "klangyu-track.png", `${track.title} — ${track.artist}. ${chip}.`);
}
function applyChrome(locale, theme, palette) {
	const root = document.documentElement;
	let next = theme;
	if (next === "auto") next = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	root.dataset.theme = next;
	root.dataset.palette = palette;
	root.lang = locale === "zh-TW" ? "zh-Hant" : locale;
}
function bootPlayer() {
	let fading = false;
	const onMedia = (event) => {
		const detail = event.detail;
		const state = useStore.getState();
		if (detail === "play" && !engine.snapshot().playing) state.toggle();
		if (detail === "pause" && engine.snapshot().playing) state.toggle();
		if (detail === "next") state.next();
		if (detail === "prev") state.prev();
	};
	document.addEventListener("klangyu-media", onMedia);
	const clock = window.setInterval(() => {
		const sleep = useStore.getState().sleep;
		if (sleep.kind === "time" && Date.now() >= sleep.until && !fading) {
			fading = true;
			engine.fadeOut(8);
			window.setTimeout(() => {
				const again = useStore.getState().sleep;
				if (again.kind === "time" && Date.now() >= again.until - 1e3) {
					engine.pause();
					useStore.getState().clearSleep();
				} else engine.restoreGain();
				fading = false;
			}, 8200);
		}
		const snap = engine.snapshot();
		if (snap.playing) useStore.getState().notePosition(snap.positionMs);
	}, 1e3);
	return () => {
		document.removeEventListener("klangyu-media", onMedia);
		window.clearInterval(clock);
	};
}
function KlangyuApp() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [picker, setPicker] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const onboarded = useStore((s) => s.onboarded);
	const tab = useStore((s) => s.tab);
	const setTab = useStore((s) => s.setTab);
	const settings = useStore((s) => s.settings);
	const sheet = useStore((s) => s.sheet);
	(0, import_react.useEffect)(() => {
		let live = true;
		const finish = () => {
			if (!live) return;
			useStore.getState().setProbe(probeDevice());
			setReady(true);
			if (maybePrompt()) useStore.getState().setSheet("support");
		};
		const unsub = useStore.persist.onFinishHydration(finish);
		if (useStore.persist.hasHydrated()) finish();
		else useStore.persist.rehydrate();
		setPicker(true);
		return () => {
			live = false;
			unsub();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		applyChrome(settings.locale, settings.theme, settings.palette);
	}, [
		ready,
		settings.locale,
		settings.theme,
		settings.palette
	]);
	(0, import_react.useEffect)(() => bootPlayer(), []);
	(0, import_react.useEffect)(() => bindFileOpener(() => fileRef.current?.click()), []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const tag = event.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
			if (event.key === " ") {
				event.preventDefault();
				useStore.getState().toggle();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const items = [
		{
			id: "home",
			label: t(settings.locale, "navHome"),
			icon: House
		},
		{
			id: "library",
			label: t(settings.locale, "navLibrary"),
			icon: Library
		},
		{
			id: "search",
			label: t(settings.locale, "navSearch"),
			icon: Search
		},
		{
			id: "mixes",
			label: t(settings.locale, "navMixes"),
			icon: AudioLines
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-dvh max-w-6xl lg:grid-cols-[1fr_32rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden flex-col justify-between px-10 py-12 lg:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-4xl text-paper" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-lg text-paper/80",
						children: t(settings.locale, "tagline")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-paper/60",
						children: t(settings.locale, "privacy")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-paper/50",
					children: [
						t(settings.locale, "taglineDe"),
						" · ",
						t(settings.locale, "taglineZh")
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden bg-bg text-fg lg:my-4 lg:h-[calc(100dvh-2rem)] lg:rounded-[2rem] lg:ring-1 lg:ring-paper/15",
				children: [
					picker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "audio/*,.mp3,.m4a,.aac,.flac,.ogg,.opus,.wav",
						multiple: true,
						className: "hidden",
						onChange: (event) => {
							const files = [...event.target.files ?? []];
							event.target.value = "";
							if (files.length) importAudioFiles(files);
						}
					}) : null,
					!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid flex-1 place-items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { className: "size-20 rounded-[1.6rem]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-2xl" })]
					}) : !onboarded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
							className: "min-h-0 flex-1 overflow-y-auto",
							children: [
								tab === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {}) : null,
								tab === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryView, {}) : null,
								tab === "search" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchView, {}) : null,
								tab === "mixes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MixesView, {}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniPlayer, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "grid grid-cols-4 border-t border-line bg-bg pb-[env(safe-area-inset-bottom)]",
							"aria-label": t(settings.locale, "navHome"),
							children: items.map((item) => {
								const Icon = item.icon;
								const on = tab === item.id && sheet === null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-current": on ? "page" : void 0,
									onClick: () => setTab(item.id),
									className: cn("flex h-16 flex-col items-center justify-center gap-1 text-xs", on ? "text-accent" : "text-muted"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label]
								}, item.id);
							})
						})
					] }),
					ready && onboarded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverlayHost, {}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toasts, {})
				]
			})]
		})
	});
}
function Onboarding() {
	const locale = useStore((s) => s.settings.locale);
	const probe = useStore((s) => s.probe);
	const tier = useStore((s) => s.effectiveTier());
	const setOnboarded = useStore((s) => s.setOnboarded);
	const playIds = useStore((s) => s.playIds);
	const visible = useStore((s) => s.visible());
	const [step, setStep] = (0, import_react.useState)(0);
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (step !== 3) return;
		let n = 0;
		const id = window.setInterval(() => {
			n += 1;
			setCount(Math.min(visible.length, n * 3));
			if (n * 3 >= visible.length) window.clearInterval(id);
		}, 50);
		return () => window.clearInterval(id);
	}, [step, visible.length]);
	const start = (play) => {
		setOnboarded();
		if (play && visible[0]) playIds(visible.map((track) => track.id), 0, false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col px-5 pt-8 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, { className: "size-12 rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 px-2 text-sm text-muted",
					onClick: () => start(false),
					children: t(locale, "skip")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-wide text-muted uppercase",
				children: [
					t(locale, "onboardingStep"),
					" ",
					step + 1,
					" / 4"
				]
			}),
			step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-medium",
						children: t(locale, "obWelcome")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: t(locale, "tagline")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								title: t(locale, "obCard1t"),
								body: t(locale, "obCard1b")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								title: t(locale, "obCard2t"),
								body: t(locale, "obCard2b")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								title: t(locale, "obCard3t"),
								body: t(locale, "obCard3b")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						className: "mt-auto w-full",
						onClick: () => setStep(1),
						children: t(locale, "next")
					})
				]
			}) : null,
			step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-medium",
						children: t(locale, "obMusic")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: t(locale, "obMusicB")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
							onClick: () => start(true),
							children: t(locale, "obDemo")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostButton, {
							onClick: () => {
								requestAudioFiles();
								setStep(2);
							},
							children: t(locale, "obFiles")
						})]
					})
				]
			}) : null,
			step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-medium",
						children: t(locale, "obDevice")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-3xl bg-surface p-5 ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tier === 0 ? t(locale, "obCore") : tier === 1 ? t(locale, "obEnhanced") : t(locale, "obStudio") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: [
								probe.cores,
								" cores",
								probe.ramGb ? ` · ${probe.ramGb} GB` : ""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						className: "mt-auto w-full",
						onClick: () => setStep(3),
						children: t(locale, "next")
					})
				]
			}) : null,
			step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-1 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-medium",
						children: t(locale, "obScan")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-5xl font-medium tabular-nums",
						children: count
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t(locale, "tracks")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						className: "mt-auto w-full",
						onClick: () => start(false),
						children: t(locale, "obStart")
					})
				]
			}) : null
		]
	});
}
function Card({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-surface p-4 ring-1 ring-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: body
		})]
	});
}
var SplitComponent = KlangyuApp;
//#endregion
export { SplitComponent as component };
