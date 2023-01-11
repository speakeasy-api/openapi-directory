import dataclasses
from typing import Optional
from enum import Enum

class PostCreatePathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class PostCreatePathwayQueryParams:
    auth: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    gpml: str = dataclasses.field(metadata={'query_param': { 'field_name': 'gpml', 'style': 'form', 'explode': True }})
    username: str = dataclasses.field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    format: Optional[PostCreatePathwayFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCreatePathwayRequest:
    query_params: PostCreatePathwayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostCreatePathwayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
