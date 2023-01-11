import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetTimezoneAreaLocationTxtPathParams:
    area: str = dataclasses.field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimezoneAreaLocationTxtRequest:
    path_params: GetTimezoneAreaLocationTxtPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimezoneAreaLocationTxtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_text_response: Optional[str] = dataclasses.field(default=None)
    error_text_response: Optional[str] = dataclasses.field(default=None)
    
