import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';

import { cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Footer renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

it("Footer matches snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
})
