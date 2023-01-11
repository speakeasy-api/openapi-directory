import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateAGroupMemberPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    
class UpdateAGroupMemberApplicationJSONActionEnum(str, Enum):
    MOVE = "move"
    SET_PRIMARY = "set_primary"


@dataclass_json
@dataclasses.dataclass
class UpdateAGroupMemberApplicationJSON:
    action: UpdateAGroupMemberApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    target_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_group_id') }})
    
class UpdateAGroupMemberMultipartFormDataActionEnum(str, Enum):
    MOVE = "move"
    SET_PRIMARY = "set_primary"


@dataclasses.dataclass
class UpdateAGroupMemberMultipartFormData:
    action: UpdateAGroupMemberMultipartFormDataActionEnum = dataclasses.field(metadata={'multipart_form': { 'field_name': 'action' }})
    target_group_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'target_group_id' }})
    

@dataclasses.dataclass
class UpdateAGroupMemberRequests:
    object: Optional[UpdateAGroupMemberApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateAGroupMemberMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateAGroupMemberSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateAGroupMemberRequest:
    path_params: UpdateAGroupMemberPathParams = dataclasses.field()
    security: UpdateAGroupMemberSecurity = dataclasses.field()
    request: Optional[UpdateAGroupMemberRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAGroupMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_a_group_member_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
