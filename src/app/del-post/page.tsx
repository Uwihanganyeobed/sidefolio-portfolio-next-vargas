"use client";
import React, { useState } from "react";
type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function Form() {
  const [formData, setFormData] = useState<User>({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("User data submitted successfully!");

      // Optionally, reset the form here
      setFormData({
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit user data: " + error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center py-8">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          User Registration
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 mb-1 font-medium"
                htmlFor="id"
              >
                ID
              </label>
              <input
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                id="id"
                name="id"
                value={formData.id} // Added value attribute
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1 font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                id="name"
                name="name"
                value={formData.name} // Added value attribute
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1 font-medium"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                id="username"
                name="username"
                value={formData.username} // Added value attribute
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="email"
                id="email"
                name="email"
                value={formData.email} // Added value attribute
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1 font-medium"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone} // Added value attribute
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1 font-medium"
                htmlFor="website"
              >
                Website
              </label>
              <input
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                id="website"
                name="website"
                value={formData.website} // Added value attribute
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="street"
                >
                  Street
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  type="text"
                  id="street"
                  name="address.street"
                  value={formData.address.street} // Added value attribute
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="suite"
                >
                  Suite
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  type="text"
                  id="suite"
                  name="address.suite"
                  value={formData.address.suite} // Added value attribute
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  type="text"
                  id="city"
                  name="address.city"
                  value={formData.address.city} // Added value attribute
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="zipcode"
                >
                  Zipcode
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  type="text"
                  id="zipcode"
                  name="address.zipcode"
                  value={formData.address.zipcode} // Added value attribute
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="lat"
                >
                  Geo Latitude
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  type="text"
                  id="lat"
                  name="address.geo.lat"
                  value={formData.address.geo.lat} // Added value attribute
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="lng"
                >
                  Geo Longitude
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  type="text"
                  id="lng"
                  name="address.geo.lng"
                  value={formData.address.geo.lng} // Added value attribute
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Company
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="company_name"
                >
                  Company Name
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  type="text"
                  id="company_name"
                  name="company.name"
                  value={formData.company.name} // Added value attribute
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="catchPhrase"
                >
                  Catch Phrase
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  type="text"
                  id="catchPhrase"
                  name="company.catchPhrase"
                  value={formData.company.catchPhrase} // Added value attribute
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-1 font-medium"
                  htmlFor="bs"
                >
                  Business (bs)
                </label>
                <input
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                  type="text"
                  id="bs"
                  name="company.bs"
                  value={formData.company.bs} // Added value attribute
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
