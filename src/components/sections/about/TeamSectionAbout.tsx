// src/components/sections/about/TeamSectionAbout.tsx

// Let's create an array of placeholders. This makes it easy to change the number of team members later.
const teamMembers = Array.from({ length: 6 }); // Creates an array with 6 empty slots

function TeamSectionAbout() {
  return (
    <section className="bg-purple-50 py-20 px-4 text-center">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800">Team</h2>
        <p className="text-lg text-gray-600 mt-4">
          Dedication. Expertise. Passion.
        </p>

        {/* Team Members Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4">
                {/* This is a placeholder for the member's image */}
              </div>
              <h3 className="text-xl font-bold text-gray-800">Member Name</h3>
              <p className="text-gray-500">Member Role</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSectionAbout;