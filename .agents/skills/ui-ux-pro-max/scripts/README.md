# Optional: Database mode

This package ships without the upstream search script and data files, so the skill runs in Native mode.

To enable Database mode, copy the upstream skill's `scripts/` and `data/` folders (from
`.claude/skills/ui-ux-pro-max/` in github.com/nextlevelbuilder/ui-ux-pro-max-skill) into this skill's
folder, keeping their structure, so that `scripts/search.py` exists next to `SKILL.md`.
Then verify with `python scripts/search.py --help` before relying on it. Python 3, no external dependencies.

In a Skill Factory project this copy step is done by the human, like any other install. The agent does not download upstream code on its own.
