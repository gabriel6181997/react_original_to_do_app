export const FILTERINFOS= {
  All: () => true,
  Active:  (task: { completed: boolean; }) => !task.completed,
  Completed: (task: { completed: boolean; }) => task.completed
}
