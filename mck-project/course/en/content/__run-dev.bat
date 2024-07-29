@echo off
setlocal enableextensions enabledelayedexpansion

REM Start two cmd windows; one with server, one with dev.
start cmd /k grunt server
start cmd /k grunt dev

EXIT /B 0
EndLocal
ECHO ON