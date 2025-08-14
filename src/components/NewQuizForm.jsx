// src/features/quizzes/NewQuizForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


import { createQuiz } from "../features/quizzes/quizzesSlice";
import { selectTopics } from "../features/topics/topicsSlice";


export default function NewQuizForm() {
  const [name, setName] = useState("");
  const [topicId, setTopicId] = useState("");
  
  const topics = useSelector(selectTopics);
  const dispatch = useDispatch();
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const cardIds = [];

    dispatch(createQuiz({ id, name, topicId, cardIds }));

   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Topic:
        <select
          value={topicId}
          onChange={(e) => setTopicId(e.target.value)}
          required
        >
          <option value="">Select a topic</option>
          {Object.values(topics).map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Create Quiz</button>
    </form>
  );
}
