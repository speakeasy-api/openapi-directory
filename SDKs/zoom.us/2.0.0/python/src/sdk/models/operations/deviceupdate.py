import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeviceUpdatePathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    
class DeviceUpdateTheH323SipDeviceObjectEncryptionEnum(str, Enum):
    AUTO = "auto"
    YES = "yes"
    NO = "no"

class DeviceUpdateTheH323SipDeviceObjectProtocolEnum(str, Enum):
    H_323 = "H.323"
    SIP = "SIP"


@dataclass_json
@dataclasses.dataclass
class DeviceUpdateTheH323SipDeviceObject:
    r"""DeviceUpdateTheH323SipDeviceObject
    The H.323/SIP device object.
    """
    
    encryption: DeviceUpdateTheH323SipDeviceObjectEncryptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }, 'multipart_form': { 'field_name': 'encryption' }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }, 'multipart_form': { 'field_name': 'ip' }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }, 'multipart_form': { 'field_name': 'name' }})
    protocol: DeviceUpdateTheH323SipDeviceObjectProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }, 'multipart_form': { 'field_name': 'protocol' }})
    

@dataclasses.dataclass
class DeviceUpdateRequests:
    the_h_323_sip_device_object_: Optional[DeviceUpdateTheH323SipDeviceObject] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    the_h_323_sip_device_object_1: Optional[DeviceUpdateTheH323SipDeviceObject] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class DeviceUpdateRequest:
    path_params: DeviceUpdatePathParams = dataclasses.field()
    request: DeviceUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class DeviceUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
