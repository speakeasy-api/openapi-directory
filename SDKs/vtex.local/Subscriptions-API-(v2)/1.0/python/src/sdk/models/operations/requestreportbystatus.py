"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class RequestreportbyStatusRequest:
    
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    r"""HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand."""  
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    r"""Type of the content being sent."""  
    requester_email: str = dataclasses.field(metadata={'query_param': { 'field_name': 'requesterEmail', 'style': 'form', 'explode': True }})
    r"""Email that the report will be sent to"""  
    status: int = dataclasses.field(metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    r"""Binary OR of the following status: 1 - ACTIVE; 2 - PAUSED; 4 - CANCELED; 8 - EXPIRED"""  
    

@dataclasses.dataclass
class RequestreportbyStatusResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    