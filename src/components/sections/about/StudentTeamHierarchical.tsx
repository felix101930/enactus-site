// src/components/sections/about/StudentTeamHierarchical.tsx

import { motion } from 'framer-motion';

// --- TEAM DATA ---
import placeholderImage from '../../../assets/placeholders/placeholder-profile.jpg';

const teamData = {
    coPresidents: [
        { name: 'Keshav Sharma', role: 'Co-President', image: placeholderImage },
        { name: 'Yumnaa Farooq', role: 'Co-President', image: placeholderImage }
    ],
    operations: {
        vp: { name: 'Veer Rajgor', role: 'VP of Operations', image: placeholderImage },
        directors: [
            { name: 'Nisarg Bhatt', role: 'Finance Director', image: placeholderImage },
            { name: 'Cindy Ngyuen', role: 'Events Director', image: placeholderImage },
            { name: 'Felix Montanez', role: 'R&D Co-Director', image: placeholderImage },
            { name: 'Anastasiia Davydova', role: 'Marketing Director', image: placeholderImage },
            { name: 'Silve Rahman', role: 'HR Director', image: placeholderImage },
        ]
    },
    projects: {
        vp: { name: 'Yared Okubay', role: 'VP of Enterprises', image: placeholderImage },
        managers: [
            { name: 'Yixuan (Bleyle) Liu', role: 'Case Clash PM', image: placeholderImage },
            { name: 'Kavya', role: 'Case Clash PM', image: placeholderImage },
        ]
    }
};

const MemberCard = ({ name, role, image, isLarge = false }: { name: string, role: string, image: string, isLarge?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1 ${isLarge ? 'w-64' : 'w-48'}`}
    >
        <div className={`relative mb-3 rounded-full overflow-hidden border-4 ${isLarge ? 'w-24 h-24 border-yellow-400' : 'w-20 h-20 border-gray-100'}`}>
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className={`font-bold text-gray-900 leading-tight ${isLarge ? 'text-lg' : 'text-base'}`}>{name}</h3>
        <p className="text-sm font-medium text-yellow-600 uppercase tracking-wider mt-1">{role}</p>
    </motion.div>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="flex flex-col items-center mb-8">
        <div className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-lg shadow-md mb-2">
            {title}
        </div>
        <div className="text-gray-900 font-bold text-xl">{subtitle}</div>
    </div>
);

const StudentTeamHierarchical = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight italic">MEET THE TEAM</h2>
                    <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Level 1: Co-Presidents */}
                <div className="flex flex-wrap justify-center gap-8 mb-20 relative">
                    {teamData.coPresidents.map((p) => (
                        <MemberCard key={p.name} {...p} isLarge={true} />
                    ))}
                    {/* Vertical line down from presidents */}
                    <div className="absolute -bottom-12 left-1/2 w-1 h-12 bg-gray-300 -translate-x-1/2 hidden md:block"></div>
                </div>

                {/* Level 2: The Two Branches */}
                <div className="w-full relative flex flex-col md:flex-row justify-center gap-16 md:gap-32">

                    {/* Connecting Horizontal Line */}
                    <div className="absolute top-[-3rem] left-1/4 right-1/4 h-1 bg-gray-300 hidden md:block"></div>
                    {/* Vertical lines down to branches */}
                    <div className="absolute top-[-3rem] left-1/4 w-1 h-8 bg-gray-300 hidden md:block"></div>
                    <div className="absolute top-[-3rem] right-1/4 w-1 h-8 bg-gray-300 hidden md:block"></div>

                    {/* Left Branch: Operations */}
                    <div className="flex-1 flex flex-col items-center">
                        <SectionHeader title="OPERATIONS" subtitle={teamData.operations.vp.name} />
                        <div className="mb-12">
                            <MemberCard {...teamData.operations.vp} isLarge={true} />
                        </div>

                        {/* Directors Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamData.operations.directors.map((d) => (
                                <MemberCard key={d.name} {...d} />
                            ))}
                        </div>
                    </div>

                    {/* Right Branch: Projects */}
                    <div className="flex-1 flex flex-col items-center">
                        <SectionHeader title="PROJECTS" subtitle={teamData.projects.vp.name} />
                        <div className="mb-12">
                            <MemberCard {...teamData.projects.vp} isLarge={true} />
                        </div>

                        {/* Managers Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamData.projects.managers.map((m) => (
                                <MemberCard key={m.name} {...m} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default StudentTeamHierarchical;
