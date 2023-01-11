import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetACommonAreaPhonePathParams:
    common_area_phone_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commonAreaPhoneId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetACommonAreaPhoneSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetACommonAreaPhone200ApplicationJSONProvisionSipAccounts:
    authorization_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorization_id') }})
    outbound_proxy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_proxy') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    sip_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_domain') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    
class GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum(str, Enum):
    ASSISTED = "assisted"
    ZTP = "ztp"
    MANUAL = "manual"


@dataclass_json
@dataclasses.dataclass
class GetACommonAreaPhone200ApplicationJSONProvision:
    r"""GetACommonAreaPhone200ApplicationJSONProvision
    Provisioning information of the common area phone.
    """
    
    sip_accounts: Optional[list[GetACommonAreaPhone200ApplicationJSONProvisionSipAccounts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_accounts') }})
    type: Optional[GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetACommonAreaPhone200ApplicationJSONSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetACommonAreaPhone200ApplicationJSON:
    device_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mac_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    provision: Optional[GetACommonAreaPhone200ApplicationJSONProvision] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provision') }})
    site: Optional[GetACommonAreaPhone200ApplicationJSONSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetACommonAreaPhoneRequest:
    path_params: GetACommonAreaPhonePathParams = dataclasses.field()
    security: GetACommonAreaPhoneSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetACommonAreaPhoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_a_common_area_phone_200_application_json_object: Optional[GetACommonAreaPhone200ApplicationJSON] = dataclasses.field(default=None)
    
