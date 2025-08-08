import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, ArrowRight, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  category: 'autism' | 'adhd';
  weight: number;
}

const screeningQuestions: Question[] = [
  // Autism Screening Questions
  { id: 'a1', text: 'Does your child have difficulty making eye contact during conversations?', category: 'autism', weight: 3 },
  { id: 'a2', text: 'Does your child struggle to understand social cues or nonverbal communication?', category: 'autism', weight: 3 },
  { id: 'a3', text: 'Does your child have intense interests in specific topics or objects?', category: 'autism', weight: 2 },
  { id: 'a4', text: 'Does your child engage in repetitive behaviors or movements?', category: 'autism', weight: 2 },
  { id: 'a5', text: 'Does your child have difficulty with changes in routine or unexpected events?', category: 'autism', weight: 2 },
  { id: 'a6', text: 'Does your child have unusual sensory sensitivities (sound, light, texture)?', category: 'autism', weight: 2 },
  { id: 'a7', text: 'Does your child prefer to play alone rather than with others?', category: 'autism', weight: 2 },
  { id: 'a8', text: 'Does your child have difficulty understanding emotions in themselves or others?', category: 'autism', weight: 2 },
  
  // ADHD Screening Questions
  { id: 'h1', text: 'Does your child have difficulty paying attention to details or makes careless mistakes?', category: 'adhd', weight: 2 },
  { id: 'h2', text: 'Does your child have trouble staying focused on tasks or activities?', category: 'adhd', weight: 3 },
  { id: 'h3', text: 'Does your child seem not to listen when spoken to directly?', category: 'adhd', weight: 2 },
  { id: 'h4', text: 'Does your child fidget, squirm, or have difficulty sitting still?', category: 'adhd', weight: 2 },
  { id: 'h5', text: 'Does your child talk excessively or interrupt others frequently?', category: 'adhd', weight: 2 },
  { id: 'h6', text: 'Does your child have difficulty organizing tasks and activities?', category: 'adhd', weight: 2 },
  { id: 'h7', text: 'Does your child lose things necessary for tasks (toys, assignments, tools)?', category: 'adhd', weight: 2 },
  { id: 'h8', text: 'Is your child easily distracted by external stimuli?', category: 'adhd', weight: 3 },
];

