import dataclasses
from typing import Optional
from enum import Enum

class GetGetUserByOrcidFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetUserByOrcidQueryParams:
    orcid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'orcid', 'style': 'form', 'explode': True }})
    format: Optional[GetGetUserByOrcidFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetUserByOrcidRequest:
    query_params: GetGetUserByOrcidQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetUserByOrcidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
