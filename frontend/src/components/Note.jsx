import "./Note.css";

export default function Note() {
  return (
    <div className="notepad">
      <div className="top" />
      <div className="paper" contentEditable="true">
        Hello, this is a paper. Click to write your message.
      </div>
    </div>
  );
}
