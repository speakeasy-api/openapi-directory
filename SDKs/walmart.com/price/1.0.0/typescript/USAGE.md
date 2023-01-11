<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { OptCapProgramInPriceRequest, OptCapProgramInPriceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicScheme: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: OptCapProgramInPriceRequest = {
  headers: {
    authorization: "sit",
    wmCONSUMERCHANNELTYPE: "voluptas",
    wmQOSCORRELATIONID: "culpa",
    wmSECACCESSTOKEN: "expedita",
    wmSVCNAME: "consequuntur",
  },
  request: {
    subsidyEnrolled: false,
    subsidyPreference: true,
  },
};

sdk.prices.optCapProgramInPrice(req).then((res: OptCapProgramInPriceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->