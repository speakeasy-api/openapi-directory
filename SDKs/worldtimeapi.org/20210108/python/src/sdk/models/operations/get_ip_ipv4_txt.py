import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetIPIpv4TxtPathParams:
    ipv4: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ipv4', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIPIpv4TxtRequest:
    path_params: GetIPIpv4TxtPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIPIpv4TxtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_text_response: Optional[str] = dataclasses.field(default=None)
    error_text_response: Optional[str] = dataclasses.field(default=None)
    
