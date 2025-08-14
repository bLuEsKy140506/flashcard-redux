// src/features/quizzes/quizzesSlice.js
import { createSlice } from "@reduxjs/toolkit";

import { addQuizIdToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      console.log(action.payload);
      state.quizzes[id] = {
        id,
        name,
        topicId,
        cardIds
      };
    },
    addCardIdToQuiz: (state, action) => {
      const { quizId, cardId } = action.payload;
      state.quizzes[quizId].cardIds.push(cardId);
    }
  }
});

export const { addQuiz, addCardIdToQuiz } = quizzesSlice.actions;

// Thunk: Create a quiz and attach it to a topic
export const createQuiz = (quiz) => (dispatch) => {
  dispatch(addQuiz(quiz));
  dispatch(addQuizIdToTopic({ topicId: quiz.topicId, quizId: quiz.id }));
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;
