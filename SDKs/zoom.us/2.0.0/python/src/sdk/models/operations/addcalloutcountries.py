import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AddCalloutCountriesPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddCalloutCountriesApplicationJSONCalloutCountries:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class AddCalloutCountriesApplicationJSON:
    callout_countries: list[AddCalloutCountriesApplicationJSONCalloutCountries] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    

@dataclass_json
@dataclasses.dataclass
class AddCalloutCountriesMultipartFormDataCalloutCountries:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class AddCalloutCountriesMultipartFormData1:
    callout_countries: list[AddCalloutCountriesMultipartFormDataCalloutCountries] = dataclasses.field(metadata={'multipart_form': { 'field_name': 'callout_countries', 'json': True }})
    

@dataclasses.dataclass
class AddCalloutCountriesRequests:
    object: Optional[AddCalloutCountriesApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddCalloutCountriesMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class AddCalloutCountries201ApplicationJSONCalloutCountries:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class AddCalloutCountries201ApplicationJSON:
    callout_countries: Optional[list[AddCalloutCountries201ApplicationJSONCalloutCountries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    

@dataclasses.dataclass
class AddCalloutCountriesRequest:
    path_params: AddCalloutCountriesPathParams = dataclasses.field()
    request: Optional[AddCalloutCountriesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddCalloutCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_callout_countries_201_application_json_object: Optional[AddCalloutCountries201ApplicationJSON] = dataclasses.field(default=None)
    
