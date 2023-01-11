import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteProjectAlt1PathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectAlt1QueryParams:
    should_delete_clips: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteProjectAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteProjectAlt1Request:
    path_params: DeleteProjectAlt1PathParams = dataclasses.field()
    query_params: DeleteProjectAlt1QueryParams = dataclasses.field()
    security: DeleteProjectAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
