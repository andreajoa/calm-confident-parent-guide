import { useState } from "react";
import { X, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles = [
    {
      title: "5 Early Signs Your Child Might Have ADHD",
      excerpt: "Recognizing ADHD symptoms early can make a huge difference in your child's development and your family's well-being.",
      content: `
        <h3>Understanding ADHD: The Early Warning Signs</h3>
        <p>ADHD affects millions of children worldwide, yet many parents struggle to recognize the early signs. Here are five key indicators that your child might have ADHD:</p>
        
        <h4>1. Difficulty Sustaining Attention</h4>
        <p>Your child struggles to focus on tasks or activities for age-appropriate periods. They may start projects but rarely finish them, or seem to "zone out" frequently during conversations or instructions.</p>
        
        <h4>2. Hyperactivity Beyond Normal Energy</h4>
        <p>While all children are energetic, ADHD hyperactivity is more intense. Your child might have trouble sitting still, fidget excessively, or seem to be "driven by a motor."</p>
        
        <h4>3. Impulsivity in Actions and Words</h4>
        <p>Your child acts without thinking, interrupts conversations frequently, has trouble waiting their turn, or makes decisions without considering consequences.</p>
        
        <h4>4. Emotional Dysregulation</h4>
        <p>Intense emotional reactions that seem disproportionate to the situation, difficulty calming down from upsets, or extreme mood swings throughout the day.</p>
        
        <h4>5. Executive Functioning Challenges</h4>
        <p>Trouble with organization, time management, following multi-step instructions, or remembering daily routines and responsibilities.</p>
        
        <p><strong>Next Steps:</strong> If you recognize these signs, consult with your pediatrician or a qualified mental health professional. Early intervention can significantly improve outcomes for children with ADHD.</p>
      `,
      externalLink: "https://chadd.org"
    },
    {
      title: "ADHD vs Autism: Key Differences Every Parent Should Know",
      excerpt: "Understanding the distinctions between ADHD and autism can help you better support your child's unique needs.",
      content: `
        <h3>ADHD vs Autism: Understanding the Differences</h3>
        <p>ADHD and autism can share some similar characteristics, which can make diagnosis challenging. However, understanding the key differences can help you better advocate for your child.</p>
        
        <h4>Attention and Focus</h4>
        <p><strong>ADHD:</strong> Difficulty sustaining attention across various activities, easily distracted by external stimuli.</p>
        <p><strong>Autism:</strong> May have intense focus on preferred activities but struggle to shift attention to non-preferred tasks.</p>
        
        <h4>Social Communication</h4>
        <p><strong>ADHD:</strong> May struggle with social cues due to impulsivity or inattention, but typically desires social connection.</p>
        <p><strong>Autism:</strong> May have fundamental challenges with social communication, including nonverbal communication and developing relationships.</p>
        
        <h4>Sensory Processing</h4>
        <p><strong>ADHD:</strong> May seek sensory input for regulation or be easily overwhelmed by environmental stimuli.</p>
        <p><strong>Autism:</strong> Often has more pronounced sensory sensitivities or seeking behaviors that significantly impact daily functioning.</p>
        
        <h4>Repetitive Behaviors</h4>
        <p><strong>ADHD:</strong> May have repetitive movements when hyperactive or anxious, but these are typically situational.</p>
        <p><strong>Autism:</strong> Repetitive behaviors are often more rigid and serve specific regulatory or self-soothing purposes.</p>
        
        <h4>Co-occurrence</h4>
        <p>It's important to note that a child can have both ADHD and autism. Research shows that up to 80% of individuals with autism may also meet criteria for ADHD.</p>
        
        <p><strong>Remember:</strong> Only qualified professionals can make these diagnoses. This information is meant to help you understand your child better and communicate more effectively with healthcare providers.</p>
      `,
      externalLink: "https://www.understood.org"
    },
    {
      title: "How to Prepare for Your Child's IEP Meeting",
      excerpt: "Get the most out of your IEP meetings with this comprehensive preparation guide from education advocates.",
      content: `
        <h3>Mastering IEP Meetings: A Parent's Preparation Guide</h3>
        <p>IEP meetings can feel overwhelming, but proper preparation empowers you to advocate effectively for your child's needs.</p>
        
        <h4>Before the Meeting</h4>
        <p><strong>Gather Documentation:</strong> Collect recent evaluations, work samples, behavior charts, and any outside professional reports.</p>
        <p><strong>Review Current IEP:</strong> Understand what's working and what isn't. Note specific areas of concern or success.</p>
        <p><strong>Prepare Your Priorities:</strong> List your top 3-5 concerns or goals for your child. Be specific and measurable.</p>
        
        <h4>Know Your Rights</h4>
        <p>You have the right to:</p>
        <ul>
          <li>Bring an advocate or support person</li>
          <li>Request additional evaluations</li>
          <li>Disagree with recommendations</li>
          <li>Request a copy of all documents before the meeting</li>
          <li>Ask for clarification or take breaks</li>
        </ul>
        
        <h4>During the Meeting</h4>
        <p><strong>Take Notes:</strong> Write down key points, decisions, and action items. Ask for clarification when needed.</p>
        <p><strong>Stay Focused:</strong> Keep discussions centered on your child's educational needs and how to meet them.</p>
        <p><strong>Be Collaborative:</strong> Work with the team while advocating for your child's best interests.</p>
        
        <h4>After the Meeting</h4>
        <p><strong>Review the Written IEP:</strong> Ensure it accurately reflects what was discussed and agreed upon.</p>
        <p><strong>Follow Up:</strong> Monitor implementation and communicate regularly with teachers about progress.</p>
        
        <p><strong>Remember:</strong> You are the expert on your child. Your input is valuable and necessary for creating an effective IEP.</p>
      `,
      externalLink: "https://additudemag.com"
    },
    {
      title: "Sensory Overload: 3-Minute Calming Techniques",
      excerpt: "Quick, effective strategies to help your child regulate when sensory overwhelm strikes.",
      content: `
        <h3>Quick Sensory Regulation: 3-Minute Calming Techniques</h3>
        <p>When sensory overload hits, you need tools that work fast. These evidence-based techniques can help your child find calm in just minutes.</p>
        
        <h4>The 5-4-3-2-1 Grounding Technique</h4>
        <p>Help your child identify:</p>
        <ul>
          <li>5 things they can see</li>
          <li>4 things they can touch</li>
          <li>3 things they can hear</li>
          <li>2 things they can smell</li>
          <li>1 thing they can taste</li>
        </ul>
        <p>This technique redirects attention and engages the rational brain.</p>
        
        <h4>Deep Pressure Input</h4>
        <p><strong>Bear Hugs:</strong> Firm, consistent pressure for 10-20 seconds can be incredibly calming.</p>
        <p><strong>Weighted Items:</strong> A heavy blanket, weighted lap pad, or even a backpack with books can provide regulating input.</p>
        <p><strong>Wall Pushes:</strong> Have your child push against a wall with their hands for 30 seconds.</p>
        
        <h4>Breathing Techniques</h4>
        <p><strong>Box Breathing:</strong> Breathe in for 4, hold for 4, out for 4, hold for 4. Repeat 4 times.</p>
        <p><strong>Belly Breathing:</strong> Place one hand on chest, one on belly. Focus on making the belly hand move more than the chest hand.</p>
        
        <h4>Environmental Modifications</h4>
        <p><strong>Reduce Stimuli:</strong> Dim lights, lower volume, remove visual clutter.</p>
        <p><strong>Create Safe Spaces:</strong> A quiet corner with soft textures and calming items.</p>
        <p><strong>Use Tools:</strong> Noise-canceling headphones, sunglasses, or fidget items.</p>
        
        <h4>Movement for Regulation</h4>
        <p><strong>Jump or March:</strong> 10 jumps or marching in place can reset the nervous system.</p>
        <p><strong>Yoga Poses:</strong> Child's pose or downward dog provide proprioceptive input.</p>
        
        <p><strong>Pro Tip:</strong> Practice these techniques when your child is calm so they're familiar with them when needed most.</p>
      `,
      externalLink: "https://www.cdc.gov/ncbddd/adhd"
    },
    {
      title: "Building Morning Routines That Actually Work",
      excerpt: "Transform chaotic mornings into smooth starts with these proven routine-building strategies.",
      content: `
        <h3>Morning Routines That Stick: A Step-by-Step Guide</h3>
        <p>Successful mornings don't happen by accident. They require intentional planning and consistent implementation.</p>
        
        <h4>Start the Night Before</h4>
        <p><strong>Evening Prep:</strong> Lay out clothes, pack backpacks, prepare breakfast items, and charge devices.</p>
        <p><strong>Visual Schedules:</strong> Create picture schedules showing each morning step in order.</p>
        <p><strong>Time Buffers:</strong> Build in extra time for unexpected delays or processing needs.</p>
        
        <h4>Wake-Up Strategies</h4>
        <p><strong>Consistent Sleep Schedule:</strong> Same bedtime and wake time every day, including weekends.</p>
        <p><strong>Light Exposure:</strong> Open curtains immediately or use a sunrise alarm clock.</p>
        <p><strong>Gentle Transitions:</strong> Allow 10-15 minutes of quiet waking before expecting action.</p>
        
        <h4>Breaking Down Tasks</h4>
        <p>Instead of "Get ready for school," try:</p>
        <ul>
          <li>Get dressed</li>
          <li>Brush teeth</li>
          <li>Eat breakfast</li>
          <li>Pack backpack</li>
          <li>Put on shoes</li>
        </ul>
        
        <h4>Motivation and Rewards</h4>
        <p><strong>Choice Points:</strong> "Do you want to get dressed first or eat breakfast first?"</p>
        <p><strong>Visual Progress:</strong> Checklists with boxes to check or pictures to move.</p>
        <p><strong>Celebration:</strong> Acknowledge successful completions, even small ones.</p>
        
        <h4>Troubleshooting Common Issues</h4>
        <p><strong>Slow Processors:</strong> Start earlier, use timers, break tasks into smaller steps.</p>
        <p><strong>Resistance:</strong> Involve child in creating the routine, offer choices within structure.</p>
        <p><strong>Forgetfulness:</strong> Use visual cues, songs, or verbal prompts consistently.</p>
        
        <h4>Implementation Tips</h4>
        <p><strong>Start Small:</strong> Implement one new element at a time.</p>
        <p><strong>Be Consistent:</strong> Follow the same routine every day for at least 2-3 weeks.</p>
        <p><strong>Stay Flexible:</strong> Adjust based on what's working and what isn't.</p>
        
        <p><strong>Remember:</strong> It takes time to establish new habits. Be patient with yourself and your child during the transition period.</p>
      `,
      externalLink: "https://chadd.org"
    },
    {
      title: "When School Says 'No': Your Rights as a Parent",
      excerpt: "Understanding your legal rights and advocacy options when schools are resistant to providing appropriate support.",
      content: `
        <h3>Know Your Rights: Advocating When Schools Resist</h3>
        <p>Every child deserves appropriate educational support. When schools resist, knowing your rights empowers effective advocacy.</p>
        
        <h4>Federal Laws Protecting Your Child</h4>
        <p><strong>IDEA (Individuals with Disabilities Education Act):</strong> Ensures free, appropriate public education for children with disabilities.</p>
        <p><strong>Section 504:</strong> Prohibits discrimination and ensures accommodations for students with disabilities.</p>
        <p><strong>ADA (Americans with Disabilities Act):</strong> Provides broader civil rights protections.</p>
        
        <h4>Your Fundamental Rights</h4>
        <ul>
          <li>Request evaluations at any time</li>
          <li>Participate meaningfully in all educational decisions</li>
          <li>Access your child's educational records</li>
          <li>Bring advocates to meetings</li>
          <li>Request independent educational evaluations</li>
          <li>File complaints and request due process hearings</li>
        </ul>
        
        <h4>When Schools Say No to Evaluations</h4>
        <p><strong>Put It in Writing:</strong> Email your request and ask for written explanation of denial.</p>
        <p><strong>Know the Timeline:</strong> Schools have specific timeframes to respond (typically 60 days).</p>
        <p><strong>Appeal Options:</strong> You can request mediation or file complaints with state education departments.</p>
        
        <h4>When Schools Say No to Services</h4>
        <p><strong>Document Everything:</strong> Keep records of all communications and your child's struggles.</p>
        <p><strong>Request Prior Written Notice:</strong> Schools must explain in writing why they're refusing services.</p>
        <p><strong>Know Your Options:</strong> You can request IEP meetings, file complaints, or pursue due process.</p>
        
        <h4>Building Your Case</h4>
        <p><strong>Gather Evidence:</strong> Work samples, teacher reports, outside evaluations, and documentation of struggles.</p>
        <p><strong>Get Support:</strong> Connect with parent training centers, disability organizations, or educational advocates.</p>
        <p><strong>Stay Professional:</strong> Maintain collaborative relationships while firmly advocating for your child.</p>
        
        <h4>Resources for Support</h4>
        <p><strong>Parent Training and Information Centers:</strong> Free resources in every state.</p>
        <p><strong>Disability Rights Organizations:</strong> Legal advocacy and support.</p>
        <p><strong>Educational Advocates:</strong> Professional support for navigating the system.</p>
        
        <p><strong>Remember:</strong> You are your child's best advocate. Trust your instincts and don't give up when you know your child needs support.</p>
      `,
      externalLink: "https://www.understood.org"
    }
  ];

  return (
    <>
      <section id="resources" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-12">
            <div className="space-y-4 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Free Resources to <span className="text-primary">Help Right Now</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Evidence-based articles and practical guides to support your family's journey. Click any article to read the full content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {articles.map((article, index) => (
                <div 
                  key={index} 
                  className="card-elevated p-6 space-y-4 cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedArticle(index)}
                >
                  <h3 className="text-xl font-semibold text-foreground text-left">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-left">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <Button variant="outline" size="sm">
                      Read Full Article
                    </Button>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArticle !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-left">
                  {articles[selectedArticle].title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div 
                  className="prose prose-lg max-w-none text-left"
                  dangerouslySetInnerHTML={{ 
                    __html: articles[selectedArticle].content.replace(/\n/g, '<br>') 
                  }}
                />
                
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Button 
                      asChild
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <a 
                        href={articles[selectedArticle].externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Read More at Source</span>
                      </a>
                    </Button>
                  </div>
                  
                  {/* Email Capture */}
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <h4 className="text-lg font-semibold">Get More Free Resources</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Join our newsletter for weekly tips and exclusive resources for ADHD and autism families.
                    </p>
                    <div id="article-email-form">
                      <script 
                        async 
                        src="https://eocampaign1.com/form/72fb70c4-663b-11f0-b017-738da375565f.js" 
                        data-form="72fb70c4-663b-11f0-b017-738da375565f"
                      ></script>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArticlesSection;