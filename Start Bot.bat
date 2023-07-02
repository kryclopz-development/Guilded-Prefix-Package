:start
@echo off
title Starting bot...
goto started
cls

:started
title Started bot
goto done
cls

:done
node src/index.js
echo Bot failed to start. retrying
pause
goto start
cls