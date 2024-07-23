import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Title } from "./Title";

afterEach(cleanup);

describe("Component: Title", () => {
  const children =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  it("Occupancy", () => {
    const { getByText }: any = render(<Title>{children}</Title>);

    expect(getByText(children)).toBeTruthy();
  });

  it("Snapshot", () => {
    const title: any = render(<Title>{children}</Title>);

    expect(title).toMatchSnapshot();
  });
});
