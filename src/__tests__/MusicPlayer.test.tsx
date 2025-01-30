import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect } from "vitest";
import MusicPlayer from "../components/MusicPlayer";
import { server } from "../__tests__/mocks";

describe("MusicPlayer API Tests", () => {
  test("fetches and displays the playlist", async () => {
    render(<MusicPlayer />);

    await waitFor(() => {
      expect(screen.getByText("Jambi")).toBeInTheDocument();
      expect(screen.getByText("Tool")).toBeInTheDocument();
    });

    expect(screen.getByText("Mr. Brightside")).toBeInTheDocument();
    expect(screen.getByText("The Killers")).toBeInTheDocument();
  });
});
