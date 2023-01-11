import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetTimezoneAreaLocationRegionTxtPathParams:
    area: str = dataclasses.field(metadata={'path_param': { 'field_name': 'area', 'style': 'simple', 'explode': False }})
    location: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    region: str = dataclasses.field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTimezoneAreaLocationRegionTxtRequest:
    path_params: GetTimezoneAreaLocationRegionTxtPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimezoneAreaLocationRegionTxtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_text_response: Optional[str] = dataclasses.field(default=None)
    error_text_response: Optional[str] = dataclasses.field(default=None)
    
