import { spawn, SpawnSyncOptions } from "child_process";

export default function spawnAsync(
  command: string,
  args: Array<string>,
  options: SpawnSyncOptions
) {
  return new Promise(function (resolve, reject) {
    const process = spawn(command, args, options);
    process.on("close", function (code) {
      // Should probably be 'exit', not 'close'
      // *** Process completed
      resolve(code);
    });
    process.on("error", function (err) {
      // *** Process creation failed
      reject(err);
    });
  });
}
