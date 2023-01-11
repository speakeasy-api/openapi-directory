import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import credit as shared_credit
from ..shared import legacy_error as shared_legacy_error


@dataclasses.dataclass
class AddVideoCreditPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddVideoCreditRequestBody:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclasses.dataclass
class AddVideoCreditRequest:
    path_params: AddVideoCreditPathParams = dataclasses.field()
    request: AddVideoCreditRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.credit+json' }})
    

@dataclasses.dataclass
class AddVideoCreditResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credit: Optional[shared_credit.Credit] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
