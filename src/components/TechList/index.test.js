import React from "react";
import { render, fireEvent } from '@testing-library/react';
import TechList from "~/components/TechList/index";

describe('TechListComponent', () => {
    it('should be able to add new tech', () => {
        const { getByText, getByTestId, debug } = render(<TechList />);

        debug();

        fireEvent.click(getByText('Add'));

        debug();

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    });
});
