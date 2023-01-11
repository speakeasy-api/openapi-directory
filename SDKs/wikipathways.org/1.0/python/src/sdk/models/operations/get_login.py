import dataclasses
from typing import Optional
from enum import Enum

class GetLoginFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetLoginQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    pass_: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pass', 'style': 'form', 'explode': True }})
    format: Optional[GetLoginFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLoginRequest:
    query_params: GetLoginQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
