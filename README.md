# Output Lab

Output Lab is an output-level QA and repair interface inside the AI Playbook workflow, designed to check and improve already-generated practitioner-ready research translation output drafts.

## What This Project Is

- A demo-only static frontend
- Built with HTML, CSS, and JavaScript
- A rule-based fidelity QA prototype
- A course-aligned research translation QA interface
- A lightweight tool for diagnosing and repairing output-level fidelity risks

## What This Project Is Not

- A full paper analyzer
- A paper generator
- An API demo
- A replacement for human fidelity judgment
- A source verification engine
- A tool that directly verifies claims against uploaded academic papers

## Course Alignment

Output Lab supports the AI Playbook project by focusing on the QA and repair stage of practitioner-ready research translation. It helps users examine whether a generated draft preserves research meaning while becoming useful for applied public administration audiences.

The project aligns with the course requirements by supporting:

- Practitioner-ready research translation
- Research fidelity
- Seven fidelity dimensions
- Eighteen output types
- Failure mode documentation
- Repair loop design
- Consistency analysis support
- Responsible AI use in public administration contexts

Output Lab does not attempt to cover the entire research translation pipeline. It is designed specifically for reviewing and improving output drafts after an initial translation has already been generated.

## Core Features

- **Output Type Selector:** Lets users choose the format they want to audit, such as a policy brief, executive summary, Q&A guide, or LinkedIn carousel.
- **1-5 Fidelity Scoring:** Provides heuristic scores across fidelity dimensions to help users identify stronger and weaker areas of a draft.
- **Diagnose:** Runs a rule-based review of the pasted draft and flags likely fidelity risks.
- **Repair:** Generates a bounded repair draft that reduces common output-level risks without claiming to verify the original source.
- **Copy Repaired Output:** Allows users to quickly copy the revised draft for further editing or review.
- **Failure Mode Library:** Documents recurring risks such as overstated causality, missing scope limits, weak method transparency, and audience mismatch.
- **Output Type Standards:** Shows expectations and risk patterns for different practitioner-facing output formats.
- **Recent Audits / localStorage History:** Saves recent audit records in the user's browser so earlier checks can be revisited during the same workflow.

## Fidelity Dimensions

- Claim Accuracy
- Causal Precision
- Scope Fidelity
- Method Transparency
- Nuance Preservation
- Audience Calibration
- Actionability

These dimensions are used to evaluate whether a translated output preserves research meaning while becoming clear, useful, and appropriately calibrated for practitioner audiences.

## Supported Output Types

- Policy Brief
- Policy Memo
- Executive Summary
- Q&A Guide
- Fact Sheet
- Plain Language Explainer
- Op-Ed
- Letter to the Editor
- Press Release
- Elevator Pitch
- Report Outline
- Technical Note
- Infographic Brief
- Video Script
- LinkedIn Post
- LinkedIn Carousel
- Position Article
- Mechanism Map

## How It Works

1. User selects an output type.
2. User pastes a generated research translation draft.
3. The tool runs a rule-based fidelity diagnosis.
4. The tool identifies likely failure modes and output-specific risks.
5. The tool generates a bounded repair draft and saves the audit record in browser history.

## How To Run

- Open `index.html` directly in a browser.
- No API key required.
- No local server required.
- No installation required.

## Technical Stack

- HTML
- CSS
- JavaScript
- localStorage

## Current Limitations

- Rule-based demo only
- Does not read full academic papers
- Does not verify claims against source PDFs
- Does not replace human review
- Scores are heuristic, not authoritative
- Repair output is a demo repair, not a verified final answer
- localStorage history stays only in the user's browser
- No backend, database, or API integration

## Future Roadmap

- Add structured scoring justification notes
- Add exportable audit summaries
- Support master fidelity matrix preparation
- Connect to structured source extraction
- Add safer backend/API integration later
- Deploy to GitHub Pages, Netlify, or Vercel
- Create a separate Chinese portfolio version after the course presentation

## Portfolio Value

Output Lab demonstrates the ability to turn course requirements into a working prototype that is useful, bounded, and honest about its limitations. It reflects AI workflow design, research fidelity awareness, public administration evidence translation, responsible AI use, product thinking, frontend implementation with AI coding tools, and the translation of an academic assignment into an early-stage portfolio project.
