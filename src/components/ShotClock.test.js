import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShotClock from './ShotClock';
import '@testing-library/jest-dom'

const START_BUTTON_LABEL = 'START';
const STOP_BUTTON_LABEL = 'STOP';
const RESET_BUTTON_LABEL = 'RESET';
const DEFAULT_SECONDS = 24;

jest.spyOn(global, 'setInterval');

describe('ShotClock', () => {
    beforeEach(() => {
        render(<ShotClock/>);
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
      })      

    it('should initialize shot clock properly', () => {
        expect(screen.getByText(`${DEFAULT_SECONDS}`)).toBeTruthy();
        expect(screen.getByText(START_BUTTON_LABEL)).toBeTruthy();
        expect(screen.getByText(RESET_BUTTON_LABEL)).toBeTruthy();
    })

    it('should toggle START/STOP when button is clicked', () => {
        fireEvent.click(screen.getByText(START_BUTTON_LABEL));
        expect(screen.getByText(STOP_BUTTON_LABEL)).toBeTruthy();
        fireEvent.click(screen.getByText(STOP_BUTTON_LABEL));
        expect(screen.getByText(START_BUTTON_LABEL)).toBeTruthy();
    })

    it('should reset shot clock when RESET button is clicked', () => {
        fireEvent.click(screen.getByText(START_BUTTON_LABEL));
        expect(screen.getByText(STOP_BUTTON_LABEL)).toBeTruthy();
        fireEvent.click(screen.getByText(RESET_BUTTON_LABEL));
        expect(screen.getByText(`${DEFAULT_SECONDS}`)).toBeTruthy();
        expect(screen.getByText(START_BUTTON_LABEL)).toBeTruthy();
    })

    it('should count down when START button is clicked', () => {
        fireEvent.click(screen.getByText(START_BUTTON_LABEL));
        expect(setInterval).toHaveBeenCalled();
    })
})