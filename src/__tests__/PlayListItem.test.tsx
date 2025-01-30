import { render } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem";
import { describe, test, expect, vi } from "vitest";

describe("PlayListItem Snapshot Tests", () => {
  const mockOnClick = vi.fn();

  test("correctly displays title, artist and length of current track", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Trains"
        artist="Porcupine Tree"
        length={257}
        isPlaying={false}
        onClick={mockOnClick}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays correct song information for another song", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Goliath"
        artist="Karnivool"
        length={331}
        isPlaying={false}
        onClick={mockOnClick}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays a song with no artist provided", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Blue Sky"
        length={200}
        isPlaying={false}
        onClick={mockOnClick}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays a song with no length provided", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Comfortably Numb"
        artist="Pink Floyd"
        isPlaying={true}
        onClick={mockOnClick}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
