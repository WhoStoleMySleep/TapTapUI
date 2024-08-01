import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Input } from "./Input";

afterEach(cleanup);

describe("Component: Input", () => {
  const children =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  it("Value Occupancy", () => {
    const { getByDisplayValue }: any = render(<Input>{children}</Input>);

    expect(getByDisplayValue(children)).toBeTruthy();
  });

  describe("Snapshots", () => {
    describe("Snapshots: type", () => {
      it("Snapshot: Text type", () => {
        const inputText: any = render(<Input type={"text"}>{children}</Input>);

        expect(inputText).toMatchSnapshot();
      });
    });

    describe("Snapshots: className", () => {
      it("Snapshot: short className", () => {
        const inputShortClassName: any = render(
          <Input className={"n"}>{children}</Input>,
        );

        expect(inputShortClassName).toMatchSnapshot();
      });

      it("Snapshot: long className", () => {
        const inputLongClassName: any = render(
          <Input className={children}>{children}</Input>,
        );

        expect(inputLongClassName).toMatchSnapshot();
      });
    });

    describe("Snapshots: UI", () => {
      it("Snapshot: Standard", () => {
        const inputStandard: any = render(
          <Input UI={"standard"}>{children}</Input>,
        );

        expect(inputStandard).toMatchSnapshot();
      });

      it("Snapshot: Primary", () => {
        const inputPrimary: any = render(
          <Input UI={"primary"}>{children}</Input>,
        );

        expect(inputPrimary).toMatchSnapshot();
      });
    });

    describe("Snapshots: noDarkMode", () => {
      it("Snapshot: noDarkMode - false", () => {
        const inputStandard: any = render(
          <Input noDarkMode={false}>{children}</Input>,
        );

        expect(inputStandard).toMatchSnapshot();
      });

      it("Snapshot: noDarkMode - true", () => {
        const inputPrimary: any = render(
          <Input noDarkMode={true}>{children}</Input>,
        );

        expect(inputPrimary).toMatchSnapshot();
      });
    });
  });
});
