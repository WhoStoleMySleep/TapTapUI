import React from "react";
import { cleanup, render } from "@testing-library/react";
import { LinkTo } from "./LinkTo";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

describe("Component: LinkTo", () => {
  const children =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  it("Occupancy", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"standard"} to="/test">
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    expect(getByText(children)).toBeTruthy();
  });

  it("Snapshot: Standard", () => {
    const link: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"standard"} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    expect(link.getByText(children)).toBeTruthy();

    expect(link).toMatchSnapshot();
  });

  it("Snapshot: Primary & Active Primary", () => {
    const link: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"primary"} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );
    const linkActive: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"primary"} active={true} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    // expect(link.getByText(children)).toBeTruthy();
    // expect(linkActive.getByText(children)).toBeTruthy();

    expect(link).toMatchSnapshot();
    expect(linkActive).toMatchSnapshot();
  });

  it("Snapshot: Button And ButtonPrimary & Active Button And Active ButtonPrimary", () => {
    const linkButton: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button"} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );
    const linkButtonPrimary: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button--primary"} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    const linkButtonActive: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button"} active={true} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );
    const linkButtonPrimaryActive: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button--primary"} active={true} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    // expect(linkButton.getByText(children)).toBeTruthy();
    // expect(linkButtonPrimary.getByText(children)).toBeTruthy();
    // expect(linkButtonActive.getByText(children)).toBeTruthy();
    // expect(linkButtonPrimaryActive.getByText(children)).toBeTruthy();

    expect(linkButton).toMatchSnapshot();
    expect(linkButtonPrimary).toMatchSnapshot();
    expect(linkButtonActive).toMatchSnapshot();
    expect(linkButtonPrimaryActive).toMatchSnapshot();
  });

  it("Snapshot: ButtonRed & Active ButtonRed", () => {
    const linkButton: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button--red"} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    const linkButtonActive: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button--red"} active={true} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    // expect(linkButton.getByText(children)).toBeTruthy();
    // expect(linkButtonActive.getByText(children)).toBeTruthy();

    expect(linkButton).toMatchSnapshot();
    expect(linkButtonActive).toMatchSnapshot();
  });

  it("Snapshot: ButtonBlue & Active ButtonBlue", () => {
    const linkButton: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button--blue"} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    const linkButtonActive: any = render(
      <MemoryRouter initialEntries={["/"]}>
        <LinkTo type={"button--blue"} active={true} to={"/"}>
          {children}
        </LinkTo>
      </MemoryRouter>,
    );

    // expect(linkButton.getByText(children)).toBeTruthy();
    // expect(linkButtonActive.getByText(children)).toBeTruthy();

    expect(linkButton).toMatchSnapshot();
    expect(linkButtonActive).toMatchSnapshot();
  });
});
