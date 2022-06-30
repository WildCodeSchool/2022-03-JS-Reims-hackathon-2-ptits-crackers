import "./envrai.css";

export default function Note() {
  return (
    <div className="notepad">
      <div className="top" />
      <div className="papier" contentEditable="true">
        Bonjour, je suis un papier. Clique pour écrire une note.
      </div>
    </div>
  );
}
