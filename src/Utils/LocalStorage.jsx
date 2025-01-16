
const employees = [
    {
      id: 1,
      firstName: "Aarav",
      email: "e1@e.com",
      password: "123",
      taskNumber: { active: 2, newTask: 1, completed: 1, failed: 0 },
      tasks: [
        {
          title: "Task 1",
          description: "Complete the quarterly report.",
          date: "2025-01-15",
          category: "Reporting",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
         
        },
        {
          title: "Task 2",
          description: "Update the client database.",
          date: "2025-01-20",
          category: "Data Management",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
         
        },
        {
          title: "Task 3",
          description: "Attend team meeting.",
          date: "2025-01-18",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          
        }
      ]
    },
    {
      id: 2,
      firstName: "Vihaan",
      email: "employee2@example.com",
      password: "123",
      taskNumber: { active: 1, newTask: 0, completed: 1, failed: 0 },
      tasks: [
        {
          title: "Task 1",
          description: "Prepare presentation slides.",
          date: "2025-01-16",
          category: "Presentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          
        },
        {
          title: "Task 2",
          description: "Submit expense report.",
          date: "2025-01-17",
          category: "Finance",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          
        }
      ]
    },
    {
      id: 3,
      firstName: "Ananya",
      email: "employee3@example.com",
      password: "123",
      taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 },
      tasks: [
        {
          title: "Task 1",
          description: "Fix bug in the system.",
          date: "2025-01-19",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          
        }
      ]
    },
    {
      id: 4,
      firstName: "Ishaan",
      email: "employee4@example.com",
      password: "123",
      taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 },
      tasks: [
        {
          title: "Task 1",
          description: "Write documentation for API.",
          date: "2025-01-21",
          category: "Documentation",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          
        }
      ]
    },
    {
      id: 5,
      firstName: "Kiara",
      email: "employee5@example.com",
      password: "123",
      taskNumber: { active: 1, newTask: 0, completed: 1, failed: 0 },
      tasks: [
        {
          title: "Task 1",
          description: "Plan team outing.",
          date: "2025-01-25",
          category: "Planning",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
         
        },
        {
          title: "Task 2",
          description: "Update social media posts.",
          date: "2025-01-22",
          category: "Marketing",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
         
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      firstName: "Arjun",
      email: "admin@example.com",
      password: "123"
    }
  ];
  

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employess = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
  
    return {employees,admin}
   
}
