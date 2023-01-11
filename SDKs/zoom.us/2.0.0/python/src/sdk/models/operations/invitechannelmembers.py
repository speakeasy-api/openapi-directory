import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class InviteChannelMembersPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class InviteChannelMembersApplicationJSONMembers:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclasses.dataclass
class InviteChannelMembersApplicationJSON:
    members: Optional[list[InviteChannelMembersApplicationJSONMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass_json
@dataclasses.dataclass
class InviteChannelMembersMultipartFormDataMembers:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclasses.dataclass
class InviteChannelMembersMultipartFormData1:
    members: Optional[list[InviteChannelMembersMultipartFormDataMembers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'members', 'json': True }})
    

@dataclasses.dataclass
class InviteChannelMembersRequests:
    object: Optional[InviteChannelMembersApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[InviteChannelMembersMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class InviteChannelMembersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class InviteChannelMembers201ApplicationJSON:
    added_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclasses.dataclass
class InviteChannelMembersRequest:
    path_params: InviteChannelMembersPathParams = dataclasses.field()
    security: InviteChannelMembersSecurity = dataclasses.field()
    request: Optional[InviteChannelMembersRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class InviteChannelMembersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    invite_channel_members_201_application_json_object: Optional[InviteChannelMembers201ApplicationJSON] = dataclasses.field(default=None)
    
