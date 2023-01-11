<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateAssetRequest req = new CreateAssetRequest() {{
                security = new CreateAssetSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateAssetHeaders() {{
                    xeroTenantId = "quisquam";
                }};
                request = new Asset() {{
                    accountingBookValue = 51.200001;
                    assetId = "ut";
                    assetName = "quaerat";
                    assetNumber = "ut";
                    assetStatus = "Registered";
                    assetTypeId = "vel";
                    bookDepreciationDetail = "et";
                    bookDepreciationSetting = "ipsam";
                    canRollback = false;
                    disposalDate = "2011-03-19";
                    disposalPrice = 91.199997;
                    isDeleteEnabledForDate = true;
                    purchaseDate = "2022-02-09";
                    purchasePrice = 4.200000;
                    serialNumber = "molestias";
                    warrantyExpiryDate = "et";
                }};
            }};

            CreateAssetResponse res = sdk.asset.createAsset(req);

            if (res.asset.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->