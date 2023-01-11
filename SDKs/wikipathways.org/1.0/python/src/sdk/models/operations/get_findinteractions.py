import dataclasses
from typing import Optional
from enum import Enum

class GetFindInteractionsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetFindInteractionsQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    format: Optional[GetFindInteractionsFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFindInteractionsRequest:
    query_params: GetFindInteractionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFindInteractionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
