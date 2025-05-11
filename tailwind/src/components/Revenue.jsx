export default function Revenue() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4 sm:grid-cols-2">
        <div className="bg-blue-950 text-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Welcome</h2>
          <p>
            This is the first section. You can include any introduction or
            welcome message here for your users.
          </p>
        </div>

        <div className="bg-yellow-200 text-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <div className="flex flex-row items-start justify-between">
            <div className="basis-3/4">
              <ul className="list-disc list-inside">
                <li>Fast Performance</li>
                <li>Responsive Design</li>
                <li>Built with Tailwind CSS</li>
              </ul>
            </div>
            <div className="basis-1/4 text-sm text-right">
              <a href="/payments" className="text-blue-600 hover:underline">
                Amount Pending: ₹1244
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-300 text-gray-900 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p>
          Need help or have questions? Reach out at:
          <br />
          <a
            href="mailto:support@example.com"
            className="text-blue-700 underline"
          >
            support@example.com
          </a>
        </p>
      </div>
    </>
  );
}
