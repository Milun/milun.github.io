@echo off
setlocal enableextensions enabledelayedexpansion

ECHO This program will create a new Forge course.
ECHO.
CHOICE /C YN /M "Do you want to proceed? "
ECHO.
if %errorlevel%==2 goto stop

set /P coursename=Type in a course code to create/update: 
ECHO.

if exist %coursename%\ (
    echo This directory already exits. Updating.
    cd %coursename%
    call git pull
    GOTO npm
) else (
    REM All good.
)

ECHO Shallow cloning the forge-framework repo into "%coursename%"...
ECHO.
git clone --depth=1 https://dgraf1@bitbucket.org/fortified-privacy/forge-framework.git %coursename% --progress --verbose --recurse-submodules
ECHO.

cd %coursename%

ECHO Running additional Forge setup tasks...
ECHO.
call grunt forge-setup-content
call grunt forge-vscode-workspace

:npm
ECHO Installing/updating node packages...
ECHO.

REM Delete the package.json and package-lock.json files to ensure NPM is installed correctly.
cd ../
del "package.json"
del "package-lock.json"'
cd %coursename%

call npm install --prefix ../

ECHO Done.
ECHO.

pause

EXIT /B 0
EndLocal
ECHO ON

:stop
EXIT /B 0
EndLocal
ECHO ON

:fail
ECHO.
ECHO ERROR: forge-install.bat process terminated.
ECHO.
PAUSE
EXIT /B 1
EndLocal
ECHO ON