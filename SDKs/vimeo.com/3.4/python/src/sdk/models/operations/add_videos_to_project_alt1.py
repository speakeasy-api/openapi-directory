import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class AddVideosToProjectAlt1PathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideosToProjectAlt1QueryParams:
    uris: str = dataclasses.field(metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AddVideosToProjectAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideosToProjectAlt1Request:
    path_params: AddVideosToProjectAlt1PathParams = dataclasses.field()
    query_params: AddVideosToProjectAlt1QueryParams = dataclasses.field()
    security: AddVideosToProjectAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class AddVideosToProjectAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
