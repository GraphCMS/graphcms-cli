import spinner from "ora-promise";
import http from "got";
import { GCMS_GH_TOKEN } from "../constants";

type ExampleRepo = {
  sha: string;
  url: string;
  tree: Array<{
    path: string;
    mode: string;
    type: string;
    sha: string;
    url: string;
  }>;
};

export default () =>
  spinner("Fetching Examples", () =>
    http
      .get(
        "https://api.github.com/repos/GraphCMS/graphcms-examples/git/trees/master",
        {
          headers: {
            Authorization: `token ${GCMS_GH_TOKEN}`,
          },
        }
      )
      .json()
  ) as Promise<ExampleRepo>;
