"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import apiexception as shared_apiexception
from ..shared import superfunds as shared_superfunds
from typing import Optional


@dataclasses.dataclass
class GetSuperfundsSecurity:
    
    o_auth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class GetSuperfundsRequest:
    
    xero_tenant_id: str = dataclasses.field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    r"""Xero identifier for Tenant"""  
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    r"""Only records created or modified since this timestamp will be returned"""  
    order: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    r"""Order by an any element"""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""e.g. page=1 – Up to 100 SuperFunds will be returned in a single API call"""  
    where: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    r"""Filter by an any element"""  
    

@dataclasses.dataclass
class GetSuperfundsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_exception: Optional[shared_apiexception.APIException] = dataclasses.field(default=None)
    r"""validation error for a bad request"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    super_funds: Optional[shared_superfunds.SuperFunds] = dataclasses.field(default=None)
    r"""search results matching criteria"""  
    