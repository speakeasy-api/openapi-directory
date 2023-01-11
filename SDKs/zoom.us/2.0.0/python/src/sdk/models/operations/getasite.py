import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetASitePathParams:
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'siteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetASiteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetASite200ApplicationJSONCountry:
    r"""GetASite200ApplicationJSONCountry
    Site country
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetASite200ApplicationJSONMainAutoReceptionist:
    r"""GetASite200ApplicationJSONMainAutoReceptionist
    [Main Auto Receptionist](https://support.zoom.us/hc/en-us/articles/360021121312#h_bc7ff1d5-0e6c-40cd-b889-62010cb98c57) for each site.
    """
    
    extension_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_id') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetASite200ApplicationJSONShortExtension:
    r"""GetASite200ApplicationJSONShortExtension
    Short extension of the phone site.
    """
    
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    

@dataclass_json
@dataclasses.dataclass
class GetASite200ApplicationJSON:
    country: Optional[GetASite200ApplicationJSONCountry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_auto_receptionist: Optional[GetASite200ApplicationJSONMainAutoReceptionist] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('main_auto_receptionist') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    short_extension: Optional[GetASite200ApplicationJSONShortExtension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_extension') }})
    site_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_code') }})
    

@dataclasses.dataclass
class GetASiteRequest:
    path_params: GetASitePathParams = dataclasses.field()
    security: GetASiteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetASiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_a_site_200_application_json_object: Optional[GetASite200ApplicationJSON] = dataclasses.field(default=None)
    
