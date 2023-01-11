import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdatePathwayFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"
    HTML = "html"
    DUMP = "dump"
    JPG = "jpg"
    PDF = "pdf"


@dataclasses.dataclass
class GetUpdatePathwayQueryParams:
    auth: str = dataclasses.field(metadata={'query_param': { 'field_name': 'auth', 'style': 'form', 'explode': True }})
    description: str = dataclasses.field(metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    gpml: str = dataclasses.field(metadata={'query_param': { 'field_name': 'gpml', 'style': 'form', 'explode': True }})
    pw_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'pwId', 'style': 'form', 'explode': True }})
    revision: int = dataclasses.field(metadata={'query_param': { 'field_name': 'revision', 'style': 'form', 'explode': True }})
    username: str = dataclasses.field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    format: Optional[GetUpdatePathwayFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdatePathwayRequest:
    query_params: GetUpdatePathwayQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdatePathwayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
