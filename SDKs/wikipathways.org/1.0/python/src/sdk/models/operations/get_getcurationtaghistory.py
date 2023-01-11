import dataclasses
from typing import Optional
from enum import Enum

class GetGetCurationTagHistoryFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetCurationTagHistoryQueryParams:
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetCurationTagHistoryFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetCurationTagHistoryRequest:
    query_params: GetGetCurationTagHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetCurationTagHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
