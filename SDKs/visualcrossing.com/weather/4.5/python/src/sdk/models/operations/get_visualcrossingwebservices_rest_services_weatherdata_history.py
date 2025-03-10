import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_HISTORY_SERVERS = [
	"https://weather.visualcrossing.com",
]


@dataclasses.dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams:
    aggregate_hours: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aggregateHours', 'style': 'form', 'explode': True }})
    allow_asynch: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allowAsynch', 'style': 'form', 'explode': True }})
    collect_station_contributions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'collectStationContributions', 'style': 'form', 'explode': True }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    end_date_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDateTime', 'style': 'form', 'explode': True }})
    include_normals: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeNormals', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locations: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locations', 'style': 'form', 'explode': True }})
    max_distance: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxDistance', 'style': 'form', 'explode': True }})
    max_stations: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxStations', 'style': 'form', 'explode': True }})
    short_column_names: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shortColumnNames', 'style': 'form', 'explode': True }})
    start_date_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDateTime', 'style': 'form', 'explode': True }})
    unit_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unitGroup', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest:
    query_params: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
