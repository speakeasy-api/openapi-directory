import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetIPIpv4PathParams:
    ipv4: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ipv4', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIPIpv4Request:
    path_params: GetIPIpv4PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIPIpv4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_json_response: Optional[Any] = dataclasses.field(default=None)
    error_json_response: Optional[Any] = dataclasses.field(default=None)
    
