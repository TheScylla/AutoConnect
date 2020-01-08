@echo off
for /f "tokens=9 delims=," %%F in ('tasklist /nh /fi "imagename eq FlatyVore.exe" /fo csv /v') do echo %%F