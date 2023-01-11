import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class CompleteStreamingUploadPathParams:
    upload: float = dataclasses.field(metadata={'path_param': { 'field_name': 'upload', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompleteStreamingUploadQueryParams:
    signature: str = dataclasses.field(metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    video_file_id: float = dataclasses.field(metadata={'query_param': { 'field_name': 'video_file_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompleteStreamingUploadSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CompleteStreamingUploadRequest:
    path_params: CompleteStreamingUploadPathParams = dataclasses.field()
    query_params: CompleteStreamingUploadQueryParams = dataclasses.field()
    security: CompleteStreamingUploadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompleteStreamingUploadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
