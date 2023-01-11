import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetAccountLockSettingsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountLockSettingsQueryParams:
    custom_query_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'custom_query_fields', 'style': 'form', 'explode': True }})
    option: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'option', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountLockSettingsRequest:
    path_params: GetAccountLockSettingsPathParams = dataclasses.field()
    query_params: GetAccountLockSettingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountLockSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_account_lock_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
