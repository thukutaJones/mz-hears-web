export const emergencyTableData = [
  {
    user: "Jane Banda",
    location: { lat: -13.9833, lng: 33.7833 }, // Lilongwe
    emergencyType: "Fire",
    serviceType: "Fire Brigade",
    date: "2025-05-28",
    time: "14:23"
  },
  {
    user: "Peter Chirwa",
    location: { lat: -15.7861, lng: 35.0058 }, // Blantyre
    emergencyType: "Accident",
    serviceType: "Ambulance",
    date: "2025-05-28",
    time: "09:12"
  },
];


type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  avatar: string;
};

export const initialUsers: User[] = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    role: "Admin",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    role: "User",
    status: "inactive",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Moderator",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];
