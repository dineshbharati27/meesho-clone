import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfile } from '../redux/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { payload } = await dispatch(fetchProfile());
        setProfile(payload);
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile data.');
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className=" mx-auto p-6">
  <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50  rounded-2xl p-8 max-w-3xl mx-auto">
    <div className="flex items-center space-x-8">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-28 h-28 rounded-full shadow-lg border-4 border-pink-200"
      />
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
        <p className="text-lg text-gray-600">{profile.email}</p>
        <span className="mt-2 inline-block bg-pink-200 text-pink-800 text-sm px-4 py-1 rounded-full font-medium shadow">
          Role: {profile.role}
        </span>
      </div>
    </div>

    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-pink-200 pb-2">
        Profile Details
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-pink-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-pink-600">Name</h3>
          <p className="text-lg font-semibold text-gray-800">{profile.name}</p>
        </div>
        <div className="bg-pink-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-pink-600">Email</h3>
          <p className="text-lg font-semibold text-gray-800">{profile.email}</p>
        </div>
        <div className="bg-pink-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-pink-600">Role</h3>
          <p className="text-lg font-semibold text-gray-800">{profile.role}</p>
        </div>
        <div className="bg-pink-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-pink-600">User ID</h3>
          <p className="text-lg font-semibold text-gray-800">{profile.id}</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Profile;
