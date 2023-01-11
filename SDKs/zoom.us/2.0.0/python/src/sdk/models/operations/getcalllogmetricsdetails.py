import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetCallLogMetricsDetailsPathParams:
    call_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'call_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallLogMetricsDetails200ApplicationJSONCallee:
    r"""GetCallLogMetricsDetails200ApplicationJSONCallee
    Callee object contains information of the calee.
    """
    
    codec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    device_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    headset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headset') }})
    isp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isp') }})
    microphone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microphone') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallLogMetricsDetails200ApplicationJSONCaller:
    r"""GetCallLogMetricsDetails200ApplicationJSONCaller
    Caller object contains information of the caller.
    """
    
    codec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    device_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    extension_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    headset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headset') }})
    isp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isp') }})
    microphone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microphone') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallLogMetricsDetails200ApplicationJSON:
    call_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_id') }})
    callee: Optional[GetCallLogMetricsDetails200ApplicationJSONCallee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee') }})
    caller: Optional[GetCallLogMetricsDetails200ApplicationJSONCaller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller') }})
    date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time') }})
    direction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    mos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mos') }})
    

@dataclasses.dataclass
class GetCallLogMetricsDetailsRequest:
    path_params: GetCallLogMetricsDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCallLogMetricsDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_call_log_metrics_details_200_application_json_object: Optional[GetCallLogMetricsDetails200ApplicationJSON] = dataclasses.field(default=None)
    
