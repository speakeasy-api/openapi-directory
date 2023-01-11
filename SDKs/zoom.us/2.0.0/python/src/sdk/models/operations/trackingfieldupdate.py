import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class TrackingfieldUpdatePathParams:
    field_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fieldId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TrackingfieldUpdateTrackingField:
    r"""TrackingfieldUpdateTrackingField
    Tracking Field
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }, 'multipart_form': { 'field_name': 'field' }})
    recommended_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_values') }, 'multipart_form': { 'field_name': 'recommended_values', 'json': True }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }, 'multipart_form': { 'field_name': 'required' }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }, 'multipart_form': { 'field_name': 'visible' }})
    

@dataclasses.dataclass
class TrackingfieldUpdateRequests:
    tracking_field: Optional[TrackingfieldUpdateTrackingField] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    tracking_field1: Optional[TrackingfieldUpdateTrackingField] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class TrackingfieldUpdateSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TrackingfieldUpdateRequest:
    path_params: TrackingfieldUpdatePathParams = dataclasses.field()
    request: TrackingfieldUpdateRequests = dataclasses.field()
    security: TrackingfieldUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TrackingfieldUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
