import { join } from "path"

import {
  SetupBoiler,
  PromptBoiler,
  InstallBoiler,
  TeardownBoiler,
} from "boiler-dev"

export const installBoiler: InstallBoiler = async ({
  destDir,
  files,
}) => {
  const actions = []

  for (const file of files) {
    const { name } = file

    if (name === "tasks.json") {
      const { source } = file

      actions.push({
        action: "write",
        path: join(destDir, ".vscode", name),
        source,
      })
    }
  }

  return actions
}
