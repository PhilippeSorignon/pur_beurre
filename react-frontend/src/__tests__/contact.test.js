import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../components/Contact';

import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Contact renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
});

it("Contact renders the heading properly", () => {
  const { getByRole } = render(<Contact />);
  expect(getByRole('heading')).toHaveTextContent("Contactez-nous !");
});

it("Contact matches snapshot", () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
})
