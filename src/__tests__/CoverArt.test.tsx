import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CoverArt from "../components/CoverArt";

describe("CoverArt Snapshot Tests", () => {
  test("displays generic image", () => {
    const { asFragment } = render(
      <CoverArt coverUrl="https://utfs.io/f/E9fJnaKtTy1bOclGsk1hB7xMLwUVFDiXypZukQrcnYbgdEv6" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("displays another album cover", () => {
    const { asFragment } = render(
      <CoverArt coverUrl="https://utfs.io/f/E9fJnaKtTy1ba1N97yFrtlodEaJI0m4wGY9KgyPiUvCf8hMp" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
