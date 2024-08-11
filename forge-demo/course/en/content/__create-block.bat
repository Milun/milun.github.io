@echo off
setlocal enableextensions enabledelayedexpansion

call grunt forge-create-block
call grunt forge-vscode-workspacea

EXIT /B 0
EndLocal
ECHO ON