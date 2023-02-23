interface User {
    Id: number;
    Name: string;
    Icon: Icon;
}

interface Icon {
    Id: number;
    Color: string;
    Icon: string;
}

interface Task {
  Id: number;
  Title: string;
  Description: string;
  Effort: number;
  Frequency: number;
  UserHistory: User[];
  CreatedDateTask: string;
}

export type {User, Icon, Task}