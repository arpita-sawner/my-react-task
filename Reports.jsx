
export default function Reports() {
  const reports = [
    { title: "Monthly Report", status: "Completed" },
    { title: "User Activity Report", status: "In Progress" },
    { title: "Sales Report", status: "Pending" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Reports Overview
      </h1>

      <p className="mt-2 text-gray-500">
        View and manage your reports.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <div
            key={report.title}
            className="rounded-xl bg-white p-5 shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {report.title}
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Status: {report.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
