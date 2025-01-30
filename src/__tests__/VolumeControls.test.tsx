import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControl Tests", () => {
  const mockOnVolumeChange = vi.fn();

  test("volume bar renders with default value", () => {
    const { container } = render(
      <VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container).toMatchSnapshot();
  });

  test("volume bar renders correctly with muted volume (0)", () => {
    const { container } = render(
      <VolumeControls volume={0} onVolumeChange={mockOnVolumeChange} />,
    );
    expect(container).toMatchSnapshot();
  });

  test("volume adjustment when onVolumeChange is called using slider element", () => {
    const { getAllByRole } = render(
      <VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />,
    );

    const sliders = getAllByRole("slider");
    const testslider = sliders[0]; // Pick first slider because it was picking up multiple
    fireEvent.change(testslider, { target: { value: "95" } });
    expect(mockOnVolumeChange).toHaveBeenCalledWith(95);
  });

  test("muting works as intended", () => {
    const { getAllByRole } = render(
      <VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />,
    );
    const sliders = getAllByRole("slider");
    const testslider = sliders[0];
    fireEvent.change(testslider, { target: { value: "0" } });
    expect(mockOnVolumeChange).toHaveBeenCalledWith(0);
  });
});
