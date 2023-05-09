# deprecated

### Available Operations

* [bulkCreateTransactions](#bulkcreatetransactions) - Bulk create transactions

## bulkCreateTransactions

Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateTransactionsRequest;
import org.openapis.openapi.models.operations.BulkCreateTransactionsResponse;
import org.openapis.openapi.models.shared.BulkTransactions;
import org.openapis.openapi.models.shared.SaveSubTransaction;
import org.openapis.openapi.models.shared.SaveTransaction;
import org.openapis.openapi.models.shared.SaveTransactionClearedEnum;
import org.openapis.openapi.models.shared.SaveTransactionFlagColorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    bearer = "YOUR_API_KEY_HERE";
                }})
                .build();

            BulkCreateTransactionsRequest req = new BulkCreateTransactionsRequest(                new BulkTransactions(                new org.openapis.openapi.models.shared.SaveTransaction[]{{
                                                add(new SaveTransaction("a8d9cbf4-8633-4323-b9b7-7f3a4100674e", 696344L, LocalDate.parse("2021-11-13")) {{
                                                    accountId = "29396fea-7596-4eb1-8faa-a2352c595590";
                                                    amount = 438601L;
                                                    approved = false;
                                                    categoryId = "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0";
                                                    cleared = SaveTransactionClearedEnum.CLEARED;
                                                    date = LocalDate.parse("2021-04-29");
                                                    flagColor = SaveTransactionFlagColorEnum.BLUE;
                                                    importId = "quasi";
                                                    memo = "reiciendis";
                                                    payeeId = "fe78f097-b007-44f1-9471-b5e6e13b99d4";
                                                    payeeName = "praesentium";
                                                    subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                                        add(new SaveSubTransaction(692532L) {{
                                                            amount = 916723L;
                                                            categoryId = "1e91e450-ad2a-4bd4-8269-802d502a94bb";
                                                            memo = "labore";
                                                            payeeId = "f63c969e-9a3e-4fa7-bdfb-14cd66ae395e";
                                                            payeeName = "delectus";
                                                        }}),
                                                        add(new SaveSubTransaction(162493L) {{
                                                            amount = 588465L;
                                                            categoryId = "ba88f3a6-6997-4074-ba44-69b6e2141959";
                                                            memo = "quos";
                                                            payeeId = "90afa563-e251-46fe-8c8b-711e5b7fd2ed";
                                                            payeeName = "accusantium";
                                                        }}),
                                                        add(new SaveSubTransaction(613966L) {{
                                                            amount = 508315L;
                                                            categoryId = "921cddc6-9260-41fb-976b-0d5f0d30c5fb";
                                                            memo = "nobis";
                                                            payeeId = "25870532-02c7-43d5-be9b-90c28909b3fe";
                                                            payeeName = "modi";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new SaveTransaction("88282aa4-8256-42f2-a2e9-817ee17cbe61", 904045L, LocalDate.parse("2022-04-24")) {{
                                                    accountId = "9280d1ba-77a8-49eb-b737-ae4203ce5e6a";
                                                    amount = 588317L;
                                                    approved = false;
                                                    categoryId = "5d8a0d44-6ce2-4af7-a73c-f3be453f870b";
                                                    cleared = SaveTransactionClearedEnum.CLEARED;
                                                    date = LocalDate.parse("2022-07-29");
                                                    flagColor = SaveTransactionFlagColorEnum.PURPLE;
                                                    importId = "voluptas";
                                                    memo = "deserunt";
                                                    payeeId = "73429cdb-1a84-422b-b679-d2322715bf0c";
                                                    payeeName = "soluta";
                                                    subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                                        add(new SaveSubTransaction(981830L) {{
                                                            amount = 92596L;
                                                            categoryId = "e31b8b90-f344-43a1-908e-0adcf4b92187";
                                                            memo = "occaecati";
                                                            payeeId = "fce953f7-3ef7-4fbc-babd-74dd39c0f5d2";
                                                            payeeName = "porro";
                                                        }}),
                                                        add(new SaveSubTransaction(727044L) {{
                                                            amount = 985033L;
                                                            categoryId = "7c70a456-26d4-4368-93f1-6d9f5fce6c55";
                                                            memo = "aliquid";
                                                            payeeId = "146c3e25-0fb0-408c-82e1-41aac366c8dd";
                                                            payeeName = "voluptas";
                                                        }}),
                                                        add(new SaveSubTransaction(430402L) {{
                                                            amount = 96549L;
                                                            categoryId = "44290747-4778-4a7b-9466-d28c10ab3cdc";
                                                            memo = "fuga";
                                                            payeeId = "4251904e-523c-47e0-bc71-78e4796f2a70";
                                                            payeeName = "porro";
                                                        }}),
                                                    }};
                                                }}),
                                                add(new SaveTransaction("f86bc173-d689-4eee-9526-f8d986e881ea", 829898L, LocalDate.parse("2022-01-12")) {{
                                                    accountId = "7b95bc0a-b3c2-40c4-b378-9fd871f99dd2";
                                                    amount = 908844L;
                                                    approved = false;
                                                    categoryId = "fd121aa6-f1e6-474b-9b04-f15756082d68";
                                                    cleared = SaveTransactionClearedEnum.RECONCILED;
                                                    date = LocalDate.parse("2022-10-20");
                                                    flagColor = SaveTransactionFlagColorEnum.BLUE;
                                                    importId = "tenetur";
                                                    memo = "quasi";
                                                    payeeId = "d1705133-9d08-4086-a184-0394c26071f9";
                                                    payeeName = "velit";
                                                    subtransactions = new org.openapis.openapi.models.shared.SaveSubTransaction[]{{
                                                        add(new SaveSubTransaction(105906L) {{
                                                            amount = 374323L;
                                                            categoryId = "f0642dac-7af5-415c-8413-aa63aae8d678";
                                                            memo = "vel";
                                                            payeeId = "4dbb675f-d5e6-40b3-b5ed-4f6fbee41f33";
                                                            payeeName = "amet";
                                                        }}),
                                                        add(new SaveSubTransaction(382808L) {{
                                                            amount = 489509L;
                                                            categoryId = "fe35b60e-b1ea-4426-955b-a3c28744ed53";
                                                            memo = "cum";
                                                            payeeId = "88f3a8d8-f5c0-4b2f-afb7-b194a276b269";
                                                            payeeName = "architecto";
                                                        }}),
                                                        add(new SaveSubTransaction(879235L) {{
                                                            amount = 960257L;
                                                            categoryId = "e1f08f42-94e3-4698-b447-f603e8b445e8";
                                                            memo = "sit";
                                                            payeeId = "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa";
                                                            payeeName = "corrupti";
                                                        }}),
                                                        add(new SaveSubTransaction(442036L) {{
                                                            amount = 272683L;
                                                            categoryId = "824d0ab4-0750-488e-9186-2065e904f3b1";
                                                            memo = "architecto";
                                                            payeeId = "94b8abf6-03a7-49f9-9fe0-ab7da8a50ce1";
                                                            payeeName = "atque";
                                                        }}),
                                                    }};
                                                }}),
                                            }});, "doloremque");            

            BulkCreateTransactionsResponse res = sdk.deprecated.bulkCreateTransactions(req);

            if (res.bulkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
