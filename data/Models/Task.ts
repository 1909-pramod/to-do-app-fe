export interface Task {
  id: string,
  title: string,
  startDate: string,
  endDate: string,
  description: string,
  status: string,
  subTasks?: Task[]
}