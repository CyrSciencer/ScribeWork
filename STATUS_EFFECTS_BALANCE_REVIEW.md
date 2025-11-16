# Status Effects System Balance Review

## Overview

Total status effects: **33** across 5 cosmic forces

## Distribution by Force

| Force   | Count | Theme                          |
| ------- | ----- | ------------------------------ |
| UP      | 6     | Damage over time (evaporation) |
| DOWN    | 6     | Debuffs and action impairment  |
| IN      | 8     | Self buffs (hardening)         |
| OUT     | 8     | External buffs (influence)     |
| BETWEEN | 5     | Sharing mechanics              |

**Balance Note**: IN and OUT have 8 effects each, while BETWEEN has only 5. Consider adding 1-3 more BETWEEN effects for parity.

---

## Removal Method Distribution

### UP Force

- **curable only**: 2 (bleed, infected)
- **dissipates only**: 2 (burning, terrified)
- **both**: 2 (poisoned, dissipated)
- ✅ **Good variety** - balanced mix

### DOWN Force

- **dissipates only**: 1 (stunned)
- **both**: 5 (paralyzed, weakened, vulnerable, exhausted, drained)
- ⚠️ **Limited variety** - mostly "both", could use more "curable only" or "dissipates only"

### IN Force

- **both**: 8 (all effects)
- ⚠️ **No variety** - all effects are curable and dissipate

### OUT Force

- **both**: 8 (all effects)
- ⚠️ **No variety** - all effects are curable and dissipate

### BETWEEN Force

- **both**: 5 (all effects)
- ⚠️ **No variety** - all effects are curable and dissipate

**Recommendation**: Add more removal method variety to IN, OUT, and BETWEEN forces. Some buffs could be "dissipates only" (temporary) or "curable only" (requires dispel).

---

## Damage Type Distribution

### HP Damage Effects

- **UP**: 4 (bleed, infected, poisoned, burning)
- **DOWN**: 0 (drained is MP)
- **IN**: 1 (regenerating - healing)
- **OUT**: 0
- **BETWEEN**: 0

### MP Damage Effects

- **UP**: 2 (terrified, dissipated)
- **DOWN**: 1 (drained - on strike)
- **IN**: 1 (energized - healing)
- **OUT**: 0
- **BETWEEN**: 0

**Balance Note**: HP damage is concentrated in UP force. DOWN could benefit from an HP damage effect. OUT and BETWEEN have no damage effects (appropriate for their themes).

---

## Stacking Mechanics

### Effects with Stacking

- **UP**: bleed (stacks)
- **DOWN**: stunned (stacks), drained (stacks)

### Effects without Stacking

- **IN**: 0 stacking effects
- **OUT**: 0 stacking effects
- **BETWEEN**: 0 stacking effects

**Recommendation**: Consider adding stacking mechanics to buff effects (e.g., strengthened could stack, inspiring could stack on allies).

---

## Damage Timing Distribution

### turnStart

- **UP**: 3 (infected, burning, terrified)
- **DOWN**: 0
- **IN**: 2 (regenerating, energized - healing)
- **OUT**: 0
- **BETWEEN**: 0

### duringAction

- **UP**: 1 (bleed)
- **DOWN**: 1 (drained)
- **IN**: 0
- **OUT**: 0
- **BETWEEN**: 0

### both

- **UP**: 2 (poisoned, dissipated)
- **DOWN**: 0
- **IN**: 0
- **OUT**: 0
- **BETWEEN**: 0

**Balance Note**: Timing variety is good for UP force. Other forces don't use damage timing (appropriate for their non-damage effects).

---

## Damage Scaling Distribution

### constant

- **UP**: 5 (bleed, infected, poisoned, terrified, dissipated)
- **DOWN**: 1 (drained)
- **IN**: 2 (regenerating, energized - healing)

### increasing

- **UP**: 1 (burning)
- **DOWN**: 0
- **IN**: 0

### percentage

