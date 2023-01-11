import dataclasses
from typing import Optional
from enum import Enum

class GetGetPathwayHistoryFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetPathwayHistoryQueryParams:
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayHistoryFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetPathwayHistoryRequest:
    query_params: GetGetPathwayHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetPathwayHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
