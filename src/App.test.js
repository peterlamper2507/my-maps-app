import { render, screen } from '@testing-library/react';
import App from './App';

test('renders map element', () => {
  const { container } = render(<App />);
  const mapElement = container.querySelector('gmp-map-3d');
  expect(mapElement).toBeInTheDocument();
});
