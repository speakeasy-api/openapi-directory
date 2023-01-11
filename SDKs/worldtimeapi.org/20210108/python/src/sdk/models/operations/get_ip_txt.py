import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetIPTxtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    date_time_text_response: Optional[str] = dataclasses.field(default=None)
    error_text_response: Optional[str] = dataclasses.field(default=None)
    
