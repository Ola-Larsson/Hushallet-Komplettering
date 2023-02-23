import { Icons } from './AvailableIcons';
import { Task, User } from "./Types";

export const mockUsers: User[] = [
    {Id: 1, Name: "Pappa", Icon: Icons[0]},
    {Id: 2, Name: "Mamma", Icon: Icons[1]}
]

export const mockTasks: Task[] = [
    {Id: 1, Title: "Dammsug huset", Description: "Dammsug hela huset", Effort: 3, Frequency: 7, UserHistory: [], CreatedDateTask: new Date().toDateString() },
    {Id: 2, Title: "Diska", Description: "Diska all disk", Effort: 1, Frequency: 1, UserHistory: [], CreatedDateTask: new Date().toDateString() }
]