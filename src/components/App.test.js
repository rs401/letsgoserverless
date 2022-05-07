import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lets go', () => {
  render(<App />);
  const letsgoElement = screen.getByText(/lets go/i);
  expect(letsgoElement).toBeInTheDocument();
});
