:setup
@echo off
title Installing...
goto installs
cls

:installs
echo Please wait while we're installing NPM packages... Keep in mind you MUST be in the folder your bot is in or else this wont work.
npm i guilded.js chalk@4.1.2 dotenv mongodb mongoose
pause
goto done
cls

:done
echo We have finished the installation. to quit
pause 