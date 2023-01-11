import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class CreateASharedLineGroupApplicationJSON:
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    

@dataclasses.dataclass
class CreateASharedLineGroupMultipartFormData:
    display_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'display_name' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'extension_number' }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_id' }})
    

@dataclasses.dataclass
class CreateASharedLineGroupRequests:
    object: Optional[CreateASharedLineGroupApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CreateASharedLineGroupMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateASharedLineGroupSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateASharedLineGroupRequest:
    security: CreateASharedLineGroupSecurity = dataclasses.field()
    request: Optional[CreateASharedLineGroupRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateASharedLineGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    create_a_shared_line_group_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
