'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { getDomainStrategyAction } from '@/app/actions';
import type { SuggestDomainStrategyOutput } from '@/ai/flows/suggest-domain-strategy';
import { Lightbulb, Loader2, AlertTriangle } from 'lucide-react';

export function DomainStrategy() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get('domain');
  
  const [domainName, setDomainName] = useState(initialDomain || '');
  const [submittedDomain, setSubmittedDomain] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState<SuggestDomainStrategyOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialDomain) {
      setDomainName(initialDomain);
      // Optionally, auto-submit if initialDomain is present
      // handleSubmit(); 
    }
  }, [initialDomain]);

  const handleSubmit = async (event?: FormEvent) => {
    if (event) event.preventDefault();
    if (!domainName.trim()) {
      setError("Please enter a domain name.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setAiResult(null);
    setSubmittedDomain(domainName);

    const result = await getDomainStrategyAction(domainName);

    if (result.data) {
      setAiResult(result.data);
    } else if (result.error) {
      setError(result.error);
    }
    setIsLoading(false);
  };

  return (
    <SectionLayout id="strategy" className="bg-secondary/50">
      <SectionTitle>AI Domain Strategy Generator</SectionTitle>
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Lightbulb className="h-7 w-7 text-accent" />
            Discover Potential Strategies
          </CardTitle>
          <CardDescription>
            Enter a domain name to get AI-powered business strategy suggestions, reasoning, and potential benefits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="domainName" className="text-base">Domain Name</Label>
              <Input
                id="domainName"
                type="text"
                placeholder="e.g., example.com"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="text-base py-2"
                aria-describedby="domainNameHelp"
              />
              <p id="domainNameHelp" className="text-sm text-muted-foreground">
                Provide a domain to analyze its strategic potential.
              </p>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full text-base py-3 bg-accent hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                'Suggest Strategies'
              )}
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {aiResult && (
            <Card className="mt-8 border-primary shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Strategy Insights for: <span className="text-accent">{submittedDomain}</span></CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Suggested Strategies:</h3>
                  {aiResult.strategies.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {aiResult.strategies.map((strategy, index) => (
                        <li key={index} className="text-base">{strategy}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">No specific strategies suggested.</p>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mt-4 mb-2 text-foreground">Reasoning & Benefits:</h3>
                  <p className="text-base text-muted-foreground whitespace-pre-wrap">{aiResult.reasoning}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </SectionLayout>
  );
}
