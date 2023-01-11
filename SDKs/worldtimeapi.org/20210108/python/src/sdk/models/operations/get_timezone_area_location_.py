import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetTimezoneAreaLocationPathParams:
    area: str = dataclasses.field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimezoneAreaLocationRequest:
    path_params: GetTimezoneAreaLocationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimezoneAreaLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_json_response: Optional[Any] = dataclasses.field(default=None)
    error_json_response: Optional[Any] = dataclasses.field(default=None)
    
