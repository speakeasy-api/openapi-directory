<!-- Start SDK Example Usage -->
```typescript
import {
  CalculatediscountsandtaxesBundlesRequest,
  CalculatediscountsandtaxesBundlesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CalculatediscountsandtaxesBundlesRequest = {
  accept: "corrupti",
  calculatediscountsandtaxesBundlesRequest: {
    isShoppingCart: false,
    items: [
      {
        id: "distinctio",
        index: 844266,
        isGift: false,
        logisticsInfos: [
          "nulla",
          "corrupti",
          "illum",
        ],
        measurementUnit: "vel",
        params: [
          {
            name: "deserunt",
            value: "suscipit",
          },
          {
            name: "iure",
            value: "magnam",
          },
          {
            name: "debitis",
            value: "ipsa",
          },
        ],
        priceSheet: [
          "tempora",
          "suscipit",
          "molestiae",
          "minus",
        ],
        priceTags: [
          "voluptatum",
          "iusto",
          "excepturi",
          "nisi",
        ],
        productSpecifications: [
          "temporibus",
          "ab",
          "quis",
          "veritatis",
        ],
        quantity: 648172,
        sellerId: "perferendis",
        unitMultiplier: 368241,
      },
      {
        id: "repellendus",
        index: 957156,
        isGift: false,
        logisticsInfos: [
          "odit",
          "at",
          "at",
          "maiores",
        ],
        measurementUnit: "molestiae",
        params: [
          {
            name: "quod",
            value: "esse",
          },
          {
            name: "totam",
            value: "porro",
          },
          {
            name: "dolorum",
            value: "dicta",
          },
          {
            name: "nam",
            value: "officia",
          },
        ],
        priceSheet: [
          "fugit",
          "deleniti",
          "hic",
        ],
        priceTags: [
          "totam",
          "beatae",
          "commodi",
          "molestiae",
        ],
        productSpecifications: [
          "qui",
          "impedit",
        ],
        quantity: 736918,
        sellerId: "esse",
        unitMultiplier: 216550,
      },
      {
        id: "excepturi",
        index: 135218,
        isGift: false,
        logisticsInfos: [
          "ad",
        ],
        measurementUnit: "natus",
        params: [
          {
            name: "iste",
            value: "dolor",
          },
        ],
        priceSheet: [
          "laboriosam",
          "hic",
          "saepe",
        ],
        priceTags: [
          "in",
          "corporis",
          "iste",
        ],
        productSpecifications: [
          "saepe",
          "quidem",
        ],
        quantity: 99280,
        sellerId: "ipsa",
        unitMultiplier: 969810,
      },
    ],
    origin: "est",
    params: [
      {
        name: "laborum",
        value: "dolores",
      },
      {
        name: "dolorem",
        value: "corporis",
      },
      {
        name: "explicabo",
        value: "nobis",
      },
    ],
    profileId: "enim",
    salesChannel: "omnis",
  },
  contentType: "nemo",
};

sdk.bundles.calculatediscountsandtaxesBundles(req).then((res: CalculatediscountsandtaxesBundlesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->