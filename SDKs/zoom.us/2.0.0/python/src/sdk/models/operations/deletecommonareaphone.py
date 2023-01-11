import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteCommonAreaPhonePathParams:
    common_area_phone_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commonAreaPhoneId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCommonAreaPhoneSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteCommonAreaPhoneRequest:
    path_params: DeleteCommonAreaPhonePathParams = dataclasses.field()
    security: DeleteCommonAreaPhoneSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCommonAreaPhoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_common_area_phone_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
