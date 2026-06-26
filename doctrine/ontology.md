---
type: Ontology
title: Human-Agent Collaboration Concepts
description: Core concepts and knowledge classes for source-grounded human-agent collaboration.
tags: [ontology, concepts, knowledge-classes, source-grounding, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Human-Agent Collaboration Concepts

This document defines the core concepts an agent should use when classifying knowledge, work, and collaboration state.

## Source Artifact

A recoverable primary artifact such as code, documentation, repository content, commit, issue, design file, transcript excerpt, or explicit interview answer.

Source artifacts are the strongest available evidence. Agents may read them, cite them, index them, and summarize them, but should not treat generated summaries as replacements for the original artifact.

## Fact

A statement supported by a source artifact.

A fact without a recoverable source is only a claim.

## Decision

A chosen direction with date, reason, status, alternatives considered, and scope.

A decision is not a transcript. It records what was chosen, why, and under what conditions it should be revisited.

## Assumption

A claim used provisionally without full evidence.

Assumptions must be labeled and revisited. An unlabeled assumption is hidden risk.

## Open Question

A known unknown that should not be filled by inference.

Open questions are useful because they tell future agents where investigation is still required.

## Goal

A desired state with scope, constraints, and evidence of completion.

A goal is not an implementation plan. It describes what should become true, not necessarily how to make it true.

## Constraint

A boundary that must not be violated while pursuing a goal.

Constraints are stronger than preferences.

## Contract

A clarified deliverable with acceptance criteria, validity conditions, and boundaries.

A contract defines what done means for a human-agent task.

## Slice

The smallest coherent unit of work that can be implemented, reviewed, and verified independently.

A good slice cuts through enough layers to prove the behavior works.

## Patch

A concrete change to files, behavior, configuration, documentation, or state.

Every patch should be inspectable and preferably reversible.

## Handoff

A compact transfer package that lets another human or agent continue work without guessing.

A handoff should include summary, changed files, next action, owner, decisions, assumptions, open questions, and verification evidence.

## Skill

A repeatable procedure with trigger, inputs, steps, verification method, and failure modes.

A skill teaches an agent how to do something, not merely what to know.

## Playbook

An ordered composition of skills for a larger recurring workflow.

Playbooks sequence skills and add decision points, branching, and contingency handling.

## Template

A file stub or starting structure meant to be instantiated.

Templates encode patterns, not facts.

## Knowledge Classes

Different kinds of knowledge require different gathering standards.

| Class | Meaning | Gathering requirement |
|---|---|---|
| Doctrine-native | General reasoning, method, source hierarchy, memory, and operating principles | Proven patterns, explicit doctrine, or reviewed synthesis |
| Identity-native | Actor preferences, constraints, authority, communication, and privacy | Explicit confirmation or authorized source |
| Project-native | Project facts, ontology, architecture, decisions, sources, and open questions | Source review or explicit interview |
| Skill-native | Repeatable procedures that improve future work | Execution traces, source review, or reviewed distillation |
| Source-native | Provenance, source indexes, and source review metadata | Verified public or private source artifacts |
| Goal-native | Desired states with scope and completion evidence | Explicit human or source statement |

Do not mix classes casually. Each class has a different authority boundary.

## Canonicalization Rule

Before writing durable knowledge:

1. classify the material;
2. verify the gathering requirement;
3. separate facts, decisions, assumptions, open questions, and temporary context;
4. reject raw private dumps, credentials, and uncited transcript material;
5. make the smallest coherent change;
6. read back the result;
7. report evidence that the change landed where intended.

Temporary conversational context does not become durable knowledge. Humor, mood, frustration, shorthand, and provisional discussion are communication context unless explicitly converted into a durable rule.
