import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('renders a button', () => {
	const content = 'Test button';

	render(<Button onClick={() => {
	}}>{content}</Button>);

	const linkElement = screen.getByText(content, {
		selector: 'button',
	});

	expect(linkElement).toBeInTheDocument();
});

test('test click event', () => {
	const content = 'Test button';

	const handleClick = jest.fn();

	render(<Button onClick={handleClick}>{content}</Button>);

	fireEvent.click(screen.getByText(content));

	expect(handleClick).toHaveBeenCalledTimes(1)
});