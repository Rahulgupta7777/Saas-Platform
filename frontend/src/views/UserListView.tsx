import React from 'react';
import type { User } from '../models/User';

interface UserListViewProps {
    users: User[];
    loading: boolean;
    error: string | null;
    onDelete: (id: string) => void;
}

export const UserListView: React.FC<UserListViewProps> = ({ users, loading, error, onDelete }) => {
    if (loading) return <div>Loading users...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div>
            <h2>User List (MVC Architecture Demo)</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {users.map(user => (
                        <li key={user.id} style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <strong>{user.name}</strong> ({user.email})
                            </div>
                            <button
                                onClick={() => onDelete(user.id)}
                                style={{
                                    backgroundColor: '#ff4444',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px 10px',
                                    borderRadius: '3px',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
