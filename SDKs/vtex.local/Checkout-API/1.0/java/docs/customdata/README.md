# customData

### Available Operations

* [removesinglecustomfieldvalue](#removesinglecustomfieldvalue) - Remove single custom field value
* [setMultipleCustomFieldValues](#setmultiplecustomfieldvalues) - Set multiple custom field values
* [setSingleCustomFieldValue](#setsinglecustomfieldvalue) - Set single custom field value

## removesinglecustomfieldvalue

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

You also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemovesinglecustomfieldvalueRequest;
import org.openapis.openapi.models.operations.RemovesinglecustomfieldvalueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero", "nihil") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemovesinglecustomfieldvalueRequest req = new RemovesinglecustomfieldvalueRequest("praesentium", "voluptatibus", "ipsa", "omnis", "voluptate");            

            RemovesinglecustomfieldvalueResponse res = sdk.customData.removesinglecustomfieldvalue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setMultipleCustomFieldValues

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.

To do that, you need to inform the ID of the app you created with the configuration API (`appId`).

In the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetMultipleCustomFieldValuesRequest;
import org.openapis.openapi.models.operations.SetMultipleCustomFieldValuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum", "perferendis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetMultipleCustomFieldValuesRequest req = new SetMultipleCustomFieldValuesRequest("doloremque", "reprehenderit",                 new java.util.HashMap<String, Object>() {{
                                put("maiores", "dicta");
                                put("corporis", "dolore");
                            }}, "iusto", "dicta");            

            SetMultipleCustomFieldValuesResponse res = sdk.customData.setMultipleCustomFieldValues(req);

            if (res.setMultipleCustomFieldValues200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setSingleCustomFieldValue

Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.

To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).

In the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).

The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetSingleCustomFieldValueRequest;
import org.openapis.openapi.models.operations.SetSingleCustomFieldValueResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetsinglecustomfieldvalueRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum", "enim") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetSingleCustomFieldValueRequest req = new SetSingleCustomFieldValueRequest("accusamus", "commodi",                 new SetsinglecustomfieldvalueRequest("repudiandae");, "quae", "ipsum", "quidem");            

            SetSingleCustomFieldValueResponse res = sdk.customData.setSingleCustomFieldValue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
