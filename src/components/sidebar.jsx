import profilePhoto from "../assets/profile/profile-image1.png";
import { profile } from "../data/portfolioData";

function Sidebar() {
  return (
    <aside className="md:w-96 md:sticky md:top-0 md:h-screen bg-[#1c1b19] border-b md:border-b-0 md:border-r border-white/5 p-10 flex flex-col items-center gap-5 text-center">
      <img
        src={profilePhoto}
        alt={profile.name}
        className="w-56 h-60 rounded-2xl object-cover ring-1 ring-white/10"
      />

      <div>
        <h2 className="text-white font-semibold text-3xl">{profile.name}</h2>
        <p className="text-lg text-gray-300 mt-3 leading-tight">
          {profile.sidebarBio}
        </p>
      </div>

      <span className="text-sm text-green-400 bg-green-400/10 px-4 py-1.5 rounded-full">
        ● Available for work
      </span>

      <div className="flex gap-6 mt-2">
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
          </svg>
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#0A66C2] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
          </svg>
        </a>
      </div>

      <a
        href="/Asad_Ali_Mir_resume.pdf"
        download
        className="mt-2 bg-white text-black text-lg font-medium px-6 py-3.5 rounded-lg hover:bg-gray-200 transition w-full"
      >
        Download CV
      </a>
    </aside>
  );
}

export default Sidebar;
