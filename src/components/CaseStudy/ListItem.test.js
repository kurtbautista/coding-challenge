// /* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListItem from "./ListItem";

const history = createMemoryHistory();
const imgUrl = `/assets/thumb.png`;
const url = `/1002`;
const title = "Case Study";

test("Render <ListItem /> Component", () => {
  history.push(url);
  const { getByTestId } = render(
    <Router history={history}>
      <ListItem title={title} url={url} imgUrl={imgUrl} />
    </Router>
  );
  expect(getByTestId("title")).not.toBeEmpty();
  expect(getByTestId("title").textContent).toBe(title);
});

test("Rendering and navigating single page", () => {
  history.push(url);
  const { getByText, getByTestId, getByAltText } = render(
    <Router history={history}>
      <ListItem title={title} url={url} imgUrl={imgUrl} />
    </Router>
  );

  fireEvent.click(getByText(/view case study/i));
  expect(getByTestId("title")).toHaveTextContent(/case study$/i);
  expect(getByAltText(title)).toHaveAttribute("src", imgUrl);
});
