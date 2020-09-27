# Installing Selenium Web Drivers for Python
Based on Instructions [here](https://selenium-python.readthedocs.io/installation.html)

1. Run `pip install -U selenium` in your terminal or command line
1. Download proper chromedriver: https://sites.google.com/a/chromium.org/chromedriver/downloads
  * To find out which version of chrome you are running go to `chrome://settings/` in your browser and select `About Chrome` on the left
1. Move the executable that you just downloaded to `usr/local/bin`
1. If you're on mac right click on the file and click open so that it knows the executable is verified

# Setting up your env

1. Talk to Sukhmai, Colin, or Michael to get the `scraper.env` file which should look something like this:

```
username = "johndoe@example.com"
password = "P@55W0RD!"
download_path = "where/you/want/to/download/the/file/to/using/relative/or/absolute/addressing"
```

1. Place this file in the `/scripts/` folder of this project (same location as this README) where `webscraper.py` is also located

# Running the script
1. Run `python webscraper.py` in your terminal or command line

This will eventually be automated using Github Workflows

### Future Updates

We plan to make the script take command line parameters to allow you to select whether you want daily, weekly, monthly, or all-time data.
