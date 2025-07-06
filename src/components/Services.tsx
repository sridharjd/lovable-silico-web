
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, FlaskConical, Activity, FileText, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Atom className="h-8 w-8 text-blue-900" />,
      title: "Molecular Docking & Virtual Screening",
      description: "High-throughput virtual screening and precise molecular docking studies to identify potential drug candidates and understand protein-ligand interactions.",
      features: ["Structure-based drug design", "High-throughput screening", "Binding affinity prediction", "Hit optimization"]
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-blue-900" />,
      title: "ADME & Toxicity Prediction",
      description: "Comprehensive prediction of Absorption, Distribution, Metabolism, Excretion properties and toxicity profiles using advanced computational models.",
      features: ["Pharmacokinetic profiling", "Toxicity assessment", "Drug-drug interactions", "Bioavailability prediction"]
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-900" />,
      title: "Molecular Dynamics (MD) Simulation",
      description: "Advanced MD simulations to study protein dynamics, conformational changes, and molecular behavior in biological systems.",
      features: ["Protein stability analysis", "Conformational dynamics", "Free energy calculations", "Membrane simulations"]
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-900" />,
      title: "Scientific Writing & Publication Support",
      description: "Expert assistance in manuscript preparation, scientific writing, and publication support to communicate your research effectively.",
      features: ["Manuscript writing", "Data visualization", "Journal selection", "Peer review support"]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-900" />,
      title: "Results Analysis & Discussion Consultation",
      description: "In-depth analysis of computational results with expert interpretation and strategic guidance for your research direction.",
      features: ["Data interpretation", "Statistical analysis", "Research strategy", "Method optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive computational biology and pharmaceutical science services 
            tailored to accelerate your research and discovery process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
