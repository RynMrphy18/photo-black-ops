import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

const { asFragment } = render(<About />);
expect(asFragment()).toMatchSnapshot();

afterEach(cleanup);

describe("About component", () => {
    it("renders", () => {
        render(<About />);
    });
    it("matches snapshot DOM node struture", () => {

    })
})