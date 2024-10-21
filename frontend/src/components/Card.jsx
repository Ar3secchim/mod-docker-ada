export default function Card({ events }) {
  return (
    <>
      {events.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>Data: {new Date(event.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
