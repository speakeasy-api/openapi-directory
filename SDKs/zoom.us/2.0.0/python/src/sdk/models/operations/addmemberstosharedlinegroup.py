import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AddMembersToSharedLineGroupPathParams:
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToSharedLineGroupApplicationJSONMembersUsers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToSharedLineGroupApplicationJSONMembers:
    r"""AddMembersToSharedLineGroupApplicationJSONMembers
    Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
    """
    
    common_area_phone_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phone_ids') }})
    users: Optional[list[AddMembersToSharedLineGroupApplicationJSONMembersUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToSharedLineGroupApplicationJSON:
    members: Optional[AddMembersToSharedLineGroupApplicationJSONMembers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToSharedLineGroupMultipartFormDataMembersUsers:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddMembersToSharedLineGroupMultipartFormDataMembers:
    r"""AddMembersToSharedLineGroupMultipartFormDataMembers
    Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
    """
    
    common_area_phone_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_area_phone_ids') }})
    users: Optional[list[AddMembersToSharedLineGroupMultipartFormDataMembersUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class AddMembersToSharedLineGroupMultipartFormData:
    members: Optional[AddMembersToSharedLineGroupMultipartFormDataMembers] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'members', 'json': True }})
    

@dataclasses.dataclass
class AddMembersToSharedLineGroupRequests:
    object: Optional[AddMembersToSharedLineGroupApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddMembersToSharedLineGroupMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddMembersToSharedLineGroupRequest:
    path_params: AddMembersToSharedLineGroupPathParams = dataclasses.field()
    request: Optional[AddMembersToSharedLineGroupRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddMembersToSharedLineGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_members_to_shared_line_group_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
