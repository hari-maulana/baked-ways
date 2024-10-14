// export const AdmTransactionPage = () => {
//   return (
//     <div className="container bg-blue-300 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
//       AdmTransactionPage
//     </div>
//   );
// };

// import React from 'react';

export const AdmTransactionPage = () => {
  const partners = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, Cityville",
      product: "Product A",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Oak St, Townsville",
      product: "Product B",
      status: "Shipped",
    },
    {
      id: 3,
      name: "Michael Johnson",
      address: "789 Pine St, Villagetown",
      product: "Product C",
      status: "Delivered",
    },
  ];

  return (
    <div className="container sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl my-16 flex flex-row justify-between">
      <div className="container mx-auto my-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-yellow-400 border-b">
                <th className="py-2 px-4 text-left">No.</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Product Order</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner, index) => (
                <tr key={partner.id} className="border-b">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{partner.name}</td>
                  <td className="py-2 px-4">{partner.address}</td>
                  <td className="py-2 px-4">{partner.product}</td>
                  <td className={`py-2 px-4 ${getStatusColor(partner.status)}`}>
                    {partner.status}
                  </td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "text-yellow-500";
    case "Shipped":
      return "text-blue-500";
    case "Delivered":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};
