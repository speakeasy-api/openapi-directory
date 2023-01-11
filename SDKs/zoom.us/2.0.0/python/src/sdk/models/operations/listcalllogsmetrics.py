import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListCallLogsMetricsQueryParams:
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    quality_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quality_type', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListCallLogsMetrics200ApplicationJSONCallLogsCallee:
    r"""ListCallLogsMetrics200ApplicationJSONCallLogsCallee
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
class ListCallLogsMetrics200ApplicationJSONCallLogsCaller:
    r"""ListCallLogsMetrics200ApplicationJSONCallLogsCaller
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
class ListCallLogsMetrics200ApplicationJSONCallLogs:
    call_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_id') }})
    callee: Optional[ListCallLogsMetrics200ApplicationJSONCallLogsCallee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee') }})
    caller: Optional[ListCallLogsMetrics200ApplicationJSONCallLogsCaller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller') }})
    date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time') }})
    direction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    mos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mos') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCallLogsMetrics200ApplicationJSON:
    call_logs: Optional[list[ListCallLogsMetrics200ApplicationJSONCallLogs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_logs') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_token') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclasses.dataclass
class ListCallLogsMetricsRequest:
    query_params: ListCallLogsMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListCallLogsMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    list_call_logs_metrics_200_application_json_object: Optional[ListCallLogsMetrics200ApplicationJSON] = dataclasses.field(default=None)
    
