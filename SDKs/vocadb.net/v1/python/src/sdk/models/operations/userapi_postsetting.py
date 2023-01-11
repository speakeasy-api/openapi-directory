import dataclasses
from typing import Optional


@dataclasses.dataclass
class UserAPIPostSettingPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    setting_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIPostSettingRequests:
    string: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    string1: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    string2: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    string3: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    string4: Optional[str] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclasses.dataclass
class UserAPIPostSettingRequest:
    path_params: UserAPIPostSettingPathParams = dataclasses.field()
    request: UserAPIPostSettingRequests = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIPostSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
