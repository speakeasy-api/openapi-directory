import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ManageE911signageRequests:
    object: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class ManageE911signage202ApplicationJSON:
    event_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_id') }})
    

@dataclasses.dataclass
class ManageE911signageRequest:
    request: Optional[ManageE911signageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ManageE911signageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    manage_e911signage_202_application_json_object: Optional[ManageE911signage202ApplicationJSON] = dataclasses.field(default=None)
    
