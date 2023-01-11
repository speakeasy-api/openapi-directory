import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AccountPlanCreatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONContact:
    r"""AccountPlanCreateApplicationJSONContact
    Billing Contact object.
    """
    
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    phone_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    apt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPlanAudio:
    r"""AccountPlanCreateApplicationJSONPlanAudio
    Additional audio conferencing <a href=\"https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans\">plan type</a>.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    ddi_numbers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ddi_numbers') }})
    premium_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium_countries') }})
    tollfree_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tollfree_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPlanBase:
    r"""AccountPlanCreateApplicationJSONPlanBase
    Account base plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPlanLargeMeeting:
    r"""AccountPlanCreateApplicationJSONPlanLargeMeeting
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPhonePlanPlanBase:
    r"""AccountPlanCreateApplicationJSONPhonePlanPlanBase
    Additional phone base plans.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPhonePlanPlanCalling:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPhonePlanPlanNumber:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPhonePlan:
    r"""AccountPlanCreateApplicationJSONPhonePlan
    Phone Plan Object
    """
    
    plan_base: Optional[AccountPlanCreateApplicationJSONPhonePlanPlanBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_calling: Optional[list[AccountPlanCreateApplicationJSONPhonePlanPlanCalling]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_calling') }})
    plan_number: Optional[list[AccountPlanCreateApplicationJSONPhonePlanPlanNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_number') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPlanRoomConnector:
    r"""AccountPlanCreateApplicationJSONPlanRoomConnector
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPlanWebinar:
    r"""AccountPlanCreateApplicationJSONPlanWebinar
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSONPlanZoomRooms:
    r"""AccountPlanCreateApplicationJSONPlanZoomRooms
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateApplicationJSON:
    r"""AccountPlanCreateApplicationJSON
    Account Plans object.
    """
    
    plan_base: AccountPlanCreateApplicationJSONPlanBase = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    contact: Optional[AccountPlanCreateApplicationJSONContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    plan_audio: Optional[AccountPlanCreateApplicationJSONPlanAudio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_audio') }})
    plan_large_meeting: Optional[list[AccountPlanCreateApplicationJSONPlanLargeMeeting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_large_meeting') }})
    plan_phone: Optional[AccountPlanCreateApplicationJSONPhonePlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_phone') }})
    plan_recording: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_recording') }})
    plan_room_connector: Optional[AccountPlanCreateApplicationJSONPlanRoomConnector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_room_connector') }})
    plan_webinar: Optional[list[AccountPlanCreateApplicationJSONPlanWebinar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_webinar') }})
    plan_zoom_rooms: Optional[AccountPlanCreateApplicationJSONPlanZoomRooms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_zoom_rooms') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataContact:
    r"""AccountPlanCreateMultipartFormDataContact
    Billing Contact object.
    """
    
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    phone_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    apt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPlanAudio:
    r"""AccountPlanCreateMultipartFormDataPlanAudio
    Additional audio conferencing <a href=\"https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans\">plan type</a>.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    ddi_numbers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ddi_numbers') }})
    premium_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium_countries') }})
    tollfree_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tollfree_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPlanBase:
    r"""AccountPlanCreateMultipartFormDataPlanBase
    Account base plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPlanLargeMeeting:
    r"""AccountPlanCreateMultipartFormDataPlanLargeMeeting
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPhonePlanPlanBase:
    r"""AccountPlanCreateMultipartFormDataPhonePlanPlanBase
    Additional phone base plans.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPhonePlanPlanCalling:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPhonePlanPlanNumber:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPhonePlan:
    r"""AccountPlanCreateMultipartFormDataPhonePlan
    Phone Plan Object
    """
    
    plan_base: Optional[AccountPlanCreateMultipartFormDataPhonePlanPlanBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_calling: Optional[list[AccountPlanCreateMultipartFormDataPhonePlanPlanCalling]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_calling') }})
    plan_number: Optional[list[AccountPlanCreateMultipartFormDataPhonePlanPlanNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_number') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPlanRoomConnector:
    r"""AccountPlanCreateMultipartFormDataPlanRoomConnector
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPlanWebinar:
    r"""AccountPlanCreateMultipartFormDataPlanWebinar
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreateMultipartFormDataPlanZoomRooms:
    r"""AccountPlanCreateMultipartFormDataPlanZoomRooms
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AccountPlanCreateMultipartFormData1:
    r"""AccountPlanCreateMultipartFormData1
    Account Plans object.
    """
    
    plan_base: AccountPlanCreateMultipartFormDataPlanBase = dataclasses.field(metadata={'multipart_form': { 'field_name': 'plan_base', 'json': True }})
    contact: Optional[AccountPlanCreateMultipartFormDataContact] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'contact', 'json': True }})
    plan_audio: Optional[AccountPlanCreateMultipartFormDataPlanAudio] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'plan_audio', 'json': True }})
    plan_large_meeting: Optional[list[AccountPlanCreateMultipartFormDataPlanLargeMeeting]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'plan_large_meeting', 'json': True }})
    plan_phone: Optional[AccountPlanCreateMultipartFormDataPhonePlan] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'plan_phone', 'json': True }})
    plan_recording: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'plan_recording' }})
    plan_room_connector: Optional[AccountPlanCreateMultipartFormDataPlanRoomConnector] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'plan_room_connector', 'json': True }})
    plan_webinar: Optional[list[AccountPlanCreateMultipartFormDataPlanWebinar]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'plan_webinar', 'json': True }})
    plan_zoom_rooms: Optional[AccountPlanCreateMultipartFormDataPlanZoomRooms] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'plan_zoom_rooms', 'json': True }})
    

