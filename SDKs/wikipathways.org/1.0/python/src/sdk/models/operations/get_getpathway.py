import dataclasses
from typing import Optional
from enum import Enum

class GetGetPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetPathwayQueryParams:
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetPathwayRequest:
    query_params: GetGetPathwayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetPathwayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
