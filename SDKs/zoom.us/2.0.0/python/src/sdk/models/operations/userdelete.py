import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class UserDeletePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    
class UserDeleteActionEnum(str, Enum):
    DISASSOCIATE = "disassociate"
    DELETE = "delete"


@dataclasses.dataclass
class UserDeleteQueryParams:
    action: Optional[UserDeleteActionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    transfer_email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transfer_email', 'style': 'form', 'explode': True }})
    transfer_meeting: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transfer_meeting', 'style': 'form', 'explode': True }})
    transfer_recording: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transfer_recording', 'style': 'form', 'explode': True }})
    transfer_webinar: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transfer_webinar', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserDeleteRequest:
    path_params: UserDeletePathParams = dataclasses.field()
    query_params: UserDeleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
