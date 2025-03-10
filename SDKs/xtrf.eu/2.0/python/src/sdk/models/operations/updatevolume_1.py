"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import bigdecimaldto as shared_bigdecimaldto
from typing import Optional


@dataclasses.dataclass
class UpdateVolume1Request:
    
    big_decimal_dto: shared_bigdecimaldto.BigDecimalDTO = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""Updated volume for a quote."""  
    quote_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'quoteId', 'style': 'simple', 'explode': False }})
    r"""quote's internal identifier"""  
    

@dataclasses.dataclass
class UpdateVolume1Response:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    