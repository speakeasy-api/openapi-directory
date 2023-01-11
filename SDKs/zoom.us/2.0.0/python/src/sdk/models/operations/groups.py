import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GroupsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class Groups200ApplicationJSONGroups:
    r"""Groups200ApplicationJSONGroups
    Group object.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_members: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_members') }})
    

@dataclass_json
@dataclasses.dataclass
class Groups200ApplicationJSON:
    r"""Groups200ApplicationJSON
    List of Groups.
    """
    
    groups: Optional[list[Groups200ApplicationJSONGroups]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class GroupsRequest:
    security: GroupsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    groups_200_application_json_object: Optional[Groups200ApplicationJSON] = dataclasses.field(default=None)
    
