---
type: Entry Point
title: teleology
description: Runtime-neutral doctrine for purpose, truth, evidence, method, ontology, and governance in human-agent collaboration.
tags: [teleology, doctrine, epistemology, ontology, governance, okf]
okf_version: "0.1"
status: draft
---

# teleology

`teleology` is the doctrine root for a runtime-neutral knowledge operating system for human-agent collaboration.

It starts with the highest-order question:

> What is this intelligence for?

This repository is not a prompt pack, a private vault, a project memory dump, or a runtime-specific skill library. It defines the philosophical and operational doctrine that should govern downstream identity, project, skill, agent, and operator packages.

The current GitHub namespace is only a publishing location. It is not the project name.

## Purpose

Modern agents can act, remember, reason, write code, use tools, and call other systems. They still fail when they lack clear doctrine for:

```text
purpose
truth
evidence
memory
uncertainty
ontology
method
authority
governance
handoff
```

`teleology` defines the root concepts that prevent agent behavior from collapsing into prompt slop, vague memory, overconfident inference, or tool-driven action without purpose.

## Core doctrine

The expected doctrine stack is:

```text
teleology.md     # what the intelligence is for
epistemology.md  # how truth, evidence, uncertainty, memory, and inference work
ontology.md      # what kinds of things exist in the system
ethics.md        # what must not be violated
methodology.md   # how work should proceed
psychology.md    # how human intent, ambiguity, stress, humor, and preference should be interpreted
economics.md     # how scarce resources such as time, budget, compute, and attention are allocated
governance.md    # who has authority to decide, delegate, override, amend, or stop
```

Additional doctrine may be added only when it changes future agent behavior in a useful, verifiable way.

## Relationship to OKF

This repository should be maintained as an OKF-compatible knowledge bundle.

The canonical source is Markdown with YAML frontmatter. `index.md` files should provide progressive disclosure. `log.md` files should record meaningful changes. Markdown links should express relationships between concepts. Citations should be used when factual claims depend on external sources.

OKF is the carrier format. Teleology is the doctrine.

## Relationship to other packages

```text
teleology = doctrine root
identity  = actor model for humans, users, agents, teams, organizations, and roles
project   = project operating-unit templates and source-grounding procedures
skills    = compact reusable procedures
agents    = role bundles combining doctrine, identity, skills, tools, prompts, scripts, and loops
operator  = installation, update, audit, runtime export, and package governance
```

`teleology` should not contain private identity, private project facts, runtime-specific implementation details, or skill corpora. It should define the principles that downstream packages apply.

## Public boundary

This repository may contain:

```text
general doctrine
schemas
templates
examples
runtime-neutral instructions
source-backed references
```

It must not contain:

```text
private user facts
private project facts
private source paths
private decisions
private handoffs
runtime-specific secrets
namespace-specific branding treated as project identity
```

## Quality rule

A file belongs here only if it helps an agent reason better from first principles.

Keep material that clarifies purpose, truth, evidence, memory, uncertainty, authority, ontology, or method.

Remove material that is generic, decorative, obvious, redundant, or unable to change future agent behavior.

## Instantiation rule

Do not preserve template language as if it were knowledge.

When this doctrine is instantiated into a private vault, project, user profile, agent profile, or runtime workspace, replace template material only with:

1. source-grounded facts;
2. explicit human answers;
3. labeled assumptions;
4. open questions;
5. documented decisions with reasons and scope.

Memory is context, not evidence. Source artifacts outrank memory.

## Status

Draft. The immediate goal is to separate root doctrine from identity profiles, project templates, skills, agents, operators, source libraries, and private instances.
