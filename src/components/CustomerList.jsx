import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../features/customers/customerSlice';
import Spinner from './Spinner';

const CustomerList = () => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector((state) => state.customers);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Customer Data</h1>

      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-4"
      />

      {loading && <Spinner/>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && filteredCustomers.length === 0 && (
        <p className="text-center text-gray-500">No customers found.</p>
      )}


      <ul className="space-y-3">
        {filteredCustomers.map((customer) => (
          <li key={customer.id} className="p-3 border rounded">
            <h2 className="text-lg font-semibold">{customer.name}</h2>
            <p className="text-sm text-gray-600">{customer.email}</p>
            <p className="text-sm text-gray-600">{customer.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
