import dataclasses
from typing import Any,Optional
from enum import Enum

class GetGetColoredPathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetGetColoredPathwayQueryParams:
    color: list[Any] = dataclasses.field(metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': False }})
    file_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fileType', 'style': 'form', 'explode': True }})
    graph_id: list[Any] = dataclasses.field(metadata={'query_param': { 'field_name': 'graphId', 'style': 'form', 'explode': False }})
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: str = dataclasses.field(metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    format: Optional[GetGetColoredPathwayFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGetColoredPathwayRequest:
    query_params: GetGetColoredPathwayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGetColoredPathwayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
