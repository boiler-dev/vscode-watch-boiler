import { join } from "path"
import { GenerateBoiler } from "boiler-dev"

export const generate: GenerateBoiler = async ({
  files,
  rootDirPath,
}) => {
  const actions = []

  for (const file of files) {
    const { name } = file

    if (name === "tasks.json") {
      const { source } = file

      actions.push({
        action: "write",
        path: join(rootDirPath, ".vscode", name),
        source,
      })
    }
  }

  return actions
}
