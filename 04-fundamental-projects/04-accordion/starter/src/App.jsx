import { useState } from "react";
import data from "./data";
import ListQuestion from "./ListQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    setActiveId(id);
  }
  return <main>
    <ListQuestion questions={questions}  activeId={activeId}  toggleQuestion={toggleQuestion}/>
    </main>;
};
export default App;
