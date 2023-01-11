import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListSipPhonesQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    search_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSipPhonesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"


@dataclass_json
@dataclasses.dataclass
class ListSipPhones200ApplicationJSONPhones:
    authorization_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorization_name') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    proxy_server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server') }})
    proxy_server2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server2') }})
    proxy_server3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server3') }})
    register_server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server') }})
    register_server2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server2') }})
    register_server3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server3') }})
    registration_expire_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_expire_time') }})
    transport_protocol: Optional[ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol') }})
    transport_protocol2: Optional[ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol2') }})
    transport_protocol3: Optional[ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol3') }})
    user_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_email') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    voice_mail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mail') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSipPhones200ApplicationJSON:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_count') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_number') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    phones: Optional[list[ListSipPhones200ApplicationJSONPhones]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phones') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListSipPhonesRequest:
    query_params: ListSipPhonesQueryParams = dataclasses.field()
    security: ListSipPhonesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListSipPhonesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_sip_phones_200_application_json_object: Optional[ListSipPhones200ApplicationJSON] = dataclasses.field(default=None)
    
