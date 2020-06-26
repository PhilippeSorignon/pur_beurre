import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../components/Loader';

import { cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Loader renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader />, div);
});

it("Loader matches snapshot", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
})