@dataclasses.dataclass
class AccountPlanCreateRequests:
    object: Optional[AccountPlanCreateApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AccountPlanCreateMultipartFormData1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPlanAudio:
    r"""AccountPlanCreate201ApplicationJSONPlanAudio
    Additional audio conferencing <a href=\"https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans\">plan type</a>.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    ddi_numbers: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ddi_numbers') }})
    premium_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium_countries') }})
    tollfree_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tollfree_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPlanBase:
    r"""AccountPlanCreate201ApplicationJSONPlanBase
    Account base plan object.
    """
    
    hosts: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPlanLargeMeeting:
    r"""AccountPlanCreate201ApplicationJSONPlanLargeMeeting
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPhonePlanPlanBase:
    r"""AccountPlanCreate201ApplicationJSONPhonePlanPlanBase
    Additional phone base plans.
    """
    
    callout_countries: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callout_countries') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPhonePlanPlanCalling:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPhonePlanPlanNumber:
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPhonePlan:
    r"""AccountPlanCreate201ApplicationJSONPhonePlan
    Phone Plan Object
    """
    
    plan_base: Optional[AccountPlanCreate201ApplicationJSONPhonePlanPlanBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_calling: Optional[list[AccountPlanCreate201ApplicationJSONPhonePlanPlanCalling]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_calling') }})
    plan_number: Optional[list[AccountPlanCreate201ApplicationJSONPhonePlanPlanNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_number') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPlanRoomConnector:
    r"""AccountPlanCreate201ApplicationJSONPlanRoomConnector
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPlanWebinar:
    r"""AccountPlanCreate201ApplicationJSONPlanWebinar
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSONPlanZoomRooms:
    r"""AccountPlanCreate201ApplicationJSONPlanZoomRooms
    Account plan object.
    """
    
    hosts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountPlanCreate201ApplicationJSON:
    r"""AccountPlanCreate201ApplicationJSON
    Account Plans object.
    """
    
    plan_base: AccountPlanCreate201ApplicationJSONPlanBase = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_base') }})
    plan_audio: Optional[AccountPlanCreate201ApplicationJSONPlanAudio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_audio') }})
    plan_large_meeting: Optional[list[AccountPlanCreate201ApplicationJSONPlanLargeMeeting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_large_meeting') }})
    plan_phone: Optional[AccountPlanCreate201ApplicationJSONPhonePlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_phone') }})
    plan_recording: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_recording') }})
    plan_room_connector: Optional[AccountPlanCreate201ApplicationJSONPlanRoomConnector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_room_connector') }})
    plan_webinar: Optional[list[AccountPlanCreate201ApplicationJSONPlanWebinar]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_webinar') }})
    plan_zoom_rooms: Optional[AccountPlanCreate201ApplicationJSONPlanZoomRooms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan_zoom_rooms') }})
    

@dataclasses.dataclass
class AccountPlanCreateRequest:
    path_params: AccountPlanCreatePathParams = dataclasses.field()
    request: AccountPlanCreateRequests = dataclasses.field()
    

@dataclasses.dataclass
class AccountPlanCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_plan_create_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    account_plan_create_201_application_json_object: Optional[AccountPlanCreate201ApplicationJSON] = dataclasses.field(default=None)
    
