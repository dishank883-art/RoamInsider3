#!/usr/bin/env node

/**
 * Deployment fix script for Replit static deployment
 * 
 * This script addresses the issue where:
 * - vite build outputs to dist/public/
 * - But Replit static deployment expects files directly in dist/
 * 
 * The script moves all files from dist/public/ to dist/ and cleans up
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');
const publicPath = path.join(distPath, 'public');

console.log('🔧 Fixing deployment structure...');

// Check if dist/public exists
if (!fs.existsSync(publicPath)) {
  console.log('❌ dist/public directory not found. Make sure to run "vite build" first.');
  process.exit(1);
}

// Function to copy files recursively
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  // Get all files and directories in dist/public/
  const publicContents = fs.readdirSync(publicPath);
  
  console.log('📁 Moving files from dist/public/ to dist/...');
  
  // Copy each item from dist/public/ to dist/
  for (const item of publicContents) {
    const srcPath = path.join(publicPath, item);
    const destPath = path.join(distPath, item);
    
    // Skip if destination already exists (like index.js from esbuild)
    if (fs.existsSync(destPath)) {
      console.log(`⚠️  Skipping ${item} (already exists in dist/)`);
      continue;
    }
    
    copyRecursive(srcPath, destPath);
    console.log(`✅ Moved ${item}`);
  }
  
  // Remove the now-empty public directory
  fs.rmSync(publicPath, { recursive: true, force: true });
  console.log('🗑️  Removed dist/public/ directory');
  
  // Verify index.html exists in dist/
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log('✅ index.html found in dist/ - deployment structure is now correct');
  } else {
    console.log('❌ index.html not found in dist/ - something went wrong');
    process.exit(1);
  }
  
  console.log('🎉 Deployment structure fixed successfully!');
  
} catch (error) {
  console.error('❌ Error fixing deployment structure:', error.message);
  process.exit(1);
}