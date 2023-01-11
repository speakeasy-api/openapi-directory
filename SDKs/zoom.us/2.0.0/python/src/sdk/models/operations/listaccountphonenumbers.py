import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class ListAccountPhoneNumbersExtensionTypeEnum(str, Enum):
    USER = "user"
    CALL_QUEUE = "callQueue"
    AUTO_RECEPTIONIST = "autoReceptionist"
    COMMON_AREA_PHONE = "commonAreaPhone"

class ListAccountPhoneNumbersNumberTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"

class ListAccountPhoneNumbersTypeEnum(str, Enum):
    ASSIGNED = "assigned"
    UNASSIGNED = "unassigned"
    ALL = "all"


@dataclasses.dataclass
class ListAccountPhoneNumbersQueryParams:
    extension_type: Optional[ListAccountPhoneNumbersExtensionTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extension_type', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    number_type: Optional[ListAccountPhoneNumbersNumberTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number_type', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    pending_numbers: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pending_numbers', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    type: Optional[ListAccountPhoneNumbersTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAccountPhoneNumbersSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum(str, Enum):
    USER = "user"
    CALL_QUEUE = "callQueue"
    AUTO_RECEPTIONIST = "autoReceptionist"
    COMMON_AREA_PHONE = "commonAreaPhone"


@dataclass_json
@dataclasses.dataclass
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssignee:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier:
    r"""ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier
    Displayed when the `type` request parameter is `byoc`.
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum(str, Enum):
    TOLL = "toll"
    TOLLFREE = "tollfree"


@dataclass_json
@dataclasses.dataclass
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup:
    r"""ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup
    Displayed when the `type` request parameter is `byoc`.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSite:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum(str, Enum):
    INTERNAL = "internal"
    EXTERNAL = "external"

class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"


@dataclass_json
@dataclasses.dataclass
class ListAccountPhoneNumbers200ApplicationJSONPhoneNumbers:
    assignee: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssignee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    capability: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capability') }})
    carrier: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    number_type: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_type') }})
    sip_group: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_group') }})
    site: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    source: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAccountPhoneNumbers200ApplicationJSON:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    phone_numbers: Optional[list[ListAccountPhoneNumbers200ApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListAccountPhoneNumbersRequest:
    query_params: ListAccountPhoneNumbersQueryParams = dataclasses.field()
    security: ListAccountPhoneNumbersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListAccountPhoneNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_account_phone_numbers_200_application_json_object: Optional[ListAccountPhoneNumbers200ApplicationJSON] = dataclasses.field(default=None)
    
