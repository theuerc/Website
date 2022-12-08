// @ts-ignore
import awsSvelte from "$lib/components/svgs/aws.svelte";
// @ts-ignore
import githubMarkSvelte from "$lib/components/svgs/github-mark.svelte";
import type { verticalFeature } from "$lib/types/feature";
import type {
  FeatureTable,
  FeatureTableColumn,
  FeatureTableToc,
} from "../components/ui-library/feature-table/feature-table";

export const codespacesToc: FeatureTableToc[] = [
  {
    type: "text",
    data: {
      text: "License",
    },
  },
  {
    type: "image",
    data: {
      text: "GitHub Integration",
      image: githubMarkSvelte,
    },
  },
  {
    type: "image",
    data: {
      text: "GitLab Integration",
      image: {
        alt: "GitLab",
        path: "/svg/gitlab.svg",
      },
    },
  },
  {
    type: "image",
    data: {
      text: "Bitbucket Integration",
      image: {
        alt: "Bitbucket",
        path: "/svg/bitbucket.svg",
      },
    },
  },
  {
    type: "text",
    data: {
      text: "Prebuilds",
    },
  },
  {
    type: "text",
    data: {
      text: "Snapshots",
    },
  },
  {
    type: "text",
    data: {
      text: "VS Code extensions",
    },
  },
  {
    type: "text",
    data: {
      text: "iPad Support",
    },
  },
  {
    type: "text",
    data: {
      text: "Virtual Desktop (VNC)",
    },
  },
  {
    type: "text",
    data: {
      text: "Desktop VS Code",
    },
  },
  {
    type: "text",
    data: {
      text: "Multi-IDE Support",
    },
  },
];

export const gitpodColumns: FeatureTableColumn = {
  isHighlighted: true,
  header: {
    headline: "Gitpod",
    image: {
      alt: "gitpod",
      path: "/images/gitpod-logo.svg",
    },
  },
  enteries: [
    {
      items: [
        {
          term: "License",
          text: "Open Source",
        },
        {
          term: "GitHub Integration",
          availability: true,
        },
        {
          term: "GitLab Integration",
          availability: true,
        },
        {
          term: "Bitbucket Integration",
          availability: true,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: true,
        },
        {
          term: "VS Code extensions",
          availability: true,
        },
        {
          term: "iPad Support",
          availability: true,
        },
        {
          term: "Virtual Desktop (VNC)",
          availability: true,
        },
        {
          term: "Desktop VS Code",
          availability: true,
        },
        {
          term: "Multi-IDE Support",
          availability: true,
        },
      ],
    },
  ],
};

export const codespacesColumn: FeatureTableColumn = {
  isHighlighted: false,
  header: {
    headline: "Codespaces",
    image: githubMarkSvelte,
  },
  enteries: [
    {
      items: [
        {
          term: "License",
          text: "Proprietary",
        },
        {
          term: "GitHub Integration",
          availability: true,
        },
        {
          term: "GitLab Integration",
          availability: false,
        },
        {
          term: "Bitbucket Integration",
          availability: false,
        },
        {
          term: "Prebuilds",
          availability: true,
        },
        {
          term: "Snapshots",
          availability: false,
        },
        {
          term: "VS Code extensions",
          availability: true,
        },
        {
          term: "iPad Support",
          availability: true,
        },
        {
          term: "Virtual Desktop (VNC)",
          availability: true,
        },
        {
          term: "Desktop VS Code",
          availability: true,
        },
        {
          term: "Multi-IDE Support",
          availability: true,
        },
      ],
    },
  ],
};

export const automationFirstFeature: verticalFeature = {
  title: "Automation-first",
  paragraph:
    "Simply add your build command into a .gitpod.yml file and let Gitpod do the heavy-lifting. Once you’ve experienced the freedom of ephemeral workspaces, you’ll never want to go back to long-lived manually-maintained environments.",
  moreButton: {
    href: "https://gitpod.io/workspaces/",
    text: "Try Now",
  },
};

export const codespacesComparison: FeatureTable = {
  toc: codespacesToc,
  columns: [gitpodColumns, codespacesColumn],
};
