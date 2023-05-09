# profiles

### Available Operations

* [createClientProfile](#createclientprofile) - Create client profile
* [deleteClientProfile](#deleteclientprofile) - Delete client profile
* [getProfile](#getprofile) - Get profile
* [getProfileByVersion](#getprofilebyversion) - Get profile by version
* [getUnmaskedProfile](#getunmaskedprofile) - Get unmasked profile
* [getUnmaskedProfileByVersion](#getunmaskedprofilebyversion) - Get unmasked profile by version
* [updateClientProfile](#updateclientprofile) - Updates client profile

## createClientProfile

Creates new client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClientProfileRequest;
import org.openapis.openapi.models.operations.CreateClientProfileResponse;
import org.openapis.openapi.models.shared.Profile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus", "placeat") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClientProfileRequest req = new CreateClientProfileRequest("application/json", "application/json") {{
                profile = new Profile("12345678900", "CPF", "john.doe@example.com", "John", "Doe") {{
                    birthDate = "1925-11-17";
                }};;
                ttl = 365L;
            }};            

            CreateClientProfileResponse res = sdk.profiles.createClientProfile(req);

            if (res.createClientProfile201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteClientProfile

Deletes a client profile by `profileId`.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClientProfileRequest;
import org.openapis.openapi.models.operations.DeleteClientProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum", "iusto") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClientProfileRequest req = new DeleteClientProfileRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771");            

            DeleteClientProfileResponse res = sdk.profiles.deleteClientProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfile

Retrieves the information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileRequest;
import org.openapis.openapi.models.operations.GetProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "nisi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProfileRequest req = new GetProfileRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                alternativeKey = "email";
            }};            

            GetProfileResponse res = sdk.profiles.getProfile(req);

            if (res.getProfile200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfileByVersion

Retrieves the information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> For security and privacy reasons, this request returns masked profile data. For unmasked information, see Get unmasked profile by version.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileByVersionRequest;
import org.openapis.openapi.models.operations.GetProfileByVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "temporibus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProfileByVersionRequest req = new GetProfileByVersionRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771", "70caf394-8534-447e-a0ca-1803c669c771");            

            GetProfileByVersionResponse res = sdk.profiles.getProfileByVersion(req);

            if (res.getProfileByVersion200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUnmaskedProfile

Retrieves unmasked information of a specific client, by its `profileId`.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnmaskedProfileRequest;
import org.openapis.openapi.models.operations.GetUnmaskedProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab", "quis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUnmaskedProfileRequest req = new GetUnmaskedProfileRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771", "data-validation") {{
                alternativeKey = "email";
            }};            

            GetUnmaskedProfileResponse res = sdk.profiles.getUnmaskedProfile(req);

            if (res.getUnmaskedProfile200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUnmaskedProfileByVersion

Retrieves unmasked information of a specific version of a client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUnmaskedProfileByVersionRequest;
import org.openapis.openapi.models.operations.GetUnmaskedProfileByVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "deserunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUnmaskedProfileByVersionRequest req = new GetUnmaskedProfileByVersionRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771", "70caf394-8534-447e-a0ca-1803c669c771", "data-validation");            

            GetUnmaskedProfileByVersionResponse res = sdk.profiles.getUnmaskedProfileByVersion(req);

            if (res.getUnmaskedProfileByVersion200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientProfile

Updates one or more fields of an existing client profile.

> Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.

> Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientProfileRequest;
import org.openapis.openapi.models.operations.UpdateClientProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateClientProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ipsam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClientProfileRequest req = new UpdateClientProfileRequest("application/json", "application/json", "70caf394-8534-447e-a0ca-1803c669c771") {{
                requestBody = new UpdateClientProfileRequestBody() {{
                    birthDate = "1925-11-17";
                    document = "12345678900";
                    documentType = "CPF";
                    email = "john.doe@example.com";
                    firstName = "John";
                    lastName = "Doe";
                }};;
                alternativeKey = "email";
                ttl = 365L;
            }};            

            UpdateClientProfileResponse res = sdk.profiles.updateClientProfile(req);

            if (res.updateClientProfile200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
