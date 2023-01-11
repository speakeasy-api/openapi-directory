import dataclasses
from typing import Optional
from enum import Enum

class GetSaveCurationTagFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetSaveCurationTagQueryParams:
    auth: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: int = dataclasses.field(metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    tag_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    username: str = dataclasses.field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    format: Optional[GetSaveCurationTagFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSaveCurationTagRequest:
    query_params: GetSaveCurationTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSaveCurationTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
