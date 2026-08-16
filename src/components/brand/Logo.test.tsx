import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders the primary wordmark with accessible alt text by default", () => {
    render(<Logo />);
    const img = screen.getByRole("img", { name: "aanuni" });
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("aanuni-logo.png"),
    );
  });

  it("renders the reversed variant for dark surfaces", () => {
    render(<Logo variant="reversed" />);
    const img = screen.getByRole("img", { name: "aanuni" });
    expect(img).toHaveAttribute(
      "src",
      expect.stringContaining("aanuni-logo-reversed.png"),
    );
  });

  it("derives width from the fixed aspect ratio", () => {
    render(<Logo height={40} />);
    const img = screen.getByRole("img", { name: "aanuni" }) as HTMLImageElement;
    expect(img.width).toBeCloseTo(169, 0);
  });
});
