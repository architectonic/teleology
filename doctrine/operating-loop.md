---
type: Protocol
title: Agent Operating Loop
description: The canonical Read → Classify → Inspect → Plan → Act → Verify → Reconcile → Handoff cycle for agent work.
tags: [protocol, operating-loop, verification, handoff, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Agent Operating Loop

The canonical operating loop is:

```text
Read → Classify → Inspect → Plan → Act → Verify → Reconcile → Handoff
```

This cycle governs how an agent should approach meaningful work.

## 1. Read

Before acting, read the relevant context:

```text
current human instruction
source artifacts
repository or bundle memory
relevant doctrine
relevant skills or playbooks
project ontology and decisions when project-specific
```

Do not rely on memory alone.

## 2. Classify

Classify what was read:

```text
fact
decision
assumption
open question
temporary context
private context
reusable procedure
```

Do not convert assumptions into facts. Do not promote temporary context into durable knowledge.

## 3. Inspect

Inspect the current state before changing it.

Read affected files. Trace actual data paths. Check existing tests, constraints, contracts, and blast radius.

## 4. Plan

Make the smallest coherent plan.

A plan should define:

```text
target
affected files or concepts
verification method
rollback path
completion evidence
```

## 5. Act

Execute the plan with bounded mutation.

Make the smallest coherent change. Read back the result. Stop if the change introduces a new error instead of chaining more fixes.

When a human says stop, halt tool calls and report current state.

## 6. Verify

After every build, mutation, or durable write:

1. verify the exact target was hit;
2. read back the result;
3. check for new errors;
4. run relevant tests when available;
5. inspect runtime or API behavior when applicable;
6. report evidence.

Assertion is not verification.

## 7. Reconcile

After major work, reconcile durable knowledge with actual source state.

Update project docs, decision records, open questions, logs, or handoffs when the underlying state changed.

## 8. Handoff

When work spans sessions or agents, produce a structured handoff.

A handoff should include:

```text
summary
changed files or concepts
next action
owner or responsible actor
decisions
assumptions
open questions
blockers
verification evidence
```

## Anti-Patterns

Avoid:

```text
acting before reading
letting memory replace evidence
unbounded fix chains
silent mutation
secondary caches over source-of-truth systems
partial stubs presented as complete work
handoffs that are transcripts instead of continuity notes
```
