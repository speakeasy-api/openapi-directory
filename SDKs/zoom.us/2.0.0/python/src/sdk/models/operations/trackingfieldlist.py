import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class TrackingfieldListSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TrackingfieldListTrackingFieldListTrackingField:
    r"""TrackingfieldListTrackingFieldListTrackingField
    Tracking Field
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    recommended_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended_values') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    visible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visible') }})
    

@dataclass_json
@dataclasses.dataclass
class TrackingfieldListTrackingFieldList:
    r"""TrackingfieldListTrackingFieldList
    Tracking Field List
    """
    
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    tracking_fields: Optional[list[TrackingfieldListTrackingFieldListTrackingField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_fields') }})
    

@dataclasses.dataclass
class TrackingfieldListRequest:
    security: TrackingfieldListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TrackingfieldListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    tracking_field_list: Optional[TrackingfieldListTrackingFieldList] = dataclasses.field(default=None)
    
