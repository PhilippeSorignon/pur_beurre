import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../components/Alert';

import { render, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Alert renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Alert type="danger" message="Bonjour" />, div);
});

it("Alert render correctly", () => {
  const { getByRole } = render(<Alert type="danger" message="Bonjour" />);
  expect(getByRole('alert')).toHaveTextContent("Bonjour");
});

it("Alert have the right class", () => {
  const { getByRole } = render(<Alert type="danger" message="Bonjour" />);
  expect(getByRole('alert')).toHaveClass("alert-danger");
});

it("Alert matches snapshot", () => {
  const tree = renderer.create(<Alert type="danger" message="Bonjour" />).toJSON();
  expect(tree).toMatchSnapshot();
})
