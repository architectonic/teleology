---
type: Doctrine
title: Memory Doctrine
description: Rules for durable memory, wiki maintenance, logs, handoffs, and canonicalization in human-agent collaboration.
tags: [memory, wiki, canonicalization, handoff, logs, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Memory Doctrine

A persistent knowledge base is not a raw archive.

Memory exists to improve future work, not to store everything.

## Core Rule

Memory is context, not evidence.

Use memory to know where to look, what may matter, and what has been learned before. Do not use memory as proof when source artifacts should be inspected.

## What Durable Memory Should Preserve

Durable memory should preserve:

```text
source-grounded facts
decisions
assumptions
open questions
source indexes
project ontology
reusable procedures
logs
handoffs
```

Durable memory should not preserve:

```text
raw chat dumps
temporary frustration
private identifiers without need
unverified claims
low-value summaries
duplicate project facts
```

## Wiki Layers

A durable knowledge system should distinguish:

1. raw sources — source artifacts and recoverable evidence;
2. curated knowledge — extracted facts, decisions, ontology, procedures, and source indexes;
3. schema and doctrine — the rules that tell agents how to read, write, verify, and maintain the knowledge system.

Do not collapse these layers.

## Indexes

Use `index.md` for progressive disclosure.

An index should tell a human or agent what exists before they open deeper files. It should list concepts with short descriptions rather than become a doctrine essay.

## Logs

Use `log.md` for meaningful history.

A log should record changes that matter for future interpretation: creation, update, deprecation, migration, contradiction, source review, or major reconciliation.

## Handoffs

A handoff is not a transcript.

A good handoff lets another human or agent continue without guessing. It should include:

```text
summary
current state
changed files
next action
owner or responsible actor
decisions
assumptions
open questions
blockers
verification evidence
```

## Reconciliation

After major work, reconcile memory with source state.

If code, architecture, project goals, decisions, or source status changed, durable knowledge should reflect the change or explicitly say it remains unverified.

## Maintenance

Periodically check for:

```text
contradictions
stale claims
orphan pages
missing source citations
duplicated concepts
unresolved assumptions
answered open questions
unclear authority
unbounded memory growth
```

## Failure Modes

This doctrine prevents:

```text
memory bloat
chat history becoming fake truth
private data leaking into public bundles
stale project understanding
agents repeating solved context discovery
handoffs degenerating into transcripts
```
