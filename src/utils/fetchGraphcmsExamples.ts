import spinner from "ora-promise";
import http from "got";

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
            Authorization: "token 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",
          },
        }
      )
      .json()
  ) as Promise<ExampleRepo>;
