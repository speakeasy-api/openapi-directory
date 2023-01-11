import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListInternalCalloutCountriesPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListInternalCalloutCountries200ApplicationJSONCalloutCountries:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInternalCalloutCountries200ApplicationJSON:
    callout_countries: Optional[list[ListInternalCalloutCountries200ApplicationJSONCalloutCountries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListInternalCalloutCountriesRequest:
    path_params: ListInternalCalloutCountriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListInternalCalloutCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_internal_callout_countries_200_application_json_object: Optional[ListInternalCalloutCountries200ApplicationJSON] = dataclasses.field(default=None)
    
