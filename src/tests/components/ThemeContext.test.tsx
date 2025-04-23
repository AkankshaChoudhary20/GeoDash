import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import React from "react";

// Dummy component to use the theme context
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-status">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Helper function to render components within ThemeProvider
const renderWithThemeProvider = (ui: React.ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe("Theme Context", () => {
  afterEach(() => {
    // Clean up the localStorage after each test
    localStorage.clear();
  });

  test("should load theme from localStorage", () => {
    // Mock localStorage
    localStorage.setItem("theme", "dark");

    renderWithThemeProvider(<ThemeToggleButton />);

    // Check if the theme loaded from localStorage is applied
    expect(screen.getByTestId("theme-status")).toHaveTextContent("dark");
  });

  test("should toggle theme between light and dark", () => {
    renderWithThemeProvider(<ThemeToggleButton />);

    // Initially, it should be light
    expect(screen.getByTestId("theme-status")).toHaveTextContent("light");

    // Simulate theme toggle to dark
    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(screen.getByTestId("theme-status")).toHaveTextContent("dark");

    // Simulate theme toggle back to light
    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(screen.getByTestId("theme-status")).toHaveTextContent("light");
  });

  test("should update localStorage on theme toggle", () => {
    renderWithThemeProvider(<ThemeToggleButton />);

    // Initially, it should be light
    expect(localStorage.getItem("theme")).toBe("light");

    // Toggle to dark
    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(localStorage.getItem("theme")).toBe("dark");

    // Toggle back to light
    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
