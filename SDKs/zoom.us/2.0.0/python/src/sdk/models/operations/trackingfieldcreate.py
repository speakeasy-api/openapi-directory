import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class TrackingfieldCreateTrackingField:
    r"""TrackingfieldCreateTrackingField
    Tracking Field
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }, 'multipart_form': { 'field_name': 'field' }})
    recommended_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_values') }, 'multipart_form': { 'field_name': 'recommended_values', 'json': True }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }, 'multipart_form': { 'field_name': 'required' }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }, 'multipart_form': { 'field_name': 'visible' }})
    

@dataclasses.dataclass
class TrackingfieldCreateRequests:
    tracking_field: Optional[TrackingfieldCreateTrackingField] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tracking_field1: Optional[TrackingfieldCreateTrackingField] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class TrackingfieldCreateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TrackingfieldCreateTrackingField1:
    r"""TrackingfieldCreateTrackingField1
    Tracking Field
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    recommended_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_values') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclasses.dataclass
class TrackingfieldCreateRequest:
    request: TrackingfieldCreateRequests = dataclasses.field()
    security: TrackingfieldCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TrackingfieldCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tracking_field: Optional[TrackingfieldCreateTrackingField1] = dataclasses.field(default=None)
    
