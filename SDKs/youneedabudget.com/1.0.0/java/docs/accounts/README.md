# accounts

## Overview

The accounts for a budget

### Available Operations

* [createAccount](#createaccount) - Create a new account
* [getAccountById](#getaccountbyid) - Single account
* [getAccounts](#getaccounts) - Account list

## createAccount

Creates a new account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountRequest;
import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.PostAccountWrapper;
import org.openapis.openapi.models.shared.SaveAccount;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccountRequest req = new CreateAccountRequest(                new PostAccountWrapper(                new SaveAccount(544883L, "illum", AccountTypeEnum.OTHER_ASSET););, "error");            

            CreateAccountResponse res = sdk.accounts.createAccount(req);

            if (res.accountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountById

Returns a single account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountByIdRequest;
import org.openapis.openapi.models.operations.GetAccountByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountByIdRequest req = new GetAccountByIdRequest("674e0f46-7cc8-4796-ad15-1a05dfc2ddf7", "quod");            

            GetAccountByIdResponse res = sdk.accounts.getAccountById(req);

            if (res.accountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccounts

Returns all accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsRequest;
import org.openapis.openapi.models.operations.GetAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountsRequest req = new GetAccountsRequest("esse") {{
                lastKnowledgeOfServer = 520478L;
            }};            

            GetAccountsResponse res = sdk.accounts.getAccounts(req);

            if (res.accountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
