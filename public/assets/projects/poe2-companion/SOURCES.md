# PoE2 Companion portfolio assets

Source application: https://github.com/shihongyue2022/PoE2-Companion

- `modifier-equipment-contributions.png`: the application's `artifacts/workbench/damage-attribution-desktop.png`, captured by `scripts/workbench-attribution-regression.mjs`. Shows an isolated example character's contribution groups and their market actions.
- `skill-combination-contributions.png`: the application's `artifacts/workbench/barrage-attribution-desktop.png`, captured by `scripts/workbench-barrage-attribution-regression.mjs`. The example calls the local PoB2 calculator with Barrage targeting Twister. Both captures illustrate the workflow; their example damage values are not performance claims or a recommended build.

The original skill/loadout captures below are from revision `94c3ef6`; the crafting captures are from revision `71673a7` (2026-10-25).

- `skill-routine.png`: actual workbench screenshot captured by `scripts/workbench-skill-routine-regression.mjs` using isolated synthetic fixtures.
- `paired-upgrades.png`: actual workbench screenshot captured by `scripts/workbench-default-workflow-regression.mjs` using isolated synthetic fixtures. No personal character, account, or real transaction data is included.
- `craft-base-comparison.png`: actual workbench screenshot captured by `scripts/workbench-native-crafting-regression.mjs`, using the committed advanced-copy ring fixture for recognition, target-slot and fracture-protection checks. No account data is included.
- `craft-material-ledger.png`: actual UI captured by `scripts/workbench-craft-ledger-regression.mjs` with a fixed six-step worker result and a synthetic exchange-rate response. This fixture checks eight-material layout, route selection and retained expenses; its route and displayed quotes are not a validated crafting recipe or live market data.
- `twister.png`, `explosive-spear.png`, `whirling-slash.png`: Grinding Gear Games skill artwork, copied from the application's `public/images/skills/` assets using the exact English skill names in its `manifest.json`. That manifest records original paths, hashes, and the pinned PoB2 v0.23.1 and Exiled Exchange 2 sources.

Game artwork, including the currency and omen icons visible in crafting captures, belongs to Grinding Gear Games. Exact currency artwork is sourced through the application's `currency-icons.json` and official trade-item index. Its rights are separate from the AGPL-3.0 application code. This project is an unofficial community tool.

The interactive portfolio example is a simplified illustration with synthetic values, not the complete application, a live market query, or a skill DPS simulation.
