import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class CreatePhoneSiteApplicationJSONDefaultEmergencyAddress:
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    state_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_code') }})
    zip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePhoneSiteApplicationJSONShortExtension:
    r"""CreatePhoneSiteApplicationJSONShortExtension
    Short extension of the phone site.
    """
    
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePhoneSiteApplicationJSON:
    auto_receptionist_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_receptionist_name') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    default_emergency_address: Optional[CreatePhoneSiteApplicationJSONDefaultEmergencyAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_emergency_address') }})
    short_extension: Optional[CreatePhoneSiteApplicationJSONShortExtension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_extension') }})
    site_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_code') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress:
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    state_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_code') }})
    zip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePhoneSiteMultipartFormDataShortExtension:
    r"""CreatePhoneSiteMultipartFormDataShortExtension
    Short extension of the phone site.
    """
    
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    

@dataclasses.dataclass
class CreatePhoneSiteMultipartFormData:
    auto_receptionist_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'auto_receptionist_name' }})
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    default_emergency_address: Optional[CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'default_emergency_address', 'json': True }})
    short_extension: Optional[CreatePhoneSiteMultipartFormDataShortExtension] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'short_extension', 'json': True }})
    site_code: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_code' }})
    

@dataclasses.dataclass
class CreatePhoneSiteRequests:
    object: Optional[CreatePhoneSiteApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[CreatePhoneSiteMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreatePhoneSiteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePhoneSite204ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class CreatePhoneSiteRequest:
    security: CreatePhoneSiteSecurity = dataclasses.field()
    request: Optional[CreatePhoneSiteRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreatePhoneSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    create_phone_site_204_application_json_object: Optional[CreatePhoneSite204ApplicationJSON] = dataclasses.field(default=None)
    
