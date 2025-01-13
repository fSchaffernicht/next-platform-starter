'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [start, setStart] = useState(false);
    return (
        <main className="container m-auto w-screen">
            <div className="p-6">
                <h1 className="text-6xl">16.01.1990</h1>
                <h2>
                    Mein Süßer Krümel, heute am 16. Januar feierst du deinen Geburtstag. Ich liebe dich sehr 😘 und
                    wünsche dir einen wunderschönen Tag! 🎉🎈🎂
                </h2>
            </div>
            {!start ? (
                <div className="text-center">
                    <Button onClick={() => setStart(true)}>Loslegen!</Button>
                </div>
            ) : (
                <Countdown>
                    <Movies />
                    <WhoElse />
                    <Present />
                    <Weather />
                </Countdown>
            )}
        </main>
    );
}

function Present() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-pink-800 p-6 w-screen">
            <h2 className="font-bold text-4xl mb-6">Geschenk 🎁 öffnen!</h2>
            <Button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Öffnen' : 'Schließen'}</Button>
            {isOpen && (
                <div className="mt-6">
                    <Countdown time={10}>
                        <div className="text-center font-bold text-2xl">
                            Gutschein für eine neue Brille für bis zu 500 EUR! 🤓{' '}
                        </div>
                    </Countdown>
                </div>
            )}
        </div>
    );
}

function WhoElse() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-slate-800 p-6 w-screen">
            <h2 className="font-bold text-4xl mb-6">Wer feiert heute noch Geburtstag? 🧐</h2>
            <Button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Öffnen' : 'Schließen'}</Button>
            {isOpen && (
                <ul className="mt-6">
                    <li className="mb-6">
                        <h3 className="font-bold">Gregor Gysi</h3>
                        <div>
                            deutscher Rechtsanwalt, Politiker (Die Linke, ehemals SED und PDS), Autor und Moderator.
                            2020 wurde er zum außenpolitischen Sprecher der Fraktion Die Linke im Bundestag ernannt.
                        </div>
                        <div>
                            <small>Geboren am: 16. Januar 1948, ist 76 Jahre alt.</small>
                        </div>
                    </li>
                    <li className="mb-6">
                        <h3 className="font-bold">Marilyn Horne</h3>
                        <div>US-amerikanische Opern- und Konzertsängerin</div>
                        <div>
                            <small>Geboren am: 16. Januar 1934, ist 90 Jahre alt.</small>
                        </div>
                    </li>
                    <li className="mb-6">
                        <h3 className="font-bold">John Carpenter</h3>
                        <div>
                            US-amerikanischer Regisseur, Drehbuchautor, Produzent, Schauspieler und Filmmusikkomponist.
                            Mit Filmen wie Halloween – Die Nacht des Grauens (1978) oder Die Klapperschlange (1981)
                        </div>
                        <div>
                            <small>Geboren am: 16. Januar 1948, ist 76 Jahre alt.</small>
                        </div>
                    </li>
                    <li className="mb-6">
                        <h3 className="font-bold">Wei Wei</h3>
                        <div>chinesischer Essayist und Romanschriftsteller</div>
                        <div>
                            <small>
                                Geboren am: 16. Januar 1920. Gestorben am: 24. August 2008, wurde 88 Jahre alt.
                            </small>
                        </div>
                    </li>
                    <li className="mb-6">
                        <h3 className="font-bold">Rösli Streiff</h3>
                        <div>schweizerische Skirennfahrerin</div>
                        <div>
                            <small>
                                Geboren am: 16. Januar 1901. Gestorben am: 7. Februar 1997, wurde 96 Jahre alt.
                            </small>
                        </div>
                    </li>
                    <li className="mb-6">
                        <h3 className="font-bold">Kate Moss</h3>
                        <div>britisches Fotomodell</div>
                        <div>
                            <small>Geboren am: 16. Januar 1974, ist 50 Jahre alt.</small>
                        </div>
                    </li>
                    <li className="mb-6">
                        <h3 className="font-bold">Paul Singer</h3>
                        <div>deutscher Fabrikant, SPD-Mitbegründer, Vorsitzender und Reichstagsabgeordneter</div>
                        <div>
                            <small>
                                Geboren am: 16. Januar 1844. Gestorben am: 31. Januar 1911, wurde 67 Jahre alt.
                            </small>
                        </div>
                    </li>
                    <li className="mb-6">
                        <h3 className="font-bold">Mario Moretti</h3>
                        <div>italienischer Terrorist</div>
                        <div>
                            <small>Geboren am: 16. Januar 1946, ist 78 Jahre alt.</small>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    );
}

function Weather() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-indigo-900 p-6 w-screen">
            <h2 className="font-bold text-4xl mb-6">Wie war das Wetter am 16.01.1990 </h2>
            <Button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Öffnen' : 'Schließen'}</Button>
            {isOpen && (
                <>
                    <div className="my-6">
                        <h2>💦 🌧️</h2>
                    </div>
                    <ul>
                        <li className="mb-2">Berlin: 11°C - wolkig mit etwas Regen</li>
                        <li className="mb-2">Bremen: 12°C - bedeckt mit etwas Regen</li>
                        <li className="mb-2">Dresden: 10°C - bedeckt mit etwas Regen</li>
                        <li className="mb-2">Düsseldorf: 11°C - bedeckt mit etwas Regen</li>
                        <li className="mb-2">Erfurt-Weimar: 9°C - bedeckt</li>
                        <li className="mb-2">Hamburg-Fuhlsbüttel: 12°C - bedeckt mit etwas Regen</li>
                        <li className="mb-2">Hannover: 11°C - bedeckt mit etwas Regen</li>
                        <li className="mb-2">Kiel-Holtenau: 11°C - wolkig mit etwas Regen</li>
                        <li className="mb-2">Magdeburg: 11°C - bedeckt mit etwas Regen</li>
                        <li className="mb-2">Saarbrücken/Ensheim: 6°C - bedeckt mit etwas Regen</li>
                        <li className="mb-2">Schwerin: 11°C - stark bewölkt mit etwas Regen</li>
                        <li className="mb-2">Stuttgart/Echterdingen: 8°C - wolkig</li>
                    </ul>
                </>
            )}
        </div>
    );
}

function Movies() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-emerald-900 p-6 w-screen">
            <h2 className="font-bold text-4xl mb-6">Welche Filme sind im Jahr 1990 veröffentlicht worden?</h2>
            <Button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Öffnen' : 'Schließen'}</Button>
            {isOpen && (
                <ul className="mt-6">
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Ghost</li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Home Alone</li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Pretty Woman</li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Dances with Wolves</li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Total Recall</li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">
                        Back to the Future Part III
                    </li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Die Hard 2</li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Presumed Innocent</li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">
                        Teenage Mutant Ninja Turtles
                    </li>
                    <li className="mb-4 font-bold text-yellow-300 text-center uppercase">Kindergarten Cop</li>
                </ul>
            )}
        </div>
    );
}

function Button({ ...props }) {
    return <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-300 transition-all" {...props} />;
}

const Countdown = ({ children, time = 3 }) => {
    const [count, setCount] = useState(time);
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
            return () => clearTimeout(timer); // Cleanup on component unmount
        } else {
            setShowChildren(true); // Reveal children when count reaches 0
        }
    }, [count]);

    return (
        <>
            {count > 0 && <div className="text-4xl text-center font-bold">{count}</div>}
            {showChildren && <div>{children}</div>}
        </>
    );
};
