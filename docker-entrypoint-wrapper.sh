#!/bin/sh
set -e

# Copy custom nodes into the volume before starting n8n
mkdir -p /home/node/.n8n/custom
rm -rf /home/node/.n8n/custom/n8n-nodes-open-mercato
cp -r /opt/custom-nodes/* /home/node/.n8n/custom/

# Delegate to the original entrypoint
exec /docker-entrypoint.sh "$@"
