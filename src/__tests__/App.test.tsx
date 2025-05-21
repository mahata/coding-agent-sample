import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders hello world message', () => {
    render(<App />);
    
    // Check if the heading with "Hello, world!" text is present
    const headingElement = screen.getByText(/hello, world!/i);
    expect(headingElement).toBeInTheDocument();
  });
});