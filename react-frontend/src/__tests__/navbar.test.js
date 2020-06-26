import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';

import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import renderer from "react-test-renderer";
import { LocalStorageMock } from '@react-mock/localstorage';

afterEach(cleanup);

const renderComponent = () =>
  render(
    <LocalStorageMock items={{ authToken: 'token' }}>
      <Navbar />
    </LocalStorageMock>
  );


it("Navbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
});

it("Navbar display login when user is anonymous", () => {
  const { getByText } = render(<Navbar />);

  expect(getByText('Connexion')).toBeTruthy();
});

it("Navbar matches snapshot", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
