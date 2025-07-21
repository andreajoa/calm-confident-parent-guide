import { useState } from "react";
import { MapPin, Phone, Mail, Users } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Find Local Support in <span className="text-primary">Your Area</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with local resources, support groups, specialists, and other families in your community.
            </p>
          </div>

          {/* Search Interface */}
          <div className="max-w-2xl mx-auto card-elevated p-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-lg font-semibold text-foreground">
                  Select Your State/Province:
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">United States</h4>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Canada</h4>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a province" />
                      </SelectTrigger>
                      <SelectContent>
                        {provinces.map((province) => (
                          <SelectItem key={province} value={province}>
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
                className="btn-hero w-full"
              >
                Find Resources
              </Button>
            </div>
          </div>

          {/* Results */}
          {showResults && (
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Resources in {selectedState}
                </h3>
                <p className="text-muted-foreground">
                  Here are some local resources to support your family's journey:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {sampleResources.map((resource, index) => (
                  <div 
                    key={index} 
                    className="card-elevated p-6 space-y-4 text-left"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                          {resource.type}
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {resource.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {resource.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{resource.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{resource.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{resource.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center bg-primary/5 p-6 rounded-xl border border-primary/20">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Need Personalized Help?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for? Get personalized resource recommendations for your specific situation.
                </p>
                <Button asChild variant="outline">
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