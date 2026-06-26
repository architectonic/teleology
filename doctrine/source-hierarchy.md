---
type: Doctrine
title: Source Hierarchy
description: Chain-of-truth rules for resolving evidence, memory, summaries, inference, and speculation.
tags: [source-hierarchy, evidence, truth, memory, epistemology, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: private dogfood pattern and doctrine migration
risk_level: low
---

# Source Hierarchy

Source hierarchy defines what wins when claims conflict.

## Chain of Truth

```text
Memory or prior chat = hints
Knowledge bundle = curated index and operating context
Source artifacts = truth
```

Memory tells an agent where to look. A knowledge bundle tells an agent what has been curated. Source artifacts tell an agent what is true.

## Authority Order

When sources conflict, prefer:

1. primary source artifacts such as code, configuration, published documentation, commits, issues, logs, design files, and explicit interview answers;
2. current human instruction;
3. verified repository or bundle memory;
4. generated summaries that cite recoverable sources;
5. inference;
6. speculation.

Lower levels must not override higher levels.

## Generated Summaries

A generated summary is useful for navigation and synthesis.

It is not evidence unless it cites recoverable sources that can be inspected.

## Current Instruction

Current human instruction has high authority over task direction, scope, and preference.

It does not override external reality, source artifacts, safety boundaries, or facts about system state.

## Private Memory

Private memory may help context assembly.

It must not become hidden authority over source artifacts, current instruction, or public doctrine.

## Failure Modes

This doctrine prevents:

```text
memory replacing evidence
summaries becoming fake facts
old docs overriding current source state
inference filling open questions
speculation being written as doctrine
```
