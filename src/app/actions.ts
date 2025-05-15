'use server';

import { suggestDomainStrategy, type SuggestDomainStrategyInput, type SuggestDomainStrategyOutput } from '@/ai/flows/suggest-domain-strategy';

interface ActionResult {
  data?: SuggestDomainStrategyOutput;
  error?: string;
}

export async function getDomainStrategyAction(domainName: string): Promise<ActionResult> {
  if (!domainName || domainName.trim() === "") {
    return { error: "Domain name cannot be empty." };
  }

  try {
    const input: SuggestDomainStrategyInput = { domainName };
    const result = await suggestDomainStrategy(input);
    return { data: result };
  } catch (e) {
    console.error("Error in getDomainStrategyAction:", e);
    // It's good practice to not expose raw error messages to the client
    // if they might contain sensitive information.
    const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
    return { error: `Failed to generate strategy: ${errorMessage}` };
  }
}
