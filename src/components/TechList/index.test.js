import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import TechList from "~/components/TechList/index";
import { addTech } from '~/store/modules/techs/actions';

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

    it('should be able to add new tech', () => {
        const { getByTestId, getByLabelText } = render(<TechList />)
        const dispatch = jest.fn();
        const value = 'Node.js';

        useDispatch.mockReturnValue(dispatch);

        // Fill input and submit its form
        fireEvent.change(getByLabelText('Tech'), { target: { value: value } });
        fireEvent.submit(getByTestId('tech-form'));

        // Verify if dispatch has been fired with given params
        expect(dispatch).toHaveBeenCalledWith(addTech(value));
    });
});
