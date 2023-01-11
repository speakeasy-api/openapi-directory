import dataclasses
from typing import Optional
from enum import Enum

class GetGetPathwayInfoFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetPathwayInfoQueryParams:
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayInfoFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetPathwayInfoRequest:
    query_params: GetGetPathwayInfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetPathwayInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
