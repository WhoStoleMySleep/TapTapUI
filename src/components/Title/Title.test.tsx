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

  describe("Snapshots", () => {
    describe("UI Snapshots", () => {
      it("Snapshot: Standard", () => {
        const titleStandard: any = render(
          <Title UI={"standard"}>{children}</Title>,
        );

        expect(titleStandard).toMatchSnapshot();
      });

      it("Snapshot: Primary", () => {
        const titlePrimary: any = render(
          <Title UI={"primary"}>{children}</Title>,
        );

        expect(titlePrimary).toMatchSnapshot();
      });
    });

    describe("Level Snapshots", () => {
      describe("Snapshots: Level - Standard UI", () => {
        it("Snapshot: h1", () => {
          const titleH1: any = render(
            <Title UI={"standard"} Level={"h1"}>
              {children}
            </Title>,
          );

          expect(titleH1).toMatchSnapshot();
        });

        it("Snapshot: h2", () => {
          const titleH2: any = render(
            <Title UI={"standard"} Level={"h2"}>
              {children}
            </Title>,
          );

          expect(titleH2).toMatchSnapshot();
        });

        it("Snapshot: h3", () => {
          const titleH3: any = render(
            <Title UI={"standard"} Level={"h3"}>
              {children}
            </Title>,
          );

          expect(titleH3).toMatchSnapshot();
        });

        it("Snapshot: h4", () => {
          const titleH4: any = render(
            <Title UI={"standard"} Level={"h4"}>
              {children}
            </Title>,
          );

          expect(titleH4).toMatchSnapshot();
        });

        it("Snapshot: h5", () => {
          const titleH5: any = render(
            <Title UI={"standard"} Level={"h5"}>
              {children}
            </Title>,
          );

          expect(titleH5).toMatchSnapshot();
        });

        it("Snapshot: h6", () => {
          const titleH6: any = render(
            <Title UI={"standard"} Level={"h6"}>
              {children}
            </Title>,
          );

          expect(titleH6).toMatchSnapshot();
        });
      });

      describe("Snapshots: Level - Primary UI", () => {
        it("Snapshot: h1", () => {
          const titleH1: any = render(
            <Title UI={"primary"} Level={"h1"}>
              {children}
            </Title>,
          );

          expect(titleH1).toMatchSnapshot();
        });

        it("Snapshot: h2", () => {
          const titleH2: any = render(
            <Title UI={"primary"} Level={"h2"}>
              {children}
            </Title>,
          );

          expect(titleH2).toMatchSnapshot();
        });

        it("Snapshot: h3", () => {
          const titleH3: any = render(
            <Title UI={"primary"} Level={"h3"}>
              {children}
            </Title>,
          );

          expect(titleH3).toMatchSnapshot();
        });

        it("Snapshot: h4", () => {
          const titleH4: any = render(
            <Title UI={"primary"} Level={"h4"}>
              {children}
            </Title>,
          );

          expect(titleH4).toMatchSnapshot();
        });

        it("Snapshot: h5", () => {
          const titleH5: any = render(
            <Title UI={"primary"} Level={"h5"}>
              {children}
            </Title>,
          );

          expect(titleH5).toMatchSnapshot();
        });

        it("Snapshot: h6", () => {
          const titleH6: any = render(
            <Title UI={"primary"} Level={"h6"}>
              {children}
            </Title>,
          );

          expect(titleH6).toMatchSnapshot();
        });
      });
    });

    describe("Snapshots: className", () => {
      it("Snapshot: short className", () => {
        const titleClassName: any = render(
          <Title className={"t"}>{children}</Title>,
        );

        expect(titleClassName).toMatchSnapshot();
      });

      it("Snapshot: long className", () => {
        const titleClassName: any = render(
          <Title className={children}>{children}</Title>,
        );

        expect(titleClassName).toMatchSnapshot();
      });
    });

    describe("Snapshots: noDarkMode", () => {
      it("Snapshot: noDarkMode - false", () => {
        const titleNoDarkMode: any = render(
          <Title noDarkMode={false}>{children}</Title>,
        );

        expect(titleNoDarkMode).toMatchSnapshot();
      });

      it("Snapshot: noDarkMode - true", () => {
        const titleNoDarkMode: any = render(
          <Title noDarkMode={true}>{children}</Title>,
        );

        expect(titleNoDarkMode).toMatchSnapshot();
      });
    });
  });
});
