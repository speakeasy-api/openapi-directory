import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTrackingSourcesPathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTrackingSourcesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSources200ApplicationJSONTrackingSources:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    registration_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_count') }})
    source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_name') }})
    tracking_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_url') }})
    visitor_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitor_count') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackingSources200ApplicationJSON:
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    tracking_sources: Optional[list[GetTrackingSources200ApplicationJSONTrackingSources]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_sources') }})
    

@dataclasses.dataclass
class GetTrackingSourcesRequest:
    path_params: GetTrackingSourcesPathParams = dataclasses.field()
    security: GetTrackingSourcesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackingSourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_tracking_sources_200_application_json_object: Optional[GetTrackingSources200ApplicationJSON] = dataclasses.field(default=None)
    
