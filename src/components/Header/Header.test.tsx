import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Header } from "./Header";

afterEach(cleanup);

describe("Component: Header", () => {
  const children =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  it("Value Occupancy", () => {
    const { getByDisplayValue }: any = render(<Header>{children}</Header>);

    expect(getByDisplayValue(children)).toBeTruthy();
  });

  describe("Snapshots", () => {
    describe("Snapshots: type", () => {
      it("Snapshot: Text type", () => {
        const inputText: any = render(
          <Header type={"text"}>{children}</Header>,
        );

        expect(inputText).toMatchSnapshot();
      });
    });

    describe("Snapshots: className", () => {
      it("Snapshot: short className", () => {
        const inputShortClassName: any = render(
          <Header className={"n"}>{children}</Header>,
        );

        expect(inputShortClassName).toMatchSnapshot();
      });

      it("Snapshot: long className", () => {
        const inputLongClassName: any = render(
          <Header className={children}>{children}</Header>,
        );

        expect(inputLongClassName).toMatchSnapshot();
      });
    });

    describe("Snapshots: UI", () => {
      it("Snapshot: Standard", () => {
        const inputStandard: any = render(
          <Header UI={"standard"}>{children}</Header>,
        );

        expect(inputStandard).toMatchSnapshot();
      });

      it("Snapshot: Primary", () => {
        const inputPrimary: any = render(
          <Header UI={"primary"}>{children}</Header>,
        );

        expect(inputPrimary).toMatchSnapshot();
      });
    });

    describe("Snapshots: noDarkMode", () => {
      it("Snapshot: noDarkMode - false", () => {
        const inputStandard: any = render(
          <Header noDarkMode={false}>{children}</Header>,
        );

        expect(inputStandard).toMatchSnapshot();
      });

      it("Snapshot: noDarkMode - true", () => {
        const inputPrimary: any = render(
          <Header noDarkMode={true}>{children}</Header>,
        );

        expect(inputPrimary).toMatchSnapshot();
      });
    });
  });
});
