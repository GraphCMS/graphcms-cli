declare module "github-download-directory" {
  function download(username: string, repo: string, dir: string): Promise<void>;
}
