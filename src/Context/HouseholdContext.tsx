import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { mockTasks, mockUsers } from "../Utils/Mockdata";
import { User, Task, Icon } from "../utils/types";

interface ContextValue {
  Users: User[];
  Tasks: Task[]
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  updateTask: (task: Task) => void;
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
  updateUser: (user: User) => void;
}

interface Props {
  children: ReactNode;
}

const HouseholdContext = createContext<ContextValue>({
  Users: [],
  Tasks: [],
  addTask: () => {
    console.warn("Householdprovider not found");
  },
  removeTask: () => {
    console.warn("Householdprovider not found");
  },
  updateTask: () => {
    console.warn("Householdprovider not found");
  },
  addUser: () => {
    console.warn("Householdprovider not found");
  },
  removeUser: () => {
    console.warn("Householdprovider not found");
  },
  updateUser: () => {
    console.warn("Householdprovider not found");
  },
});

function Householdprovider({ children }: Props) {
  const [Tasks, setTasks] = useState<Task[]>(mockTasks);
  const [Users, setUsers] = useState<User[]>(mockUsers);

  const addTask = (task: Task) => {
    const newTasks = [... Tasks];
    newTasks.push(task);
    setTasks(newTasks)
  }

  const removeTask = (id: number) => {
    const newTasks = Tasks.filter((x) => x.Id !== id)
    setTasks(newTasks);
  }

  const updateTask = (task: Task) => {
    setTasks((prevState) =>
      prevState.map((x) => (x.Id === task.Id ? task : x))
    );
  };

  const addUser = (user: User) => {
    const newUsers = [... Users];
    newUsers.push(user);
    setUsers(newUsers)
  }

  const removeUser = (id: number) => {
    const newUsers = Users.filter((x) => x.Id !== id);
    setUsers(newUsers);
  }

  const updateUser = (user: User) => {
    setUsers((prevState) =>
      prevState.map((x) => (x.Id === user.Id ? user : x))
    );
  };

  return (
    <HouseholdContext.Provider
      value={{
        Tasks,
        Users,
        addTask,
        removeTask,
        updateTask,
        addUser,
        removeUser,
        updateUser
      }}
    >
      {children}
    </HouseholdContext.Provider>
  );
}

export const useHousehold = () => useContext(HouseholdContext);

export default Householdprovider;