import dataclasses
from typing import Optional
from enum import Enum

class GetGetCurationTagsByNameFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetCurationTagsByNameQueryParams:
    tag_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tagName', 'style': 'form', 'explode': True }})
    format: Optional[GetGetCurationTagsByNameFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetCurationTagsByNameRequest:
    query_params: GetGetCurationTagsByNameQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetCurationTagsByNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
