import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserAssistantsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UserAssistantsUserAssistantsListAssistants:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class UserAssistantsUserAssistantsList:
    r"""UserAssistantsUserAssistantsList
    List of user's assistants.
    """
    
    assistants: Optional[list[UserAssistantsUserAssistantsListAssistants]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistants') }})
    

@dataclasses.dataclass
class UserAssistantsRequest:
    path_params: UserAssistantsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAssistantsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_assistants_list: Optional[UserAssistantsUserAssistantsList] = dataclasses.field(default=None)
    
