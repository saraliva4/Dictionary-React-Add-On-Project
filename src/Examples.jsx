export default function Examples(props) {
  if (props.examples) {
    return (
      <p>
        <strong>Example:</strong> {props.examples}
      </p>
    );
  } else {
    return null;
  }
}
