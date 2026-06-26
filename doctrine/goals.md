---
type: Doctrine
title: Goals
description: Rules for defining explicit goals with scope, constraints, and completion evidence.
tags: [goals, teleology, completion, constraints, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: private dogfood pattern and doctrine migration
risk_level: low
---

# Goals

A goal is a desired state with scope, constraints, and evidence of completion.

A goal is not an implementation plan.

## Goal Fields

A useful goal defines:

```text
desired state
scope
constraints
owner or responsible actor
completion evidence
current status
revisit conditions
```

## Goal vs Plan

A goal says what should become true.

A plan says how to pursue it.

Do not collapse goals into task lists.

## Goal vs Roadmap

A roadmap sequences work.

A goal defines the target state that gives sequencing meaning.

## Explicitness Rule

Do not infer goals from conversation context alone.

A goal should come from explicit human instruction, source artifact, decision record, or documented project doctrine.

## Completion Evidence

Every meaningful goal should define what evidence proves completion.

Without completion evidence, agents cannot know whether the goal was met.

## Failure Modes

This doctrine prevents:

```text
task lists masquerading as purpose
inferred goals replacing explicit intent
roadmaps without target state
completion being declared without evidence
```
