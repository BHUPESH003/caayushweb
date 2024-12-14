import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TeamMemberPopup } from "@/components/team-member-popup";
import AyushImg from "../assets/Ayush_img.jpeg";
import NarenderImg from "../assets/Narender_Kumar.jpeg";
import rohitImg from "../assets/CS_Rohit.jpeg";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ayush Ahuja",
    position: "C.A., Firm Director",
    image: AyushImg,
    description:
      "C.A. Ayush Ahuja as a sole proprietor in the year 2019. Since incepƟon, he has served clients with principles of hard work and integrity. He believed in having a practical approach and ensured all assignments reached their logical conclusion. He has been the guiding force of the team with his varied experience of over 8 years in the field of accounting, auditing, taxation, advisory, management and legal consultancy. Today, as a C.A. firm, we have an edge due to the unification of experience and youth. Each member specializes in a different area of the profession which gives the clients an advantage of specialization under a single roof. Over the past years the firm has built its reputation and stands tall as one of the trusted C.A. firms.",
    linkedin: "https://in.linkedin.com/in/ca-ayush-ahuja-39a34b1a7",
  },
  {
    name: "Narender Kumar ",
    position: "Company Secretary",
    image: NarenderImg,
    description:
      "Narender Kumar  is a well-known Practising Company Secretary who has been practising since 2014. Enriched with experience of over one & half decades. During these many years of gruelling, penetrating & successful experience in the Secretarial & Legal fields, Narender Kumar earned enviable reputation of providing knowledge-based services to various clients in the fields of Corporate Laws & Compliances.",
    linkedin: "https://in.linkedin.com/in/narender-kumar-5b872b30",
  },
  {
    name: "CS Rohit Sharma",
    position: "ACS , CMA (US), MCOM, MBA, LLB, B.Com, IFRS",
    image: rohitImg,
    description: `A dedicated and results-driven professional with a dual qualification in Company Secretaryship (CS) and Certified Management Accountant (CMA) - US, showcasing a strong blend of legal, financial, and strategic expertise. Adept at ensuring corporate compliance, governance, and risk management, while also excelling in financial planning, analysis, and decision support on a global scale. \n With a global outlook and a commitment to excellence, his profile embodies the perfect blend of technical expertise and strategic acumen to drive business success in today's competitive landscape.`,
    linkedin: "https://in.linkedin.com/in/ca-ayush-ahuja-39a34b1a7",
  },
  // {
  //   name: "Sylvia Mortisova - BusDee",
  //   position: "Talent Advisor, Founder",
  //   image: AyushImg,
  //   description:
  //     "Sylvia is a visionary talent acquisition specialist and entrepreneur. Her unique approach to identifying and nurturing talent has helped numerous startups build world-class teams from the ground up.",
  //   linkedin: "https://www.linkedin.com/in/sylvia-mortisova",
  // },
  // {
  //   name: "James Rivera - Moore.io",
  //   position: "Vertical Marketing",
  //   image: AyushImg,
  //   description:
  //     "James is a strategic marketer with deep expertise in vertical-specific solutions. His data-driven approach and industry insights have consistently delivered exceptional results across various sectors.",
  //   linkedin: "https://www.linkedin.com/in/james-rivera",
  // },
  // {
  //   name: "Jane O'hara - Neem.co",
  //   position: "Head of People's Operations",
  //   image: AyushImg,
  //   description:
  //     "Jane is an accomplished HR professional known for creating positive and productive work environments. Her innovative people-first strategies have resulted in high employee engagement and retention rates across multiple organizations.",
  //   linkedin: "https://www.linkedin.com/in/jane-ohara",
  // },
];

export function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Expert Team</h1>
            <p className="text-xl text-gray-300">
              Leading the Way in Accounting Services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-none">
                <CardContent className="p-6">
                  <div className="relative h-[300px] mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl text-white font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{member.position}</p>
                  <Button
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => setSelectedMember(member)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div style={{ overflowY: "auto" }}>
        {selectedMember && (
          <TeamMemberPopup
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </div>
  );
}
