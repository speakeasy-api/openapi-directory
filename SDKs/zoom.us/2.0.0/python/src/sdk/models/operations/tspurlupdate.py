import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class TspURLUpdatePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TspURLUpdateTspGlobalDialInURLSetting:
    audio_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_url') }, 'multipart_form': { 'field_name': 'audio_url' }})
    

@dataclasses.dataclass
class TspURLUpdateRequests:
    tsp_global_dial_in_url_setting: Optional[TspURLUpdateTspGlobalDialInURLSetting] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tsp_global_dial_in_url_setting1: Optional[TspURLUpdateTspGlobalDialInURLSetting] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class TspURLUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TspURLUpdateRequest:
    path_params: TspURLUpdatePathParams = dataclasses.field()
    security: TspURLUpdateSecurity = dataclasses.field()
    request: Optional[TspURLUpdateRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class TspURLUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
