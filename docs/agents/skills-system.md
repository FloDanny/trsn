# Skills System (Codex-Native)

This project uses Codex-native skills located in the `/skills` directory.

Skills are:
- Modular, reusable agent capabilities
- Scoped behaviors, not free-form prompts
- Invoked intentionally based on task context

Agents should:
- Identify relevant skills before acting
- Follow skill-specific constraints in addition to this file
- Prefer composing existing skills over inventing new behavior

If no suitable skill exists:
Propose a new skill before proceeding.
