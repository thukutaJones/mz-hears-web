"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  avatar: string;
};

const initialUsers: User[] = [
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

const page = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="px-6 w-full min-h-screen bg-gradient-to-br from-white to-purple-50">
      <Breadcrumb />
      <div className="flex flex-row gap-2 items-center mb-6 mt-6">
        <IoMdArrowRoundBack
          className="text-gray-800 hover:scale-120"
          size={25}
          onClick={() => (location.href = "/admin")}
        />
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-transparent text-left uppercase text-xs text-gray-500 tracking-wider">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user: any, index: number) => (
              <tr
                key={user.id}
                className={`${
                  index !== users?.length - 1 && "border-b border-gray-200"
                } hover:bg-gray-50 transition duration-200`}
              >
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{user.name}</span>
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEye size={18} />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-600">
                    <FiEdit2 size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
