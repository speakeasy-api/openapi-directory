import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateASharedLineGroupPathParams:
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateASharedLineGroupApplicationJSONPrimaryNumber:
    r"""UpdateASharedLineGroupApplicationJSONPrimaryNumber
    If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
class UpdateASharedLineGroupApplicationJSONStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class UpdateASharedLineGroupApplicationJSON:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    primary_number: Optional[UpdateASharedLineGroupApplicationJSONPrimaryNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_number') }})
    status: Optional[UpdateASharedLineGroupApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateASharedLineGroupMultipartFormDataPrimaryNumber:
    r"""UpdateASharedLineGroupMultipartFormDataPrimaryNumber
    If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
class UpdateASharedLineGroupMultipartFormDataStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclasses.dataclass
class UpdateASharedLineGroupMultipartFormData:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'display_name' }})
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'extension_number' }})
    primary_number: Optional[UpdateASharedLineGroupMultipartFormDataPrimaryNumber] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'primary_number', 'json': True }})
    status: Optional[UpdateASharedLineGroupMultipartFormDataStatusEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'status' }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'timezone' }})
    

@dataclasses.dataclass
class UpdateASharedLineGroupRequests:
    object: Optional[UpdateASharedLineGroupApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateASharedLineGroupMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateASharedLineGroupRequest:
    path_params: UpdateASharedLineGroupPathParams = dataclasses.field()
    request: Optional[UpdateASharedLineGroupRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateASharedLineGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_a_shared_line_group_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
