import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteUserSettingPathParams:
    setting_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingType', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserSettingQueryParams:
    shared_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'shared_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteUserSettingSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteUserSettingRequest:
    path_params: DeleteUserSettingPathParams = dataclasses.field()
    query_params: DeleteUserSettingQueryParams = dataclasses.field()
    security: DeleteUserSettingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserSettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_user_setting_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
