import React from "react";
import { render } from "@testing-library/react";
import ImageUpload from "./ImageUpload";

describe("ImageUpload tests", () => {
  it("should render", () => {
    expect(render(<ImageUpload />)).toBeTruthy();
  });
});
