import dataclasses
from typing import Optional
from enum import Enum

class GetListOrganismsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetListOrganismsQueryParams:
    format: Optional[GetListOrganismsFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListOrganismsRequest:
    query_params: GetListOrganismsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListOrganismsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
