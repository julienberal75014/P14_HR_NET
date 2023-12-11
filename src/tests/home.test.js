import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "../components/dropdown";
import DateTimePicker from "../components/dateTimePicker";
import { Modal } from "modal-plugin-jbdv/dist/index.js";

describe('Dropdown', () => {
    test('Should render without crash', async () => {
        render(<Dropdown />)
    })
})

describe('DateTimePicker', () => {
    test('Should render without crash', async () => {
        render(<DateTimePicker />)
    })
})

describe('Modal', () => {
    test('Should render without crash', async () => {
        render(<Modal />)
    })
})
