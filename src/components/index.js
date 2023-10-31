export const globalComponents = [

]

export function setupGlobalComponents(app) {
  globalComponents.forEach(({ name, component }) => {
    app.component(name, component)
  })
}
