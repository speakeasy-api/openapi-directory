import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPlanUsagePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPlanUsageSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlanUsage200ApplicationJSONPlanBase:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlanUsage200ApplicationJSONPlanLargeMeeting:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlanUsage200ApplicationJSONPlanRecording:
    r"""GetPlanUsage200ApplicationJSONPlanRecording
    Recording Plan
    """
    
    free_storage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('free_storage') }})
    free_storage_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('free_storage_usage') }})
    plan_storage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_storage') }})
    plan_storage_exceed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_storage_exceed') }})
    plan_storage_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_storage_usage') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlanUsage200ApplicationJSONPlanUnited:
    r"""GetPlanUsage200ApplicationJSONPlanUnited
    [Zoom United](https://zoom.us/pricing/zoom-bundles) plan.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlanUsage200ApplicationJSONPlanWebinar:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlanUsage200ApplicationJSONPlanZoomRooms:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

@dataclass_json
@dataclasses.dataclass
class GetPlanUsage200ApplicationJSON:
    plan_base: Optional[list[GetPlanUsage200ApplicationJSONPlanBase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_large_meeting: Optional[list[GetPlanUsage200ApplicationJSONPlanLargeMeeting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_large_meeting') }})
    plan_recording: Optional[GetPlanUsage200ApplicationJSONPlanRecording] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_recording') }})
    plan_united: Optional[GetPlanUsage200ApplicationJSONPlanUnited] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_united') }})
    plan_webinar: Optional[list[GetPlanUsage200ApplicationJSONPlanWebinar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_webinar') }})
    plan_zoom_rooms: Optional[list[GetPlanUsage200ApplicationJSONPlanZoomRooms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_zoom_rooms') }})
    

@dataclasses.dataclass
class GetPlanUsageRequest:
    path_params: GetPlanUsagePathParams = dataclasses.field()
    security: GetPlanUsageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPlanUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_plan_usage_200_application_json_object: Optional[GetPlanUsage200ApplicationJSON] = dataclasses.field(default=None)
    
