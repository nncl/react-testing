import React from "react";
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import TechList from "~/components/TechList/index";

jest.mock('react-redux');

describe('TechListComponent', () => {
    it('should render tech list', () => {
        // Mock state from redux
        useSelector.mockImplementation(cb => cb({
            techs: ['Node.js', 'ReactJS']
        }));

        // Render component
        const { getByTestId, getByText } = render(<TechList />);

        // Verify if list contains values
        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    });
});
