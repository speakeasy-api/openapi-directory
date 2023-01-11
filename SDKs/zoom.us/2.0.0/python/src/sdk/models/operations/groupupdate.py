import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GroupUpdatePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GroupUpdateApplicationJSON:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class GroupUpdateMultipartFormData:
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class GroupUpdateRequests:
    object: Optional[GroupUpdateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[GroupUpdateMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class GroupUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GroupUpdateRequest:
    path_params: GroupUpdatePathParams = dataclasses.field()
    request: GroupUpdateRequests = dataclasses.field()
    security: GroupUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GroupUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
