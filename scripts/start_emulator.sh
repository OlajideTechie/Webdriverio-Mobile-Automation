#!/bin/bash

EMULATOR_NAME="Medium_Phone_API_36"

echo "Starting emulator: $EMULATOR_NAME"

# Start the emulator in background with no UI
$ANDROID_HOME/emulator/emulator -avd $EMULATOR_NAME -no-snapshot-load -no-window &

# Wait until emulator is visible to adb
echo "Waiting for device to connect via ADB..."
adb wait-for-device

# Wait for sys.boot_completed to return 1
boot_completed=""
timeout=60
elapsed=0
while [[ "$boot_completed" != "1" && $elapsed -lt $timeout ]]; do
  sleep 2
  boot_completed=$(adb shell getprop sys.boot_completed | tr -d '\r')
  echo "Waiting for emulator... ($elapsed s)"
  let "elapsed+=2"
done

if [[ "$boot_completed" != "1" ]]; then
  echo "❌ Emulator failed to boot in time."
  exit 1
fi

echo "✅ Emulator is ready."
