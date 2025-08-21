# Deployment Fix Guide

## Problem
The current build configuration creates a structure that doesn't match Replit's static deployment requirements:

- **Current**: Build outputs to `dist/public/` with index.html inside
- **Required**: Build outputs directly to `dist/` with index.html in the root

## Solution

A deployment fix script has been created to resolve this issue automatically.

## Usage

### Method 1: Manual Fix (After Build)
```bash
# 1. Run the normal build
npm run build

# 2. Fix the deployment structure
node fix-deployment.js
```

### Method 2: Using the Fix Script Directly
```bash
# Run the fix script (it will show you what to do)
node fix-deployment.js
```

## What the Script Does

1. **Checks** if `dist/public/` directory exists
2. **Moves** all files from `dist/public/` to `dist/`
3. **Preserves** the server files (like `index.js` from esbuild)
4. **Removes** the empty `dist/public/` directory
5. **Verifies** that `index.html` is now in the correct location

## Verification

After running the script, your `dist/` directory should contain:
- `index.html` (frontend entry point)
- `assets/` (frontend assets)
- `index.js` (server file)
- Other static files

## For Automated Builds

To integrate this into your deployment pipeline, run the build and fix commands in sequence:

```bash
npm run build && node fix-deployment.js
```

## Troubleshooting

If you see any errors:

1. **"dist/public directory not found"**: Run `npm run build` first
2. **"index.html not found in dist/"**: Check if the vite build completed successfully
3. **Permission errors**: Make sure the script is executable with `chmod +x fix-deployment.js`