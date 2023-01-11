<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest, GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest = {
  queryParams: {
    aggregateHours: "sit",
    allowAsynch: false,
    collectStationContributions: true,
    contentType: "expedita",
    endDateTime: "consequuntur",
    includeNormals: false,
    key: "expedita",
    locations: "voluptas",
    maxDistance: "fugit",
    maxStations: "et",
    shortColumnNames: true,
    startDateTime: "rerum",
    unitGroup: "dicta",
  },
};

sdk.historicalWeather.getVisualCrossingWebServicesRestServicesWeatherdataHistory(req).then((res: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->