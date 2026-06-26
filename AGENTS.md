---
type: Agent Instruction
title: Teleology Agent Instructions
description: Rules for agents reading or modifying the teleology doctrine bundle.
tags: [agents, instructions, teleology, okf]
okf_version: "0.1"
status: draft
---

# Agent Instructions

## Scope

These instructions apply to agents working with this repository.

`teleology` is the doctrine root for a runtime-neutral knowledge operating system for human-agent collaboration.

It defines purpose, truth, evidence, ontology, method, memory, authority, and governance. It does not store private identity, private project facts, skill corpora, runtime secrets, or implementation-specific state.

## Read Order

1. Read `README.md`.
2. Read `START_HERE.md`.
3. Read `index.md`.
4. Read `doctrine/index.md`.
5. Read the specific doctrine concept relevant to the task.
6. Inspect source artifacts before making factual claims.

## Core Rules

- Purpose before procedure.
- Evidence before inference.
- Source artifacts outrank memory.
- Memory is context, not evidence.
- Unknowns remain open questions.
- Do not convert private-instance material into public doctrine.
- Do not add decorative philosophy that cannot change agent behavior.
- Do not add files merely to fill a category.

## Before Writing

Before creating or editing a file:

1. Verify the target repository and path.
2. Read the current file or nearest existing pattern.
3. Classify the material as doctrine, ontology, epistemology, memory, governance, source hierarchy, template, or temporary context.
4. Reject private facts, private paths, credentials, raw dumps, and project-specific operational state.
5. Make the smallest coherent change.
6. Read back the result.
7. Report changed paths and commit SHAs.

## Completion Standard

A change is complete only when:

1. the intended file was created or updated;
2. the content is compact and doctrine-grounded;
3. the content has OKF-compatible frontmatter unless it is `index.md` or `log.md`;
4. private-instance content was not introduced;
5. the result was read back or otherwise verified.
