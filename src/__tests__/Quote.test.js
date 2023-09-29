import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Quote from '../components/Quote'; // Update the import path as needed

// Mock the fetch function to simulate API responses
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{quote: 'Test Quote', author: 'Test Author'}]),
      ok: true,
    })
  );
});

afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

test('renders loading message initially', async () => {
  render(<Quote />);
  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();
});

test('fetches and displays a quote', async () => {
  render(<Quote />);

  // Wait for the loading state to change
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  // Check if the quote and author are displayed
  expect(screen.getByText("Today's quote")).toBeInTheDocument();
  expect(screen.getByText('Test Quote')).toBeInTheDocument();
  expect(screen.getByText('Test Author')).toBeInTheDocument();
});

test('handles API error', async () => {
  // Mock fetch to simulate an error response
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
      ok: false,
      statusText: 'Failed to fetch data',
    })
  );

  render(<Quote />);

  // Wait for the loading state to change
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  // Check if the error message is displayed
  expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
});

test('handles no data found', async () => {
  // Mock fetch to simulate no data found
  global.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
      ok: true,
    })
  );

  render(<Quote />);

  // Wait for the loading state to change
  await waitFor(() => {
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  // Check if the error message is displayed
  expect(screen.getByText('Error: No data found')).toBeInTheDocument();
});
