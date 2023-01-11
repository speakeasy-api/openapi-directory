import dataclasses
from typing import Optional
from enum import Enum

class GetListPathwaysFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetListPathwaysQueryParams:
    format: Optional[GetListPathwaysFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    organism: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'organism', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListPathwaysRequest:
    query_params: GetListPathwaysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListPathwaysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
