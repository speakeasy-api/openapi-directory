# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateManualAccountRequest{
        Request: shared.CreateAccountRequest{
            Account: shared.CreateAccountInfo{
                AccountName: "sit",
                AccountNumber: "voluptas",
                AccountType: "culpa",
                Address: &shared.AccountAddress{
                    Address1: "expedita",
                    Address2: "consequuntur",
                    Address3: "dolor",
                    City: "expedita",
                    Country: "voluptas",
                    SourceType: "fugit",
                    State: "et",
                    Street: "nihil",
                    Type: "UNKNOWN",
                    Zip: "dicta",
                },
                AmountDue: &shared.Money{
                    Amount: 48.099998,
                    Currency: "AUD",
                },
                Balance: &shared.Money{
                    Amount: 11.100000,
                    Currency: "CHF",
                },
                DueDate: "voluptate",
                Frequency: "FIRST_DAY_MONTHLY",
                HomeValue: &shared.Money{
                    Amount: 68.099998,
                    Currency: "HKD",
                },
                IncludeInNetWorth: "illum",
                Memo: "debitis",
                Nickname: "vel",
                ValuationType: "SYSTEM",
            },
        },
    }
    
    res, err := s.Accounts.CreateManualAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatedAccountResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounts

* `CreateManualAccount` - Add Manual Account
* `DeleteAccount` - Delete Account
* `EvaluateAddress` - Evaluate Address
* `GetAccount` - Get Account Details
* `GetAllAccounts` - Get Accounts
* `GetHistoricalBalances` - Get Historical Balances
* `UpdateAccount` - Update Account

### Auth

* `DeleteAPIKey` - Delete API Key
* `DeleteToken` - Delete Token
* `GenerateAccessToken` - Generate Access Token
* `GenerateAPIKey` - Generate API Key
* `GetAPIKeys` - Get API Keys

### Cobrand

* `CobrandLogin` - Cobrand Login
* `CobrandLogout` - Cobrand Logout
* `CreateSubscriptionEvent` - Subscribe Event
* `DeleteSubscribedEvent` - Delete Subscription
* `GetPublicKey` - Get Public Key
* `GetSubscribedEvents` - Get Subscribed Events
* `UpdateSubscribedEvent` - Update Subscription

### Configs

* `CreateSubscriptionNotificationEvent` - Subscribe For Notification Event
* `DeleteSubscribedNotificationEvent` - Delete Notification Subscription
* `GetPublicEncryptionKey` - Get Public Key
* `GetSubscribedNotificationEvents` - Get Subscribed Notification Events
* `UpdateSubscribedNotificationEvent` - Update Notification Subscription

### DataExtracts

* `GetDataExtractsEvents` - Get Events
* `GetDataExtractsUserData` - Get userData

### Derived

* `GetHoldingSummary` - Get Holding Summary
* `GetNetworth` - Get Networth Summary
* `GetTransactionSummary` - Get Transaction Summary

### Documents

* `DeleteDocument` - Delete Document
* `DownloadDocument` - Download a Document
* `GetDocuments` - Get Documents

### Holdings

* `GetAssetClassificationList` - Get Asset Classification List
* `GetHoldingTypeList` - Get Holding Type List
* `GetHoldings` - Get Holdings
* `GetSecurities` - Get Security Details

### ProviderAccounts

* `DeleteProviderAccount` - Delete Provider Account
* `EditCredentialsOrRefreshProviderAccount` - Update Account
* `GetAllProviderAccounts` - Get Provider Accounts
* `GetProviderAccount` - Get Provider Account Details
* `GetProviderAccountProfiles` - Get User Profile Details
* `UpdatePreferences` - Update Preferences

### Providers

* `GetAllProviders` - Get Providers
* `GetProvider` - Get Provider Details
* `GetProvidersCount` - Get Providers Count

### Statements

* `GetStatements` - Get Statements

### Transactions

* `CreateOrRunTransactionCategorizationRules` - Create or Run Transaction Categorization Rule
* `CreateTransactionCategory` - Create Category
* `DeleteTransactionCategorizationRule` - Delete Transaction Categorization Rule
* `DeleteTransactionCategory` - Delete Category
* `GetTransactionCategories` - Get Transaction Category List
* `GetTransactionCategorizationRules` - Get Transaction Categorization Rules
* `GetTransactionCategorizationRulesDeprecated` - Get Transaction Categorization Rules
* `GetTransactions` - Get Transactions
* `GetTransactionsCount` - Get Transactions Count
* `RunTransactionCategorizationRule` - Run Transaction Categorization Rule
* `UpdateTransaction` - Update Transaction
* `UpdateTransactionCategorizationRule` - Update Transaction Categorization Rule
* `UpdateTransactionCategory` - Update Category

### User

* `GetAccessTokens` - Get Access Tokens
* `GetUser` - Get User Details
* `RegisterUser` - Register User
* `SamlLogin` - Saml Login
* `Unregister` - Delete User
* `UpdateUser` - Update User Details
* `UserLogout` - User Logout

### Verification

* `GetVerificationStatus` - Get Verification Status
* `InitiateMatchingOrChallengeDepositeVerification` - Initiaite Matching Service and Challenge Deposit
* `VerifyChallengeDeposit` - Verify Challenge Deposit

### Verify Account

* `InitiateAccountVerification` - Verify Accounts Using Transactions

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
