<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest(
    query_params=operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams(
        aggregate_hours="nisi",
        allow_asynch=True,
        collect_station_contributions=True,
        content_type="similique",
        end_date_time="fuga",
        include_normals=True,
        key="sapiente",
        locations="nam",
        max_distance="facere",
        max_stations="cupiditate",
        short_column_names=True,
        start_date_time="qui",
        unit_group="sunt",
    ),
)
    
res = s.historical_weather.get_visual_crossing_web_services_rest_services_weatherdata_history(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->