import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UnassignAllPhoneNumsAutoReceptionistPathParams:
    auto_receptionist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'autoReceptionistId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnassignAllPhoneNumsAutoReceptionistSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UnassignAllPhoneNumsAutoReceptionistRequest:
    path_params: UnassignAllPhoneNumsAutoReceptionistPathParams = dataclasses.field()
    security: UnassignAllPhoneNumsAutoReceptionistSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UnassignAllPhoneNumsAutoReceptionistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    unassign_all_phone_nums_auto_receptionist_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
