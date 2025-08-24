import React from "react";
import { render } from "@testing-library/react";
import { Gallery } from "./gallery";

describe("Gallery", () => {
  it("renders without crashing", () => {
    render(<Gallery />);
  });
});
