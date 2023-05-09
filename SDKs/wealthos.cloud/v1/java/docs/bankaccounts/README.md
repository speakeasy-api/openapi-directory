# bankAccounts

## Overview

The Bank Account endpoint allows a wealth manager to create, update and retrieve the bank account details of an investor. An investor can have one or more bank accounts within the system and a default bank account should always be configured. 

Every bank account has an account status that represents the `active` or `inactive` status of an account. Only `active` bank accounts can be used for any transactions in the system.

### Available Operations

* [updateBankAccount](#updatebankaccount) - Update existing bank account details
* [createBankAccount](#createbankaccount) - Create new bank account
* [getAllBankAccounts](#getallbankaccounts) - Retrieve all the bank accounts of a particular investor
* [getBankAccount](#getbankaccount) - Retrieve existing bank account from bank account id

## updateBankAccount

Update an existing Bank Account. WealthOS will update only the fields sent in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBankAccountRequest;
import org.openapis.openapi.models.operations.UpdateBankAccountResponse;
import org.openapis.openapi.models.operations.UpdateBankAccountSecurity;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccount;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum;
import org.openapis.openapi.models.operations.UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBankAccountRequest req = new UpdateBankAccountRequest(                new UpdateBankAccountUpdateRequestBodyForBankAccount(1L) {{
                                accountName = "corrupti";
                                accountStatus = UpdateBankAccountUpdateRequestBodyForBankAccountAccountStatusEnum.INACTIVE;
                                defaultAccount = UpdateBankAccountUpdateRequestBodyForBankAccountDefaultAccountEnum.YES;
                            }};, "error", "deserunt");            

            UpdateBankAccountResponse res = sdk.bankAccounts.updateBankAccount(req, new UpdateBankAccountSecurity("suscipit") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateBankAccount201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBankAccount

Create new bank account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBankAccountRequest;
import org.openapis.openapi.models.operations.CreateBankAccountRequestBodyAccountStatusEnum;
import org.openapis.openapi.models.operations.CreateBankAccountRequestBodyDefaultAccountEnum;
import org.openapis.openapi.models.operations.CreateBankAccountRequestBodyInput;
import org.openapis.openapi.models.operations.CreateBankAccountResponse;
import org.openapis.openapi.models.operations.CreateBankAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBankAccountRequest req = new CreateBankAccountRequest("iure") {{
                requestBody = new CreateBankAccountRequestBodyInput("magnam", "debitis", CreateBankAccountRequestBodyDefaultAccountEnum.YES, "delectus") {{
                    accountStatus = CreateBankAccountRequestBodyAccountStatusEnum.ACTIVE;
                    buildingSocietyRollNumber = "suscipit";
                    sortCode = "molestiae";
                }};;
            }};            

            CreateBankAccountResponse res = sdk.bankAccounts.createBankAccount(req, new CreateBankAccountSecurity("minus") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createBankAccount201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllBankAccounts

Retrieve all the bank accounts of a particular investor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllBankAccountsRequest;
import org.openapis.openapi.models.operations.GetAllBankAccountsResponse;
import org.openapis.openapi.models.operations.GetAllBankAccountsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllBankAccountsRequest req = new GetAllBankAccountsRequest("placeat") {{
                investorId = "voluptatum";
            }};            

            GetAllBankAccountsResponse res = sdk.bankAccounts.getAllBankAccounts(req, new GetAllBankAccountsSecurity("iusto") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllBankAccounts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBankAccount

Retrieve existing bank account from bank account id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBankAccountRequest;
import org.openapis.openapi.models.operations.GetBankAccountResponse;
import org.openapis.openapi.models.operations.GetBankAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBankAccountRequest req = new GetBankAccountRequest("excepturi", "nisi");            

            GetBankAccountResponse res = sdk.bankAccounts.getBankAccount(req, new GetBankAccountSecurity("recusandae") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBankAccount200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
