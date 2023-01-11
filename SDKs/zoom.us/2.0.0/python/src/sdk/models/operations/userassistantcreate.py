import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UserAssistantCreatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UserAssistantCreateUserAssistantsListAssistants:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class UserAssistantCreateUserAssistantsList:
    r"""UserAssistantCreateUserAssistantsList
    List of user's assistants.
    """
    
    assistants: Optional[list[UserAssistantCreateUserAssistantsListAssistants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistants') }, 'multipart_form': { 'field_name': 'assistants', 'json': True }})
    

@dataclasses.dataclass
class UserAssistantCreateRequests:
    user_assistants_list: Optional[UserAssistantCreateUserAssistantsList] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_assistants_list1: Optional[UserAssistantCreateUserAssistantsList] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UserAssistantCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class UserAssistantCreate201ApplicationJSON:
    add_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ids: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclasses.dataclass
class UserAssistantCreateRequest:
    path_params: UserAssistantCreatePathParams = dataclasses.field()
    request: UserAssistantCreateRequests = dataclasses.field()
    security: UserAssistantCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UserAssistantCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_assistant_create_201_application_json_object: Optional[UserAssistantCreate201ApplicationJSON] = dataclasses.field(default=None)
    
