rem .\node_modules\.bin\babel .\src\midisoundsreact.js > .\bin\midisoundsreact6.js
echo next
.\node_modules\.bin\babel .\bin\midisoundsreact6.js --presets es2015 > .\bin\midisoundsreact.js
pause
