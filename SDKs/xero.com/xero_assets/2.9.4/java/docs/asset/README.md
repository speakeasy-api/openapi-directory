# asset

### Available Operations

* [createAsset](#createasset) - adds a fixed asset
* [createAssetType](#createassettype) - adds a fixed asset type
* [getAssetById](#getassetbyid) - Retrieves fixed asset by id
* [getAssetSettings](#getassetsettings) - searches fixed asset settings
* [getAssetTypes](#getassettypes) - searches fixed asset types
* [getAssets](#getassets) - searches fixed asset

## createAsset

Adds an asset to the system

### Example Usage

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
                                accountingBookValue = 8442.66;
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
                            }};, "unde");            

            CreateAssetResponse res = sdk.asset.createAsset(req, new CreateAssetSecurity("nulla") {{
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

## createAssetType

Adds an fixed asset type to the system

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssetTypeRequest;
import org.openapis.openapi.models.operations.CreateAssetTypeResponse;
import org.openapis.openapi.models.operations.CreateAssetTypeSecurity;
import org.openapis.openapi.models.shared.AssetType;
import org.openapis.openapi.models.shared.BookDepreciationSetting;
import org.openapis.openapi.models.shared.BookDepreciationSettingAveragingMethodEnum;
import org.openapis.openapi.models.shared.BookDepreciationSettingDepreciationCalculationMethodEnum;
import org.openapis.openapi.models.shared.BookDepreciationSettingDepreciationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssetTypeRequest req = new CreateAssetTypeRequest("corrupti") {{
                assetType = new AssetType("Computer Equipment",                 new BookDepreciationSetting() {{
                                    averagingMethod = BookDepreciationSettingAveragingMethodEnum.ACTUAL_DAYS;
                                    bookEffectiveDateOfChangeId = "68f17094-af97-4f1b-b36b-013b45b6ad3c";
                                    depreciableObjectId = "68f17094-af97-4f1b-b36b-013b45b6ad3c";
                                    depreciableObjectType = "Asset";
                                    depreciationCalculationMethod = BookDepreciationSettingDepreciationCalculationMethodEnum.NONE;
                                    depreciationMethod = BookDepreciationSettingDepreciationMethodEnum.STRAIGHT_LINE;
                                    depreciationRate = 0.05;
                                    effectiveLifeYears = 5L;
                                }};) {{
                    accumulatedDepreciationAccountId = "ca4c6b39-4f4f-43e8-98da-5e1f350a6694";
                    assetTypeId = "5da209c5-5e19-4a43-b925-71b776c49ced";
                    depreciationExpenseAccountId = "b23fc79b-d66b-44b0-a240-e138e086fcbc";
                    fixedAssetAccountId = "24e260f1-bfc4-4766-ad7f-8a8ce01de879";
                    locks = 33L;
                }};;
            }};            

            CreateAssetTypeResponse res = sdk.asset.createAssetType(req, new CreateAssetTypeSecurity("illum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assetType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssetById

By passing in the appropriate asset id, you can search for
a specific fixed asset in the system


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetByIdRequest;
import org.openapis.openapi.models.operations.GetAssetByIdResponse;
import org.openapis.openapi.models.operations.GetAssetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetByIdRequest req = new GetAssetByIdRequest("4f7bcdcb-5ec1-4258-9558-19f662fccdfe", "vel");            

            GetAssetByIdResponse res = sdk.asset.getAssetById(req, new GetAssetByIdSecurity("error") {{
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

## getAssetSettings

By passing in the appropriate options, you can search for available fixed asset types in the system

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetSettingsRequest;
import org.openapis.openapi.models.operations.GetAssetSettingsResponse;
import org.openapis.openapi.models.operations.GetAssetSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetSettingsRequest req = new GetAssetSettingsRequest("deserunt");            

            GetAssetSettingsResponse res = sdk.asset.getAssetSettings(req, new GetAssetSettingsSecurity("suscipit") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssetTypes

By passing in the appropriate options, you can search for available fixed asset types in the system

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetTypesRequest;
import org.openapis.openapi.models.operations.GetAssetTypesResponse;
import org.openapis.openapi.models.operations.GetAssetTypesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetTypesRequest req = new GetAssetTypesRequest("iure");            

            GetAssetTypesResponse res = sdk.asset.getAssetTypes(req, new GetAssetTypesSecurity("magnam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assetTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssets

By passing in the appropriate options, you can search for available fixed asset in the system

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetsOrderByEnum;
import org.openapis.openapi.models.operations.GetAssetsRequest;
import org.openapis.openapi.models.operations.GetAssetsResponse;
import org.openapis.openapi.models.operations.GetAssetsSecurity;
import org.openapis.openapi.models.operations.GetAssetsSortDirectionEnum;
import org.openapis.openapi.models.shared.AssetStatusQueryParamEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetsRequest req = new GetAssetsRequest(AssetStatusQueryParamEnum.DRAFT, "debitis") {{
                filterBy = "Company Car";
                orderBy = GetAssetsOrderByEnum.ASSET_NAME;
                page = 1L;
                pageSize = 5L;
                sortDirection = GetAssetsSortDirectionEnum.ASC;
            }};            

            GetAssetsResponse res = sdk.asset.getAssets(req, new GetAssetsSecurity("delectus") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
