import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnassignPhoneNumberPathParams:
    phone_number_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'phoneNumberId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnassignPhoneNumberSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnassignPhoneNumberRequest:
    path_params: UnassignPhoneNumberPathParams = dataclasses.field()
    security: UnassignPhoneNumberSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnassignPhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unassign_phone_number_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
