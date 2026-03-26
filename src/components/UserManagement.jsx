const shoppers = [
    {
        id: 1,
        name: "Rahul Kumar",
        email: "rahul@mail.com",
        status: "Active",
        registrationDate: "12 Jan 2025",
        action: "Suspend"
    },
    {
        id: 2,
        name: "Ravi Teja",
        email: "ravi@mail.com",
        status: "Active",
        registrationDate: "02 Feb 2025",
        action: "Activate"
    },
    {
        id: 3,
        name: "Sneha Reddy",
        email: "sneha@mail.com",
        status: "Suspended",
        registrationDate: "22 Dec 2024",
        action: "Activate"
    },
    {
        id: 4,
        name: "Arjun Patel",
        email: "arjun@mail.com",
        status: "Active",
        registrationDate: "18 Jan 2025",
        action: "Suspend"
    },
    {
        id: 5,
        name: "Neha Sharma",
        email: "neha@mail.com",
        status: "Active",
        registrationDate: "27 Jan 2025",
        action: "Activate"
    },
    {
        id: 6,
        name: "Vikram Rao",
        email: "vikram@mail.com",
        status: "Suspended",
        registrationDate: "05 Nov 2024",
        action: "Activate"
    }
];
const UserManagement = () => {
    return (
        <>
            {/* Header */}
            <div className='p-4'>
                <h1 className='font-semibold text-2xl md:text-3xl'>
                    User Management
                </h1>
            </div>

            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-3 px-4">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    className="px-4 py-2 w-full sm:w-[260px] rounded-md border border-gray-300 bg-gray-100 text-sm focus:outline-none focus:ring-2"
                />

                <button className="px-4 py-2 w-full sm:w-[180px] text-left rounded-lg border border-gray-300 text-sm text-gray-900 hover:bg-gray-300">
                    All Status
                </button>
            </div>

            {/* ✅ MOBILE VIEW (CARD LAYOUT) */}
            <div className="block md:hidden mt-4 px-4 space-y-4">
                {shoppers.slice(0, 5).map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 shadow-sm bg-white">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-sm">{item.name}</h2>

                            <span
                                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                    item.status === "Active"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                }`}
                            >
                                {item.status}
                            </span>
                        </div>

                        <p className="text-xs text-gray-500 mt-1 break-all">
                            {item.email}
                        </p>

                        <p className="text-xs mt-2">
                            Registered: {item.registrationDate}
                        </p>

                        <button
                            className={`mt-3 w-full px-3 py-2 rounded-md text-sm font-medium ${
                                item.action === "Suspend"
                                    ? "bg-red-700 text-white"
                                    : "bg-green-700 text-white"
                            }`}
                        >
                            {item.action}
                        </button>
                    </div>
                ))}
            </div>

            {/* ✅ DESKTOP TABLE */}
            <div className="hidden md:block overflow-x-auto border border-gray-100 shadow mt-4 mx-4 rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                Shopper Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                Registration Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {shoppers.slice(0, 5).map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    {item.name}
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    {item.email}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                            item.status === "Active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    {item.registrationDate}
                                </td>

                                <td className="px-6 py-4 text-sm">
                                    <button
                                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                                            item.action === "Suspend"
                                                ? "bg-red-700 text-white hover:bg-red-600"
                                                : "bg-green-700 text-white hover:bg-green-600"
                                        }`}
                                    >
                                        {item.action}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-2 mt-4 px-4">
                <button className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100">
                    Prev
                </button>
                <button className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100">
                    1
                </button>
                <button className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100">
                    2
                </button>
                <button className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100">
                    3
                </button>
                <button className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100">
                    Next
                </button>
            </div>
        </>
    );
};

export default UserManagement
