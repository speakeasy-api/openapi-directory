import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetTimezoneAreaLocationRegionPathParams:
    area: str = dataclasses.field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    region: str = dataclasses.field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimezoneAreaLocationRegionRequest:
    path_params: GetTimezoneAreaLocationRegionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimezoneAreaLocationRegionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_json_response: Optional[Any] = dataclasses.field(default=None)
    error_json_response: Optional[Any] = dataclasses.field(default=None)
    
