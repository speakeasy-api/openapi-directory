import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateAccountLockSettingsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAccountLockSettingsRequests:
    object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateAccountLockSettingsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateAccountLockSettingsRequest:
    path_params: UpdateAccountLockSettingsPathParams = dataclasses.field()
    security: UpdateAccountLockSettingsSecurity = dataclasses.field()
    request: Optional[UpdateAccountLockSettingsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAccountLockSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_account_lock_settings_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_account_lock_settings_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
