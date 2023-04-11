<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAssetRequest,
  CreateAssetResponse
} from "openapi/dist/sdk/models/operations";
import {
  BookDepreciationSettingAveragingMethodEnum,
  BookDepreciationSettingDepreciationCalculationMethodEnum,
  BookDepreciationSettingDepreciationMethodEnum,
  AssetStatusEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAssetRequest = {
  asset: {
    accountingBookValue: 5488.14,
    assetId: "3b5b3a38-5649-495f-87a1-14a4e5918634",
    assetName: "Awesome Truck 3",
    assetNumber: "FA-0013",
    assetStatus: AssetStatusEnum.Draft,
    assetTypeId: "3b5b3a38-5649-495f-87a1-14a4e5918634",
    bookDepreciationDetail: {
      costLimit: 9000,
      currentAccumDepreciationAmount: 5,
      currentCapitalGain: 5.25,
      currentGainLoss: 10.5,
      depreciationStartDate: "2015-07-01T00:00:00",
      priorAccumDepreciationAmount: 0.45,
      residualValue: 10000,
    },
    bookDepreciationSetting: {
      averagingMethod: BookDepreciationSettingAveragingMethodEnum.ActualDays,
      bookEffectiveDateOfChangeId: "68f17094-af97-4f1b-b36b-013b45b6ad3c",
      depreciableObjectId: "68f17094-af97-4f1b-b36b-013b45b6ad3c",
      depreciableObjectType: "Asset",
      depreciationCalculationMethod: BookDepreciationSettingDepreciationCalculationMethodEnum.None,
      depreciationMethod: BookDepreciationSettingDepreciationMethodEnum.StraightLine,
      depreciationRate: 0.05,
      effectiveLifeYears: 5,
    },
    canRollback: true,
    disposalDate: "2020-07-01T00:00:00",
    disposalPrice: 1.0000,
    isDeleteEnabledForDate: true,
    purchaseDate: "2015-07-01T00:00:00",
    purchasePrice: 1000.0000,
    serialNumber: "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
    warrantyExpiryDate: "ca4c6b39-4f4f-43e8-98da-5e1f350a6694",
  },
  xeroTenantId: "provident",
};

sdk.asset.createAsset(req).then((res: CreateAssetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->