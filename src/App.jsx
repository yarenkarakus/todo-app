import Header from "./components/Header";
import Content from "./components/Content/index";
import Footer from "./components/Footer";
import { ToDoProvider } from "./contexts/ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </ToDoProvider>
  );
}

export default App;
