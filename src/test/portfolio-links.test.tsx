import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "@/components/portfolio/Contact";
import { Credentials } from "@/components/portfolio/Credentials";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { projects } from "@/content/portfolio";

describe("Portfolio links from the owner's previous portfolio", () => {
  it("links the polling project to its GitHub repository", () => {
    render(<ProjectDetail project={projects[0]!} />);
    expect(screen.getByRole("link", { name: /repository/i }).getAttribute("href")).toBe(
      "https://github.com/Shailendra-Nutrino-Op/authentication-driven-polling-system",
    );
  });

  it("opens the resume from Google Drive", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /view resume/i }).getAttribute("href")).toBe(
      "https://drive.google.com/file/d/188R_E8MH3lpxfPSKyLgtHg0zDeyRsAiI/view?usp=sharing",
    );
  });

  it("links the Java Explorer certificate to LinkedIn Learning", () => {
    render(<Credentials />);
    expect(
      screen.getByRole("link", { name: /java explorer certification/i }).getAttribute("href"),
    ).toBe(
      "https://www.linkedin.com/learning/certificates/e7c4e3ef846217164750226a5fbddd68796bea1b94ba14fbc3a43e50da9c3be8",
    );
  });
});
