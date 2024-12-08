import { Card, CardContent } from "@/components/ui/card";
import AboutUsImg from "../assets/about_us.avif";
export function WhoWeArePage() {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "50+", label: "Dedicated Team Members" },
    { number: "100%", label: "Client Satisfaction Rate" },
  ];

  const services = [
    {
      title: "Direct Taxes",
      description:
        "The taxa on laws are ge ng more and more complex and the recent times have shown an increasing trend of business en es relying on tax professionals for Tax Planning and advisory related services. It is our endeavour to formulate an ideal tax strategy for our clients which is compliant with the law, legi mately reduces the tax bills and yet is not prone to invite li ga on. Our regulatory compliance services ensure that the clients a ain a high level of stringent tax law compliances.",
      icon: "📊",
    },
    {
      title: "Indirect Taxes",
      description:
        "The laws rela ng to indirect taxa on in India are in the state of evolu on with constant reforms, altera ons, and amendments. Further, these indirect taxes are levied at the Na onal level as well as the State level, making their compliance more complicated for the management. We offer a wide area of services for indirect taxes at the State as well as Na onal Level, helping the management to be updated with the evolving laws and stay focused on the business of the entry.",
      icon: "💰",
    },
    {
      title: "Advisory",
      description:
        "We offer mul-disciplinary advisory services to clients in our main areas of prac ce i.e. taxa on and regulatory. Besides we also offer advisory solu ons on partnership and LLP laws, socie es and trusts laws etc. Our integrated approach which involves combining our skills with the understanding of clients' ambi ons, business and environment extends a clear commercial advantage.",
      icon: "📈",
      list: [
        "Taxation & Regulatory Matters",
        "Financial Advisory",
        "Mergers & Acquisitions",
        "Business Advisory",
        "Valuations",
      ],
    },
    {
      title: "Business Start-up & Support",
      description:
        "Today's business environment requires en es to be constantly involved in their business ac vi es making it difficult for the management to par cipate in support services. Corporates are outsourcing various finance and accoun ng processes with a view to streamline respec ve processes and obtain consistency, uniformity, and stronger controls.",
      icon: "🚀",
      list: [
        "Incorporation of Companies",
        "Acquiring necessary Registrations and Licenses",
        "Recruitment Support",
        "Management Accounting",
        "Assistance for company secretarial matters",
      ],
    },
  ];

  const clients = [
    "Manufacturing",
    "Retailing & Distribution",
    "E-Commerce Companies",
    "Education and Welfare",
    "Government Companies",
    "Trading",
    "Logistics",
    "Banking",
    "Real Estate and Construction",
    "Various Associations / Societies / Trust",
  ];
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                About Ayush Ahuja & Co.
              </h1>
              <p className="text-gray-300">
                Ayush Ahuja & Co. is a leading chartered accountant firm
                dedicated to providing a wide range of financial services. Our
                team is committed to delivering exceptional accounting,
                taxation, portfolio management, auditing services, real estate
                consultancy, ROC compliance, company incorporation, and
                licensing solutions. With a focus on taxation and licensing
                expertise, we stand out in our service offerings. Our
                professional approach and in-depth industry knowledge set us
                apart, making us the preferred choice for businesses seeking
                comprehensive financial solutions.
              </p>
            </div>
            <div className="relative h-[600px]">
              <img
                src={AboutUsImg}
                alt="About Us"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-purple-600/10 border-none">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-500">
                      {stat.number}
                    </div>
                    <div className="text-sm mt-2 text-white">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <p className="text-gray-300">
                At Ayush Ahuja & Co., our commitment to excellence is reflected
                in our extensive experience of over 10 years, serving more than
                500 satisfied clients. With a dedicated team of 50+
                professionals, we maintain a 100% client satisfaction rate. Our
                success is built on a foundation of trust, expertise, and
                personalized service. We continuously strive to exceed
                expectations and deliver innovative financial solutions that
                drive our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-none">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                  {service.list && service.list.length > 0 && (
                    <ul className="list-disc list-inside mt-4">
                      {service.list.map((item, itemIndex) => (
                        <li className="text-gray-400" key={itemIndex}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Clients</h2>
          <p className="text-gray-300 text-center mb-8">
            The professional relationships we've built are from delivering the
            highest level of service to our esteemed clients. Our clients are
            spread across various industries, each one of them contributing to
            the success of their businesses by receiving our exceptional
            professional service.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg text-center"
              >
                <p className="text-white">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
