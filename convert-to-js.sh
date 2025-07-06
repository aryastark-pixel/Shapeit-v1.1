#!/bin/bash

echo "🔄 Converting Vite + TypeScript project to JavaScript..."

# 1. Remove TypeScript dependencies
echo "📦 Removing TypeScript dependencies..."
npm uninstall typescript @types/node

# 2. Remove tsconfig
if [ -f "tsconfig.json" ]; then
    echo "🗑️ Removing tsconfig.json..."
    rm tsconfig.json
fi

# 3. Rename .ts -> .js and .tsx -> .jsx
echo "✏️ Renaming .ts and .tsx files..."
find src -name "*.ts" -exec bash -c 'mv "$0" "${0%.ts}.js"' {} \;
find src -name "*.tsx" -exec bash -c 'mv "$0" "${0%.tsx}.jsx"' {} \;

# 4. Convert vite.config.ts -> vite.config.js
if [ -f "vite.config.ts" ]; then
    echo "🔧 Converting vite.config.ts to vite.config.js..."
    mv vite.config.ts vite.config.js
    sed -i '' 's/: [a-zA-Z0-9_\[\]\{\}\<\>]*//g' vite.config.js 2>/dev/null || sed -i 's/: [a-zA-Z0-9_\[\]\{\}\<\>]*//g' vite.config.js
fi

# 5. Optional cleanup message
echo ""
echo "✅ Basic conversion done!"
echo "🛠️ Manual steps remaining:"
echo "   - Remove type annotations (e.g., ': string', 'React.FC') from your files"
echo "   - Remove interfaces and types"
echo "   - Replace 'import React, { FC }' with just 'import React' if needed"
echo "   - Check for any ts-specific code (e.g., enums, generics)"
echo ""
echo "💡 Tip: Use your IDE (like VS Code) to search for keywords like ':' and 'interface' to clean up fast."
echo ""
echo "🚀 You can now run: npm run dev"