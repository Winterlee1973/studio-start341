'use server';

/**
 * @fileOverview AI-powered tool to dynamically generate relevant business strategies for listed domains.
 *
 * - suggestDomainStrategy - A function that handles the generation of domain strategies.
 * - SuggestDomainStrategyInput - The input type for the suggestDomainStrategy function.
 * - SuggestDomainStrategyOutput - The return type for the suggestDomainStrategy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDomainStrategyInputSchema = z.object({
  domainName: z.string().describe('The name of the domain to generate strategies for.'),
});
export type SuggestDomainStrategyInput = z.infer<typeof SuggestDomainStrategyInputSchema>;

const SuggestDomainStrategyOutputSchema = z.object({
  strategies: z
    .array(z.string())
    .describe('An array of suggested business strategies for the domain.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the suggested strategies, including potential benefits.'),
});
export type SuggestDomainStrategyOutput = z.infer<typeof SuggestDomainStrategyOutputSchema>;

export async function suggestDomainStrategy(
  input: SuggestDomainStrategyInput
): Promise<SuggestDomainStrategyOutput> {
  return suggestDomainStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDomainStrategyPrompt',
  input: {schema: SuggestDomainStrategyInputSchema},
  output: {schema: SuggestDomainStrategyOutputSchema},
  prompt: `You are an expert business strategist specializing in domain name monetization.

  You will use your expertise to generate business strategies for the given domain name. You must provide reasoning why each strategy is appropriate, and what potential benefits each strategy has based on current trends.

  Domain Name: {{{domainName}}}
  Strategies:`, // Ensure output includes strategies and reasoning
});

const suggestDomainStrategyFlow = ai.defineFlow(
  {
    name: 'suggestDomainStrategyFlow',
    inputSchema: SuggestDomainStrategyInputSchema,
    outputSchema: SuggestDomainStrategyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
