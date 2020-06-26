import React from 'react';
import ReactDOM from 'react-dom';
import Masthead from '../components/Masthead';

import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Masthead renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Masthead />, div);
});

it("Test if the link update on user entry", () => {
  const { getByLabelText, getByText } = render(<Masthead />);
  const searchInput = getByLabelText('produit');

  fireEvent.change(searchInput, { target: { value: "nutella" } })

  expect(getByText('Chercher')).toHaveAttribute("href", "search/nutella");
});

it("Masthead matches snapshot", () => {
  const tree = renderer.create(<Masthead />).toJSON();
  expect(tree).toMatchSnapshot();
})
