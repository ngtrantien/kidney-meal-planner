@echo off
setlocal enabledelayedexpansion

REM Always run from this script's directory (repo root)
cd /d "%~dp0"

echo ==========================================
echo   Kidney Meal Planner - Quick Push
echo ==========================================
echo.

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Day khong phai la thu muc git hop le.
  pause
  exit /b 1
)

git add -A

git diff --cached --quiet
if not errorlevel 1 goto has_changes

echo [INFO] Khong co thay doi nao de commit.
echo [INFO] Dang thu push nhanh branch hien tai...
for /f "delims=" %%b in ('git branch --show-current') do set BRANCH=%%b
if "%BRANCH%"=="" set BRANCH=main
git push origin %BRANCH%
if errorlevel 1 (
  echo [ERROR] Push that bai.
  pause
  exit /b 1
)
echo [OK] Push thanh cong.
pause
exit /b 0

:has_changes
set "MSG="
set /p MSG=Nhap commit message (de trong de dung mac dinh): 

if "%MSG%"=="" (
  for /f %%t in ('powershell -NoProfile -Command "Get-Date -Format \"yyyy-MM-dd HH:mm:ss\""') do set NOW=%%t
  set "MSG=Update project !NOW!"
)

git commit -m "%MSG%"
if errorlevel 1 (
  echo [ERROR] Commit that bai.
  pause
  exit /b 1
)

for /f "delims=" %%b in ('git branch --show-current') do set BRANCH=%%b
if "%BRANCH%"=="" set BRANCH=main

git push origin %BRANCH%
if errorlevel 1 (
  echo [ERROR] Push that bai.
  pause
  exit /b 1
)

echo [OK] Commit + push thanh cong len origin/%BRANCH%.
pause
exit /b 0
