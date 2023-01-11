import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class MeetingInvitationPathParams:
    meeting_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MeetingInvitationSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class MeetingInvitationMeetingInvitation:
    r"""MeetingInvitationMeetingInvitation
    Meeting invitation details.
    """
    
    invitation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitation') }})
    

@dataclasses.dataclass
class MeetingInvitationRequest:
    path_params: MeetingInvitationPathParams = dataclasses.field()
    security: MeetingInvitationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeetingInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    meeting_invitation: Optional[MeetingInvitationMeetingInvitation] = dataclasses.field(default=None)
    
