# Copilot Review Pilot — Example Script

This is a small example script used to pilot GitHub Copilot code review on this repository.

## What it does

The script sums the integers from 1 to `N` (inclusive) and prints the result.
It was added as part of the pilot to check whether automated Copilot
code reviews flag anything in a ~20-line starter script.

```bash
node sum_up.js 100
```

Expected output:

```
1..100 sums to 5050
```

## Notes

- Uses only Node.js built-ins (no external dependencies).
- Works with Node.js 18+.
