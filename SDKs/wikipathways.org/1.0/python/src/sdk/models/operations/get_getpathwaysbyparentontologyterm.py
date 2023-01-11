import dataclasses
from typing import Optional
from enum import Enum

class GetGetPathwaysByParentOntologyTermFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetPathwaysByParentOntologyTermQueryParams:
    term: str = dataclasses.field(metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwaysByParentOntologyTermFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetPathwaysByParentOntologyTermRequest:
    query_params: GetGetPathwaysByParentOntologyTermQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetPathwaysByParentOntologyTermResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
