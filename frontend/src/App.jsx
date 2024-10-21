import { useEffect, useState } from "react";
import api from "../services/api";
import "./App.css";
import Card from "./components/Card";
import EventForm from "./components/EventForm";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get("/");
      setEvents(response.data);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
    }
  };

  const addEvent = async (event) => {
    try {
      const response = await api.post("/", event);
      setEvents([...events, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar evento:", error);
    }
  };
  return (
    <>
      <header className="header">
        <h1>Paginas de eventos</h1>
      </header>

      <section>
        <EventForm addEvent={addEvent} />
        <Card events={events} />
      </section>
    </>
  );
}

export default App;
