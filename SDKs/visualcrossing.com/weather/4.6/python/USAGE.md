<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest(
    aggregate_hours="corrupti",
    allow_asynch=False,
    collect_station_contributions=False,
    content_type="provident",
    end_date_time="distinctio",
    include_normals=False,
    key="quibusdam",
    locations="unde",
    max_distance="nulla",
    max_stations="corrupti",
    short_column_names=False,
    start_date_time="illum",
    unit_group="vel",
)
    
res = s.historical_weather.get_visual_crossing_web_services_rest_services_weatherdata_history(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->