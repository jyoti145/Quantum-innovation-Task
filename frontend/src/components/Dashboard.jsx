import React from 'react';
import './Dashboard.css';

const users = [
  {
    id: 1,
    name: 'Michael Holz',
    date: '04/10/2013',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Paula Wilson',
    date: '05/08/2014',
    role: 'Publisher',
    status: 'Active',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Antonio Moreno',
    date: '11/05/2015',
    role: 'Publisher',
    status: 'Suspended',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Mary Saveley',
    date: '06/09/2016',
    role: 'Reviewer',
    status: 'Active',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 5,
    name: 'Martin Sommer',
    date: '12/08/2017',
    role: 'Moderator',
    status: 'Inactive',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
  }
];

const statusColor = {
  Active: '#4caf50',
  Suspended: '#ff9800',
  Inactive: '#f44336'
};

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>User Table</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={u.id}>
              <td>{idx + 1}</td>
              <td>
                <img src={u.avatar} alt={u.name} className="avatar" />
                <span className="user-name">{u.name}</span>
              </td>
              <td>{u.date}</td>
              <td>{u.role}</td>
              <td>
                <span className="status-dot" style={{ background: statusColor[u.status] }}></span>
                {u.status}
              </td>
              <td>
                <span className="action-icon" title="Edit">&#9881;</span>
                <span className="action-icon" title="Delete" style={{ color: '#f44336' }}>&#10006;</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}