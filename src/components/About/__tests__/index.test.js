import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // first Test
    it('renders', () => {
        render(<About />)       
    });
    
    // Second test    
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render (<About />)
        expect(asFragment()).toMatchSnapshot();
        
    })
     
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  }) 

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      // Assert
    });
  })