- **UP**: 0 (but uses %HP and %maxHP in damageValue)
- **DOWN**: 0
- **IN**: 0

**Balance Note**: Good variety in UP force. Consider adding "increasing" scaling to some buffs (e.g., regenerating could increase over time).

---

## Special Mechanics Analysis

### Unique Mechanics

- **UP**:
  - bleed: stacks, %HP scaling
  - infected: 3 distinct forms
  - burning: luck-based dissipation
- **DOWN**:
  - stunned: stacks, short duration
  - paralyzed: long duration, no stacking
  - drained: MP loss on strike, stacks
- **IN**: All straightforward buffs
- **OUT**: All straightforward buffs
- **BETWEEN**: All sharing mechanics

**Recommendation**: Add more unique mechanics to IN, OUT, and BETWEEN forces to increase strategic depth.

---

## Identified Gaps and Recommendations

### 1. Count Imbalance

- **Issue**: BETWEEN has 5 effects vs 8 for IN/OUT
- **Recommendation**: Add 1-3 more BETWEEN effects (e.g., shared buffs, shared debuffs, shared resources)

### 2. Removal Method Variety

- **Issue**: IN, OUT, and BETWEEN all use "both" exclusively
- **Recommendation**:
  - Add some "dissipates only" effects (temporary buffs)
  - Add some "curable only" effects (requires dispel to remove)
  - Consider "curable only" for powerful buffs

### 3. Stacking Mechanics

- **Issue**: Only UP and DOWN have stacking effects
- **Recommendation**: Add stacking to some buffs:
  - **IN**: strengthened, fortified could stack
  - **OUT**: inspiring, protective could stack on allies
  - **BETWEEN**: linked, bonded could stack

### 4. Special Mechanics

- **Issue**: IN, OUT, and BETWEEN lack unique mechanics
- **Recommendation**:
  - **IN**: Add duration-based scaling (e.g., hardened gets stronger over time)
  - **OUT**: Add range-based effects (e.g., inspiring affects more allies at higher stacks)
  - **BETWEEN**: Add conditional sharing (e.g., only shares if allies are nearby)

### 5. Damage Scaling Variety

- **Issue**: Only UP has "increasing" scaling
- **Recommendation**: Add "increasing" to some buffs (e.g., regenerating heals more over time)

### 6. Missing Effect Types

- **DOWN**: Could use an HP damage over time effect
- **OUT**: Could use a self-buff that damages enemies (outward damage)
- **BETWEEN**: Could use shared status effects (synchronized was removed)

---

## Overall Balance Assessment

### Strengths ✅

1. Clear thematic separation between forces
2. Good variety in UP force (damage types, timing, scaling, removal)
3. Distinct mechanics for each force
4. Appropriate distribution of offensive vs defensive effects

### Weaknesses ⚠️

1. Removal method uniformity in IN, OUT, BETWEEN
2. Lack of stacking in buff effects
3. BETWEEN force has fewer effects
4. Limited unique mechanics in buff-focused forces

### Priority Fixes

1. **High**: Add removal method variety to IN, OUT, BETWEEN
2. **Medium**: Add 1-3 more BETWEEN effects
3. **Medium**: Add stacking mechanics to some buffs
4. **Low**: Add more unique mechanics to buff forces

---

## Suggested Additions

### BETWEEN Force (add 1-3 effects)

- **synchronized**: Status effects spread to nearby allies (re-add)
- **shared**: Resources (HP/MP) are shared in a pool with allies
- **linked**: Multiple characters share the same status effects

### Removal Method Variety

- **IN**: Make some buffs "dissipates only" (temporary power)
- **OUT**: Make some buffs "curable only" (requires dispel)
- **BETWEEN**: Make some effects "dissipates only" (temporary sharing)

### Stacking Additions

- **IN**: strengthened, fortified can stack
- **OUT**: inspiring, protective can stack (affects more allies or stronger effect)
- **BETWEEN**: linked, bonded can stack (stronger sharing)
