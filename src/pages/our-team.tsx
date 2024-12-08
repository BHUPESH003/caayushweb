import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TeamMemberPopup } from "@/components/team-member-popup";
import AyushImg from "../assets/staff_1.webp";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ryan Pitt - Francis & Co",
    position: "VP, Product Marketing",
    image: AyushImg,
    description:
      "Ryan is an experienced product marketing professional with a passion for driving growth and innovation. With over a decade of experience in the tech industry, he has successfully launched and marketed numerous products, consistently exceeding revenue targets.",
    linkedin: "https://www.linkedin.com/in/ryan-pitt",
  },
  {
    name: "Lea Johnson - Gracier.io",
    position: "Head of Customer Care",
    image: AyushImg,
    description:
      "Lea is a customer-centric leader with a proven track record of building and managing high-performing support teams. Her innovative approaches to customer care have resulted in industry-leading satisfaction rates and customer retention.",
    linkedin: "https://www.linkedin.com/in/lea-johnson",
  },
  {
    name: "Jay Anthony - Trendall",
    position: "Global Development Lead",
    image: AyushImg,
    description:
      "Jay is a seasoned software engineer and development leader with expertise in scaling global teams. His technical acumen and strategic thinking have been instrumental in delivering complex projects across multiple markets.",
    linkedin: "https://www.linkedin.com/in/jay-anthony",
  },
  {
    name: "Sylvia Mortisova - BusDee",
    position: "Talent Advisor, Founder",
    image: AyushImg,
    description:
      "Sylvia is a visionary talent acquisition specialist and entrepreneur. Her unique approach to identifying and nurturing talent has helped numerous startups build world-class teams from the ground up.",
    linkedin: "https://www.linkedin.com/in/sylvia-mortisova",
  },
  {
    name: "James Rivera - Moore.io",
    position: "Vertical Marketing",
    image: AyushImg,
    description:
      "James is a strategic marketer with deep expertise in vertical-specific solutions. His data-driven approach and industry insights have consistently delivered exceptional results across various sectors.",
    linkedin: "https://www.linkedin.com/in/james-rivera",
  },
  {
    name: "Jane O'hara - Neem.co",
    position: "Head of People's Operations",
    image: AyushImg,
    description:
      "Jane is an accomplished HR professional known for creating positive and productive work environments. Her innovative people-first strategies have resulted in high employee engagement and retention rates across multiple organizations.",
    linkedin: "https://www.linkedin.com/in/jane-ohara",
  },
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
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
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

      {selectedMember && (
        <TeamMemberPopup
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}
