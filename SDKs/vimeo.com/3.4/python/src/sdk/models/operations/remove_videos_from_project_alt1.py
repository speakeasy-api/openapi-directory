import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class RemoveVideosFromProjectAlt1PathParams:
    project_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveVideosFromProjectAlt1QueryParams:
    uris: str = dataclasses.field(metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    should_delete_clips: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'should_delete_clips', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RemoveVideosFromProjectAlt1Security:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveVideosFromProjectAlt1Request:
    path_params: RemoveVideosFromProjectAlt1PathParams = dataclasses.field()
    query_params: RemoveVideosFromProjectAlt1QueryParams = dataclasses.field()
    security: RemoveVideosFromProjectAlt1Security = dataclasses.field()
    

@dataclasses.dataclass
class RemoveVideosFromProjectAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
