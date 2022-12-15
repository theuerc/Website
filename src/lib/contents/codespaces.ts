// @ts-ignore
import awsSvelte from "$lib/components/svgs/aws.svelte";
// @ts-ignore
import githubMarkSvelte from "$lib/components/svgs/github-mark.svelte";
import type { Card } from "$lib/types/card";
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

export const featureCards: {
  card: Card;
  pill?: { text: string; variant: "pink" | "orange" | "gray" | "violet" };
}[] = [
  {
    card: {
      title: "Gitpod.io",
      text: "Use Gitpod in our secure cloud with minimal setup time and effort. Scale users as you need with full flexibility. Reduce operational overhead.",
      icon: {
        src: "/svg/icons/cloud.svg",
        alt: "Cloud Icon",
      },
      link: {
        href: "https://gitpod.io/workspaces/",
        text: "Start for free",
      },
    },
  },
  {
    pill: {
      text: "Early access",
      variant: "pink",
    },
    card: {
      title: "Gitpod Dedicated",
      text: "In your cloud, get a dedicated, private instance of Gitpod managed by us. Set up VPC peering and private links to your dev resources. Best for large teams with high security and compliance requirements.",
      icon: {
        src: "/svg/icons/cloud.svg",
        alt: "Cloud Icon",
      },
      link: {
        href: "/contact/sales",
        text: "Talk to sales",
      },
    },
  },
];
