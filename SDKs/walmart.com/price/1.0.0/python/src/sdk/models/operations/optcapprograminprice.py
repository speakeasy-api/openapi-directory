import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class OptCapProgramInPriceHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = dataclasses.field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OptCapProgramInPriceRequestBody:
    subsidy_enrolled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyEnrolled') }})
    subsidy_preference: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyPreference') }})
    

@dataclass_json
@dataclasses.dataclass
class OptCapProgramInPrice200ApplicationJSONStatusInfo:
    subsidy_enrolled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyEnrolled') }})
    subsidy_preference: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsidyPreference') }})
    

@dataclass_json
@dataclasses.dataclass
class OptCapProgramInPrice200ApplicationJSON:
    mart_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('martId') }})
    status_info: Optional[OptCapProgramInPrice200ApplicationJSONStatusInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusInfo') }})
    

@dataclasses.dataclass
class OptCapProgramInPriceRequest:
    headers: OptCapProgramInPriceHeaders = dataclasses.field()
    request: OptCapProgramInPriceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OptCapProgramInPriceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    opt_cap_program_in_price_200_application_json_object: Optional[OptCapProgramInPrice200ApplicationJSON] = dataclasses.field(default=None)
    
