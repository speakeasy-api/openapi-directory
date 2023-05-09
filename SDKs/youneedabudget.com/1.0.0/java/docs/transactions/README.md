# transactions

## Overview

The transactions for a budget

### Available Operations

* [createTransaction](#createtransaction) - Create a single transaction or multiple transactions
* [deleteTransaction](#deletetransaction) - Deletes an existing transaction
* [getTransactionById](#gettransactionbyid) - Single transaction
* [getTransactions](#gettransactions) - List transactions
* [getTransactionsByAccount](#gettransactionsbyaccount) - List account transactions
* [getTransactionsByCategory](#gettransactionsbycategory) - List category transactions
* [getTransactionsByPayee](#gettransactionsbypayee) - List payee transactions
* [importTransactions](#importtransactions) - Import transactions
* [updateTransaction](#updatetransaction) - Updates an existing transaction
* [updateTransactions](#updatetransactions) - Update multiple transactions

## createTransaction

Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTransactionRequest;
import org.openapis.openapi.models.operations.CreateTransactionResponse;
import org.openapis.openapi.models.shared.PostTransactionsWrapper;
import org.openapis.openapi.models.shared.SaveSubTransaction;
import org.openapis.openapi.models.shared.SaveTransaction;
import org.openapis.openapi.models.shared.SaveTransactionClearedEnum;
import org.openapis.openapi.models.shared.SaveTransactionFlagColorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTransactionRequest req = new CreateTransactionRequest(                new PostTransactionsWrapper() {{
                                transaction = new SaveTransaction("be3e0608-07e2-4b6e-bab8-845f0597a60f", 970222L, LocalDate.parse("2022-05-03")) {{
                                    approved = false;
                                    categoryId = "54a31e94-764a-43e8-a5e7-956f9251a5a9";
                                    cleared = SaveTransactionClearedEnum.RECONCILED;
                                    flagColor = SaveTransactionFlagColorEnum.BLUE;
                                    importId = "ex";
                                    memo = "aliquid";
                                    payeeId = "0ff57bfa-ad4f-49ef-81b4-512c1032648d";
                                    payeeName = "impedit";
                                    subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                        add(new SaveSubTransaction(856756L) {{
                                            amount = 958741L;
                                            categoryId = "615199eb-fd0e-49fe-ac63-2ca3aed01179";
                                            memo = "occaecati";
                                            payeeId = "6312fde0-4771-4778-bf61-d017476360a1";
                                            payeeName = "nostrum";
                                        }}),
                                    }};
                                }};;
                                transactions = new org.openapis.openapi.models.shared.SaveTransaction[]{{
                                    add(new SaveTransaction("d02bae0b-e2d7-4822-99e3-ea4b5197f924", 256916L, LocalDate.parse("2022-02-16")) {{
                                        accountId = "6a660659-a1ad-4eaa-b585-1d6c645b08b6";
                                        amount = 109784L;
                                        approved = false;
                                        categoryId = "891baa0f-e1ad-4e00-8e6f-8c5f350d8cdb";
                                        cleared = SaveTransactionClearedEnum.UNCLEARED;
                                        date = LocalDate.parse("2022-07-22");
                                        flagColor = SaveTransactionFlagColorEnum.YELLOW;
                                        importId = "inventore";
                                        memo = "deleniti";
                                        payeeId = "14301042-1813-4d52-88ec-e7e253b66845";
                                        payeeName = "ab";
                                        subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                            add(new SaveSubTransaction(930819L) {{
                                                amount = 421844L;
                                                categoryId = "c6e205e1-6dea-4b3f-ac95-78a64584273a";
                                                memo = "laudantium";
                                                payeeId = "418d1623-09fb-4092-9921-aefb9f58c4d8";
                                                payeeName = "commodi";
                                            }}),
                                            add(new SaveSubTransaction(156383L) {{
                                                amount = 415608L;
                                                categoryId = "8e4be056-013f-459d-a757-a59ecfef66ef";
                                                memo = "quae";
                                                payeeId = "caa3383c-2beb-4477-b73c-8d72f64d1db1";
                                                payeeName = "voluptatibus";
                                            }}),
                                            add(new SaveSubTransaction(745233L) {{
                                                amount = 782090L;
                                                categoryId = "4310661e-9634-49e1-8f9e-06e3a437000a";
                                                memo = "recusandae";
                                                payeeId = "6b6bc9b8-f759-4eac-95a9-741d31135296";
                                                payeeName = "nemo";
                                            }}),
                                            add(new SaveSubTransaction(737279L) {{
                                                amount = 726227L;
                                                categoryId = "8a720261-1435-4e13-9dbc-2259b1abda8c";
                                                memo = "sit";
                                                payeeId = "70e1084c-b067-42d1-ad87-9eeb9665b85e";
                                                payeeName = "voluptatibus";
                                            }}),
                                        }};
                                    }}),
                                    add(new SaveTransaction("5dad636c-6005-403d-8bb3-1180f739ae9e", 10063L, LocalDate.parse("2022-07-11")) {{
                                        accountId = "a7ce52b8-95c5-437c-a454-efb0b34896c3";
                                        amount = 795591L;
                                        approved = false;
                                        categoryId = "a5acfbe2-fd57-4075-b792-9177deac646e";
                                        cleared = SaveTransactionClearedEnum.RECONCILED;
                                        date = LocalDate.parse("2022-04-21");
                                        flagColor = SaveTransactionFlagColorEnum.GREEN;
                                        importId = "dolorem";
                                        memo = "modi";
                                        payeeId = "09e3eb1e-5a2b-412e-b07f-116db99545fc";
                                        payeeName = "sint";
                                        subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                            add(new SaveSubTransaction(162358L) {{
                                                amount = 944950L;
                                                categoryId = "a88970e1-89db-4b30-bcb3-3ea055b197cd";
                                                memo = "non";
                                                payeeId = "4e2f52d8-2d35-413b-b6f4-8b656bcdb35f";
                                                payeeName = "voluptatibus";
                                            }}),
                                            add(new SaveSubTransaction(492361L) {{
                                                amount = 891581L;
                                                categoryId = "4b27537a-8cd9-4e73-99c1-77d525f77b11";
                                                memo = "incidunt";
                                                payeeId = "eeb52ff7-85fc-4378-94d4-c98e0c2bb89e";
                                                payeeName = "rerum";
                                            }}),
                                        }};
                                    }}),
                                    add(new SaveTransaction("48fdaf31-3a1f-45fd-9425-9c0b36f25ea9", 280859L, LocalDate.parse("2022-01-20")) {{
                                        accountId = "eb809e28-1033-41f3-981d-4c700b607f3c";
                                        amount = 588639L;
                                        approved = false;
                                        categoryId = "3c73b9da-3f2c-4eda-be23-f2257411faf4";
                                        cleared = SaveTransactionClearedEnum.RECONCILED;
                                        date = LocalDate.parse("2022-08-26");
                                        flagColor = SaveTransactionFlagColorEnum.YELLOW;
                                        importId = "numquam";
                                        memo = "repudiandae";
                                        payeeId = "472e8028-57a5-4b40-863a-7d575f1400e7";
                                        payeeName = "commodi";
                                        subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                            add(new SaveSubTransaction(42906L) {{
                                                amount = 677045L;
                                                categoryId = "d7334ec1-b781-4b36-a080-88d100efada2";
                                                memo = "voluptatem";
                                                payeeId = "0ef0422e-b216-44cf-9ab8-366c723ffda9";
                                                payeeName = "accusamus";
                                            }}),
                                            add(new SaveSubTransaction(816365L) {{
                                                amount = 392967L;
                                                categoryId = "bee4825c-1fc0-4e11-9c80-bff918544ec4";
                                                memo = "consequuntur";
                                                payeeId = "defcce8f-1977-4773-a635-62a7b408f05e";
                                                payeeName = "neque";
                                            }}),
                                        }};
                                    }}),
                                }};
                            }};, "adipisci");            

            CreateTransactionResponse res = sdk.transactions.createTransaction(req);

            if (res.saveTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTransaction

Deletes a transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransactionRequest;
import org.openapis.openapi.models.operations.DeleteTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTransactionRequest req = new DeleteTransactionRequest("in", "minima");            

            DeleteTransactionResponse res = sdk.transactions.deleteTransaction(req);

            if (res.transactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionById

Returns a single transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionByIdRequest;
import org.openapis.openapi.models.operations.GetTransactionByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionByIdRequest req = new GetTransactionByIdRequest("minus", "ab");            

            GetTransactionByIdResponse res = sdk.transactions.getTransactionById(req);

            if (res.transactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactions

Returns budget transactions

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.operations.GetTransactionsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest("hic") {{
                lastKnowledgeOfServer = 392319L;
                sinceDate = LocalDate.parse("2022-05-03");
                type = GetTransactionsTypeEnum.UNCATEGORIZED;
            }};            

            GetTransactionsResponse res = sdk.transactions.getTransactions(req);

            if (res.transactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsByAccount

Returns all transactions for a specified account

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsByAccountRequest;
import org.openapis.openapi.models.operations.GetTransactionsByAccountResponse;
import org.openapis.openapi.models.operations.GetTransactionsByAccountTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionsByAccountRequest req = new GetTransactionsByAccountRequest("minima", "architecto") {{
                lastKnowledgeOfServer = 181476L;
                sinceDate = LocalDate.parse("2022-11-01");
                type = GetTransactionsByAccountTypeEnum.UNCATEGORIZED;
            }};            

            GetTransactionsByAccountResponse res = sdk.transactions.getTransactionsByAccount(req);

            if (res.transactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsByCategory

Returns all transactions for a specified category

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsByCategoryRequest;
import org.openapis.openapi.models.operations.GetTransactionsByCategoryResponse;
import org.openapis.openapi.models.operations.GetTransactionsByCategoryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionsByCategoryRequest req = new GetTransactionsByCategoryRequest("praesentium", "dolor") {{
                lastKnowledgeOfServer = 349898L;
                sinceDate = LocalDate.parse("2021-08-03");
                type = GetTransactionsByCategoryTypeEnum.UNAPPROVED;
            }};            

            GetTransactionsByCategoryResponse res = sdk.transactions.getTransactionsByCategory(req);

            if (res.hybridTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsByPayee

Returns all transactions for a specified payee

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsByPayeeRequest;
import org.openapis.openapi.models.operations.GetTransactionsByPayeeResponse;
import org.openapis.openapi.models.operations.GetTransactionsByPayeeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionsByPayeeRequest req = new GetTransactionsByPayeeRequest("nemo", "culpa") {{
                lastKnowledgeOfServer = 159393L;
                sinceDate = LocalDate.parse("2022-05-10");
                type = GetTransactionsByPayeeTypeEnum.UNCATEGORIZED;
            }};            

            GetTransactionsByPayeeResponse res = sdk.transactions.getTransactionsByPayee(req);

            if (res.hybridTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importTransactions

Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportTransactionsRequest;
import org.openapis.openapi.models.operations.ImportTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportTransactionsRequest req = new ImportTransactionsRequest("quod");            

            ImportTransactionsResponse res = sdk.transactions.importTransactions(req);

            if (res.transactionsImportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTransaction

Updates a single transaction

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTransactionRequest;
import org.openapis.openapi.models.operations.UpdateTransactionResponse;
import org.openapis.openapi.models.shared.PutTransactionWrapper;
import org.openapis.openapi.models.shared.SaveSubTransaction;
import org.openapis.openapi.models.shared.SaveTransaction;
import org.openapis.openapi.models.shared.SaveTransactionClearedEnum;
import org.openapis.openapi.models.shared.SaveTransactionFlagColorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTransactionRequest req = new UpdateTransactionRequest(                new PutTransactionWrapper(                new SaveTransaction("fc5fde10-a0ce-4216-9e51-0019c6dc5e34", 493591L, LocalDate.parse("2022-11-06")) {{
                                                approved = false;
                                                categoryId = "799bfbbe-6949-4fb2-bb4e-cae6c3d5db3a";
                                                cleared = SaveTransactionClearedEnum.RECONCILED;
                                                flagColor = SaveTransactionFlagColorEnum.LESS_THAN_NIL_GREATER_THAN;
                                                importId = "distinctio";
                                                memo = "pariatur";
                                                payeeId = "5daea4c5-06a8-4aa9-8c02-644cf5e9d9a4";
                                                payeeName = "nostrum";
                                                subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                                    add(new SaveSubTransaction(356440L) {{
                                                        amount = 548849L;
                                                        categoryId = "adc1ac60-0dec-4001-ac80-2e2ec09ff8f0";
                                                        memo = "asperiores";
                                                        payeeId = "816ff347-7c13-4e90-ac14-125b0960a668";
                                                        payeeName = "veritatis";
                                                    }}),
                                                    add(new SaveSubTransaction(637840L) {{
                                                        amount = 62688L;
                                                        categoryId = "a472af92-3c59-449f-83f3-50cf876ffb90";
                                                        memo = "dicta";
                                                        payeeId = "c6ecbb4e-243c-4f78-9ffa-feda53e5ae6e";
                                                        payeeName = "accusantium";
                                                    }}),
                                                }};
                                            }};);, "impedit", "quasi");            

            UpdateTransactionResponse res = sdk.transactions.updateTransaction(req);

            if (res.transactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTransactions

Updates multiple transactions, by `id` or `import_id`.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTransactionsRequest;
import org.openapis.openapi.models.operations.UpdateTransactionsResponse;
import org.openapis.openapi.models.shared.PatchTransactionsWrapper;
import org.openapis.openapi.models.shared.SaveSubTransaction;
import org.openapis.openapi.models.shared.SaveTransactionWithId;
import org.openapis.openapi.models.shared.SaveTransactionWithIdClearedEnum;
import org.openapis.openapi.models.shared.SaveTransactionWithIdFlagColorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTransactionsRequest req = new UpdateTransactionsRequest(                new PatchTransactionsWrapper(                new org.openapis.openapi.models.shared.SaveTransactionWithId[]{{
                                                add(new SaveTransactionWithId() {{
                                                    accountId = "c2b9c247-c883-473a-80e1-942f32e55055";
                                                    amount = 469994L;
                                                    approved = false;
                                                    categoryId = "56f5d56d-0bd0-4af2-9fe1-3db4f62cba3f";
                                                    cleared = SaveTransactionWithIdClearedEnum.UNCLEARED;
                                                    date = LocalDate.parse("2022-06-30");
                                                    flagColor = SaveTransactionWithIdFlagColorEnum.RED;
                                                    id = "aebc0b80-a692-44d3-b2ec-fcc8f895010f";
                                                    importId = "nostrum";
                                                    memo = "at";
                                                    payeeId = "d3d6fa18-04e5-44c8-af16-8a363c8873e4";
                                                    payeeName = "blanditiis";
                                                    subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                                        add(new SaveSubTransaction(36691L) {{
                                                            amount = 196374L;
                                                            categoryId = "80b1f6b8-ca27-45a6-8a04-c495cc699171";
                                                            memo = "libero";
                                                            payeeId = "51c1bdb1-cf4b-4888-abdf-c4ccca99bc7f";
                                                            payeeName = "maxime";
                                                        }}),
                                                        add(new SaveSubTransaction(118349L) {{
                                                            amount = 743531L;
                                                            categoryId = "2dce1087-3e42-4b00-ad67-8878ba8581a5";
                                                            memo = "rem";
                                                            payeeId = "208c54fe-fa9c-495f-aeac-5565d307cfee";
                                                            payeeName = "praesentium";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new SaveTransactionWithId() {{
                                                    accountId = "206e2813-fa4a-441c-880d-3f2132af0310";
                                                    amount = 134173L;
                                                    approved = false;
                                                    categoryId = "d514f4cc-6f18-4bf9-a21a-6a4f77a87ee3";
                                                    cleared = SaveTransactionWithIdClearedEnum.RECONCILED;
                                                    date = LocalDate.parse("2022-04-19");
                                                    flagColor = SaveTransactionWithIdFlagColorEnum.LESS_THAN_NIL_GREATER_THAN;
                                                    id = "752c65b3-4418-4e3b-b91c-8d975e0e8419";
                                                    importId = "illum";
                                                    memo = "rem";
                                                    payeeId = "f84f144f-3e07-4edc-84aa-5f3cabd905a9";
                                                    payeeName = "reprehenderit";
                                                    subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                                        add(new SaveSubTransaction(33093L) {{
                                                            amount = 898088L;
                                                            categoryId = "05672822-7b2d-4309-870b-f7a4fa87cf53";
                                                            memo = "ullam";
                                                            payeeId = "a6fae54e-bf60-4c32-9f02-3b75d2367fe1";
                                                            payeeName = "est";
                                                        }}),
                                                    }};
                                                }}),
                                            }});, "quod");            

            UpdateTransactionsResponse res = sdk.transactions.updateTransactions(req);

            if (res.saveTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
