export default function Stats({
  numberOfWords,
  numberOfCharacters,
  igCharsLeft,
  fbCharsLeft,
}) {
  return (
    <section className="stats">
      <Stat label="Words" number={numberOfWords} />
      <Stat label="Characters" number={numberOfCharacters} />
      <Stat label="Instagram" number={igCharsLeft} />
      <Stat label="Facebook" number={fbCharsLeft} />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
