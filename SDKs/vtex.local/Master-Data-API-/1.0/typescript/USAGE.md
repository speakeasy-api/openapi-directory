<!-- Start SDK Example Usage -->
```typescript
import {
  CreateNewCustomerAddressRequest,
  CreateNewCustomerAddressResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: CreateNewCustomerAddressRequest = {
  accept: "application/json",
  contentType: "application/json",
  schema: "schema",
  createUpdateAddressRequests: {
    addressName: "My house",
    addressType: "residential",
    city: "Rio de Janeiro",
    complement: "3rd floor",
    country: "BRA",
    neighborhood: "Botafogo",
    number: "300",
    postalCode: "12345-000",
    receiverName: "Clark Kent.",
    reference: "Grey building",
    state: "Rio de Janeiro",
    street: "Praia de Botafogo",
    userId: "7e03m794-a33a-11e9-84rt6-0adfa64s5a8e",
  },
};

sdk.addresses.createNewCustomerAddress(req).then((res: CreateNewCustomerAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->