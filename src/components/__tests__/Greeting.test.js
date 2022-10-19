import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Greeting from '../Greeting';

it('renders without crashing', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [12, "00", "pm"];
  const div = document.createElement('div');
  ReactDOM.render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>, div)
})

it('renders greeting correctly for midnight', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [12, "00", "am"];
  const {getByTestId} = render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>)
  expect(getByTestId('greeting')).toHaveTextContent("Hello!");
})

it('renders greeting correctly for early morning', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [3, 30, "am"];
  const {getByTestId} = render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>)
  expect(getByTestId('greeting')).toHaveTextContent("Hello!");
})

it('renders greeting correctly for morning', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [5, "00", "am"];
  const {getByTestId} = render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>)
  expect(getByTestId('greeting')).toHaveTextContent("Good Morning");
})


it('renders greeting correctly for noon', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [12, "00", "pm"];
  const {getByTestId} = render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>)
  expect(getByTestId('greeting')).toHaveTextContent("Good Afternoon");
})

it('renders greeting correctly for afternoon', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [1, 15, "pm"];
  const {getByTestId} = render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>)
  expect(getByTestId('greeting')).toHaveTextContent("Good Afternoon");
})

it('renders greeting correctly for evening', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [5, "00", "pm"];
  const {getByTestId} = render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>)
  expect(getByTestId('greeting')).toHaveTextContent("Good Evening");
})

it('renders greeting correctly for night', () => {
  const currentDate = ["Monday", 1, "October"];
  const currentTime = [9, "00", "pm"];
  const {getByTestId} = render(<Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>)
  expect(getByTestId('greeting')).toHaveTextContent("Good Night");
})