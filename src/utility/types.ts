export type Instructor = {
    id: string;
    name: string;
  }
  
export type ScheduledData = {
    id: number;
    startedAt: number;
    title: string;
    instructor: Instructor;
}