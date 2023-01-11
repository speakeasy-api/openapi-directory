import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetSwitchPathParams:
    switch_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switch_transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSwitchQueryParams:
    include_details: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_details', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSwitchHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSwitchSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetSwitchRequest:
    headers: GetSwitchHeaders = dataclasses.field()
    path_params: GetSwitchPathParams = dataclasses.field()
    query_params: GetSwitchQueryParams = dataclasses.field()
    security: GetSwitchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSwitchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_switch_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_switch_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_switch_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_switch_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_switch_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_switch_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_switch_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_switch_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
