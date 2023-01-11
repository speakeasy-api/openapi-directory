import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetADevicePathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetADeviceSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetADevice200ApplicationJSONAssignee:
    r"""GetADevice200ApplicationJSONAssignee
    User to whom the device has been assigned.
    """
    
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription:
    r"""GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription
    Line subscription.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    

@dataclass_json
@dataclasses.dataclass
class GetADevice200ApplicationJSONProvisionSipAccountsSharedLine:
    r"""GetADevice200ApplicationJSONProvisionSipAccountsSharedLine
    Return additional provisioning information with generic device SIP credentials.
    """
    
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    line_subscription: Optional[GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_subscription') }})
    outbound_caller_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_caller_id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetADevice200ApplicationJSONProvisionSipAccounts:
    authorization_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorization_id') }})
    outbound_proxy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_proxy') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    shared_line: Optional[GetADevice200ApplicationJSONProvisionSipAccountsSharedLine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared_line') }})
    sip_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_domain') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    
class GetADevice200ApplicationJSONProvisionTypeEnum(str, Enum):
    ASSISTED = "assisted"
    ZTP = "ztp"
    MANUAL = "manual"


@dataclass_json
@dataclasses.dataclass
class GetADevice200ApplicationJSONProvision:
    r"""GetADevice200ApplicationJSONProvision
    Provisioning information of a device.
    """
    
    sip_accounts: Optional[list[GetADevice200ApplicationJSONProvisionSipAccounts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_accounts') }})
    type: Optional[GetADevice200ApplicationJSONProvisionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetADevice200ApplicationJSONSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetADevice200ApplicationJSONStatusEnum(str, Enum):
    ONLINE = "online"
    OFFLINE = "offline"


@dataclass_json
@dataclasses.dataclass
class GetADevice200ApplicationJSON:
    assignee: Optional[GetADevice200ApplicationJSONAssignee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    device_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    provision: Optional[GetADevice200ApplicationJSONProvision] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision') }})
    site: Optional[GetADevice200ApplicationJSONSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[GetADevice200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetADeviceRequest:
    path_params: GetADevicePathParams = dataclasses.field()
    security: GetADeviceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetADeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_a_device_200_application_json_object: Optional[GetADevice200ApplicationJSON] = dataclasses.field(default=None)
    
