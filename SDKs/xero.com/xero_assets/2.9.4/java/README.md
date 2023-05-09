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

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetResponse;
import org.openapis.openapi.models.operations.CreateAssetSecurity;
import org.openapis.openapi.models.shared.Asset;
import org.openapis.openapi.models.shared.AssetStatusEnum;
import org.openapis.openapi.models.shared.BookDepreciationDetail;
import org.openapis.openapi.models.shared.BookDepreciationSetting;
import org.openapis.openapi.models.shared.BookDepreciationSettingAveragingMethodEnum;
import org.openapis.openapi.models.shared.BookDepreciationSettingDepreciationCalculationMethodEnum;
import org.openapis.openapi.models.shared.BookDepreciationSettingDepreciationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssetRequest req = new CreateAssetRequest(                new Asset("Awesome Truck 3") {{
                                accountingBookValue = 5488.14;
                                assetId = "3b5b3a38-5649-495f-87a1-14a4e5918634";
                                assetNumber = "FA-0013";
                                assetStatus = AssetStatusEnum.DRAFT;
                                assetTypeId = "3b5b3a38-5649-495f-87a1-14a4e5918634";
                                bookDepreciationDetail = new BookDepreciationDetail() {{
                                    costLimit = 9000;
                                    currentAccumDepreciationAmount = 5;
                                    currentCapitalGain = 5.25;
                                    currentGainLoss = 10.5;
                                    depreciationStartDate = LocalDate.parse("2015-07-01T00:00:00");
                                    priorAccumDepreciationAmount = 0.45;
                                    residualValue = 10000;
                                }};;
                                bookDepreciationSetting = new BookDepreciationSetting() {{
                                    averagingMethod = BookDepreciationSettingAveragingMethodEnum.ACTUAL_DAYS;
                                    bookEffectiveDateOfChangeId = "68f17094-af97-4f1b-b36b-013b45b6ad3c";
                                    depreciableObjectId = "68f17094-af97-4f1b-b36b-013b45b6ad3c";
                                    depreciableObjectType = "Asset";
                                    depreciationCalculationMethod = BookDepreciationSettingDepreciationCalculationMethodEnum.NONE;
                                    depreciationMethod = BookDepreciationSettingDepreciationMethodEnum.STRAIGHT_LINE;
                                    depreciationRate = 0.05;
                                    effectiveLifeYears = 5L;
                                }};;
                                canRollback = true;
                                disposalDate = LocalDate.parse("2020-07-01T00:00:00");
                                disposalPrice = 1.0000;
                                isDeleteEnabledForDate = true;
                                purchaseDate = LocalDate.parse("2015-07-01T00:00:00");
                                purchasePrice = 1000.0000;
                                serialNumber = "ca4c6b39-4f4f-43e8-98da-5e1f350a6694";
                                warrantyExpiryDate = "ca4c6b39-4f4f-43e8-98da-5e1f350a6694";
                            }};, "provident");            

            CreateAssetResponse res = sdk.asset.createAsset(req, new CreateAssetSecurity("distinctio") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.asset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [asset](docs/asset/README.md)

* [createAsset](docs/asset/README.md#createasset) - adds a fixed asset
* [createAssetType](docs/asset/README.md#createassettype) - adds a fixed asset type
* [getAssetById](docs/asset/README.md#getassetbyid) - Retrieves fixed asset by id
* [getAssetSettings](docs/asset/README.md#getassetsettings) - searches fixed asset settings
* [getAssetTypes](docs/asset/README.md#getassettypes) - searches fixed asset types
* [getAssets](docs/asset/README.md#getassets) - searches fixed asset
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
