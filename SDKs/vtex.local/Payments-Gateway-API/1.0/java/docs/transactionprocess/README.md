# transactionProcess

## Overview

This is meant to explain the requests that are necessary to complete a transaction using PCI Gateway.

### Available Operations

* [oneCreateanewtransaction](#onecreateanewtransaction) - 1. Starts a new transaction
* [twoSendPaymentsPublic](#twosendpaymentspublic) - 2.1 Send Payments Information Public
* [twoSendPaymentsWithSavedCreditCard](#twosendpaymentswithsavedcreditcard) - 2.2 Send Payments With Saved Credit Card
* [threeSendAdditionalData](#threesendadditionaldata) - 3. Send Additional Data
* [fourDoauthorization](#fourdoauthorization) - Do authorization
* [paymentDetails](#paymentdetails) - Payment Details
* [transactionDetails](#transactiondetails) - Transaction Details
* [transactionSettlementDetails](#transactionsettlementdetails) - Transaction Settlement  Details

## oneCreateanewtransaction

This request is the first step to create a new transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OneCreateanewtransactionRequest;
import org.openapis.openapi.models.operations.OneCreateanewtransactionResponse;
import org.openapis.openapi.models.shared.OneCreateanewtransactionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "enim") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            OneCreateanewtransactionRequest req = new OneCreateanewtransactionRequest(                new OneCreateanewtransactionRequest("accusamus", "delectus", "quidem", 588465) {{
                                urn = "nam";
                            }};, "application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}");            

            OneCreateanewtransactionResponse res = sdk.transactionProcess.oneCreateanewtransaction(req);

            if (res.startTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## twoSendPaymentsPublic

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TwoSendPaymentsPublicRequest;
import org.openapis.openapi.models.operations.TwoSendPaymentsPublicResponse;
import org.openapis.openapi.models.shared.Fields;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Transaction;
import org.openapis.openapi.models.shared.TwoSendPaymentsPublicRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "blanditiis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TwoSendPaymentsPublicRequest req = new TwoSendPaymentsPublicRequest("application/json", "application/json",                 new org.openapis.openapi.models.shared.TwoSendPaymentsPublicRequest[]{{
                                add(new TwoSendPaymentsPublicRequest("sunt",                 new Fields("quo", "illum", "pariatur", "maxime", "ea", "excepturi", "odit", "ea");, 33222, 69167, 982575, 697429, 373291,                 new Transaction("voluptate", "autem");, 722056) {{
                                    currencyCode = "sapiente";
                                    fields = new Fields("natus", "nobis", "eum", "vero", "aspernatur", "architecto", "magnam", "et") {{
                                        accountId = "amet";
                                        address = "3466 Aileen Lane";
                                        callbackUrl = "magnam";
                                        cardNumber = "distinctio";
                                        document = "id";
                                        dueDate = "labore";
                                        holderName = "labore";
                                        validationCode = "suscipit";
                                    }};
                                    installments = 569965;
                                    installmentsInterestRate = 354047;
                                    installmentsValue = 590873;
                                    paymentSystem = 551816;
                                    referenceValue = 574325;
                                    transaction = new Transaction("praesentium", "natus") {{
                                        id = "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0";
                                        merchantName = "consequuntur";
                                    }};
                                    value = 166847;
                                }}),
                                add(new TwoSendPaymentsPublicRequest("voluptate",                 new Fields("dignissimos", "reiciendis", "amet", "dolorum", "numquam", "veritatis", "ipsa", "ipsa");, 434417, 487838, 311796, 881005, 696344,                 new Transaction("voluptatibus", "voluptas");, 617658) {{
                                    currencyCode = "eaque";
                                    fields = new Fields("dignissimos", "eaque", "quis", "nesciunt", "eos", "perferendis", "dolores", "minus") {{
                                        accountId = "pariatur";
                                        address = "9082 Norwood Harbors";
                                        callbackUrl = "hic";
                                        cardNumber = "libero";
                                        document = "nobis";
                                        dueDate = "dolores";
                                        holderName = "quis";
                                        validationCode = "totam";
                                    }};
                                    installments = 463451;
                                    installmentsInterestRate = 223924;
                                    installmentsValue = 874573;
                                    paymentSystem = 345352;
                                    referenceValue = 944120;
                                    transaction = new Transaction("hic", "excepturi") {{
                                        id = "e9b90c28-909b-43fe-89a8-d9cbf4863332";
                                        merchantName = "ipsum";
                                    }};
                                    value = 739551;
                                }}),
                                add(new TwoSendPaymentsPublicRequest("libero",                 new Fields("voluptas", "deserunt", "quam", "ipsum", "incidunt", "qui", "cupiditate", "maxime");, 863856, 747080, 117531, 674848, 517379,                 new Transaction("incidunt", "aspernatur");, 174909) {{
                                    currencyCode = "eos";
                                    fields = new Fields("voluptate", "id", "saepe", "eius", "aspernatur", "perferendis", "amet", "optio") {{
                                        accountId = "atque";
                                        address = "80764 Marianna Mews";
                                        callbackUrl = "omnis";
                                        cardNumber = "necessitatibus";
                                        document = "distinctio";
                                        dueDate = "asperiores";
                                        holderName = "nihil";
                                        validationCode = "ipsum";
                                    }};
                                    installments = 881586;
                                    installmentsInterestRate = 320017;
                                    installmentsValue = 904425;
                                    paymentSystem = 383464;
                                    referenceValue = 645785;
                                    transaction = new Transaction("neque", "sed") {{
                                        id = "95d8a0d4-46ce-42af-ba73-cf3be453f870";
                                        merchantName = "expedita";
                                    }};
                                    value = 424685;
                                }}),
                            }}, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "{{orderId}}", "distinctio");            

            TwoSendPaymentsPublicResponse res = sdk.transactionProcess.twoSendPaymentsPublic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## twoSendPaymentsWithSavedCreditCard

The second step to create a new transaction. Here, you have the option to send the data in three diferent ways: doing a private request, a public request or a private request that uses a saved Credit Card.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TwoSendPaymentsWithSavedCreditCardRequest;
import org.openapis.openapi.models.operations.TwoSendPaymentsWithSavedCreditCardResponse;
import org.openapis.openapi.models.shared.Fields3;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Transaction;
import org.openapis.openapi.models.shared.TwoSendPaymentsWithSavedCreditCardRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis", "aliquid") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TwoSendPaymentsWithSavedCreditCardRequest req = new TwoSendPaymentsWithSavedCreditCardRequest("application/json", "application/json",                 new org.openapis.openapi.models.shared.TwoSendPaymentsWithSavedCreditCardRequest[]{{
                                add(new TwoSendPaymentsWithSavedCreditCardRequest("dignissimos",                 new Fields3("hic", "distinctio", "quod", "odio", "similique");, 708548, 874288, 498140, 293020, 844550,                 new Transaction("illum", "sequi");, 617877) {{
                                    currencyCode = "molestias";
                                    fields = new Fields3("nobis", "et", "saepe", "ipsum", "veritatis") {{
                                        accountId = "temporibus";
                                        address = "21141 Mireya Views";
                                        callbackUrl = "voluptatem";
                                        firstDigits = "cumque";
                                        validationCode = "soluta";
                                    }};
                                    installments = 749255;
                                    installmentsInterestRate = 552193;
                                    installmentsValue = 731694;
                                    paymentSystem = 584476;
                                    referenceValue = 45614;
                                    transaction = new Transaction("consectetur", "vero") {{
                                        id = "f3443a11-08e0-4adc-b4b9-21879fce953f";
                                        merchantName = "voluptate";
                                    }};
                                    value = 949319;
                                }}),
                                add(new TwoSendPaymentsWithSavedCreditCardRequest("fugit",                 new Fields3("accusamus", "inventore", "non", "et", "dolorum");, 672048, 810424, 245367, 432148, 420539,                 new Transaction("nobis", "quas");, 829603) {{
                                    currencyCode = "impedit";
                                    fields = new Fields3("alias", "officia", "tempora", "ipsam", "ea") {{
                                        accountId = "aut";
                                        address = "381 Wunsch Ways";
                                        callbackUrl = "iusto";
                                        firstDigits = "eligendi";
                                        validationCode = "ducimus";
                                    }};
                                    installments = 136900;
                                    installmentsInterestRate = 428224;
                                    installmentsValue = 822118;
                                    paymentSystem = 297842;
                                    referenceValue = 189848;
                                    transaction = new Transaction("deleniti", "impedit") {{
                                        id = "6813f16d-9f5f-4ce6-8556-146c3e250fb0";
                                        merchantName = "aut";
                                    }};
                                    value = 304582;
                                }}),
                            }}, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "nulla");            

            TwoSendPaymentsWithSavedCreditCardResponse res = sdk.transactionProcess.twoSendPaymentsWithSavedCreditCard(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## threeSendAdditionalData

The third step to create a new transaction. It will send the additional related data to the transaction, like billig and shipping adress.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ThreeSendAdditionalDataRequest;
import org.openapis.openapi.models.operations.ThreeSendAdditionalDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas", "libero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ThreeSendAdditionalDataRequest req = new ThreeSendAdditionalDataRequest("application/json", "application/json",                 new Object[][]{{
                                add(new Object[]{{
                                    add("numquam"),
                                    add("explicabo"),
                                }}),
                            }}, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "provident");            

            ThreeSendAdditionalDataResponse res = sdk.transactionProcess.threeSendAdditionalData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fourDoauthorization

The fouth and last step to create a new transaction. It will authorized the new transction creation acorrdint to the data previously informed in the latests requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FourDoauthorizationRequest;
import org.openapis.openapi.models.operations.FourDoauthorizationResponse;
import org.openapis.openapi.models.shared.FourDoauthorizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            FourDoauthorizationRequest req = new FourDoauthorizationRequest(                new FourDoauthorizationRequest(false, "magnam", "odio");, "application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "eius");            

            FourDoauthorizationResponse res = sdk.transactionProcess.fourDoauthorization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## paymentDetails

Returns associated information details for the specified payment id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PaymentDetailsRequest;
import org.openapis.openapi.models.operations.PaymentDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "esse") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PaymentDetailsRequest req = new PaymentDetailsRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "rem", "fuga");            

            PaymentDetailsResponse res = sdk.transactionProcess.paymentDetails(req);

            if (res.paymentDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionDetails

Returns associated data for the specified transaction id, like value and status, for exemple.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionDetailsRequest;
import org.openapis.openapi.models.operations.TransactionDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit", "quidem") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TransactionDetailsRequest req = new TransactionDetailsRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "fugiat");            

            TransactionDetailsResponse res = sdk.transactionProcess.transactionDetails(req);

            if (res.transactionDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionSettlementDetails

Returns associated settlements data for the specified transaction id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionSettlementDetailsRequest;
import org.openapis.openapi.models.operations.TransactionSettlementDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut", "eum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            TransactionSettlementDetailsRequest req = new TransactionSettlementDetailsRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "suscipit");            

            TransactionSettlementDetailsResponse res = sdk.transactionProcess.transactionSettlementDetails(req);

            if (res.transactionSettlementDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
