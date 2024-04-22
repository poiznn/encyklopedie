import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail';
import './App.css';
import {useEffect, useState} from "react";

const planets = [
    {

        name: "Merkur",
        description: "Merkur je Slunci nejbližší a současně i nejmenší planetou sluneční soustavy,[7] která dosahuje pouze o 40 % větší velikosti než pozemský Měsíc a je tak menší než Jupiterův měsíc Ganymed a Saturnův Titan.[8] Jeho oběžná dráha je ze všech planet nejblíže ke Slunci[9] a jeden oběh kolem Slunce trvá pouze 87,969 dne. Dráha Merkuru má největší výstřednost dráhy ze všech planet sluneční soustavy a nejmenší sklon rotační osy. Během dvou oběhů kolem Slunce dojde ke třem otočením kolem rotační osy. Perihélium jeho dráhy se stáčí ke Slunci o 43 vteřin za století; fenomén, který ve 20. století vysvětlil Albert Einstein obecnou teorií relativity.[10] Při pohledu ze Země dosahuje Merkur jasnosti mezi −2,0 až 5,5m, takže je viditelný i pouhým okem, ale jelikož se nevzdaluje od Slunce nikdy dále než na 28,3°, je velice těžko pozorovatelný. Nejlepší podmínky tak nastávají při soumraku či úsvitu než vyjde Slunce nad horizont.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg",
    },
    {
        name: "Venuše",
        description: "Venuše je druhá planeta od Slunce ve sluneční soustavě. Je pojmenovaná po římské bohyni lásky a krásy Venuši. Jedná se o jedinou planetu sluneční soustavy, která je pojmenována po ženě. Venuše je terestrická planeta, co do velikosti a hrubé skladby velmi podobná Zemi; někdy se proto nazývá „sesterskou planetou“ Země. Ačkoliv orbity všech ostatních planet jsou elipsami, orbita Venuše je jediná téměř kružnicí, se Sluncem pouze o 0,7 % mimo skutečný střed Venušiny oběžné dráhy. Okolo Slunce oběhne jednou za 224,7 pozemského dne. Protože je Venuše ke Slunci blíže než Země, je na obloze vždy zhruba ve stejné vzdálenosti od Slunce (největší elongace je 47,8°) a lze ji ze Země vidět jen před svítáním nebo po soumraku, kdy je i nejjasnější. Proto je Venuše někdy označována jako „jitřenka“ či „večernice“ a pokud se objeví, jde o zdaleka nejsilnější bodový zdroj světla na obloze po Slunci a Měsíci o magnitudě −4,6. Výjimečně lze Venuši pouhým okem spatřit i ve dne. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Venuspioneeruv.jpg",
    },
    {
        name: "Země",
        description: "Země je třetí planeta sluneční soustavy, zároveň největší terestrická planeta v soustavě a jediné planetární těleso, na němž je dle současných vědeckých poznatků potvrzen život. Země nejspíše vznikla před 4,6 miliardami let a krátce po svém vzniku získala svůj jediný přirozený satelit – Měsíc. Země obíhá kolem Slunce po téměř kružnicové dráze s velmi malou excentricitou. Země jako domovský svět lidstva má mnoho názvů v závislosti na národu, mezi nejznámější patří název latinského původu Terra, Tellus či řecký název Gaia. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Earth_Eastern_Hemisphere.jpg",

    },
    {
        name: "Mars",
        description: "Mars je čtvrtá planeta sluneční soustavy, druhá nejmenší planeta soustavy po Merkuru. Je pojmenována po římském bohu války Martovi. Jedná se o planetu terestrického typu, tj. má pevný horninový povrch pokrytý impaktními krátery, vysokými sopkami, hlubokými kaňony a dalšími útvary. Má dva malé měsíce nepravidelného tvaru pojmenované Phobos a Deimos. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg",
    },
    {
        name: "Jupiter",
        description: "Jupiter je největší planeta sluneční soustavy, v pořadí pátá od Slunce. Sluneční soustava je někdy popisována jako dvojsystém skládající se ze Slunce a Jupiteru jako hlavních dvou členů a dalších menších těles. Jupiter, Saturn, Uran, a Neptun jsou označovány jako plynní obři, či planety jupiterského typu. Jupiter má hmotnost přibližně jedné tisíciny Slunce, což je okolo dva a půl krát více než všechny ostatní planety sluneční soustavy dohromady. Planeta je pojmenována po římském bohu Jovovi (v 1. pádě Jupiter). Symbolem planety je stylizované znázornění božského blesku (v Unicode: ♃). Jupiter byl pozorován již od pradávna, při pohledu ze Země má Jupiter magnitudu −2,8, což z něj činí třetí nejjasnější objekt na noční obloze po Měsíci a Venuši (v některých případech se před Jupiter v jasnosti dostane Mars, když je v ideální pozici během svého oběhu vůči Zemi). ",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jupiter_Earth_Comparison.png",

    },
    {
        name: "Saturn",
        description: "Saturn je šestá, po Jupiteru druhá největší planeta sluneční soustavy. Planeta byla pozorována již starověkými astronomy a byla pojmenována po římském bohu Saturnovi, který byl obdobou řeckého boha Krona. Astronomický symbol pro Saturn je ♄. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Saturn_PIA06077.jpg",
    },
    {
        name: "Uran",
        description: "Uran je sedmá planeta od Slunce, třetí největší a čtvrtá nejhmotnější planeta ve sluneční soustavě. Řadí se mezi plynné obry a společně s Neptunem i mezi tzv. ledové obry. Jméno má po řeckém bohu Úranovi, bohu nebes. Symboly planety Uran jsou znak ♅ (užívaný v astrologii) nebo Astronomický symbol Uranu (užívaný v astronomii). I přes to, že je možné Uran za příznivých podmínek pozorovat pouhým okem na noční obloze, nebyl antickými astronomy rozpoznán jako planeta, ale byl považován za hvězdu kvůli malé rychlosti a slabé záři.[13] Objev Uranu ohlásil William Herschel 13. března 1781, čímž poprvé v moderní době posunul známé hranice sluneční soustavy. ",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Uranus_rings_and_moons.jpg",
    },
    {
        name: "Neptun",
        description: "Neptun je osmá a od Slunce nejvzdálenější planeta sluneční soustavy a řadí se mezi představitele plynných obrů.[18] S rovníkovým průměrem okolo 50 000 km spadá mezi menší plynné obry sluneční soustavy. Podobně jako u ostatních plynných obrů je možno přímo pozorovat pouze svrchní vrstvy atmosféry, ve kterých je vidět několik velkých temných skvrn připomínajících skvrny v atmosféře Jupiteru.[18] Neptun má charakteristicky modrou barvu, která je zapříčiněna množstvím metanu v atmosféře.[19][20]",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Neptune%2C_Earth_size_comparison_true_color.jpg"
    }

];

function App() {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setSelectedPlanet(planets[0]);
        }, 2000);
    }, []);

    function handlePlanetClick(planet) {
        setSelectedPlanet(planet);
    }

    return (
        <div className="App">
            <h1 className={"heading"}>Encyklopedie planet Sluneční soustavy</h1>
            <PlanetList planets={planets} onPlanetClick={handlePlanetClick} />
            {selectedPlanet && <PlanetDetail planet={selectedPlanet} />}
        </div>
    );
}

export default App;
