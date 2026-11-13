# Duplicate Files Remover
This script removes duplicate files in the directory where the script runs.

### Prerequisites
* No external libraries are used
* os
* hashlib

### How to run the script
Execute `python3 duplicatefileremover.py` 


## Working
The script first lists all the files in the directory. It takes MD5 hash of each file, when hash of 2 files become same it deletes the file.

## Author
Developed by [spghimire](https://github.com/Codebymanish26).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
