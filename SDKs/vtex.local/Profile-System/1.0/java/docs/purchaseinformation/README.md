# purchaseInformation

### Available Operations

* [createPurchaseInformation](#createpurchaseinformation) - Create purchase information
* [deletePurchaseInformation](#deletepurchaseinformation) - Delete purchase information
* [getPurchaseInformation](#getpurchaseinformation) - Get purchase information
* [getUnmaskedPurchaseInformation](#getunmaskedpurchaseinformation) - Get unmasked purchase information
* [updatePurchaseInformation](#updatepurchaseinformation) - Update purchase information

## createPurchaseInformation

Creates purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePurchaseInformationRequest;
import org.openapis.openapi.models.operations.CreatePurchaseInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "dolorum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePurchaseInformationRequest req = new CreatePurchaseInformationRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                requestBody = "dicta";
                alternativeKey = "email";
            }};            

            CreatePurchaseInformationResponse res = sdk.purchaseInformation.createPurchaseInformation(req);

            if (res.createPurchaseInformation201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePurchaseInformation

Deletes purchase informaiton by `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePurchaseInformationRequest;
import org.openapis.openapi.models.operations.DeletePurchaseInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam", "officia") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePurchaseInformationRequest req = new DeletePurchaseInformationRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                alternativeKey = "email";
            }};            

            DeletePurchaseInformationResponse res = sdk.purchaseInformation.deletePurchaseInformation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPurchaseInformation

Retrieves purchase information of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked data. For unmasked information, see Get unmasked purchase information.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPurchaseInformationRequest;
import org.openapis.openapi.models.operations.GetPurchaseInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati", "fugit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPurchaseInformationRequest req = new GetPurchaseInformationRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                alternativeKey = "email";
            }};            

            GetPurchaseInformationResponse res = sdk.purchaseInformation.getPurchaseInformation(req);

            if (res.getPurchaseInformation200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUnmaskedPurchaseInformation

Retrieves unmasked purchase information of a given client, by its `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnmaskedPurchaseInformationRequest;
import org.openapis.openapi.models.operations.GetUnmaskedPurchaseInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "hic") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUnmaskedPurchaseInformationRequest req = new GetUnmaskedPurchaseInformationRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771");            

            GetUnmaskedPurchaseInformationResponse res = sdk.purchaseInformation.getUnmaskedPurchaseInformation(req);

            if (res.getUnmaskedPurchaseInformation200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePurchaseInformation

Updates one or more fields of existing purchase information for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePurchaseInformationRequest;
import org.openapis.openapi.models.operations.UpdatePurchaseInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio", "totam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePurchaseInformationRequest req = new UpdatePurchaseInformationRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                requestBody = "beatae";
                alternativeKey = "email";
            }};            

            UpdatePurchaseInformationResponse res = sdk.purchaseInformation.updatePurchaseInformation(req);

            if (res.updatePurchaseInformation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
