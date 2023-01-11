import dataclasses
from typing import Optional
from enum import Enum

class GetGetOntologyTermsByPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetOntologyTermsByPathwayQueryParams:
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetOntologyTermsByPathwayFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetOntologyTermsByPathwayRequest:
    query_params: GetGetOntologyTermsByPathwayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetOntologyTermsByPathwayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
