import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice"; // ✅ Import addTopic
// import addTopic

export default function NewTopicForm() {
    const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || icon.trim().length === 0) {
      return;
    }

    const id = uuidv4();

    // ✅ Dispatch the action to add a topic
    dispatch(
      addTopic({
        id,
        name,
        icon
      })
    );

    // ✅ Redirect to /topics
    navigate(ROUTES.topicsRoute());

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="center" type="submit">Add Topic</button>
      </form>
    </section>
  );
}
}