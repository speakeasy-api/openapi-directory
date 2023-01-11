import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeviceListQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeviceListSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum(str, Enum):
    AUTO = "auto"
    YES = "yes"
    NO = "no"

class DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum(str, Enum):
    H_323 = "H.323"
    SIP = "SIP"


@dataclass_json
@dataclasses.dataclass
class DeviceListH323SipDeviceListTheH323SipDeviceObject:
    r"""DeviceListH323SipDeviceListTheH323SipDeviceObject
    The H.323/SIP device object.
    """
    
    encryption: DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protocol: DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class DeviceListH323SipDeviceList:
    r"""DeviceListH323SipDeviceList
    Pagination Object.
    """
    
    devices: Optional[list[DeviceListH323SipDeviceListTheH323SipDeviceObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_number') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class DeviceListRequest:
    query_params: DeviceListQueryParams = dataclasses.field()
    security: DeviceListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeviceListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    h_323_sip_device_list: Optional[DeviceListH323SipDeviceList] = dataclasses.field(default=None)
    
