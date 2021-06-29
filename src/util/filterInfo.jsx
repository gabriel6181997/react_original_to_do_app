export const FILTERINFOS = {
  All: () => true,
  Active:  task => !task.completed,
  Completed: task => task.completed
}
