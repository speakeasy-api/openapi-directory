import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import upload_attempt as shared_upload_attempt


@dataclasses.dataclass
class GetUploadAttemptPathParams:
    upload: float = dataclasses.field(metadata={'path_param': { 'field_name': 'upload', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUploadAttemptSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUploadAttemptRequest:
    path_params: GetUploadAttemptPathParams = dataclasses.field()
    security: GetUploadAttemptSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUploadAttemptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    upload_attempt: Optional[shared_upload_attempt.UploadAttempt] = dataclasses.field(default=None)
    
