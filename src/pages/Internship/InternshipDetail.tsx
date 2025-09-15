// InternshipDetail.js

function InternshipDetail({ internship, onBack }:any) {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out flex items-center"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Back to List
      </button>

      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        {internship.title}
      </h2>
      <p className="text-gray-700 text-xl mb-2">
        at <span className="font-semibold">{internship.company}</span>
      </p>
      <p className="text-gray-600 mb-4">
        {internship.country} | Duration: {internship.duration} | Stipend:{' '}
        {internship.stipend}
      </p>

      <div className="prose lg:prose-lg max-w-none text-gray-800 mt-6">
        <p className="leading-relaxed whitespace-pre-line">
          {internship.fullDescription}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>
          For more details and to apply, please visit the company's official website.
        </p>
      </div>
    </div>
  );
}

export default InternshipDetail;