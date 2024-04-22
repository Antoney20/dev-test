import platform
import requests
import re
from argparse import ArgumentParser, RawDescriptionHelpFormatter

module_name = "Social search: Find Users Across Social Networks"
__version__ = "1.1.5"


def main():
    # Define version string including module version and dependencies
    version_string = (
        f"%(prog)s {__version__}\n"
        + f"{module_name}: {__version__}\n"
        + f"Requests: {requests.__version__}\n"
        + f"Python: {platform.python_version()}\n"
    )

    # Define argument parser for version information
    parser = ArgumentParser(
        formatter_class=RawDescriptionHelpFormatter,
        description=f"{module_name} (Version {__version__})",
    )
    parser.add_argument(
        "--version",
        action="version",
        version=version_string,
        help="Display version information and dependencies.",
    )

    # Parse command-line arguments
    args = parser.parse_args()

    try:
        r = requests.get(
            "https://raw.githubusercontent.com/Antoney20/Social-api/main/core/execution/core.py"
        )
        remote_version = str(re.findall('__version__ = "(.*)"', r.text)[0])
        print("*********************************")
        print(remote_version)
        local_version = __version__

        if remote_version != local_version:
            print(
                "Update Available!\n"
                + f"You are running version {local_version}. Version {remote_version} is available at https://github.com/Antoney20/Social-api.git"
            )

    except Exception as error:
        print("An exception occurred while executing requests.get()")
        print(f"Error message: {error}")


if __name__ == "__main__":
    main()
