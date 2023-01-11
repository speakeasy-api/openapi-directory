import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class TrackingfieldGetPathParams:
    field_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fieldId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrackingfieldGetSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TrackingfieldGetTrackingField:
    r"""TrackingfieldGetTrackingField
    Tracking Field
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    recommended_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_values') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclasses.dataclass
class TrackingfieldGetRequest:
    path_params: TrackingfieldGetPathParams = dataclasses.field()
    security: TrackingfieldGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TrackingfieldGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tracking_field: Optional[TrackingfieldGetTrackingField] = dataclasses.field(default=None)
    
