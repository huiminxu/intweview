#!/bin/sh
cd /Users/xuhuimin/workspace/handover/node/blog/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log
