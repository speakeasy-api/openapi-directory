import dataclasses
from typing import Optional


GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_FORECAST_SERVERS = [
	"https://weather.visualcrossing.com",
]


@dataclasses.dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams:
    aggregate_hours: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aggregateHours', 'style': 'form', 'explode': True }})
    allow_asynch: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowAsynch', 'style': 'form', 'explode': True }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locations: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locations', 'style': 'form', 'explode': True }})
    send_as_datasource: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sendAsDatasource', 'style': 'form', 'explode': True }})
    short_column_names: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shortColumnNames', 'style': 'form', 'explode': True }})
    unit_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unitGroup', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest:
    query_params: GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
