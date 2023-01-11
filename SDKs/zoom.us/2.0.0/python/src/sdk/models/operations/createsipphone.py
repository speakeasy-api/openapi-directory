import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class CreateSipPhoneApplicationJSONTransportProtocolEnum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class CreateSipPhoneApplicationJSONTransportProtocol2Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class CreateSipPhoneApplicationJSONTransportProtocol3Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"


@dataclass_json
@dataclasses.dataclass
class CreateSipPhoneApplicationJSON:
    authorization_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorization_name') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    proxy_server: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server') }})
    register_server: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server') }})
    user_email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_email') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    voice_mail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mail') }})
    proxy_server2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server2') }})
    proxy_server3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server3') }})
    register_server2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server2') }})
    register_server3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server3') }})
    registration_expire_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_expire_time') }})
    transport_protocol: Optional[CreateSipPhoneApplicationJSONTransportProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol') }})
    transport_protocol2: Optional[CreateSipPhoneApplicationJSONTransportProtocol2Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol2') }})
    transport_protocol3: Optional[CreateSipPhoneApplicationJSONTransportProtocol3Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol3') }})
    
class CreateSipPhoneMultipartFormDataTransportProtocolEnum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class CreateSipPhoneMultipartFormDataTransportProtocol2Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class CreateSipPhoneMultipartFormDataTransportProtocol3Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"


@dataclasses.dataclass
class CreateSipPhoneMultipartFormData:
    authorization_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'authorization_name' }})
    domain: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'domain' }})
    password: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'password' }})
    proxy_server: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'proxy_server' }})
    register_server: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'register_server' }})
    user_email: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'user_email' }})
    user_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'user_name' }})
    voice_mail: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'voice_mail' }})
    proxy_server2: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'proxy_server2' }})
    proxy_server3: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'proxy_server3' }})
    register_server2: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'register_server2' }})
    register_server3: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'register_server3' }})
    registration_expire_time: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'registration_expire_time' }})
    transport_protocol: Optional[CreateSipPhoneMultipartFormDataTransportProtocolEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transport_protocol' }})
    transport_protocol2: Optional[CreateSipPhoneMultipartFormDataTransportProtocol2Enum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transport_protocol2' }})
    transport_protocol3: Optional[CreateSipPhoneMultipartFormDataTransportProtocol3Enum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transport_protocol3' }})
    

@dataclasses.dataclass
class CreateSipPhoneRequests:
    object: Optional[CreateSipPhoneApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CreateSipPhoneMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateSipPhoneSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateSipPhoneRequest:
    security: CreateSipPhoneSecurity = dataclasses.field()
    request: Optional[CreateSipPhoneRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSipPhoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
