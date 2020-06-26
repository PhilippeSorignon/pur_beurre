import React from 'react';
import ReactDOM from 'react-dom';
import About from '../components/About';

import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it("About renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
});

it("About renders the heading correctly", () => {
  const { getByRole } = render(<About />);
  expect(getByRole('heading')).toHaveTextContent("Colette et Remy");
})

it("About matches snapshot", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
})
