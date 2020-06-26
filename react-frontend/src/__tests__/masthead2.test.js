import React from 'react';
import ReactDOM from 'react-dom';
import Masthead2 from '../components/Masthead2';

import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Masthead2 renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Masthead2 image="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" heading="Nutella" />, div);
});

it("Masthead2 render correctly", () => {
  const { getByRole } = render(<Masthead2 image="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" heading="Nutella" />);
  expect(getByRole('heading')).toHaveTextContent("Nutella");
});

it("Masthead2 matches snapshot", () => {
  const tree = renderer.create(<Masthead2 image="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" heading="Nutella" />).toJSON();
  expect(tree).toMatchSnapshot();
})
