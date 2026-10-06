@echo off
setlocal
cd /d "%~dp0"
set NEXT_TELEMETRY_DISABLED=1

if exist node_modules (
  echo Removing old partial install...
  rmdir /s /q node_modules
)
if exist node_modules (
  echo.
  echo Could not delete node_modules - files are locked.
  echo Close VS Code and any "npm run dev" windows, or restart your PC, then run this again.
  exit /b 1
)

set /a tries=0
:retry
set /a tries+=1
echo.
echo === npm install - attempt %tries% of 5 ===
call npm install
if %errorlevel%==0 goto ok
if %tries% GEQ 5 goto fail
echo Connection dropped. Retrying in 15 seconds (already-downloaded packages are kept)...
timeout /t 15 /nobreak >nul
goto retry

:ok
echo.
echo Install complete. Start the site with:  npm run dev
exit /b 0

:fail
echo.
echo Install still failing after 5 attempts. See VPN-SETUP.md for proxy settings.
exit /b 1
