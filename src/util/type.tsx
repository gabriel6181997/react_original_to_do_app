export type Task = {
  id: string;
  title: string;
  completed:boolean;
}

export type filter = "All" | "Active" | "Completed"
