import { X } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
  linkedin: string;
}

interface TeamMemberPopupProps {
  member: TeamMember;
  onClose: () => void;
}
export function TeamMemberPopup({ member, onClose }: TeamMemberPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Outer scrollable container */}
      <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{member.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{member.position}</h3>
            <p className="text-gray-300 mb-4">{member.description}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
