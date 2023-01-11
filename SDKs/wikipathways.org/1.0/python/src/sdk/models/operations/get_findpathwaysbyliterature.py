import dataclasses
from typing import Optional
from enum import Enum

class GetFindPathwaysByLiteratureFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetFindPathwaysByLiteratureQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    format: Optional[GetFindPathwaysByLiteratureFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFindPathwaysByLiteratureRequest:
    query_params: GetFindPathwaysByLiteratureQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFindPathwaysByLiteratureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
