#! /usr/bin/env python3

"""
Social search: Find Usernames Across Social Networks Module

This module contains the main logic to search for usernames at social
networks.
"""

import sys


if __name__ == "__main__":
    # Check if the user is using the correct version of Python
    python_version = sys.version.split()[0]

    if sys.version_info < (3, 6):
        print(f"Social search  requires Python 3.6+\nYou are using Python {python_version}, which is not supported by Social search.")
        sys.exit(1)

    import core
    core.main()
    