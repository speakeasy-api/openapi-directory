"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from enum import Enum
from typing import Optional

class GetRemoveCurationTagFormatEnum(str, Enum):
    JSON = 'json'
    XML = 'xml'
    HTML = 'html'
    DUMP = 'dump'
    JPG = 'jpg'
    PDF = 'pdf'


@dataclasses.dataclass
class GetRemoveCurationTagRequest:
    
    auth: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    r"""The authentication data"""  
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    r"""The pathway identifier"""  
    tag_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    r"""The name of the tag to apply"""  
    username: str = dataclasses.field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    r"""The user name"""  
    format: Optional[GetRemoveCurationTagFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})  
    

@dataclasses.dataclass
class GetRemoveCurationTagResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    