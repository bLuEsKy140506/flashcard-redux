import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewTopicForm from "../components/NewFormTopic";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
// import Quiz from "../features/quizzes/Quiz";
// import Quizzes from "../features/quizzes/Quizzes";
import AppLayout from "./AppLayout";
import { useSelector } from "react-redux";


export default function App() {
  const topics = useSelector((state) => state.topics);
console.log("Current topics state:", topics);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="topics" element={<Topics />} />
          <Route path="topics/new" element={<NewTopicForm />} />
          <Route path="topics/:topicId" element={<Topic />} />
          {/* <Route path="quizzes" element={<Quizzes />} />
          <Route path="quizzes/new" element={<NewQuizForm />} />
          <Route path="quizzes/:quizId" element={<Quiz />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
