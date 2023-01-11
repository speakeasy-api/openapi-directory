import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountPlansPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    
class AccountPlans200ApplicationJSONPlanAudioStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPlanAudio:
    r"""AccountPlans200ApplicationJSONPlanAudio
    Additional audio conferencing <a href=\"https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans\">plan type.</a>
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    ddi_numbers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ddi_numbers') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    premium_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium_countries') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPlanAudioStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tollfree_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tollfree_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlans200ApplicationJSONPlanBaseStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPlanBase:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPlanBaseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPlanLargeMeeting:
    r"""AccountPlans200ApplicationJSONPlanLargeMeeting
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPhonePlanPlanBase:
    r"""AccountPlans200ApplicationJSONPhonePlanPlanBase
    Additional phone base plans.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPhonePlanPlanCalling:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPhonePlanPlanNumber:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPhonePlan:
    r"""AccountPlans200ApplicationJSONPhonePlan
    Phone Plan Object
    """
    
    plan_base: Optional[AccountPlans200ApplicationJSONPhonePlanPlanBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_calling: Optional[list[AccountPlans200ApplicationJSONPhonePlanPlanCalling]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_calling') }})
    plan_number: Optional[list[AccountPlans200ApplicationJSONPhonePlanPlanNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_number') }})
    
class AccountPlans200ApplicationJSONPlanRecordingStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"

class AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPlanRoomConnector:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlans200ApplicationJSONPlanWebinarStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPlanWebinar:
    r"""AccountPlans200ApplicationJSONPlanWebinar
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPlanWebinarStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum(str, Enum):
    ACTIVE = "active"
    CANCEL = "cancel"
    EXPIRED = "expired"


@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSONPlanZoomRooms:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_invoice_date') }})
    service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_effective_date') }})
    status: Optional[AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlans200ApplicationJSON:
    plan_audio: Optional[AccountPlans200ApplicationJSONPlanAudio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_audio') }})
    plan_base: Optional[AccountPlans200ApplicationJSONPlanBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_large_meeting: Optional[list[AccountPlans200ApplicationJSONPlanLargeMeeting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_large_meeting') }})
    plan_phone: Optional[AccountPlans200ApplicationJSONPhonePlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_phone') }})
    plan_recording: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_recording') }})
    plan_recording_next_invoice_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_recording_next_invoice_date') }})
    plan_recording_service_effective_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_recording_service_effective_date') }})
    plan_recording_status: Optional[AccountPlans200ApplicationJSONPlanRecordingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_recording_status') }})
    plan_room_connector: Optional[AccountPlans200ApplicationJSONPlanRoomConnector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_room_connector') }})
    plan_webinar: Optional[list[AccountPlans200ApplicationJSONPlanWebinar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_webinar') }})
    plan_zoom_rooms: Optional[AccountPlans200ApplicationJSONPlanZoomRooms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_zoom_rooms') }})
    

@dataclasses.dataclass
class AccountPlansRequest:
    path_params: AccountPlansPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccountPlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_plans_200_application_json_object: Optional[AccountPlans200ApplicationJSON] = dataclasses.field(default=None)
    
