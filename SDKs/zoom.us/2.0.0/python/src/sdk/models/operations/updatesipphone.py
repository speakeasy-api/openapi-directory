import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateSipPhonePathParams:
    phone_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'phoneId', 'style': 'simple', 'explode': False }})
    
class UpdateSipPhoneApplicationJSONTransportProtocolEnum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class UpdateSipPhoneApplicationJSONTransportProtocol2Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class UpdateSipPhoneApplicationJSONTransportProtocol3Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"


@dataclass_json
@dataclasses.dataclass
class UpdateSipPhoneApplicationJSON:
    authorization_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorization_name') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    proxy_server: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server') }})
    proxy_server2: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server2') }})
    proxy_server3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_server3') }})
    register_server: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server') }})
    register_server2: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server2') }})
    register_server3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('register_server3') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    voice_mail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice_mail') }})
    registration_expire_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_expire_time') }})
    transport_protocol: Optional[UpdateSipPhoneApplicationJSONTransportProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol') }})
    transport_protocol2: Optional[UpdateSipPhoneApplicationJSONTransportProtocol2Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol2') }})
    transport_protocol3: Optional[UpdateSipPhoneApplicationJSONTransportProtocol3Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_protocol3') }})
    
class UpdateSipPhoneMultipartFormDataTransportProtocolEnum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class UpdateSipPhoneMultipartFormDataTransportProtocol2Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"

class UpdateSipPhoneMultipartFormDataTransportProtocol3Enum(str, Enum):
    UDP = "UDP"
    TCP = "TCP"
    TLS = "TLS"
    AUTO = "AUTO"


@dataclasses.dataclass
class UpdateSipPhoneMultipartFormData:
    authorization_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'authorization_name' }})
    domain: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'domain' }})
    password: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'password' }})
    proxy_server: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'proxy_server' }})
    proxy_server2: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'proxy_server2' }})
    proxy_server3: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'proxy_server3' }})
    register_server: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'register_server' }})
    register_server2: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'register_server2' }})
    register_server3: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'register_server3' }})
    user_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'user_name' }})
    voice_mail: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'voice_mail' }})
    registration_expire_time: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'registration_expire_time' }})
    transport_protocol: Optional[UpdateSipPhoneMultipartFormDataTransportProtocolEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transport_protocol' }})
    transport_protocol2: Optional[UpdateSipPhoneMultipartFormDataTransportProtocol2Enum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transport_protocol2' }})
    transport_protocol3: Optional[UpdateSipPhoneMultipartFormDataTransportProtocol3Enum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transport_protocol3' }})
    

@dataclasses.dataclass
class UpdateSipPhoneRequests:
    object: Optional[UpdateSipPhoneApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateSipPhoneMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateSipPhoneSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateSipPhoneRequest:
    path_params: UpdateSipPhonePathParams = dataclasses.field()
    security: UpdateSipPhoneSecurity = dataclasses.field()
    request: Optional[UpdateSipPhoneRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSipPhoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_sip_phone_204_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
