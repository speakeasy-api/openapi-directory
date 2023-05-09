# addresses

### Available Operations

* [createClientAddress](#createclientaddress) - Create client address
* [deleteAddress](#deleteaddress) - Delete address
* [getAddress](#getaddress) - Get address
* [getAddressByVersion](#getaddressbyversion) - Get address by version
* [getClientAddresses](#getclientaddresses) - Get client addresses
* [getUnmaskedAddress](#getunmaskedaddress) - Get unmasked address
* [getUnmaskedAddressByVersion](#getunmaskedaddressbyversion) - Get unmasked address by version
* [getUnmaskedClientAddresses](#getunmaskedclientaddresses) - Get unmasked client addresses
* [updateClientAddress](#updateclientaddress) - Update client address

## createClientAddress

Creates new address for a given client profile.

> The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClientAddressRequest;
import org.openapis.openapi.models.operations.CreateClientAddressResponse;
import org.openapis.openapi.models.shared.Address;
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

            CreateClientAddressRequest req = new CreateClientAddressRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                address = new Address("RJ", "Brasil", "Locality", "Locality area", "20200-000", "51", "999") {{
                    countryCode = "BR";
                }};;
                alternativeKey = "email";
            }};            

            CreateClientAddressResponse res = sdk.addresses.createClientAddress(req);

            if (res.createClientAddress201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAddress

Deletes a client's address by `profileId` and `addressId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddressRequest;
import org.openapis.openapi.models.operations.DeleteAddressResponse;
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

            DeleteAddressRequest req = new DeleteAddressRequest("application/json", "application/json", "bf82180e-cf9e-4089-9af6-ae1518555992", "70caf394-8534-447e-a0ca-1803c669c771") {{
                alternativeKey = "email";
            }};            

            DeleteAddressResponse res = sdk.addresses.deleteAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddress

Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked address.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressRequest;
import org.openapis.openapi.models.operations.GetAddressResponse;
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

            GetAddressRequest req = new GetAddressRequest("application/json", "application/json", "bf82180e-cf9e-4089-9af6-ae1518555992", "70caf394-8534-447e-a0ca-1803c669c771") {{
                alternativeKey = "email";
            }};            

            GetAddressResponse res = sdk.addresses.getAddress(req);

            if (res.getAddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddressByVersion

Retrieves information of a specific version address of a given client.

> For security and privacy reasons, this request returns masked address data by version. For unmasked information, see Get unmasked address by version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressByVersionRequest;
import org.openapis.openapi.models.operations.GetAddressByVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressByVersionRequest req = new GetAddressByVersionRequest("application/json", "application/json", "bf82180e-cf9e-4089-9af6-ae1518555992", "86dfae79-1d23-43f2-a643-2fc8f1839461", "70caf394-8534-447e-a0ca-1803c669c771", "data-validation") {{
                alternativeKey = "email";
            }};            

            GetAddressByVersionResponse res = sdk.addresses.getAddressByVersion(req);

            if (res.getAddressByVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClientAddresses

Retrieves information of all addresses of a given client, by its `profileId`.

> For security and privacy reasons, this request returns masked address data. For unmasked information, see Get unmasked client addresses.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientAddressesRequest;
import org.openapis.openapi.models.operations.GetClientAddressesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "suscipit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClientAddressesRequest req = new GetClientAddressesRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                alternativeKey = "email";
            }};            

            GetClientAddressesResponse res = sdk.addresses.getClientAddresses(req);

            if (res.getClientAddresses200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUnmaskedAddress

Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnmaskedAddressRequest;
import org.openapis.openapi.models.operations.GetUnmaskedAddressResponse;
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

            GetUnmaskedAddressRequest req = new GetUnmaskedAddressRequest("application/json", "application/json", "bf82180e-cf9e-4089-9af6-ae1518555992", "70caf394-8534-447e-a0ca-1803c669c771", "data-validation") {{
                alternativeKey = "email";
            }};            

            GetUnmaskedAddressResponse res = sdk.addresses.getUnmaskedAddress(req);

            if (res.getUnmaskedAddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUnmaskedAddressByVersion

Retrieves unmasked information of a specific address version of a given client.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnmaskedAddressByVersionRequest;
import org.openapis.openapi.models.operations.GetUnmaskedAddressByVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUnmaskedAddressByVersionRequest req = new GetUnmaskedAddressByVersionRequest("application/json", "application/json", "bf82180e-cf9e-4089-9af6-ae1518555992", "86dfae79-1d23-43f2-a643-2fc8f1839461", "70caf394-8534-447e-a0ca-1803c669c771", "data-validation") {{
                alternativeKey = "email";
            }};            

            GetUnmaskedAddressByVersionResponse res = sdk.addresses.getUnmaskedAddressByVersion(req);

            if (res.getUnmaskedAddressByVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUnmaskedClientAddresses

Retrieves unmasked information of all addresses of a given client, by its `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnmaskedClientAddressesRequest;
import org.openapis.openapi.models.operations.GetUnmaskedClientAddressesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus", "tempora") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUnmaskedClientAddressesRequest req = new GetUnmaskedClientAddressesRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                alternativeKey = "email";
            }};            

            GetUnmaskedClientAddressesResponse res = sdk.addresses.getUnmaskedClientAddresses(req);

            if (res.getUnmaskedClientAddresses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientAddress

Updates one or more fields of an existing address for a given client profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientAddressRequest;
import org.openapis.openapi.models.operations.UpdateClientAddressRequestBody;
import org.openapis.openapi.models.operations.UpdateClientAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit", "molestiae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClientAddressRequest req = new UpdateClientAddressRequest("application/json", "application/json", "bf82180e-cf9e-4089-9af6-ae1518555992", "70caf394-8534-447e-a0ca-1803c669c771") {{
                requestBody = new UpdateClientAddressRequestBody() {{
                    administrativeAreaLevel1 = "RJ";
                    countryCode = "BR";
                    countryName = "Brasil";
                    locality = "Locality";
                    localityAreaLevel1 = "Locality area";
                    postalCode = "20200-000";
                    route = "Brasil";
                    streetNumber = "Brasil";
                }};;
                alternativeKey = "email";
            }};            

            UpdateClientAddressResponse res = sdk.addresses.updateClientAddress(req);

            if (res.updateClientAddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
