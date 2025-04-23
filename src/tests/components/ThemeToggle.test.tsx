import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";
import "@testing-library/jest-dom";

describe("ThemeToggle", () => {
  it("should toggle theme text when clicked", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");

    // Initially, it should show "🌙 Dark" (assuming light is default)
    expect(button).toHaveTextContent("🌙 Dark");

    // Click to toggle theme
    fireEvent.click(button);

    // After clicking, it should show "🌞 Light"
    expect(button).toHaveTextContent("🌞 Light");
  });
});
