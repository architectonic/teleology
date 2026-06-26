---
type: Doctrine
title: Completion Standard
description: Rules for deciding when agent work or durable knowledge changes are actually complete.
tags: [completion, verification, handoff, source-grounding, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: private dogfood pattern and doctrine migration
risk_level: low
---

# Completion Standard

A change is complete only when it is verified.

Completion is not the same as effort, intention, or partial output.

## Knowledge Change Completion

A durable knowledge change is complete when:

1. the correct repository and path were targeted;
2. the current file or nearest existing pattern was read first;
3. the material was correctly classified;
4. the content is compact and source-grounded or doctrine-grounded;
5. private identifiers, credentials, secrets, raw dumps, and uncited transcript material were excluded;
6. facts, decisions, assumptions, open questions, and temporary context are separated;
7. the result was read back or otherwise verified;
8. changed paths and commit SHAs are reported when applicable.

## Runtime or Code Change Completion

A runtime or code change is complete when:

1. the intended behavior was changed;
2. the affected files were verified;
3. relevant tests, builds, logs, or runtime checks were run when available;
4. new errors were checked;
5. rollback or next-action context is known;
6. evidence is reported.

## Handoff Completion

A handoff is complete when another human or agent can continue without guessing.

It should include summary, current state, changed files, decisions, assumptions, open questions, blockers, verification evidence, and next action.

## Failure Modes

This doctrine prevents:

```text
claiming completion without verification
partial stubs being treated as finished work
private data leaking during documentation
agents losing continuity after session boundaries
```
