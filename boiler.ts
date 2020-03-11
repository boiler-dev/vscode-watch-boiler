import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: ".vscode/tasks.json",
    sourcePath: "tasks.json",
  })

  return actions
}
