import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnassignAPhoneNumAutoReceptionistPathParams:
    auto_receptionist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'autoReceptionistId', 'style': 'simple', 'explode': False }})
    phone_number_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'phoneNumberId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnassignAPhoneNumAutoReceptionistSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnassignAPhoneNumAutoReceptionistRequest:
    path_params: UnassignAPhoneNumAutoReceptionistPathParams = dataclasses.field()
    security: UnassignAPhoneNumAutoReceptionistSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnassignAPhoneNumAutoReceptionistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unassign_a_phone_num_auto_receptionist_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
