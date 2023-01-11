import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class UpdateZoomRoomsLocationStructureApplicationJSON:
    structures: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structures') }})
    

@dataclasses.dataclass
class UpdateZoomRoomsLocationStructureMultipartFormData:
    structures: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'structures', 'json': True }})
    

@dataclasses.dataclass
class UpdateZoomRoomsLocationStructureRequests:
    object: Optional[UpdateZoomRoomsLocationStructureApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[UpdateZoomRoomsLocationStructureMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateZoomRoomsLocationStructureSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateZoomRoomsLocationStructureRequest:
    security: UpdateZoomRoomsLocationStructureSecurity = dataclasses.field()
    request: Optional[UpdateZoomRoomsLocationStructureRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateZoomRoomsLocationStructureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    update_zoom_rooms_location_structure_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
