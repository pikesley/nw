const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;

module.exports = {
  "src_folders" : ["spec/nightwatch/wtf.js"],
  "output_folder" : "spec/reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./bin/selenium-server-standalone-3.0.1.jar",
    "log_path" : "spec/log",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      launch_url: "http://ondemand.saucelabs.com:80",
      selenium_port: 80,
      selenium_host: "ondemand.saucelabs.com",
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
      screenshots: {
        enabled: false,
        path: "",
      },
      desiredCapabilities: {
        browserName: "chrome",
        build: `build-${TRAVIS_JOB_NUMBER}`,
       "tunnel-identifier": TRAVIS_JOB_NUMBER,
      }
      globals: {
        waitForConditionTimeout: 10000,
      }
    },
    "local" : {
      "launch_url" : "http://localhost:9291",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}
