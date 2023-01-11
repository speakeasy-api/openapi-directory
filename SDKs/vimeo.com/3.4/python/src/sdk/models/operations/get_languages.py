import dataclasses
from typing import Optional
from enum import Enum
from ..shared import language as shared_language

class GetLanguagesFilterEnum(str, Enum):
    TEXTTRACKS = "texttracks"


@dataclasses.dataclass
class GetLanguagesQueryParams:
    filter: Optional[GetLanguagesFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLanguagesRequest:
    query_params: GetLanguagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLanguagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    languages: Optional[list[shared_language.Language]] = dataclasses.field(default=None)
    
