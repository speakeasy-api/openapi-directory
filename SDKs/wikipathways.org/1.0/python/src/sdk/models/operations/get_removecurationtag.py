import dataclasses
from typing import Optional
from enum import Enum

class GetRemoveCurationTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetRemoveCurationTagQueryParams:
    auth: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    tag_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    username: str = dataclasses.field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    format: Optional[GetRemoveCurationTagFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRemoveCurationTagRequest:
    query_params: GetRemoveCurationTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRemoveCurationTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
