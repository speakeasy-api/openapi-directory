import dataclasses
from typing import Optional
from enum import Enum

class GetGetXrefListFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetXrefListQueryParams:
    code: str = dataclasses.field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetXrefListFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetXrefListRequest:
    query_params: GetGetXrefListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetXrefListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
