const languageMap = {
    en: "Inglés",
    es: "Español",
    fr: "Francés",
    de: "Alemán",
    ja: "Japonés",
    ko: "Coreano",
    it: "Italiano",
    zh: "Chino",
    pt: "Portugués"
};

export function getLanguageMap(languageCode){
    return languageMap[languageCode] || "Idioma desconocido";
}