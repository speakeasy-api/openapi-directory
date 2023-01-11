<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAssetRequest, CreateAssetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAssetRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  headers: {
    xeroTenantId: "sit",
  },
  request: {
    accountingBookValue: 14.200000,
    assetId: "expedita",
    assetName: "consequuntur",
    assetNumber: "dolor",
    assetStatus: "Registered",
    assetTypeId: "voluptas",
    bookDepreciationDetail: "fugit",
    bookDepreciationSetting: "et",
    canRollback: true,
    disposalDate: "2004-06-02",
    disposalPrice: 52.099998,
    isDeleteEnabledForDate: false,
    purchaseDate: "2021-10-23",
    purchasePrice: 50.099998,
    serialNumber: "iste",
    warrantyExpiryDate: "vitae",
  },
};

sdk.asset.createAsset(req).then((res: CreateAssetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->