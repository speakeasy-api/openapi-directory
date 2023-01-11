import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import project as shared_project


@dataclasses.dataclass
class GetProjectPathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProjectRequest:
    path_params: GetProjectPathParams = dataclasses.field()
    security: GetProjectSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
