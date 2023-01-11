import dataclasses
from typing import Optional
from enum import Enum

class GetGetPathwayAsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetPathwayAsQueryParams:
    file_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fileType', 'style': 'form', 'explode': True }})
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    format: Optional[GetGetPathwayAsFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetPathwayAsRequest:
    query_params: GetGetPathwayAsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetPathwayAsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
