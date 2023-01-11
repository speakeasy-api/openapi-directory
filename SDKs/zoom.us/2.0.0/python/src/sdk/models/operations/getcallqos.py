import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetCallQoSPathParams:
    call_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCalleeQosReceivingQos:
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    mos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mos') }})
    network_delay: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_delay') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCalleeQosReceiving:
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    qos: Optional[GetCallQoS200ApplicationJSONCalleeQosReceivingQos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qos') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCalleeQosSendingQos:
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    mos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mos') }})
    network_delay: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_delay') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCalleeQosSending:
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    qos: Optional[GetCallQoS200ApplicationJSONCalleeQosSendingQos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qos') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCalleeQos:
    receiving: Optional[list[GetCallQoS200ApplicationJSONCalleeQosReceiving]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiving') }})
    sending: Optional[list[GetCallQoS200ApplicationJSONCalleeQosSending]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sending') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCallerQosReceivingQos:
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    mos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mos') }})
    network_delay: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_delay') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCallerQosReceiving:
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    qos: Optional[GetCallQoS200ApplicationJSONCallerQosReceivingQos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qos') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCallerQosSendingQos:
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    mos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mos') }})
    network_delay: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_delay') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCallerQosSending:
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    qos: Optional[GetCallQoS200ApplicationJSONCallerQosSendingQos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qos') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSONCallerQos:
    r"""GetCallQoS200ApplicationJSONCallerQos
    Quality of Service object that represents the call quality data of the caller.
    """
    
    receiving: Optional[list[GetCallQoS200ApplicationJSONCallerQosReceiving]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiving') }})
    sending: Optional[list[GetCallQoS200ApplicationJSONCallerQosSending]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sending') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCallQoS200ApplicationJSON:
    call_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_id') }})
    callee_qos: Optional[GetCallQoS200ApplicationJSONCalleeQos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callee_qos') }})
    caller_qos: Optional[GetCallQoS200ApplicationJSONCallerQos] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_qos') }})
    

@dataclasses.dataclass
class GetCallQoSRequest:
    path_params: GetCallQoSPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCallQoSResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_call_qo_s_200_application_json_object: Optional[GetCallQoS200ApplicationJSON] = dataclasses.field(default=None)
    
