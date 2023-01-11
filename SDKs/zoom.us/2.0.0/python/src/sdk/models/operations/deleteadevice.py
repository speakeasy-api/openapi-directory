import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteADevicePathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteADeviceSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteADeviceRequest:
    path_params: DeleteADevicePathParams = dataclasses.field()
    security: DeleteADeviceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteADeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_a_device_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
