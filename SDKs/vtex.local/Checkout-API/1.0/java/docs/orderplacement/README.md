# orderPlacement

### Available Operations

* [placeOrder](#placeorder) - Place order
* [placeOrderFromExistingOrderForm](#placeorderfromexistingorderform) - Place order from an existing cart
* [processOrder](#processorder) - Process order

## placeOrder

Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.

>⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceOrderRequest;
import org.openapis.openapi.models.operations.PlaceOrderRequestBody;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyClientProfileData;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyItems;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsBundleItems;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsItemAttachment;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsPriceTags;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyMarketingData;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentData;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentDataGiftCards;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentDataPaymentSystems;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentDataPayments;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodySalesAssociateData;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyShippingData;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyShippingDataAddress;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyShippingDataLogisticsInfo;
import org.openapis.openapi.models.operations.PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow;
import org.openapis.openapi.models.operations.PlaceOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "distinctio") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlaceOrderRequest req = new PlaceOrderRequest("quibusdam", "labore") {{
                requestBody = new PlaceOrderRequestBody(                new PlaceOrderRequestBodyClientProfileData("modi") {{
                                    corporateDocument = "qui";
                                    corporateName = "aliquid";
                                    corporatePhone = "cupiditate";
                                    document = "quos";
                                    documentType = "perferendis";
                                    firstName = "Casimir";
                                    isCorporate = false;
                                    lastName = "Simonis";
                                    phone = "(216) 627-7294 x275";
                                    stateInscription = "aliquid";
                                    tradeName = "provident";
                                }};,                 new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItems[]{{
                                    add(new PlaceOrderRequestBodyItems("123", 1, "1") {{
                                        attachments = new String[]{{
                                            add("officia"),
                                            add("dolor"),
                                            add("debitis"),
                                        }};
                                        bundleItems = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsBundleItems[]{{
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                        }};
                                        commission = 10L;
                                        freightCommission = 10L;
                                        id = "123";
                                        isGift = false;
                                        itemAttachment = new PlaceOrderRequestBodyItemsItemAttachment() {{
                                            content = "content-example";
                                            name = "name-example";
                                        }};
                                        measurementUnit = "dolorum";
                                        price = 2499L;
                                        priceTags = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsPriceTags[]{{
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "in";
                                                isPercentual = false;
                                                name = "Mrs. Emilio Price";
                                                rawValue = 813798L;
                                                value = 411820L;
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "aliquid";
                                                isPercentual = false;
                                                name = "Tomas Friesen";
                                                rawValue = 881736L;
                                                value = 965417L;
                                            }}),
                                        }};
                                        quantity = 1;
                                        seller = "1";
                                        unitMultiplier = 692532L;
                                    }}),
                                    add(new PlaceOrderRequestBodyItems("123", 1, "1") {{
                                        attachments = new String[]{{
                                            add("nam"),
                                            add("id"),
                                            add("blanditiis"),
                                        }};
                                        bundleItems = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsBundleItems[]{{
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                        }};
                                        commission = 10L;
                                        freightCommission = 10L;
                                        id = "123";
                                        isGift = false;
                                        itemAttachment = new PlaceOrderRequestBodyItemsItemAttachment() {{
                                            content = "content-example";
                                            name = "name-example";
                                        }};
                                        measurementUnit = "sapiente";
                                        price = 2499L;
                                        priceTags = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsPriceTags[]{{
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "deserunt";
                                                isPercentual = false;
                                                name = "Wilma Mosciski";
                                                rawValue = 19193L;
                                                value = 470132L;
                                            }}),
                                        }};
                                        quantity = 1;
                                        seller = "1";
                                        unitMultiplier = 301575L;
                                    }}),
                                    add(new PlaceOrderRequestBodyItems("123", 1, "1") {{
                                        attachments = new String[]{{
                                            add("id"),
                                            add("labore"),
                                            add("labore"),
                                        }};
                                        bundleItems = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsBundleItems[]{{
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                        }};
                                        commission = 10L;
                                        freightCommission = 10L;
                                        id = "123";
                                        isGift = false;
                                        itemAttachment = new PlaceOrderRequestBodyItemsItemAttachment() {{
                                            content = "content-example";
                                            name = "name-example";
                                        }};
                                        measurementUnit = "natus";
                                        price = 2499L;
                                        priceTags = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsPriceTags[]{{
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "eum";
                                                isPercentual = false;
                                                name = "Brandon Brakus V";
                                                rawValue = 354047L;
                                                value = 590873L;
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "quos";
                                                isPercentual = false;
                                                name = "Kenneth O'Hara";
                                                rawValue = 320997L;
                                                value = 431418L;
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "dolor";
                                                isPercentual = false;
                                                name = "Ms. Fred Hilll";
                                                rawValue = 891924L;
                                                value = 260341L;
                                            }}),
                                        }};
                                        quantity = 1;
                                        seller = "1";
                                        unitMultiplier = 806194L;
                                    }}),
                                    add(new PlaceOrderRequestBodyItems("123", 1, "1") {{
                                        attachments = new String[]{{
                                            add("facilis"),
                                            add("in"),
                                            add("architecto"),
                                        }};
                                        bundleItems = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsBundleItems[]{{
                                            add(new PlaceOrderRequestBodyItemsBundleItems() {{
                                                id = "id-example";
                                                name = "name-example";
                                                price = 199L;
                                                type = "type-example";
                                            }}),
                                        }};
                                        commission = 10L;
                                        freightCommission = 10L;
                                        id = "123";
                                        isGift = false;
                                        itemAttachment = new PlaceOrderRequestBodyItemsItemAttachment() {{
                                            content = "content-example";
                                            name = "name-example";
                                        }};
                                        measurementUnit = "repudiandae";
                                        price = 2499L;
                                        priceTags = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyItemsPriceTags[]{{
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "expedita";
                                                isPercentual = false;
                                                name = "Kristie Spencer";
                                                rawValue = 868126L;
                                                value = 37559L;
                                            }}),
                                            add(new PlaceOrderRequestBodyItemsPriceTags() {{
                                                identifier = "consequuntur";
                                                isPercentual = false;
                                                name = "Miss Nick Cummerata";
                                                rawValue = 864934L;
                                                value = 807319L;
                                            }}),
                                        }};
                                        quantity = 1;
                                        seller = "1";
                                        unitMultiplier = 411397L;
                                    }}),
                                }},                 new PlaceOrderRequestBodyPaymentData(                new org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentDataPayments[]{{
                                                    add(new PlaceOrderRequestBodyPaymentDataPayments(373291L, "voluptate", 420075L, 722056L) {{
                                                        accountId = "odit";
                                                        bin = "ea";
                                                        installments = 33222L;
                                                        paymentSystem = "ab";
                                                        referenceValue = 982575L;
                                                        value = 697429L;
                                                    }}),
                                                    add(new PlaceOrderRequestBodyPaymentDataPayments(230742L, "aut", 764912L, 359978L) {{
                                                        accountId = "eaque";
                                                        bin = "pariatur";
                                                        installments = 365496L;
                                                        paymentSystem = "voluptatibus";
                                                        referenceValue = 16627L;
                                                        value = 855804L;
                                                    }}),
                                                    add(new PlaceOrderRequestBodyPaymentDataPayments(489549L, "eaque", 338985L, 199996L) {{
                                                        accountId = "hic";
                                                        bin = "libero";
                                                        installments = 749999L;
                                                        paymentSystem = "dolores";
                                                        referenceValue = 339404L;
                                                        value = 521037L;
                                                    }}),
                                                }}) {{
                                    giftCardMessages = new Object[]{{
                                        add("perferendis"),
                                    }};
                                    giftCards = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentDataGiftCards[]{{
                                        add(new PlaceOrderRequestBodyPaymentDataGiftCards("HYUO-TEZZ-QFFT-HTFR", 500L) {{
                                            balance = 500L;
                                            id = "1390324156495k195pmab4rall3di";
                                            inUse = true;
                                            isSpecialCard = false;
                                            name = "name-example";
                                            redemptionCode = "HYUO-TEZZ-QFFT-HTFR";
                                            value = 500L;
                                        }}),
                                    }};
                                    paymentSystems = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyPaymentDataPaymentSystems[]{{
                                        add(new PlaceOrderRequestBodyPaymentDataPaymentSystems() {{
                                            description = "quam";
                                            groupName = "creditCardPaymentGroup";
                                            id = 2L;
                                            isCustom = false;
                                            name = "Visa";
                                            requiresDocument = false;
                                            selected = false;
                                            stringId = "dolor";
                                            template = "vero";
                                            validator = new PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator() {{
                                                cardCodeMask = "999";
                                                cardCodeRegex = "[^0-9]";
                                                mask = "9999 9999 9999 9999";
                                                regex = "^4";
                                                weights = new Long[]{{
                                                    add(944120L),
                                                    add(928082L),
                                                }};
                                            }};
                                        }}),
                                        add(new PlaceOrderRequestBodyPaymentDataPaymentSystems() {{
                                            description = "omnis";
                                            groupName = "creditCardPaymentGroup";
                                            id = 2L;
                                            isCustom = false;
                                            name = "Visa";
                                            requiresDocument = false;
                                            selected = false;
                                            stringId = "facilis";
                                            template = "perspiciatis";
                                            validator = new PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator() {{
                                                cardCodeMask = "999";
                                                cardCodeRegex = "[^0-9]";
                                                mask = "9999 9999 9999 9999";
                                                regex = "^4";
                                                weights = new Long[]{{
                                                    add(783645L),
                                                }};
                                            }};
                                        }}),
                                        add(new PlaceOrderRequestBodyPaymentDataPaymentSystems() {{
                                            description = "consequuntur";
                                            groupName = "creditCardPaymentGroup";
                                            id = 2L;
                                            isCustom = false;
                                            name = "Visa";
                                            requiresDocument = false;
                                            selected = false;
                                            stringId = "blanditiis";
                                            template = "error";
                                            validator = new PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator() {{
                                                cardCodeMask = "999";
                                                cardCodeRegex = "[^0-9]";
                                                mask = "9999 9999 9999 9999";
                                                regex = "^4";
                                                weights = new Long[]{{
                                                    add(577229L),
                                                }};
                                            }};
                                        }}),
                                        add(new PlaceOrderRequestBodyPaymentDataPaymentSystems() {{
                                            description = "rerum";
                                            groupName = "creditCardPaymentGroup";
                                            id = 2L;
                                            isCustom = false;
                                            name = "Visa";
                                            requiresDocument = false;
                                            selected = false;
                                            stringId = "adipisci";
                                            template = "asperiores";
                                            validator = new PlaceOrderRequestBodyPaymentDataPaymentSystemsValidator() {{
                                                cardCodeMask = "999";
                                                cardCodeRegex = "[^0-9]";
                                                mask = "9999 9999 9999 9999";
                                                regex = "^4";
                                                weights = new Long[]{{
                                                    add(267262L),
                                                    add(613966L),
                                                    add(679091L),
                                                    add(535633L),
                                                }};
                                            }};
                                        }}),
                                    }};
                                    updateStatus = "pariatur";
                                }};,                 new PlaceOrderRequestBodyShippingData() {{
                                    address = new PlaceOrderRequestBodyShippingDataAddress() {{
                                        addressId = "provident";
                                        addressType = "residential";
                                        city = "Rennerworth";
                                        complement = "quaerat";
                                        country = "Martinique";
                                        geoCoordinates = new Double[]{{
                                            add(-47.924747467041016),
                                            add(-47.924747467041016),
                                        }};
                                        neighborhood = "dolorem";
                                        number = "dolorem";
                                        postalCode = "12957";
                                        receiverName = "voluptate";
                                        reference = "dignissimos";
                                        state = "reiciendis";
                                        street = "62000 Jeff Garden";
                                    }};;
                                    logisticsInfo = new org.openapis.openapi.models.operations.PlaceOrderRequestBodyShippingDataLogisticsInfo[]{{
                                        add(new PlaceOrderRequestBodyShippingDataLogisticsInfo(679393L, 478596L, "voluptate") {{
                                            deliveryWindow = new PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow() {{
                                                endDateUtc = "quidem";
                                                lisPrice = 976405L;
                                                price = 377752L;
                                                startDateUtc = "natus";
                                                tax = 179603L;
                                            }};
                                            itemIndex = 542499L;
                                            lockTTL = "sit";
                                            price = 854614L;
                                            selectedSla = "ab";
                                            shippingEstimate = "soluta";
                                        }}),
                                        add(new PlaceOrderRequestBodyShippingDataLogisticsInfo(906418L, 263322L, "aspernatur") {{
                                            deliveryWindow = new PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow() {{
                                                endDateUtc = "dolorum";
                                                lisPrice = 536579L;
                                                price = 607045L;
                                                startDateUtc = "necessitatibus";
                                                tax = 714697L;
                                            }};
                                            itemIndex = 990339L;
                                            lockTTL = "nihil";
                                            price = 216897L;
                                            selectedSla = "voluptate";
                                            shippingEstimate = "id";
                                        }}),
                                        add(new PlaceOrderRequestBodyShippingDataLogisticsInfo(831049L, 519711L, "similique") {{
                                            deliveryWindow = new PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow() {{
                                                endDateUtc = "perferendis";
                                                lisPrice = 229219L;
                                                price = 758379L;
                                                startDateUtc = "accusamus";
                                                tax = 320017L;
                                            }};
                                            itemIndex = 904425L;
                                            lockTTL = "suscipit";
                                            price = 645785L;
                                            selectedSla = "provident";
                                            shippingEstimate = "minima";
                                        }}),
                                        add(new PlaceOrderRequestBodyShippingDataLogisticsInfo(456130L, 687488L, "iusto") {{
                                            deliveryWindow = new PlaceOrderRequestBodyShippingDataLogisticsInfoDeliveryWindow() {{
                                                endDateUtc = "alias";
                                                lisPrice = 872651L;
                                                price = 311860L;
                                                startDateUtc = "tempora";
                                                tax = 425451L;
                                            }};
                                            itemIndex = 798047L;
                                            lockTTL = "officiis";
                                            price = 185636L;
                                            selectedSla = "dolorum";
                                            shippingEstimate = "a";
                                        }}),
                                    }};
                                    updateStatus = "ipsum";
                                }};) {{
                    marketingData = new PlaceOrderRequestBodyMarketingData() {{
                        coupon = "quisquam";
                        utmCampaign = "tenetur";
                        utmMedium = "amet";
                        utmSource = "tempore";
                        utmiCampaign = "accusamus";
                        utmiPage = "numquam";
                        utmiPart = "enim";
                    }};;
                    openTextField = "dolorem";
                    salesAssociateData = new PlaceOrderRequestBodySalesAssociateData() {{
                        salesAssociateId = "sapiente";
                    }};;
                }};;
                sc = 1L;
            }};            

            PlaceOrderResponse res = sdk.orderPlacement.placeOrder(req);

            if (res.placeOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeOrderFromExistingOrderForm

This endpoint places an order from an existing `orderForm` object, meaning an existing cart.

After the creation of an order with this request, you have five minutes to send payment information and then request payment processing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceOrderFromExistingOrderFormRequest;
import org.openapis.openapi.models.operations.PlaceOrderFromExistingOrderFormRequestBody;
import org.openapis.openapi.models.operations.PlaceOrderFromExistingOrderFormResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam", "nihil") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PlaceOrderFromExistingOrderFormRequest req = new PlaceOrderFromExistingOrderFormRequest("sit", "expedita", "neque") {{
                requestBody = new PlaceOrderFromExistingOrderFormRequestBody(153694L, "vel", 730442L, 374170L) {{
                    optinNewsLetter = false;
                    savePersonalData = false;
                }};;
            }};            

            PlaceOrderFromExistingOrderFormResponse res = sdk.orderPlacement.placeOrderFromExistingOrderForm(req);

            if (res.placeOrderFromExistingOrderForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## processOrder

Order processing callback request, which is made after an order's payment is approved.

> This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProcessOrderRequest;
import org.openapis.openapi.models.operations.ProcessOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "quam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProcessOrderRequest req = new ProcessOrderRequest("ipsum", "incidunt", "qui", "cupiditate");            

            ProcessOrderResponse res = sdk.orderPlacement.processOrder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
