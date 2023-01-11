<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostApi10CalculateRequest, PostApi10CalculateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: PostApi10CalculateRequest = {
  request: [
    {
      baseFareUSD: 14.200000,
      id: "expedita",
      segments: [
        {
          bookingClass: "dolor",
          carrier: "expedita",
          departure: "1978-05-28T16:08:43Z",
          destination: "fugit",
          distance: 28.100000,
          flightNumber: 8325060299420976708,
          operatingCarrier: "dicta",
          origin: "debitis",
        },
        {
          bookingClass: "voluptatum",
          carrier: "et",
          departure: "1970-04-14T21:44:49Z",
          destination: "dolorem",
          distance: 50.099998,
          flightNumber: 3287288577352441706,
          operatingCarrier: "vitae",
          origin: "totam",
        },
        {
          bookingClass: "dolores",
          carrier: "illum",
          departure: "1975-11-02T15:36:54Z",
          destination: "vel",
          distance: 20.200001,
          flightNumber: 4035568504096476779,
          operatingCarrier: "aspernatur",
          origin: "accusantium",
        },
      ],
      ticketingCarrier: "totam",
    },
  ],
};

sdk.calculate.postApi10Calculate(req).then((res: PostApi10CalculateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->