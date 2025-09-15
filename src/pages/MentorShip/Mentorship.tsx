import React from 'react';

const MentorshipPage = () => {
  const videoData = [
    {
      id: 1,
      title: "Mastering React Hooks",
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=your-video-id-1",
      thumbnail: "https://via.placeholder.com/320x180?text=Video+1+Thumbnail",
      description: "Dive deep into the world of React Hooks and learn how to build powerful and efficient applications."
    },
    {
      id: 2,
      title: "Tailwind CSS Best Practices",
      platform: "Facebook Live",
      link: "https://www.facebook.com/your-facebook-video-id",
      thumbnail: "https://via.placeholder.com/320x180?text=Video+2+Thumbnail",
      description: "Discover the best ways to leverage Tailwind CSS for rapid and beautiful UI development."
    },
    {
      id: 3,
      title: "Advanced JavaScript Concepts",
      platform: "Zoom Replay",
      link: "https://zoom.us/rec/share/your-zoom-replay-id",
      thumbnail: "https://via.placeholder.com/320x180?text=Video+3+Thumbnail",
      description: "Elevate your JavaScript skills with advanced topics and real-world examples."
    },
    {
      id: 4,
      title: "Building Scalable Web Apps",
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=your-video-id-4",
      thumbnail: "https://via.placeholder.com/320x180?text=Video+4+Thumbnail",
      description: "Learn the architecture and strategies for creating highly scalable web applications."
    },
    {
        id: 5,
        title: "Deep Dive into Node.js",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-5",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+5+Thumbnail",
        description: "Explore the power of Node.js for backend development and API creation."
    },
    {
        id: 6,
        title: "Database Design Fundamentals",
        platform: "Zoom Replay",
        link: "https://zoom.us/rec/share/your-zoom-replay-id-6",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+6+Thumbnail",
        description: "Understand the core principles of designing efficient and robust databases."
    },
    {
        id: 7,
        title: "UI/UX Design for Developers",
        platform: "Facebook Live",
        link: "https://www.facebook.com/your-facebook-video-id-7",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+7+Thumbnail",
        description: "Learn essential UI/UX principles to create user-friendly and aesthetically pleasing interfaces."
    },
    {
        id: 8,
        title: "Introduction to TypeScript",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-8",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+8+Thumbnail",
        description: "Get started with TypeScript to add type safety and improve your JavaScript codebase."
    },
    {
        id: 9,
        title: "Cloud Computing Basics",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-9",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+9+Thumbnail",
        description: "An essential guide to understanding the fundamentals of cloud computing platforms."
    },
    {
        id: 10,
        title: "Agile Development Workflow",
        platform: "Zoom Replay",
        link: "https://zoom.us/rec/share/your-zoom-replay-id-10",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+10+Thumbnail",
        description: "Optimize your team's productivity with best practices in Agile methodologies."
    },
    {
        id: 11,
        title: "React Native Mobile Apps",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-11",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+11+Thumbnail",
        description: "Build cross-platform mobile applications using React Native from scratch."
    },
    {
        id: 12,
        title: "Securing Web Applications",
        platform: "Facebook Live",
        link: "https://www.facebook.com/your-facebook-video-id-12",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+12+Thumbnail",
        description: "Learn critical security measures to protect your web applications from vulnerabilities."
    },
    {
        id: 13,
        title: "Docker for Developers",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-13",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+13+Thumbnail",
        description: "Containerize your applications with Docker for consistent development and deployment."
    },
    {
        id: 14,
        title: "Advanced CSS Techniques",
        platform: "Zoom Replay",
        link: "https://zoom.us/rec/share/your-zoom-replay-id-14",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+14+Thumbnail",
        description: "Take your CSS skills to the next level with advanced styling and animation techniques."
    },
    {
        id: 15,
        title: "Testing React Components",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-15",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+15+Thumbnail",
        description: "Ensure the quality of your React applications with comprehensive testing strategies."
    },
    {
        id: 16,
        title: "API Design Best Practices",
        platform: "Facebook Live",
        link: "https://www.facebook.com/your-facebook-video-id-16",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+16+Thumbnail",
        description: "Design robust and user-friendly APIs that are easy to consume and maintain."
    },
    {
        id: 17,
        title: "State Management with Redux",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-17",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+17+Thumbnail",
        description: "Master state management in large React applications using Redux."
    },
    {
        id: 18,
        title: "Introduction to GraphQL",
        platform: "Zoom Replay",
        link: "https://zoom.us/rec/share/your-zoom-replay-id-18",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+18+Thumbnail",
        description: "Learn how to build powerful and flexible APIs with GraphQL."
    },
    {
        id: 19,
        title: "Optimizing Web Performance",
        platform: "YouTube",
        link: "https://www.youtube.com/watch?v=your-video-id-19",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+19+Thumbnail",
        description: "Techniques and tools to significantly improve the loading speed and responsiveness of your web apps."
    },
    {
        id: 20,
        title: "Progressive Web Apps (PWAs)",
        platform: "Facebook Live",
        link: "https://www.facebook.com/your-facebook-video-id-20",
        thumbnail: "https://via.placeholder.com/320x180?text=Video+20+Thumbnail",
        description: "Transform your web applications into installable, app-like experiences with PWAs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Banner for Adsense */}
      <div className="w-full bg-white py-2 shadow-md flex justify-center items-center">
        {/* Replace with your Google AdSense code */}
        <div className="w-full h-20 bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
          Google AdSense Banner (728x90)
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Next Webinar Session */}
        <div className="mb-8 p-4 bg-purple-600 text-white rounded-lg shadow-lg flex items-center justify-between">
          <h2 className="text-2xl font-bold">Next Webinar Session: Mastering State Management</h2>
          <span className="text-lg">Date: July 20, 2024 | Time: 2:00 PM EST</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main Video Section (placeholder for a featured video) */}
          <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 flex items-center justify-center">
              {/* Replace with embedded video or dynamic player */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-featured-video-id"
                title="Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-2xl font-bold mb-2">Featured Mentorship Video Title</h3>
            <p className="text-gray-700">A brief description of the featured video, enticing viewers to watch and learn from the expert mentor.</p>
          </div>

          {/* Sidebar for Adsense */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col items-center justify-center">
              {/* Replace with your Google AdSense code */}
              <div className="w-full h-60 bg-gray-200 flex items-center justify-center text-gray-600 text-sm mb-4">
                Google AdSense Banner (300x250)
              </div>
              <div className="w-full h-60 bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
                Google AdSense Banner (300x250)
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">Explore Our Mentorship Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoData.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded-tr-lg">
                  {video.platform}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Banner for Adsense */}
      <div className="w-full bg-white py-4 mt-8 shadow-md flex justify-center items-center">
        {/* Replace with your Google AdSense code */}
        <div className="w-full h-20 bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
          Google AdSense Banner (728x90)
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;