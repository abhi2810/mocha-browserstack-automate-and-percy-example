![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)
​
<img src ="https://i.imgur.com/egfvMU3.png" height = "100">
​

# ACME BrowserStack Demo

This custom built repo will demonstrate how BrowserStack can be used with ACME products

## Run sample build

1. Clone the repo
2. Install dependencies `npm install`
3. Set your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) in [browserstack.yml](browserstack.yml) Add your BrowserStack userName and acccessKey here or set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` as env variables
4. Add the `PERCY_TOKEN` to the environment variable.
5. To run sample test, run `npm run test:percy`

## Notes

- You can view your test results on the [BrowserStack automate dashboard](https://automate.browserstack.com)
- To test on a different set of browsers, check out our [capabilities generator](https://www.browserstack.com/automate/capabilities)

## Additional Resources

- [Documentation for writing automate test scripts in Node](https://www.browserstack.com/automate/node)
- [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
- [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
