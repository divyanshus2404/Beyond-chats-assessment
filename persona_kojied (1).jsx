import React from "react";

const PersonaKojied = () => {
  const motivations = [
    { label: "Entertainment", value: 90 },
    { label: "Social Interaction", value: 75 },
    { label: "Memes & Humor", value: 85 },
    { label: "Creativity", value: 65 },
    { label: "Community", value: 70 },
    { label: "Curiosity", value: 60 }
  ];

  const personality = [
    { label: "Introvert", value: 60 },
    { label: "Extrovert", value: 40 },
    { label: "Intuition", value: 50 },
    { label: "Sensing", value: 50 },
    { label: "Feeling", value: 70 },
    { label: "Thinking", value: 30 },
    { label: "Perceiving", value: 65 },
    { label: "Judging", value: 35 }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-violet-50 to-indigo-100 shadow-2xl rounded-3xl mt-10 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-600">u/kojied</h1>
          <p className="mt-3 text-sm text-gray-700 leading-6">
            <strong>Age:</strong> Unknown<br />
            <strong>Occupation:</strong> Likely Student or Gamer<br />
            <strong>Status:</strong> Unknown<br />
            <strong>Location:</strong> Not specified<br />
            <strong>Tier:</strong> <span className="text-yellow-600 font-semibold">Casual Redditor</span><br />
            <strong>Archetype:</strong> The Entertainer 🎭
          </p>
        </div>
        <img
          src="273c8620-74d3-40df-b66b-356d56824a2b.png"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-400 shadow-lg mt-4 sm:mt-0 transition-transform duration-300 hover:scale-105"
        />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-4">Traits</h2>
        <div className="flex flex-wrap gap-3">
          {["Humorous", "Opinionated", "Casual", "Expressive"].map(trait => (
            <span
              key={trait}
              className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-pink-200 cursor-pointer"
            >
              {trait}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-4">Motivations</h2>
        {motivations.map(({ label, value }) => (
          <div key={label} className="mb-4">
            <div className="flex justify-between text-sm font-medium text-gray-800">
              <span>{label}</span>
              <span>{value}/100</span>
            </div>
            <div className="w-full bg-indigo-100 h-3 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-400 to-indigo-500 h-full transition-all duration-500"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-4">Personality</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800">
          {personality.map(({ label, value }) => (
            <li key={label} className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
              <strong>{label}:</strong> {value}/100
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-4">Behaviour & Habits</h2>
        <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
          <li>Frequently comments in meme and casual discussion subreddits.</li>
          <li>Engages with funny and weird posts.</li>
          <li>Short, humorous comment style.</li>
          <li>Active user but not overly engaged in debates or serious posts.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-4">Frustrations</h2>
        <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
          <li>Annoyed by Reddit toxicity or downvote brigades.</li>
          <li>Dislikes spam or low-quality meme reposts.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-indigo-800 border-b-2 border-indigo-300 pb-2 mb-4">Goals & Needs</h2>
        <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
          <li>To have fun and engage with relatable content.</li>
          <li>To casually connect with like-minded Redditors.</li>
          <li>To find humor and light-hearted discussions online.</li>
        </ul>
      </section>

      <blockquote className="mt-10 border-l-4 border-indigo-500 pl-4 italic text-indigo-700 bg-indigo-50 p-4 rounded-xl shadow">
        "Reddit's just better with a weird post and a good laugh."
      </blockquote>
    </div>
  );
};

export default PersonaKojied;
