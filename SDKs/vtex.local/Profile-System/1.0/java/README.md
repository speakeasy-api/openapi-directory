# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateClientAddressPathParams;
import org.openapis.openapi.models.operations.CreateClientAddressQueryParams;
import org.openapis.openapi.models.operations.CreateClientAddressHeaders;
import org.openapis.openapi.models.operations.CreateClientAddressRequest;
import org.openapis.openapi.models.operations.CreateClientAddressResponse;
import org.openapis.openapi.models.shared.Address;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    appKey = new SchemeAppKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    appToken = new SchemeAppToken() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateClientAddressRequest req = new CreateClientAddressRequest() {{
                pathParams = new CreateClientAddressPathParams() {{
                    profileId = "70caf394-8534-447e-a0ca-1803c669c771";
                }};
                queryParams = new CreateClientAddressQueryParams() {{
                    alternativeKey = "email";
                }};
                headers = new CreateClientAddressHeaders() {{
                    accept = "application/json";
                    contentType = "application/json";
                }};
                request = new Address() {{
                    administrativeAreaLevel1 = "RJ";
                    countryCode = "BR";
                    countryName = "Brasil";
                    locality = "Locality";
                    localityAreaLevel1 = "Locality area";
                    postalCode = "20200-000";
                    route = "51";
                    streetNumber = "999";
                }};
            }};            

            CreateClientAddressResponse res = sdk.addresses.createClientAddress(req);

            if (res.createClientAddress201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### addresses

* `createClientAddress` - Create client address
* `deleteAddress` - Delete address
* `getAddress` - Get address
* `getAddressByVersion` - Get address by version
* `getClientAddresses` - Get client addresses
* `getUnmaskedAddress` - Get unmasked address
* `getUnmaskedAddressByVersion` - Get unmasked address by version
* `getUnmaskedClientAddresses` - Get unmasked client addresses
* `updateClientAddress` - Update client address

### profiles

* `createClientProfile` - Create client profile
* `deleteClientProfile` - Delete client profile
* `getProfile` - Get profile
* `getProfileByVersion` - Get profile by version
* `getUnmaskedProfile` - Get unmasked profile
* `getUnmaskedProfileByVersion` - Get unmasked profile by version
* `updateClientProfile` - Updates client profile

### prospects

* `createProspect` - Create prospect
* `deleteProspect` - Delete prospect
* `getProspect` - Get prospect
* `getUnmaskedProspect` - Get unmasked prospect
* `updateProspect` - Update prospect

### purchaseInformation

* `createPurchaseInformation` - Create purchase information
* `deletePurchaseInformation` - Delete purchase information
* `getPurchaseInformation` - Get purchase information
* `getUnmaskedPurchaseInformation` - Get unmasked purchase information
* `updatePurchaseInformation` - Update purchase information

### schemas

* `createOrUpdateProfileSchema` - Create or update profile schema
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
