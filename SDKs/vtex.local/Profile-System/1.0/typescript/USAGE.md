<!-- Start SDK Example Usage -->
```typescript
import {
  CreateClientAddressRequest,
  CreateClientAddressResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateClientAddressRequest = {
  accept: "application/json",
  contentType: "application/json",
  address: {
    administrativeAreaLevel1: "RJ",
    countryCode: "BR",
    countryName: "Brasil",
    locality: "Locality",
    localityAreaLevel1: "Locality area",
    postalCode: "20200-000",
    route: "51",
    streetNumber: "999",
  },
  alternativeKey: "email",
  profileId: "70caf394-8534-447e-a0ca-1803c669c771",
};

sdk.addresses.createClientAddress(req).then((res: CreateClientAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->