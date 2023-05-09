# payments

## Overview

The Payments endpoint allows you to put cash into a specific pot in your account by sending a payment intent. This intent must capture the following information regarding the payment:

* Details regarding payment such as the `amount` to collect and the `currency`
* Supported `payment_type` (card payments, electronic fund transfers etc.).
* Associated key information to track a payment (e.g. `pot_id`).
* Intention of payment:
    * Cash into the pot only, do not invest (`purpose: "cash"`)
    * Invest based on the portfolio attached to the investor (`purpose: "invest"` and `investment_instructions` not populated)
    * Invest based on attached instructions (`purpose: "invest"` and `investment_instructions` populated). If the pot has a portfolio attached, then the priority will be given to investment instructions. If the investment instructions apply only for a propotion of money coming in, then the rest will be added as cash.

<!-- If you have additional parameters to associate with a payment, you can define a custom object and include it under a top-level field of the request body with the value you used for `payment_type` as its field name. (e.g. `"stripe": {.....}`). -->
Additionaly, if the `service_provider` is given as `"truelayer"` extra accept an extra object `service_provider_params` where you have to provide the `bank_account_id`as a key-value pair and you will recieve this object in response including the fields, `bank_account_id`, `payment_intent_id` and `hpp_url`. (e.g `"service_provider_params: {"bank_account_id": "ba-82faf049...", "payment_intent_id: 91aa9de...", "hpp_url":"https://..."}"`).

For `"stripe"`, in the response, you will receive the  `payment_intent_id`, `client_secret` and `publishable_key` inside that additional object with the value you used for `payment_type` as its field name. (e.g. `"service_provider_params": {"payment_intent_id: 91aa9de...", "client_secret": "pi_XXXXX", "publishable_key": "pk_test_XXXXX", .....}`).

These values will be used with the client library for each payment call for the following purposes.

* `payment_intent_id` - to uniquely identify your payment intent
* `client_secret` - The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
* `publishable_key` - to uniquely identify your payment service account
* `hpp_url` - The redirect URL for proceed with bank payment (only for Truelayer)

### Available Operations

* [createSinglePaymentIntent](#createsinglepaymentintent) - Create Single Payment Intent
* [getAllPayments](#getallpayments) - Get All Payments
* [getPayment](#getpayment) - Get Payment by Transaction Id
* [getPotPayments](#getpotpayments) - Get Payments by Pot Id

## createSinglePaymentIntent

Create a new Single Payment Intent for the given `amount` and `currency`. If successful, a new Payment Intent will be created with `pending_confirmation` status and the API will return the `client_secret` and `publishable_key` as response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequest;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequestBody;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequestBodyInvestmentInstructions;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequestBodyPaymentTypeEnum;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequestBodyPurposeEnum;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequestBodyServiceProviderEnum;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequestBodyServiceProviderParams;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentResponse;
import org.openapis.openapi.models.operations.CreateSinglePaymentIntentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSinglePaymentIntentRequest req = new CreateSinglePaymentIntentRequest(                new CreateSinglePaymentIntentRequestBody("distinctio", CreateSinglePaymentIntentRequestBodyPaymentTypeEnum.ELECTRONIC_FUND_TRANSFER, "aliquid", CreateSinglePaymentIntentRequestBodyPurposeEnum.CASH, "9d232271-5bf0-4cbb-9e31-b8b90f3443a1", CreateSinglePaymentIntentRequestBodyServiceProviderEnum.STRIPE) {{
                                currency = "aut";
                                investmentInstructions = new org.openapis.openapi.models.operations.CreateSinglePaymentIntentRequestBodyInvestmentInstructions[]{{
                                    add(new CreateSinglePaymentIntentRequestBodyInvestmentInstructions("repellendus") {{
                                        investmentProductId = "itaque";
                                        quantity = "consequatur";
                                        value = "est";
                                    }}),
                                    add(new CreateSinglePaymentIntentRequestBodyInvestmentInstructions("facilis") {{
                                        investmentProductId = "porro";
                                        quantity = "doloribus";
                                        value = "ut";
                                    }}),
                                    add(new CreateSinglePaymentIntentRequestBodyInvestmentInstructions("laudantium") {{
                                        investmentProductId = "cupiditate";
                                        quantity = "qui";
                                        value = "quae";
                                    }}),
                                }};
                                serviceProviderParams = new CreateSinglePaymentIntentRequestBodyServiceProviderParams() {{
                                    bankAccountId = "odio";
                                }};;
                            }};, "occaecati");            

            CreateSinglePaymentIntentResponse res = sdk.payments.createSinglePaymentIntent(req, new CreateSinglePaymentIntentSecurity("voluptatibus") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createSinglePaymentIntent201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPayments

Returns all the Payments setup for the tenant in an array

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPaymentsRequest;
import org.openapis.openapi.models.operations.GetAllPaymentsResponse;
import org.openapis.openapi.models.operations.GetAllPaymentsSecurity;
import org.openapis.openapi.models.operations.GetAllPaymentsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPaymentsRequest req = new GetAllPaymentsRequest("quisquam") {{
                pageNumber = "vero";
                pageSize = "omnis";
                paymentType = "quis";
                purpose = "ipsum";
                serviceProvider = "delectus";
                sort = GetAllPaymentsSortEnum.ASC;
            }};            

            GetAllPaymentsResponse res = sdk.payments.getAllPayments(req, new GetAllPaymentsSecurity("consectetur") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllPayments200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayment

Get Payment by transaction ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentRequest;
import org.openapis.openapi.models.operations.GetPaymentResponse;
import org.openapis.openapi.models.operations.GetPaymentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentRequest req = new GetPaymentRequest("vero", "tenetur");            

            GetPaymentResponse res = sdk.payments.getPayment(req, new GetPaymentSecurity("dignissimos") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.rootTypeForPayments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPotPayments

 Only last 1000 records will be recieved if the result contain more that 1000 payments. In that case, the pagination should be used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPotPaymentsRequest;
import org.openapis.openapi.models.operations.GetPotPaymentsResponse;
import org.openapis.openapi.models.operations.GetPotPaymentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPotPaymentsRequest req = new GetPotPaymentsRequest("hic", "distinctio") {{
                pageNumber = "quod";
                pageSize = "odio";
                paymentType = "similique";
                purpose = "facilis";
                serviceProvider = "vero";
            }};            

            GetPotPaymentsResponse res = sdk.payments.getPotPayments(req, new GetPotPaymentsSecurity("ducimus") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPotPayments200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
