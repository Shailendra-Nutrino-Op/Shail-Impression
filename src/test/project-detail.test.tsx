import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { projects, type Project } from "@/content/portfolio";

const base = projects[0];

describe("ProjectDetail", () => {
  it("shows no repository or demo link when no real URL is configured", () => {
    const project: Project = { ...base, repoUrl: undefined, demoUrl: undefined };
    render(<ProjectDetail project={project} />);
    expect(screen.queryByRole("link", { name: /repository/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /live demo/i })).toBeNull();
  });

  it("links the configured repository in a new tab with safe rel attributes", () => {
    const url = "https://github.com/example/repo";
    render(<ProjectDetail project={{ ...base, repoUrl: url }} />);
    const link = screen.getByRole("link", { name: /repository/i });
    expect(link.getAttribute("href")).toBe(url);
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
