import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TechList from "~/components/TechList/index";

describe('TechListComponent', () => {
    it('should be able to add new tech', () => {
        const { getByText, getByTestId } = render(<TechList />);

        fireEvent.click(getByText('Add'));

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    });
});
