import { render, screen, fireEvent } from '@testing-library/react';
import Searchsection from './Searchsection';

describe('Searchsection', () => {
  test('should filter data based on keyword', () => {
    const getDATA = [
      { caption: 'Apple' },
      { caption: 'Banana' },
      { caption: 'Orange' },
    ];
    const setDataFilter = jest.fn();

    render(<Searchsection getDATA={getDATA} setDataFilter={setDataFilter} />);

    const inputField = screen.getByLabelText('Search');
    fireEvent.change(inputField, { target: { value: 'apple' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(setDataFilter).toHaveBeenCalledWith([{ caption: 'Apple' }]);
  });

  test('should not filter data if inputField is empty', () => {
    const getDATA = [
      { caption: 'Apple' },
      { caption: 'Banana' },
      { caption: 'Orange' },
    ];
    const setDataFilter = jest.fn();

    render(<Searchsection getDATA={getDATA} setDataFilter={setDataFilter} />);

    const inputField = screen.getByLabelText('Search');
    fireEvent.change(inputField, { target: { value: '' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(setDataFilter).not.toHaveBeenCalled();
  });

  test('should not filter data if getDATA is empty', () => {
    const getDATA = [];
    const setDataFilter = jest.fn();

    render(<Searchsection getDATA={getDATA} setDataFilter={setDataFilter} />);

    const inputField = screen.getByLabelText('Search');
    fireEvent.change(inputField, { target: { value: 'apple' } });

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(setDataFilter).not.toHaveBeenCalled();
  });
});