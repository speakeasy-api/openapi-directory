import dataclasses
from typing import Optional
from enum import Enum

class GetGetCurationTagsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetCurationTagsQueryParams:
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetCurationTagsFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetCurationTagsRequest:
    query_params: GetGetCurationTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetCurationTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
