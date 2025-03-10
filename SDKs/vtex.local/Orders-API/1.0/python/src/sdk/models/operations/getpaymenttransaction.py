"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import getpaymenttransaction as shared_getpaymenttransaction
from typing import Optional


@dataclasses.dataclass
class GetPaymenttransactionRequest:
    
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    r"""HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand."""  
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    r"""Type of the content being sent."""  
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    r"""Order ID is a unique code that identifies an order."""  
    

@dataclasses.dataclass
class GetPaymenttransactionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_paymenttransaction: Optional[shared_getpaymenttransaction.GetPaymenttransaction] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    