import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TechList from "~/components/TechList/index";

describe('TechListComponent', () => {
    it('should be able to add new tech', () => {
        // Render component
        const { getByText, getByTestId, getByLabelText } = render(<TechList />);
        const value = 'Node.js';

        // Fill input with some value
        fireEvent.change(getByLabelText('Tech'), { target: { value: value } });

        // Submit form
        fireEvent.submit(getByTestId('tech-form'));

        // Verify if item has been added on the list
        expect(getByTestId('tech-list')).toContainElement(getByText(value));

        // Verify if input has been reseted
        expect(getByLabelText('Tech')).toHaveValue('');
    });
});
