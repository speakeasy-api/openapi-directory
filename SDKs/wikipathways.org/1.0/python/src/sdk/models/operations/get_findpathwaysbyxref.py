import dataclasses
from typing import Any,Optional
from enum import Enum

class GetFindPathwaysByXrefFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetFindPathwaysByXrefQueryParams:
    ids: list[Any] = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    codes: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'codes', 'style': 'form', 'explode': False }})
    format: Optional[GetFindPathwaysByXrefFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFindPathwaysByXrefRequest:
    query_params: GetFindPathwaysByXrefQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFindPathwaysByXrefResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
