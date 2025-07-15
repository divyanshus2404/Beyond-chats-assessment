import React from "react";

const PersonaHungryMove = () => {
  const motivations = [
    { label: "Science", value: 91 },
    { label: "Education", value: 88 },
    { label: "Technology", value: 81 },
  ];

  const personality = [
    { label: "Introvert", value: 70 },
    { label: "Extrovert", value: 30 },
    { label: "Thinking", value: 70 },
    { label: "Feeling", value: 30 },
    { label: "Judging", value: 70 },
    { label: "Perceiving", value: 30 },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-orange-50 to-yellow-100 shadow-2xl rounded-3xl mt-10 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-orange-600">u/Hungry-Move-6603</h1>
          <p className="mt-3 text-sm text-gray-700 leading-6">
            <strong>Tier:</strong> <span className="text-green-600 font-semibold">Active Redditor</span><br />
            <strong>Archetype:</strong> The Explorer 🌍<br />
            <strong>Sentiment:</strong> Positive
          </p>
        </div>
        <img
          src="k.png"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-lg mt-4 sm:mt-0 transition-transform duration-300 hover:scale-105"
        />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-300 pb-2 mb-4">Traits</h2>
        <div className="flex flex-wrap gap-3">
          {["Curious", "Helpful", "Supportive", "Logical"].map(trait => (
            <span
              key={trait}
              className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-yellow-200 cursor-pointer"
            >
              {trait}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-300 pb-2 mb-4">Motivations</h2>
        {motivations.map(({ label, value }) => (
          <div key={label} className="mb-4">
            <div className="flex justify-between text-sm font-medium text-gray-800">
              <span>{label}</span>
              <span>{value}/100</span>
            </div>
            <div className="w-full bg-orange-100 h-3 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-400 to-yellow-500 h-full transition-all duration-500"
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-300 pb-2 mb-4">Personality</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800">
          {personality.map(({ label, value }) => (
            <li key={label} className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition">
              <strong>{label}:</strong> {value}/100
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-300 pb-2 mb-4">Habits</h2>
        <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
          <li>Posts frequently in niche subreddits.</li>
          <li>Engages with others through comments.</li>
          <li>Mixes opinion with helpfulness.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-300 pb-2 mb-4">Frustrations</h2>
        <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
          <li>Low-effort content or spam.</li>
          <li>Overgeneralized takes or poor reasoning.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-orange-800 border-b-2 border-orange-300 pb-2 mb-4">Goals</h2>
        <ul className="list-disc pl-6 text-sm text-gray-800 space-y-2">
          <li>To connect with thoughtful users.</li>
          <li>To explore new ideas and perspectives.</li>
        </ul>
      </section>

      <blockquote className="mt-10 border-l-4 border-orange-500 pl-4 italic text-orange-700 bg-orange-50 p-4 rounded-xl shadow">
        "Curiosity and insight shape the world we engage with every day..."
      </blockquote>
    </div>
  );
};

export default PersonaHungryMove;
