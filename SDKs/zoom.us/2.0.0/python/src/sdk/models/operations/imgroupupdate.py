import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ImGroupUpdatePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    
class ImGroupUpdateApplicationJSONTypeEnum(str, Enum):
    NORMAL = "normal"
    SHARED = "shared"
    RESTRICTED = "restricted"


@dataclass_json
@dataclasses.dataclass
class ImGroupUpdateApplicationJSON:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    search_by_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_account') }})
    search_by_domain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_domain') }})
    search_by_ma_account: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_by_ma_account') }})
    type: Optional[ImGroupUpdateApplicationJSONTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class ImGroupUpdateMultipartFormDataTypeEnum(str, Enum):
    NORMAL = "normal"
    SHARED = "shared"
    RESTRICTED = "restricted"


@dataclasses.dataclass
class ImGroupUpdateMultipartFormData:
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    search_by_account: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'search_by_account' }})
    search_by_domain: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'search_by_domain' }})
    search_by_ma_account: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'search_by_ma_account' }})
    type: Optional[ImGroupUpdateMultipartFormDataTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class ImGroupUpdateRequests:
    object: Optional[ImGroupUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[ImGroupUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ImGroupUpdateRequest:
    path_params: ImGroupUpdatePathParams = dataclasses.field()
    request: ImGroupUpdateRequests = dataclasses.field()
    

@dataclasses.dataclass
class ImGroupUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
