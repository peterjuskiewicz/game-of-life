# game-of-life

## About

The Game of Life is set in an infinite two-dimensional grid inhabited by “cells”. Every cell interacts with up to eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.

## Scenarios

From an initial seed grid the game "evolves" one iteration at a time. An iteration applies rules to the grid to determine its next state. These scenarios are:

0. Scenario: No interactions 
- Given a game of life 
- When there are no live cells
- Then on the next step there are still no live cells

1. Scenario: Underpopulation
- Given a game of life 
- When a live cell has fewer than two neighbours
- Then this cell dies

2. Scenario: Survival
- Given a game of life 
- When a live cell has two or three neighbours 
- Then this cell stays alive

3. Scenario: Creation of Life
- Given a game of life 
- When an empty position has exactly three neighbouring cells 
- Then a cell is created in this position

4. Scenario: Grid with no live cells 
- Given a game of life with the initial state containing no live cell
- When the game evolves one turn 
- Then the next state also contains no live cells

5. Scenario: Expected game outcome for seeded grid
- Given a game of life with the initial state…

|   |x|   |
|---|---|---|
|   |x|   |
|   |x|   |



- When the game evolves one turn  then the next state is…

|   |   |   |
|---|---|---|
|x|x|x|
|   |   |   |

- When the game evolves another turn  then the next state is…

|   |x|   |
|---|---|---|
|   |x|   |
|   |x|   |















