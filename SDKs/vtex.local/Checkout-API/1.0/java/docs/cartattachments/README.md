# cartAttachments

### Available Operations

* [addClientPreferences](#addclientpreferences) - Add client preferences
* [addClientProfile](#addclientprofile) - Add client profile
* [addMarketingData](#addmarketingdata) - Add marketing data
* [addMerchantContextData](#addmerchantcontextdata) - Add merchant context data
* [addPaymentData](#addpaymentdata) - Add payment data
* [addShippingAddress](#addshippingaddress) - Add shipping address and select delivery option
* [getClientProfileByEmail](#getclientprofilebyemail) - Get client profile by email

## addClientPreferences

Use this request to include client preferences information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddClientPreferencesRequest;
import org.openapis.openapi.models.operations.AddClientPreferencesRequestBody;
import org.openapis.openapi.models.operations.AddClientPreferencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "illum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddClientPreferencesRequest req = new AddClientPreferencesRequest("vel", "error",                 new AddClientPreferencesRequestBody() {{
                                locale = "deserunt";
                                optinNewsLetter = false;
                            }};, "suscipit");            

            AddClientPreferencesResponse res = sdk.cartAttachments.addClientPreferences(req);

            if (res.addClientPreferences200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addClientProfile

Use this request to include client profile information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddClientProfileRequest;
import org.openapis.openapi.models.operations.AddClientProfileRequestBody;
import org.openapis.openapi.models.operations.AddClientProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "magnam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddClientProfileRequest req = new AddClientProfileRequest("debitis", "ipsa",                 new AddClientProfileRequestBody("delectus", "tempora", "suscipit", "molestiae", "minus") {{
                                corporateDocument = "placeat";
                                corporateName = "voluptatum";
                                corporatePhone = "iusto";
                                isCorporate = false;
                                phone = "(598) 230-6038 x9718";
                                stateInscription = "at";
                                tradeName = "maiores";
                            }};, "molestiae");            

            AddClientProfileResponse res = sdk.cartAttachments.addClientProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addMarketingData

Use this request to include marketing information to a given shopping cart.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddMarketingDataRequest;
import org.openapis.openapi.models.operations.AddMarketingDataRequestBody;
import org.openapis.openapi.models.operations.AddMarketingDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod", "quod") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddMarketingDataRequest req = new AddMarketingDataRequest("esse", "totam",                 new AddMarketingDataRequestBody() {{
                                coupon = "porro";
                                marketingTags = new String[]{{
                                    add("dicta"),
                                    add("nam"),
                                    add("officia"),
                                }};
                                utmCampaign = "occaecati";
                                utmMedium = "fugit";
                                utmSource = "deleniti";
                                utmiCampaign = "hic";
                                utmiPage = "optio";
                                utmiPart = "totam";
                            }};, "beatae");            

            AddMarketingDataResponse res = sdk.cartAttachments.addMarketingData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addMerchantContextData

This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddMerchantContextDataRequest;
import org.openapis.openapi.models.operations.AddMerchantContextDataRequestBody;
import org.openapis.openapi.models.operations.AddMerchantContextDataRequestBodySalesAssociateData;
import org.openapis.openapi.models.operations.AddMerchantContextDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddMerchantContextDataRequest req = new AddMerchantContextDataRequest("modi", "qui",                 new AddMerchantContextDataRequestBody(                new AddMerchantContextDataRequestBodySalesAssociateData() {{
                                                salesAssociateId = "impedit";
                                            }};);, "cum");            

            AddMerchantContextDataResponse res = sdk.cartAttachments.addMerchantContextData(req);

            if (res.addMerchantContextData200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addPaymentData

Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddPaymentDataRequest;
import org.openapis.openapi.models.operations.AddPaymentDataRequestBody;
import org.openapis.openapi.models.operations.AddPaymentDataRequestBodyPayments;
import org.openapis.openapi.models.operations.AddPaymentDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "ipsum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddPaymentDataRequest req = new AddPaymentDataRequest("excepturi", "aspernatur",                 new AddPaymentDataRequestBody() {{
                                payments = new org.openapis.openapi.models.operations.AddPaymentDataRequestBodyPayments[]{{
                                    add(new AddPaymentDataRequestBodyPayments() {{
                                        group = "ad";
                                        hasDefaultBillingAddress = false;
                                        installments = 617636L;
                                        installmentsInterestRate = 1496.75;
                                        installmentsValue = 612096L;
                                        paymentSystem = 222321L;
                                        paymentSystemName = "natus";
                                        referenceValue = 386489L;
                                        value = 943749L;
                                    }}),
                                }};
                            }};, "saepe");            

            AddPaymentDataResponse res = sdk.cartAttachments.addPaymentData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addShippingAddress

