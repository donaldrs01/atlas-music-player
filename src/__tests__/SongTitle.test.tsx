import { render } from "@testing-library/react";
import SongTitle from "../components/SongTitle";
import { describe, test, expect } from "vitest";

describe("SongTitle Snapshot Tests", () => {
  test("renders a song title and artist", () => {
    const { asFragment } = render(<SongTitle title="Schism" artist="Tool" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders a longer song title and artist", () => {
    const { asFragment } = render(
      <SongTitle
        title="Carry on My Wayward Wayward Wayward Son"
        artist="NotKansas"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
