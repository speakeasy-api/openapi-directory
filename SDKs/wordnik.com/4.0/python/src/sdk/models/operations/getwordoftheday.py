import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetWordOfTheDayQueryParams:
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWordOfTheDayRequest:
    query_params: GetWordOfTheDayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWordOfTheDayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
