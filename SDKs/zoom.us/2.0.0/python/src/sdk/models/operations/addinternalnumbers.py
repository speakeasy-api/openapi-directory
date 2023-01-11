import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AddInternalNumbersPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    
class AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum(str, Enum):
    EN_GB = "en-GB"
    EN_US = "en-US"
    DE_DE = "de-DE"


@dataclass_json
@dataclasses.dataclass
class AddInternalNumbersApplicationJSONInternalNumbers:
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    display_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_number') }})
    labels: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    languages: AddInternalNumbersApplicationJSONInternalNumbersLanguagesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allow_for_external_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_for_external_meetings') }})
    allow_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_join') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclass_json
@dataclasses.dataclass
class AddInternalNumbersApplicationJSON:
    internal_numbers: Optional[list[AddInternalNumbersApplicationJSONInternalNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal_numbers') }})
    
class AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum(str, Enum):
    EN_GB = "en-GB"
    EN_US = "en-US"
    DE_DE = "de-DE"


@dataclass_json
@dataclasses.dataclass
class AddInternalNumbersMultipartFormDataInternalNumbers:
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    display_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_number') }})
    labels: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    languages: AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allow_for_external_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_for_external_meetings') }})
    allow_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_join') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclasses.dataclass
class AddInternalNumbersMultipartFormData1:
    internal_numbers: Optional[list[AddInternalNumbersMultipartFormDataInternalNumbers]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'internal_numbers', 'json': True }})
    

@dataclasses.dataclass
class AddInternalNumbersRequests:
    object: Optional[AddInternalNumbersApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddInternalNumbersMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    
class AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum(str, Enum):
    EN_GB = "en-GB"
    EN_US = "en-US"
    DE_DE = "de-DE"


@dataclass_json
@dataclasses.dataclass
class AddInternalNumbers201ApplicationJSONInternalNumbers:
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    display_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_number') }})
    labels: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    languages: AddInternalNumbers201ApplicationJSONInternalNumbersLanguagesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allow_for_external_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_for_external_meetings') }})
    allow_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_join') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclass_json
@dataclasses.dataclass
class AddInternalNumbers201ApplicationJSON:
    internal_numbers: Optional[list[AddInternalNumbers201ApplicationJSONInternalNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal_numbers') }})
    

@dataclasses.dataclass
class AddInternalNumbersRequest:
    path_params: AddInternalNumbersPathParams = dataclasses.field()
    request: Optional[AddInternalNumbersRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddInternalNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_internal_numbers_201_application_json_object: Optional[AddInternalNumbers201ApplicationJSON] = dataclasses.field(default=None)
    
