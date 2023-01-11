import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteProjectPathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectQueryParams:
    should_delete_clips: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteProjectSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteProjectRequest:
    path_params: DeleteProjectPathParams = dataclasses.field()
    query_params: DeleteProjectQueryParams = dataclasses.field()
    security: DeleteProjectSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
