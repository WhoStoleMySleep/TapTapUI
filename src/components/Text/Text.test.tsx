import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Text } from "./Text";

afterEach(cleanup);

describe("Component: Text", () => {
  const children =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  it("Occupancy", () => {
    const { getByText }: any = render(<Text>{children}</Text>);

    expect(getByText(children)).toBeTruthy();
  });

  describe("UI Snapshots", () => {
    it("Snapshot: Standard", () => {
      const text: any = render(<Text UI={"standard"}>{children}</Text>);

      expect(text).toMatchSnapshot();
    });

    it("Snapshot: Primary", () => {
      const text: any = render(<Text UI={"primary"}>{children}</Text>);

      expect(text).toMatchSnapshot();
    });
  });
});
