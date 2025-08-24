import React from "react";
import { render } from "../../utils/render";
import { Gallery } from "./gallery";

describe("Gallery", () => {
  it("renders without crashing", () => {
    render(<Gallery />);
  });
});
