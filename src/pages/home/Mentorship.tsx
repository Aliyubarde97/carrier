// src/components/YouTubeGallery.js

import { useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

// --- DATA SOURCE ---
// To customize, just replace the videoId, title, and channel for each object.
// You can get the videoId from any YouTube video URL (e.g., in "youtube.com/watch?v=dQw4w9WgXcQ", the ID is "dQw4w9WgXcQ").
const videoData = [
  { id: 1, videoId: '_Uf2hwi8_2A', title: 'Arewa mentorship program', channel: 'Fireship' },
  { id: 2, videoId: 'SqcY0GlETPk', title: 'Tailwind CSS in 100 Seconds', channel: 'Fireship' },
  { id: 3, videoId: 'w7ejDZ8o_OS', title: 'React Router 6 Tutorial', channel: 'Net Ninja' },
  { id: 4, videoId: 'm55PTVUrlnA', title: 'CSS Grid Crash Course 2022', channel: 'Traversy Media' },
  { id: 5, videoId: 'bMknfKXIFA8', title: 'JavaScript Full Course for Beginners', channel: 'freeCodeCamp.org' },
  { id: 6, videoId: 'Oe421EPjeBE', title: 'Next.js 13 - The Basics', channel: 'Next.js' },
  { id: 7, videoId: 'u6gSSpfOKaE', title: 'TypeScript - The Basics', channel: 'Fireship' },
  { id: 8, videoId: '2-crBg6wpp0', title: 'What is a REST API?', channel: 'Web Dev Simplified' },
  { id: 9, videoId: 'G3e-cpL7ofc', title: 'Node.js and Express.js - Full Course', channel: 'freeCodeCamp.org' },
  { id: 10, videoId: '8fFR4q_2qZU', title: 'UI/UX Design Tutorial', channel: 'Mizko' },
  { id: 11, videoId: 'T-E21k4S_b4', title: 'How to use Figma', channel: 'Figma' },
  { id: 12, videoId: 'z-sA7d_hP4g', title: 'VS Code Top 10 Pro Tips', channel: 'Fireship' },
  { id: 13, videoId: '4-RakrY2M2g', title: 'How to center a div', channel: 'Kevin Powell' },
  { id: 14, videoId: 'I6ypD7xJogk', title: 'Git and GitHub for Beginners', channel: 'freeCodeCamp.org' },
  { id: 15, videoId: 'TffbV19918A', title: 'Async/Await Explained', channel: 'Web Dev Simplified' },
  { id: 16, videoId: '30LWjhZzg50', title: '10 CSS Pro-Tips', channel: 'Fireship' },
  { id: 17, videoId: '2lVDktmb22I', title: 'Redux in 100 Seconds', channel: 'Fireship' },
  { id: 18, videoId: 'g2R2p63B1So', title: 'SQL Full Course', channel: 'Bro Code' },
  { id: 19, videoId: 'PkZNo7MFNFg', title: 'JavaScript DOM Manipulation', channel: 'Traversy Media' },
  { id: 20, videoId: '76s_Q-GjONw', title: 'Python in 100 Seconds', channel: 'Fireship' },
];

const YouTubeGallery = () => {
  // This state holds the ID of the video that is currently playing.
  // `null` means no video is playing.
  const [nowPlayingId, setNowPlayingId] = useState(null);

  const handlePlayClick = (videoId: any) => {
    setNowPlayingId(videoId);
  };

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Video Tutorials
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Explore our handpicked collection of tutorials to help you master modern web development.
          </p>
        </div>

        {/* Responsive Grid for the 20 cards */}
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {videoData.map((video) => {
            const isPlaying = nowPlayingId === video.videoId;
            return (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative aspect-video">
                  {isPlaying ? (
                    // If this video is playing, render the YouTube iframe
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    // Otherwise, render the thumbnail and a play button
                    <div
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => handlePlayClick(video.videoId)}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircleIcon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 flex-grow">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{video.channel}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full text-center inline-block bg-red-600 text-white font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YouTubeGallery;