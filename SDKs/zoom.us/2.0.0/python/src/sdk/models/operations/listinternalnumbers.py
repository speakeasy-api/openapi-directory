import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListInternalNumbersPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListInternalNumbersQueryParams:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    
class ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum(str, Enum):
    EN_GB = "en-GB"
    EN_US = "en-US"
    DE_DE = "de-DE"


@dataclass_json
@dataclasses.dataclass
class ListInternalNumbers200ApplicationJSONInternalNumbers:
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    display_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_number') }})
    labels: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    languages: ListInternalNumbers200ApplicationJSONInternalNumbersLanguagesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allow_for_external_meetings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_for_external_meetings') }})
    allow_join: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_join') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInternalNumbers200ApplicationJSON:
    internal_numbers: Optional[list[ListInternalNumbers200ApplicationJSONInternalNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal_numbers') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListInternalNumbersRequest:
    path_params: ListInternalNumbersPathParams = dataclasses.field()
    query_params: ListInternalNumbersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListInternalNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_internal_numbers_200_application_json_object: Optional[ListInternalNumbers200ApplicationJSON] = dataclasses.field(default=None)
    
