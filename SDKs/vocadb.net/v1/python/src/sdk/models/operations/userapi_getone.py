import dataclasses
from typing import Optional
from enum import Enum
from ..shared import userforapicontract as shared_userforapicontract


@dataclasses.dataclass
class UserAPIGetOnePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetOneFieldsEnum(str, Enum):
    NONE = "None"
    KNOWN_LANGUAGES = "KnownLanguages"
    MAIN_PICTURE = "MainPicture"
    OLD_USERNAMES = "OldUsernames"


@dataclasses.dataclass
class UserAPIGetOneQueryParams:
    fields: Optional[UserAPIGetOneFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIGetOneRequest:
    path_params: UserAPIGetOnePathParams = dataclasses.field()
    query_params: UserAPIGetOneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIGetOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    user_for_api_contract: Optional[shared_userforapicontract.UserForAPIContract] = dataclasses.field(default=None)
    
