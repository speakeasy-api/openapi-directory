# customerProfiles

### Available Operations

* [createNewCustomerProfilev2](#createnewcustomerprofilev2) - Create new customer profile
* [deleteCustomerProfile](#deletecustomerprofile) - Delete customer profile
* [updateCustomerProfile](#updatecustomerprofile) - Update customer profile

## createNewCustomerProfilev2

Creates new customer profile.

> You can use this request to create customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNewCustomerProfilev2Request;
import org.openapis.openapi.models.operations.CreateNewCustomerProfilev2Response;
import org.openapis.openapi.models.shared.CreateUpdateProfileRequests;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad", "natus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNewCustomerProfilev2Request req = new CreateNewCustomerProfilev2Request("application/json", "application/json",                 new CreateUpdateProfileRequests() {{
                                document = "12345678900";
                                documentType = "CPF";
                                email = "clark.kent@examplemail.com";
                                firstName = "Clark";
                                isCorporate = false;
                                isNewsletterOptIn = false;
                                lastName = "Kent";
                                localeDefault = "en-US";
                                phone = "+12025550195";
                            }};) {{
                schema = "schema";
            }};            

            CreateNewCustomerProfilev2Response res = sdk.customerProfiles.createNewCustomerProfilev2(req);

            if (res.documentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomerProfile

Deletes a customer profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerProfileRequest;
import org.openapis.openapi.models.operations.DeleteCustomerProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed", "iste") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomerProfileRequest req = new DeleteCustomerProfileRequest("application/json", "application/json", "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e");            

            DeleteCustomerProfileResponse res = sdk.customerProfiles.deleteCustomerProfile(req);

            if (res.documentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomerProfile

Partially updates a customer profile.

> You can use this request to update customer profiles according to any `CL` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomerProfileRequest;
import org.openapis.openapi.models.operations.UpdateCustomerProfileResponse;
import org.openapis.openapi.models.shared.CreateUpdateProfileRequests;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor", "natus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomerProfileRequest req = new UpdateCustomerProfileRequest("application/json", "application/json",                 new CreateUpdateProfileRequests() {{
                                document = "12345678900";
                                documentType = "CPF";
                                email = "clark.kent@examplemail.com";
                                firstName = "Clark";
                                isCorporate = false;
                                isNewsletterOptIn = false;
                                lastName = "Kent";
                                localeDefault = "en-US";
                                phone = "+12025550195";
                            }};, "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e") {{
                schema = "schema";
            }};            

            UpdateCustomerProfileResponse res = sdk.customerProfiles.updateCustomerProfile(req);

            if (res.documentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
