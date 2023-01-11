import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class AddVideosToProjectPathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideosToProjectQueryParams:
    uris: str = dataclasses.field(metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AddVideosToProjectSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideosToProjectRequest:
    path_params: AddVideosToProjectPathParams = dataclasses.field()
    query_params: AddVideosToProjectQueryParams = dataclasses.field()
    security: AddVideosToProjectSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVideosToProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
