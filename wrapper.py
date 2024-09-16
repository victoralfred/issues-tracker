import subprocess
import time
import os
import signal
import sys
def start_application():
    """
    Start the node JS application and return an object of the running process
    """
    return subprocess.Popen(["npm", "run", "dev"] , stdout=subprocess.PIPE, stderr=subprocess.PIPE,universal_newlines=True)
def process_event_monitor():
    """_Moitor the running process and restart it whe it goes down
    """
    process = start_application()

    try:
        # Check if the process has started
        exit_code = process.poll()
        if exit_code is not None:
            print(f"Application terminated with exit code {exit_code}")
                
                # try to restart the application
            print(f" Restarting the application")
            process = start_application()
            print(f"Restarted application woth PID {process.pid}")
        # Read the process output
        output = process.stdout.readline()
        if output:
            print(output.strip())
        error_output = process.stderr.readline()
        if error_output:
            print(f"ERROR: {error_output.strip()}")
            # Sleep time
        time.sleep(5)
    except KeyboardInterrupt:
        print(f"Terminating Application from keyboard command")
        process.terminate()
        try:
            process.wait(timeout=10)
        except subprocess.TimeoutExpired:
            process.kill()
        print("Application terminated")
    print(f" Application is running with PID {process.pid}")
    
if __name__ == "__main__":
   process_event_monitor()
   