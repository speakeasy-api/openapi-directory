# transaction

### Available Operations

* [cancelGiftCardTransaction](#cancelgiftcardtransaction) - Cancel GiftCard Transaction
* [createGiftCardTransaction](#creategiftcardtransaction) - Create GiftCard Transaction
* [getGiftCardTransactionbyID](#getgiftcardtransactionbyid) - Get GiftCard Transaction by ID
* [getGiftCardTransactions](#getgiftcardtransactions) - Get GiftCard Transactions
* [getTransactionAuthorizations](#gettransactionauthorizations) - Get Transaction Authorizations
* [getTransactionCancellations](#gettransactioncancellations) - Get Transaction Cancellations
* [getTransactionSettlements](#gettransactionsettlements) - Get Transaction Settlements
* [settleGiftCardTransaction](#settlegiftcardtransaction) - Settle GiftCard Transaction

## cancelGiftCardTransaction

Creates a cancellation in the transaction. Cancel a item reservation or create a refund.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelGiftCardTransactionRequest;
import org.openapis.openapi.models.operations.CancelGiftCardTransactionResponse;
import org.openapis.openapi.models.shared.CancelGiftCardTransactionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "odit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelGiftCardTransactionRequest req = new CancelGiftCardTransactionRequest("quo",                 new CancelGiftCardTransactionRequest("sequi", 9495.72);, "ipsam", "id", "possimus");            

            CancelGiftCardTransactionResponse res = sdk.transaction.cancelGiftCardTransaction(req);

            if (res.response6 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGiftCardTransaction

Register a new giftcard transaction and authorize the item reservation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGiftCardTransactionRequest;
import org.openapis.openapi.models.operations.CreateGiftCardTransactionResponse;
import org.openapis.openapi.models.shared.Cart1;
import org.openapis.openapi.models.shared.ClientProfile;
import org.openapis.openapi.models.shared.CreateGiftCardTransactionRequest;
import org.openapis.openapi.models.shared.Item2;
import org.openapis.openapi.models.shared.OrderInfo;
import org.openapis.openapi.models.shared.PriceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Shipping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "quasi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGiftCardTransactionRequest req = new CreateGiftCardTransactionRequest("error", "temporibus", "laborum") {{
                createGiftCardTransactionRequest = new CreateGiftCardTransactionRequest("quasi", "reiciendis", "voluptatibus", "vero", "nihil", 5096.24) {{
                    orderInfo = new OrderInfo() {{
                        cart = new Cart1(9767.62, 55714,                 new org.openapis.openapi.models.shared.Item2[]{{
                                            add(new Item2(2230.81, "debitis", "a", 6800.56,                 new org.openapis.openapi.models.shared.PriceTag[]{{
                                                                add(new PriceTag("facere", 411820) {{
                                                                    name = "Angel Wolff II";
                                                                    value = 767024;
                                                                }}),
                                                                add(new PriceTag("accusamus", 965417) {{
                                                                    name = "Kayla Thompson";
                                                                    value = 313218;
                                                                }}),
                                                            }}, "quidem", 588465, "nam", 659669, 5013.24) {{
                                                discount = 4511.59;
                                                id = "b0074f15-471b-45e6-a13b-99d488e1e91e";
                                                name = "Erin Altenwerth";
                                                price = 1317.97;
                                                priceTags = new org.openapis.openapi.models.shared.PriceTag[]{{
                                                    add(new PriceTag("cupiditate", 552822) {{
                                                        name = "Marty Green";
                                                        value = 397821;
                                                    }}),
                                                    add(new PriceTag("excepturi", 270008) {{
                                                        name = "Louise Simonis Sr.";
                                                        value = 677817;
                                                    }}),
                                                    add(new PriceTag("eligendi", 576157) {{
                                                        name = "Geoffrey Green";
                                                        value = 248753;
                                                    }}),
                                                }};
                                                productId = "aliquid";
                                                quantity = 592042;
                                                refId = "necessitatibus";
                                                shippingDiscount = 572252;
                                                value = 6389.21;
                                            }}),
                                            add(new Item2(3523.12, "expedita", "nihil", 9988.48,                 new org.openapis.openapi.models.shared.PriceTag[]{{
                                                                add(new PriceTag("magni", 123820) {{
                                                                    name = "Mr. Jenna Stroman";
                                                                    value = 615560;
                                                                }}),
                                                                add(new PriceTag("odit", 407183) {{
                                                                    name = "Gilberto Streich";
                                                                    value = 569101;
                                                                }}),
                                                                add(new PriceTag("autem", 722056) {{
                                                                    name = "Virginia Wunsch";
                                                                    value = 453543;
                                                                }}),
                                                                add(new PriceTag("aut", 764912) {{
                                                                    name = "Meredith Hickle PhD";
                                                                    value = 230742;
                                                                }}),
                                                            }}, "corporis", 944124, "libero", 749999, 1716.29) {{
                                                discount = 5332.06;
                                                id = "f3a66997-074b-4a44-a9b6-e2141959890a";
                                                name = "Shaun Hammes";
                                                price = 8965.47;
                                                priceTags = new org.openapis.openapi.models.shared.PriceTag[]{{
                                                    add(new PriceTag("maxime", 537023) {{
                                                        name = "Joyce Kertzmann";
                                                        value = 260341;
                                                    }}),
                                                }};
                                                productId = "facilis";
                                                quantity = 447926;
                                                refId = "architecto";
                                                shippingDiscount = 99569;
                                                value = 9194.83;
                                            }}),
                                            add(new Item2(5365.79, "omnis", "necessitatibus", 7146.97,                 new org.openapis.openapi.models.shared.PriceTag[]{{
                                                                add(new PriceTag("aspernatur", 20651) {{
                                                                    name = "Edna Klocko";
                                                                    value = 263322;
                                                                }}),
                                                                add(new PriceTag("deserunt", 588317) {{
                                                                    name = "Marianne Thompson";
                                                                    value = 383464;
                                                                }}),
                                                                add(new PriceTag("tempora", 425451) {{
                                                                    name = "Kari Leannon PhD";
                                                                    value = 311860;
                                                                }}),
                                                                add(new PriceTag("harum", 483409) {{
                                                                    name = "Erick Denesik";
                                                                    value = 456130;
                                                                }}),
                                                            }}, "ipsum", 788740, "tenetur", 229442, 7308.56) {{
                                                discount = 3394.04;
                                                id = "87053202-c73d-45fe-9b90-c28909b3fe49";
                                                name = "Casey Stracke";
                                                price = 7301.22;
                                                priceTags = new org.openapis.openapi.models.shared.PriceTag[]{{
                                                    add(new PriceTag("qui", 218749) {{
                                                        name = "Billie Jacobi";
                                                        value = 222443;
                                                    }}),
                                                    add(new PriceTag("amet", 680545) {{
                                                        name = "Marshall Ritchie";
                                                        value = 970237;
                                                    }}),
                                                    add(new PriceTag("accusamus", 696344) {{
                                                        name = "Ms. Christine Beer";
                                                        value = 311796;
                                                    }}),
                                                    add(new PriceTag("fugiat", 67249) {{
                                                        name = "Hector Mosciski";
                                                        value = 24678;
                                                    }}),
                                                }};
                                                productId = "soluta";
                                                quantity = 679393;
                                                refId = "iusto";
                                                shippingDiscount = 453697;
                                                value = 6770.82;
                                            }}),
                                        }}, 8802.98, 2539.41, 313692);;
                        clientProfile = new ClientProfile("dolorem", "sapiente", "totam", "nihil", false, "sit", "expedita");;
                        orderId = "neque";
                        sequence = 153694;
                        shipping = new Shipping("vel", "libero", "voluptas", "deserunt", "quam", "ipsum", "incidunt", "qui", "cupiditate", "maxime");;
                    }};;
                }};;
            }};            

            CreateGiftCardTransactionResponse res = sdk.transaction.createGiftCardTransaction(req);

            if (res.response3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGiftCardTransactionbyID

Get GiftCard Transaction by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGiftCardTransactionbyIDRequest;
import org.openapis.openapi.models.operations.GetGiftCardTransactionbyIDResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur", "soluta") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGiftCardTransactionbyIDRequest req = new GetGiftCardTransactionbyIDRequest("dicta", "laborum", "totam", "incidunt");            

            GetGiftCardTransactionbyIDResponse res = sdk.transaction.getGiftCardTransactionbyID(req);

            if (res.response5 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGiftCardTransactions

Returns all transaction of a giftcard.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGiftCardTransactionsRequest;
import org.openapis.openapi.models.operations.GetGiftCardTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "dolores") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGiftCardTransactionsRequest req = new GetGiftCardTransactionsRequest("distinctio", "facilis", "aliquid");            

            GetGiftCardTransactionsResponse res = sdk.transaction.getGiftCardTransactions(req);

            if (res.response3s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionAuthorizations

Returns the giftcard transaction authorizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionAuthorizationsRequest;
import org.openapis.openapi.models.operations.GetTransactionAuthorizationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam", "molestias") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionAuthorizationsRequest req = new GetTransactionAuthorizationsRequest("temporibus", "qui", "neque", "fugit");            

            GetTransactionAuthorizationsResponse res = sdk.transaction.getTransactionAuthorizations(req);

            if (res.response6 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionCancellations

Returns the giftcard transaction cancellations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionCancellationsRequest;
import org.openapis.openapi.models.operations.GetTransactionCancellationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni", "odio") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionCancellationsRequest req = new GetTransactionCancellationsRequest("sunt", "ullam", "nam", "hic");            

            GetTransactionCancellationsResponse res = sdk.transaction.getTransactionCancellations(req);

            if (res.response7s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionSettlements

Returns the giftcard transaction settlements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionSettlementsRequest;
import org.openapis.openapi.models.operations.GetTransactionSettlementsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem", "cumque") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionSettlementsRequest req = new GetTransactionSettlementsRequest("soluta", "nobis", "et", "saepe");            

            GetTransactionSettlementsResponse res = sdk.transaction.getTransactionSettlements(req);

            if (res.response6s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## settleGiftCardTransaction

Creates a giftcard transaction settlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SettleGiftCardTransactionRequest;
import org.openapis.openapi.models.operations.SettleGiftCardTransactionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettleGiftCardTransactionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum", "veritatis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SettleGiftCardTransactionRequest req = new SettleGiftCardTransactionRequest("nobis", "quos",                 new SettleGiftCardTransactionRequest("tempore", 5844.76);, "aperiam", "delectus");            

            SettleGiftCardTransactionResponse res = sdk.transaction.settleGiftCardTransaction(req);

            if (res.response6 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
