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
                    xeroTenantId = "sit";
                }};
                request = new Asset() {{
                    accountingBookValue = 14.200000;
                    assetId = "expedita";
                    assetName = "consequuntur";
                    assetNumber = "dolor";
                    assetStatus = "Registered";
                    assetTypeId = "voluptas";
                    bookDepreciationDetail = "fugit";
                    bookDepreciationSetting = "et";
                    canRollback = true;
                    disposalDate = "2004-06-02";
                    disposalPrice = 52.099998;
                    isDeleteEnabledForDate = false;
                    purchaseDate = "2021-10-23";
                    purchasePrice = 50.099998;
                    serialNumber = "iste";
                    warrantyExpiryDate = "vitae";
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