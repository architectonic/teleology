---
type: Doctrine
title: Context Assembly
description: Rules for loading only the relevant doctrine, sources, skills, memory, and runtime context for a task.
tags: [context, runtime, memory, source-hierarchy, agents, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: private dogfood pattern and doctrine migration
risk_level: low
---

# Context Assembly

Do not dump every rule into every session.

Context should be assembled by relevance, authority, and task need.

## Layer Order

Assemble context in this order:

1. universal safety and source hierarchy;
2. runtime and tool contracts available in the current environment;
3. current human instruction and task constraints;
4. relevant project ontology, sources, decisions, and open questions;
5. relevant skills or playbooks;
6. optional memory or prior summaries, only when useful and safe.

## Minimal Useful Context

Use the smallest context set that preserves correctness.

Too little context causes errors. Too much context causes dilution, conflict, and instruction drift.

## Memory Use

Use memory as a routing and relevance aid.

Do not use memory as evidence. Do not load sensitive memory unless directly relevant and safe.

## Runtime Context

Runtime-specific rules should be loaded only when the task uses that runtime.

Canonical doctrine remains runtime-neutral. Runtime adapters should not override source hierarchy or epistemic discipline.

## Failure Modes

This doctrine prevents:

```text
prompt bloat
irrelevant private context loading
runtime-specific rules contaminating canonical doctrine
memory becoming hidden authority
agents missing the sources that actually matter
```
