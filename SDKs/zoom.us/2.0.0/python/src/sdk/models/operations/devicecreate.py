import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class DeviceCreateTheH323SipDeviceObjectEncryptionEnum(str, Enum):
    AUTO = "auto"
    YES = "yes"
    NO = "no"

class DeviceCreateTheH323SipDeviceObjectProtocolEnum(str, Enum):
    H_323 = "H.323"
    SIP = "SIP"


@dataclass_json
@dataclasses.dataclass
class DeviceCreateTheH323SipDeviceObject:
    r"""DeviceCreateTheH323SipDeviceObject
    The H.323/SIP device object.
    """
    
    encryption: DeviceCreateTheH323SipDeviceObjectEncryptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }, 'multipart_form': { 'field_name': 'encryption' }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }, 'multipart_form': { 'field_name': 'ip' }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }, 'multipart_form': { 'field_name': 'name' }})
    protocol: DeviceCreateTheH323SipDeviceObjectProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }, 'multipart_form': { 'field_name': 'protocol' }})
    

@dataclasses.dataclass
class DeviceCreateRequests:
    the_h_323_sip_device_object_: Optional[DeviceCreateTheH323SipDeviceObject] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    the_h_323_sip_device_object_1: Optional[DeviceCreateTheH323SipDeviceObject] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class DeviceCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DeviceCreateTheH323SipDeviceObject1:
    r"""DeviceCreateTheH323SipDeviceObject1
    The H.323/SIP device object.
    """
    
    encryption: DeviceCreateTheH323SipDeviceObjectEncryptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: DeviceCreateTheH323SipDeviceObjectProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class DeviceCreateRequest:
    request: DeviceCreateRequests = dataclasses.field()
    security: DeviceCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeviceCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    the_h_323_sip_device_object_: Optional[DeviceCreateTheH323SipDeviceObject1] = dataclasses.field(default=None)
    
