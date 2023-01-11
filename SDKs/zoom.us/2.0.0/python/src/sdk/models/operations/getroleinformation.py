import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRoleInformationPathParams:
    role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRoleInformationSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRoleInformation200ApplicationJSONSubAccountPrivileges:
    r"""GetRoleInformation200ApplicationJSONSubAccountPrivileges
    This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
    """
    
    second_level: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('second_level') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRoleInformation200ApplicationJSON:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    privileges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileges') }})
    sub_account_privileges: Optional[GetRoleInformation200ApplicationJSONSubAccountPrivileges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_account_privileges') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    

@dataclasses.dataclass
class GetRoleInformationRequest:
    path_params: GetRoleInformationPathParams = dataclasses.field()
    security: GetRoleInformationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRoleInformationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_role_information_200_application_json_object: Optional[GetRoleInformation200ApplicationJSON] = dataclasses.field(default=None)
    
