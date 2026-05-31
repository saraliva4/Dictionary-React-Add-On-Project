import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <Examples examples={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
