#!/bin/sh
set -e

# Copy custom nodes into the volume before starting n8n (production path)
# Silently skip if the target is a read-only bind mount (local dev with docker-compose)
if [ -d /opt/custom-nodes ]; then
  mkdir -p /home/node/.n8n/custom
  rm -rf /home/node/.n8n/custom/n8n-nodes-open-mercato 2>/dev/null || true
  cp -r /opt/custom-nodes/* /home/node/.n8n/custom/ 2>/dev/null || true
fi

# Delegate to the original entrypoint
exec /docker-entrypoint.sh "$@"
