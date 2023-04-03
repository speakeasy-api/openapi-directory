# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### report

* `getreportstatusbyID` - Get report status by ID
* `requestreportbyStatus` - Retrieve Subscription report by Status
* `requestreportbydate` - Retrieve Subscription report by date
* `requestreportbyorderdate` - Retrieve Subscription report by order date
* `requestreportbyschedule` - Retrieve Subscription report by schedule
* `requestreportbyupdate` - Request report by update

### settings

* `editSettings` - Edit Subscriptions settings
* `getSettings` - Get Subscriptions Settings

### subscriptionGroup

* `additemsubscriptionGroupId` - Add Subscription item by groupId
* `cancelSubscriptionbygroupId` - Cancel Subscription by groupId
* `getAllsubscriptiongroup` - List All subscription groups
* `getConfigsubscriptionsgroup` - List Subscription group's Configuration
* `getConversationMessagebygroupId` - Get Conversation Message by groupId
* `getNextpurchase` - Get Next purchase
* `getSimulatebysubscriptionGroup` - Get Simulation by subscription-group
* `getSubscriptionbygroupId` - Get Subscription by groupId
* `getaddressesbygroupId` - Get addresses by groupId
* `getfrequencyoptionsbygroupId` - Get frequency options by groupId
* `getpaymentSystembygroupId` - Get payment System by groupId
* `getsubscriptiongrouplist` - Get subscription group list
* `getwillcreatebygroupId` - List 'Will create' by groupId
* `insertAddressesbygroupId` - Insert Addresses by groupId
* `retrysubscriptionbygroupId` - Retry subscription by groupId
* `updateSubscriptionbygroupId` - Update Subscription by groupId

### subscriptions

* `cancelSubscriptionsbySubscriptionId` - Cancel Subscriptions by SubscriptionId
* `getSubscriptionList` - Get Subscription List
* `getfrequencyoptionsbysubscriptionId` - Get frequency options by subscriptionId
* `getsubscriptionbyId` - Retrieve subscription by ID
* `getsubscriptionstocustomer` - Retrieve customer's subscriptions
* `insertAddressesforSubscription` - Insert Addresses for Subscription
* `updateSubscriptionsbySubscriptionId` - Update Subscriptions by SubscriptionId
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
