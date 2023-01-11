import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetZrLocationStructureSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetZrLocationStructure200ApplicationJSON:
    structures: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structures') }})
    

@dataclasses.dataclass
class GetZrLocationStructureRequest:
    security: GetZrLocationStructureSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetZrLocationStructureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_zr_location_structure_200_application_json_object: Optional[GetZrLocationStructure200ApplicationJSON] = dataclasses.field(default=None)
    
