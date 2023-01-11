# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateManualAccountRequest, CreateManualAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateManualAccountRequest = {
  request: {
    account: {
      accountName: "sit",
      accountNumber: "voluptas",
      accountType: "culpa",
      address: {
        address1: "expedita",
        address2: "consequuntur",
        address3: "dolor",
        city: "expedita",
        country: "voluptas",
        sourceType: "fugit",
        state: "et",
        street: "nihil",
        type: "UNKNOWN",
        zip: "dicta",
      },
      amountDue: {
        amount: 48.099998,
        currency: "AUD",
      },
      balance: {
        amount: 11.100000,
        currency: "CHF",
      },
      dueDate: "voluptate",
      frequency: "FIRST_DAY_MONTHLY",
      homeValue: {
        amount: 68.099998,
        currency: "HKD",
      },
      includeInNetWorth: "illum",
      memo: "debitis",
      nickname: "vel",
      valuationType: "SYSTEM",
    },
  },
};

sdk.accounts.createManualAccount(req).then((res: CreateManualAccountResponse | AxiosError) => {
   // handle response
});
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
