import { useState } from "react";
import { MapPin, Phone, Mail, Users, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ResourceLocatorSection = () => {
  const [selectedState, setSelectedState] = useState("");
  const [showResults, setShowResults] = useState(false);

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const provinces = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", 
    "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", 
    "Quebec", "Saskatchewan", "Yukon"
  ];

  const sampleResources = [
    {
      type: "Support Group",
      name: "ADHD Parents Network",
      location: "Downtown Community Center",
      contact: "(555) 123-4567",
      email: "info@adhdparents.org",
      description: "Weekly support meetings for parents of ADHD children"
    },
    {
      type: "Specialist",
      name: "Dr. Sarah Johnson - Developmental Pediatrician",
      location: "Children's Medical Center",
      contact: "(555) 234-5678",
      email: "appointments@childrenscenter.org",
      description: "Specializes in ADHD and autism diagnosis and treatment"
    },
    {
      type: "Educational Advocate",
      name: "Learning Rights Advocacy",
      location: "Legal Aid Building, Suite 200",
      contact: "(555) 345-6789",
      email: "help@learningrights.org",
      description: "Free advocacy services for IEP and 504 plan development"
    },
    {
      type: "Parent Meetup",
      name: "Neurodivergent Families Connect",
      location: "Various Parks and Recreation Centers",
      contact: "Group organizer: Maria",
      email: "maria@neurodivergentfamilies.com",
      description: "Monthly social gatherings for families with neurodivergent children"
    }
  ];

  const handleFindResources = () => {
    if (selectedState) {
      setShowResults(true);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Find Local Support in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Your Area</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with local resources, support groups, specialists, and other families in your community.
            </p>
          </div>

          {/* Search Interface */}
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-lg font-semibold text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-cyan-400" />
                  Select Your State/Province:
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">United States</h4>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white">
                        <SelectValue placeholder="Choose a state" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/10">
                        {states.map((state) => (
                          <SelectItem key={state} value={state} className="text-white hover:bg-white/10">
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Canada</h4>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white">
                        <SelectValue placeholder="Choose a province" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/10">
                        {provinces.map((province) => (
                          <SelectItem key={province} value={province} className="text-white hover:bg-white/10">
                            {province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleFindResources}
                disabled={!selectedState}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-orange-500 hover:to-pink-500 font-bold py-6 rounded-full shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Find Resources
              </Button>
            </div>
          </div>

          {/* Results */}
          {showResults && (
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Resources in {selectedState}
                </h3>
                <p className="text-gray-400">
                  Here are some local resources to support your family's journey:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {sampleResources.map((resource, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 text-left hover:bg-white/10 hover:border-cyan-500/50 transition-all transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/50">
                          {resource.type}
                        </div>
                        <h4 className="text-lg font-semibold text-white">
                          {resource.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {resource.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm border-t border-white/10 pt-4">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="h-4 w-4 text-cyan-400" />
                        <span>{resource.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Phone className="h-4 w-4 text-cyan-400" />
                        <span>{resource.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Mail className="h-4 w-4 text-cyan-400" />
                        <span>{resource.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-6 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
                <Users className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Need Personalized Help?
                </h4>
                <p className="text-gray-300 mb-4">
                  Can't find what you're looking for? Get personalized resource recommendations for your specific situation.
                </p>
                <Button asChild variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                  <a href="mailto:tdahma2@gmail.com">
                    Email tdahma2@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceLocatorSection;
