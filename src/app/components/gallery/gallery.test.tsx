import React from "react";
import { render } from "../../utils/render";
import { Gallery } from "./gallery";
import { waitFor } from "@testing-library/react";

describe("Gallery", () => {
  // mocks image fetch on component mount
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        images: [{ fileName: "image1.jpg", url: "/image1.jpg" }]
      }),
    })
  ) as jest.Mock;

  it("renders without crashing", async () => {
    render(<Gallery />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  });
});
