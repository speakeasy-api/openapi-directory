import dataclasses
from typing import Optional
from enum import Enum
from ..shared import userforapicontract as shared_userforapicontract

class UserAPIGetCurrentFieldsEnum(str, Enum):
    NONE = "None"
    KNOWN_LANGUAGES = "KnownLanguages"
    MAIN_PICTURE = "MainPicture"
    OLD_USERNAMES = "OldUsernames"


@dataclasses.dataclass
class UserAPIGetCurrentQueryParams:
    fields: Optional[UserAPIGetCurrentFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIGetCurrentRequest:
    query_params: UserAPIGetCurrentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_for_api_contract: Optional[shared_userforapicontract.UserForAPIContract] = dataclasses.field(default=None)
    
