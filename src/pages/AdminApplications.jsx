import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get('https://tips-backend.onrender.com');
        if (res.data && res.data.success) {
          setApplications(res.data.applications);
        }
      } catch (error) {
        console.error('Fetch applications error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="p-6 font-serif">
      <h2 className="text-2xl font-bold mb-4">Submitted Applications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Phone</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="border-t">
                  <td className="py-2 px-4">{app.phone}</td>
                  <td className="py-2 px-4">{app.email}</td>
                  <td className="py-2 px-4">{new Date(app.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminApplications;
