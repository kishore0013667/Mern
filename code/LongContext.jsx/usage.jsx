import { useContext } from "react";
import { LangContext } from "./LangContext";

function LanguageComponent() 
{
const { lang, setLang } = useContext(LangContext);

return (
    <div>
    <h1>{lang === "en" ? "Hello" : "Vanakkam"}</h1>

    <button onClick={() =>
        setLang(lang === "en" ? "ta" : "en")
    }>
        Change Language
    </button>
    </div>
);
}