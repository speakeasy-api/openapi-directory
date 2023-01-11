# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateManualAccountRequest req = new CreateManualAccountRequest() {{
                request = new CreateAccountRequest() {{
                    account = new CreateAccountInfo() {{
                        accountName = "itaque";
                        accountNumber = "corrupti";
                        accountType = "voluptatem";
                        address = new AccountAddress() {{
                            address1 = "quasi";
                            address2 = "repellat";
                            address3 = "rem";
                            city = "nisi";
                            country = "nulla";
                            sourceType = "et";
                            state = "autem";
                            street = "est";
                            type = "PAYMENT";
                            zip = "laudantium";
                        }};
                        amountDue = new Money() {{
                            amount = 12.100000;
                            currency = "JPY";
                        }};
                        balance = new Money() {{
                            amount = 57.200001;
                            currency = "CHF";
                        }};
                        dueDate = "dolor";
                        frequency = "DAILY";
                        homeValue = new Money() {{
                            amount = 66.199997;
                            currency = "SGD";
                        }};
                        includeInNetWorth = "dolores";
                        memo = "sunt";
                        nickname = "perferendis";
                        valuationType = "MANUAL";
                    }};
                }};
            }};

            CreateManualAccountResponse res = sdk.accounts.createManualAccount(req);

            if (res.createdAccountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounts

* `createManualAccount` - Add Manual Account
* `deleteAccount` - Delete Account
* `evaluateAddress` - Evaluate Address
* `getAccount` - Get Account Details
* `getAllAccounts` - Get Accounts
* `getHistoricalBalances` - Get Historical Balances
* `updateAccount` - Update Account

### Auth

* `deleteApiKey` - Delete API Key
* `deleteToken` - Delete Token
* `generateAccessToken` - Generate Access Token
* `generateApiKey` - Generate API Key
* `getApiKeys` - Get API Keys

### Cobrand

* `cobrandLogin` - Cobrand Login
* `cobrandLogout` - Cobrand Logout
* `createSubscriptionEvent` - Subscribe Event
* `deleteSubscribedEvent` - Delete Subscription
* `getPublicKey` - Get Public Key
* `getSubscribedEvents` - Get Subscribed Events
* `updateSubscribedEvent` - Update Subscription

### Configs

* `createSubscriptionNotificationEvent` - Subscribe For Notification Event
* `deleteSubscribedNotificationEvent` - Delete Notification Subscription
* `getPublicEncryptionKey` - Get Public Key
* `getSubscribedNotificationEvents` - Get Subscribed Notification Events
* `updateSubscribedNotificationEvent` - Update Notification Subscription

### DataExtracts

* `getDataExtractsEvents` - Get Events
* `getDataExtractsUserData` - Get userData

### Derived

* `getHoldingSummary` - Get Holding Summary
* `getNetworth` - Get Networth Summary
* `getTransactionSummary` - Get Transaction Summary

### Documents

* `deleteDocument` - Delete Document
* `downloadDocument` - Download a Document
* `getDocuments` - Get Documents

### Holdings

* `getAssetClassificationList` - Get Asset Classification List
* `getHoldingTypeList` - Get Holding Type List
* `getHoldings` - Get Holdings
* `getSecurities` - Get Security Details

### ProviderAccounts

* `deleteProviderAccount` - Delete Provider Account
* `editCredentialsOrRefreshProviderAccount` - Update Account
* `getAllProviderAccounts` - Get Provider Accounts
* `getProviderAccount` - Get Provider Account Details
* `getProviderAccountProfiles` - Get User Profile Details
* `updatePreferences` - Update Preferences

### Providers

* `getAllProviders` - Get Providers
* `getProvider` - Get Provider Details
* `getProvidersCount` - Get Providers Count

### Statements

* `getStatements` - Get Statements

### Transactions

* `createOrRunTransactionCategorizationRules` - Create or Run Transaction Categorization Rule
* `createTransactionCategory` - Create Category
* `deleteTransactionCategorizationRule` - Delete Transaction Categorization Rule
* `deleteTransactionCategory` - Delete Category
* `getTransactionCategories` - Get Transaction Category List
* `getTransactionCategorizationRules` - Get Transaction Categorization Rules
* `getTransactionCategorizationRulesDeprecated` - Get Transaction Categorization Rules
* `getTransactions` - Get Transactions
* `getTransactionsCount` - Get Transactions Count
* `runTransactionCategorizationRule` - Run Transaction Categorization Rule
* `updateTransaction` - Update Transaction
* `updateTransactionCategorizationRule` - Update Transaction Categorization Rule
* `updateTransactionCategory` - Update Category

### User

* `getAccessTokens` - Get Access Tokens
* `getUser` - Get User Details
* `registerUser` - Register User
* `samlLogin` - Saml Login
* `unregister` - Delete User
* `updateUser` - Update User Details
* `userLogout` - User Logout

### Verification

* `getVerificationStatus` - Get Verification Status
* `initiateMatchingOrChallengeDepositeVerification` - Initiaite Matching Service and Challenge Deposit
* `verifyChallengeDeposit` - Verify Challenge Deposit

### Verify Account

* `initiateAccountVerification` - Verify Accounts Using Transactions

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
