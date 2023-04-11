<!-- Start SDK Example Usage -->
```typescript
import {
  GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest,
  GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest = {
  aggregateHours: "corrupti",
  allowAsynch: false,
  collectStationContributions: false,
  contentType: "provident",
  endDateTime: "distinctio",
  includeNormals: false,
  key: "quibusdam",
  locations: "unde",
  maxDistance: "nulla",
  maxStations: "corrupti",
  shortColumnNames: false,
  startDateTime: "illum",
  unitGroup: "vel",
};

sdk.historicalWeather.getVisualCrossingWebServicesRestServicesWeatherdataHistory(req).then((res: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->