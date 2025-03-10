"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import apierror as shared_apierror
from ..shared import basevirtualmachine as shared_basevirtualmachine
from typing import Optional


@dataclasses.dataclass
class GetVMSecurity:
    
    api_key_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class GetVMRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""entity id"""  
    time: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    r"""time in epoch seconds"""  
    

@dataclasses.dataclass
class GetVMResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    r"""Bad Request"""  
    base_virtual_machine: Optional[shared_basevirtualmachine.BaseVirtualMachine] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    