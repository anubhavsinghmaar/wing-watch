#!/usr/bin/env python3
"""Parse a Kane CLI --agent NDJSON stream + the process exit code into GitHub
Action outputs. Usage: parse_kane.py <ndjson_file> <exit_code>
Exit-code contract: 0 pass, 1 fail, 2 tooling/auth error, 3 timeout."""
import sys, json

ndjson, rc = sys.argv[1], int(sys.argv[2])
status = credits = run_dir = oneliner = reason = test_url = ""
try:
    for line in open(ndjson):
        line = line.strip()
        if '"type":"run_end"' in line or '"run_end"' in line:
            try:
                d = json.loads(line)
                status = d.get("status", "") or status
                credits = d.get("credits_consumed", "") or credits
                run_dir = d.get("run_dir", "") or run_dir
                oneliner = d.get("one_liner", "") or oneliner
                reason = d.get("reason", "") or reason
                test_url = d.get("test_url", "") or test_url
            except Exception:
                pass
except Exception:
    pass

verdict = {0: "PASS", 1: "FAIL"}.get(rc, "VOID")  # 2/3 -> VOID (not a test verdict)
def clean(s):
    return (str(s) or "").replace("\n", " ").replace("\r", " ")[:300]

print(f"verdict={verdict}")
print(f"exit_code={rc}")
print(f"status={clean(status)}")
print(f"credits={credits}")
print(f"run_dir={clean(run_dir)}")
print(f"test_url={clean(test_url)}")
print(f"summary={clean(oneliner or reason)}")
