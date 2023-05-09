# addresses

### Available Operations

* [createNewCustomerAddress](#createnewcustomeraddress) - Create new customer address
* [deleteCustomerAddress](#deletecustomeraddress) - Delete customer address
* [updateCustomerAddress](#updatecustomeraddress) - Update customer address

## createNewCustomerAddress

Creates new customer address. 

> You can use this request to create customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNewCustomerAddressRequest;
import org.openapis.openapi.models.operations.CreateNewCustomerAddressResponse;
import org.openapis.openapi.models.shared.CreateUpdateAddressRequests;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNewCustomerAddressRequest req = new CreateNewCustomerAddressRequest("application/json", "application/json",                 new CreateUpdateAddressRequests() {{
                                addressName = "My house";
                                addressType = "residential";
                                city = "Rio de Janeiro";
                                complement = "3rd floor";
                                country = "BRA";
                                neighborhood = "Botafogo";
                                number = "300";
                                postalCode = "12345-000";
                                receiverName = "Clark Kent.";
                                reference = "Grey building";
                                state = "Rio de Janeiro";
                                street = "Praia de Botafogo";
                                userId = "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e";
                            }};) {{
                schema = "schema";
            }};            

            CreateNewCustomerAddressResponse res = sdk.addresses.createNewCustomerAddress(req);

            if (res.documentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomerAddress

Deletes a customer address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerAddressRequest;
import org.openapis.openapi.models.operations.DeleteCustomerAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomerAddressRequest req = new DeleteCustomerAddressRequest("application/json", "application/json", "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e");            

            DeleteCustomerAddressResponse res = sdk.addresses.deleteCustomerAddress(req);

            if (res.documentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomerAddress

Partially updates a customer address.

> You can use this request to update customer addresses according to any `AD` schema. Because of this, you are not restricted to using the fields exemplified below in your requests. But you should be aware of the fields allowed or required for the schemas you are using. Learn more about how to use [Master Data v2 schemas](https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomerAddressRequest;
import org.openapis.openapi.models.operations.UpdateCustomerAddressResponse;
import org.openapis.openapi.models.shared.CreateUpdateAddressRequests;
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

            UpdateCustomerAddressRequest req = new UpdateCustomerAddressRequest("application/json", "application/json",                 new CreateUpdateAddressRequests() {{
                                addressName = "My house";
                                addressType = "residential";
                                city = "Rio de Janeiro";
                                complement = "3rd floor";
                                country = "BRA";
                                neighborhood = "Botafogo";
                                number = "300";
                                postalCode = "12345-000";
                                receiverName = "Clark Kent.";
                                reference = "Grey building";
                                state = "Rio de Janeiro";
                                street = "Praia de Botafogo";
                                userId = "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e";
                            }};, "Client-b818cbda-e489-11e6-94f4-0ac138d2d42e") {{
                schema = "schema";
            }};            

            UpdateCustomerAddressResponse res = sdk.addresses.updateCustomerAddress(req);

            if (res.documentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