const ScreeningAssessment = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < screeningQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScores = () => {
    const autismScore = screeningQuestions
      .filter(q => q.category === 'autism')
      .reduce((sum, q) => sum + (answers[q.id] || 0) * q.weight, 0);
    
    const adhdScore = screeningQuestions
      .filter(q => q.category === 'adhd')
      .reduce((sum, q) => sum + (answers[q.id] || 0) * q.weight, 0);

    const maxAutismScore = screeningQuestions
      .filter(q => q.category === 'autism')
      .reduce((sum, q) => sum + 4 * q.weight, 0);
    
    const maxAdhdScore = screeningQuestions
      .filter(q => q.category === 'adhd')
      .reduce((sum, q) => sum + 4 * q.weight, 0);

    return {
      autism: Math.round((autismScore / maxAutismScore) * 100),
      adhd: Math.round((adhdScore / maxAdhdScore) * 100)
    };
  };

  const getRiskLevel = (score: number) => {
    if (score < 25) return { level: 'Low', color: 'bg-green-500', description: 'Minimal indicators present' };
    if (score < 50) return { level: 'Moderate', color: 'bg-yellow-500', description: 'Some indicators present' };
    if (score < 75) return { level: 'High', color: 'bg-orange-500', description: 'Multiple indicators present' };
    return { level: 'Very High', color: 'bg-red-500', description: 'Many indicators present' };
  };

  const progress = ((currentQuestionIndex + 1) / screeningQuestions.length) * 100;
  const currentQuestion = screeningQuestions[currentQuestionIndex];
  const scores = calculateScores();

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button variant="ghost" asChild>
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao Início
                  </Link>
                </Button>
              </div>
              <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Neurodevelopmental Screening Assessment
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Professional screening tool for Autism Spectrum Disorder and ADHD indicators
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Important Medical Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert>
                  <AlertDescription className="space-y-2">
                    <p><strong>This screening tool is for educational purposes only and does not constitute medical advice, diagnosis, or treatment.</strong></p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Results are preliminary indicators, not diagnostic conclusions</li>
                      <li>Only licensed healthcare professionals can provide clinical diagnoses</li>
                      <li>False positives and negatives are possible with any screening tool</li>
                      <li>This tool supplements but does not replace professional evaluation</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Assessment Overview</CardTitle>
                <CardDescription>
                  This comprehensive screening includes evidence-based questions covering key indicators for both conditions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">Autism Spectrum Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on validated instruments including M-CHAT-R, CARS-2, and DSM-5 criteria
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-primary">ADHD Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on ASRS, Conners-3, and DSM-5 ADHD criteria
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">What to expect:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• {screeningQuestions.length} evidence-based questions</li>
                    <li>• Approximately 10-15 minutes to complete</li>
                    <li>• Immediate, detailed results with recommendations</li>
                    <li>• Professional referral guidance when appropriate</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                onClick={() => setCurrentStep('questions')}
                size="lg"
                className="px-8 py-4 text-lg"
              >
                Begin Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'questions') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Link>
              </Button>
            </div>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Assessment Questions</h1>
                <Badge variant="outline">
                  {currentQuestionIndex + 1} of {screeningQuestions.length}
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant={currentQuestion.category === 'autism' ? 'default' : 'secondary'}>
                    {currentQuestion.category === 'autism' ? 'Autism Indicators' : 'ADHD Indicators'}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <h3 className="text-lg font-medium leading-relaxed">
                    {currentQuestion.text}
                  </h3>

                  <RadioGroup
                    value={answers[currentQuestion.id]?.toString() || ''}
                    onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0" id="never" />
                      <Label htmlFor="never" className="text-base">Never or rarely</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="sometimes" />
                      <Label htmlFor="sometimes" className="text-base">Sometimes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="often" />
                      <Label htmlFor="often" className="text-base">Often</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="very-often" />
                      <Label htmlFor="very-often" className="text-base">Very often</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="always" />
                      <Label htmlFor="always" className="text-base">Always or almost always</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={nextQuestion}
                    disabled={answers[currentQuestion.id] === undefined}
                  >
                    {currentQuestionIndex === screeningQuestions.length - 1 ? 'View Results' : 'Next'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Link>
            </Button>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Assessment Results
            </h1>
            <p className="text-muted-foreground">
              Based on your responses to {screeningQuestions.length} clinical indicators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Autism Spectrum Indicators
                  <Badge className={getRiskLevel(scores.autism).color}>
                    {getRiskLevel(scores.autism).level} Risk
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Indicator Score</span>
                      <span className="font-semibold">{scores.autism}%</span>
                    </div>
                    <Progress value={scores.autism} className="h-3" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getRiskLevel(scores.autism).description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  ADHD Indicators
                  <Badge className={getRiskLevel(scores.adhd).color}>
                    {getRiskLevel(scores.adhd).level} Risk
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Indicator Score</span>
                      <span className="font-semibold">{scores.adhd}%</span>
                    </div>
                    <Progress value={scores.adhd} className="h-3" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getRiskLevel(scores.adhd).description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Professional Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(scores.autism >= 50 || scores.adhd >= 50) ? (
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Professional Evaluation Recommended:</strong> Your responses indicate multiple indicators consistent with neurodevelopmental differences. Consider scheduling a comprehensive evaluation with a qualified healthcare professional.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Lower Risk Indicated:</strong> Your responses suggest fewer indicators at this time. Continue monitoring development and consult a healthcare provider if concerns arise.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Next Steps:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Consult with your healthcare provider</li>
                      <li>• Consider comprehensive evaluation</li>
                      <li>• Document specific behaviors and concerns</li>
                      <li>• Seek support resources</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Important Reminders:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• This is not a medical diagnosis</li>
                      <li>• Only professionals can diagnose</li>
                      <li>• Early intervention is beneficial</li>
                      <li>• Support is available regardless of diagnosis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <Button onClick={() => window.print()} variant="outline" className="mr-4">
              <FileText className="mr-2 h-4 w-4" />
              Print Results
            </Button>
            <Button onClick={() => {
              setCurrentStep('intro');
              setCurrentQuestionIndex(0);
              setAnswers({});
            }}>
              Take Assessment Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreeningAssessment;