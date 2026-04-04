#!/bin/bash
# Nano Banana MCP image generation helper
# Usage: ./generate-image.sh "your prompt here"

PROMPT="$1"
OUTPUT_DIR="${2:-/home/user/ALTemplate}"

if [ -z "$PROMPT" ]; then
  echo "Usage: ./generate-image.sh \"prompt\" [output_dir]"
  exit 1
fi

export GEMINI_API_KEY="AIzaSyCpv8DcdDNq5V3XUdNbhEn4VEKEiKaDjbE"

printf '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"claude","version":"1.0"}}}\n{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"generate_image","arguments":{"prompt":"%s"}}}\n' "$PROMPT" | npx -y nano-banana-mcp 2>/dev/null | tail -1