Use this request to include shipping information and/or selected delivery option to a given shopping cart.

To add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

> This request has a time out of 12 seconds.

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddShippingAddressRequest;
import org.openapis.openapi.models.operations.AddShippingAddressRequestBody;
import org.openapis.openapi.models.operations.AddShippingAddressRequestBodyLogisticsInfo;
import org.openapis.openapi.models.operations.AddShippingAddressRequestBodySelectedAddresses;
import org.openapis.openapi.models.operations.AddShippingAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "in") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddShippingAddressRequest req = new AddShippingAddressRequest("corporis", "iste",                 new AddShippingAddressRequestBody() {{
                                clearAddressIfPostalCodeNotFound = false;
                                logisticsInfo = new org.openapis.openapi.models.operations.AddShippingAddressRequestBodyLogisticsInfo[]{{
                                    add(new AddShippingAddressRequestBodyLogisticsInfo() {{
                                        itemIndex = 902349L;
                                        selectedDeliveryChannel = "quidem";
                                        selectedSla = "architecto";
                                    }}),
                                    add(new AddShippingAddressRequestBodyLogisticsInfo() {{
                                        itemIndex = 60225L;
                                        selectedDeliveryChannel = "reiciendis";
                                        selectedSla = "est";
                                    }}),
                                }};
                                selectedAddresses = new org.openapis.openapi.models.operations.AddShippingAddressRequestBodySelectedAddresses[]{{
                                    add(new AddShippingAddressRequestBodySelectedAddresses() {{
                                        addressType = "residential";
                                        city = "Rio de Janeiro";
                                        complement = "3rd floor";
                                        country = "BRA";
                                        geoCoordinates = new Double[]{{
                                            add(-47.924747467041016),
                                            add(-47.924747467041016),
                                            add(-47.924747467041016),
                                        }};
                                        neighborhood = "Botafogo";
                                        number = "300";
                                        postalCode = "12345-000";
                                        receiverName = "receiver-name";
                                        reference = "Grey building";
                                        state = "RJ";
                                        street = "Praia de Botafogo";
                                    }}),
                                    add(new AddShippingAddressRequestBodySelectedAddresses() {{
                                        addressType = "residential";
                                        city = "Rio de Janeiro";
                                        complement = "3rd floor";
                                        country = "BRA";
                                        geoCoordinates = new Double[]{{
                                            add(-47.924747467041016),
                                        }};
                                        neighborhood = "Botafogo";
                                        number = "300";
                                        postalCode = "12345-000";
                                        receiverName = "receiver-name";
                                        reference = "Grey building";
                                        state = "RJ";
                                        street = "Praia de Botafogo";
                                    }}),
                                    add(new AddShippingAddressRequestBodySelectedAddresses() {{
                                        addressType = "residential";
                                        city = "Rio de Janeiro";
                                        complement = "3rd floor";
                                        country = "BRA";
                                        geoCoordinates = new Double[]{{
                                            add(-47.924747467041016),
                                        }};
                                        neighborhood = "Botafogo";
                                        number = "300";
                                        postalCode = "12345-000";
                                        receiverName = "receiver-name";
                                        reference = "Grey building";
                                        state = "RJ";
                                        street = "Praia de Botafogo";
                                    }}),
                                }};
                            }};, "corporis");            

            AddShippingAddressResponse res = sdk.cartAttachments.addShippingAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClientProfileByEmail

Retrieve a client's profile information by providing an email address.

If the response body fields are empty, the following situations may have occurred:

1. There is no client registered with the email address provided in your store, or;
2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).

>⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientProfileByEmailRequest;
import org.openapis.openapi.models.operations.GetClientProfileByEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo", "nobis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClientProfileByEmailRequest req = new GetClientProfileByEmailRequest("enim", "omnis", "nemo");            

            GetClientProfileByEmailResponse res = sdk.cartAttachments.getClientProfileByEmail(req);

            if (res.getClientProfileByEmail200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
