import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../features/customers/customerSlice';
import Spinner from './Spinner';
import { CgUser } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';

const CustomerList = () => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector((state) => state.customers);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const filteredCustomers = customers
    .filter((customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name)); // <-- A to Z sorting


  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center font-mono uppercase mb-4">Customer Data</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 border-gray-500 border-2 focus:outline-indigo-800 bg-gray-100 rounded mb-4"
      />

      {loading && <Spinner />}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && filteredCustomers.length === 0 && (
        <p className="text-center text-gray-500">No customers found.</p>
      )}


      <ul className="space-y-3">
        {filteredCustomers.map((customer) => (
          <li
            key={customer.id}
            className="p-4 border flex items-center gap-4 rounded-xl border-gray-200 bg-white hover:shadow-md transition"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gray-100  rounded-full flex items-center justify-center text-white text-2xl">
              <CiUser color='#4b0082' />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{customer.name}</h2>
              <p className="text-sm text-gray-600">{customer.email}</p>
              <p className="text-sm text-gray-600">{customer.phone}</p>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default CustomerList;
