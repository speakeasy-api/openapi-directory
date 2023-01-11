import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetIPResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_json_response: Optional[Any] = dataclasses.field(default=None)
    error_json_response: Optional[Any] = dataclasses.field(default=None)
    
