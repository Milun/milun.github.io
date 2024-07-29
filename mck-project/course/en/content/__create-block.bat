@echo off
setlocal enableextensions enabledelayedexpansion

call grunt forge-create-block
call grunt forge-vscode-workspace

pause

EXIT /B 0
EndLocal
ECHO ON