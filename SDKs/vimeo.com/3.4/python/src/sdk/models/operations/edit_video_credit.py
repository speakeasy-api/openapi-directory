import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import credit as shared_credit
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class EditVideoCreditPathParams:
    credit_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'credit_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EditVideoCreditRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclasses.dataclass
class EditVideoCreditSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditVideoCreditRequest:
    path_params: EditVideoCreditPathParams = dataclasses.field()
    security: EditVideoCreditSecurity = dataclasses.field()
    request: Optional[EditVideoCreditRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.credit+json' }})
    

@dataclasses.dataclass
class EditVideoCreditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credit: Optional[shared_credit.Credit] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
