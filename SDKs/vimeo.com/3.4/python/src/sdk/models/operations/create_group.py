import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import group as shared_group
from ..shared import legacy_error as shared_legacy_error


@dataclass_json
@dataclasses.dataclass
class CreateGroupRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclasses.dataclass
class CreateGroupSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateGroupRequest:
    request: CreateGroupRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.group+json' }})
    security: CreateGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    
