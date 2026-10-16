
export default function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Settings
      </h1>

      <p className="mt-2 text-gray-500">
        Manage your dashboard preferences here.
      </p>

      <div className="mt-6 max-w-xl rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">
          General Settings
        </h2>

        <div className="mt-5">
          <label className="mb-2 block font-medium text-gray-700">
            Dashboard Name
          </label>

          <input
            type="text"
            defaultValue="Admin Dashboard"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block font-medium text-gray-700">
            Email Notifications
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="h-4 w-4" />
            <span className="text-gray-600">
              Receive dashboard updates
            </span>
          </label>
        </div>

        <button
          className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          onClick={() => alert("Demo settings saved!")}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
