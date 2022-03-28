import spawnAsync from "./spawnPromise";

export default (cwd: string, templateName: string) => {
  spawnAsync(
    "sh",
    [
      "-c",
      `curl https://codeload.github.com/GraphCMS/graphcms-examples/tar.gz/master | tar -xz --strip=2 ${templateName}`,
    ],
    { cwd }
  );
};
