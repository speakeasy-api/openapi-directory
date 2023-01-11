import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DashboardMeetingParticipantQosPathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    participant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'participantId', 'style': 'simple', 'explode': False }})
    
class DashboardMeetingParticipantQosTypeEnum(str, Enum):
    PAST = "past"
    PAST_ONE = "pastOne"
    LIVE = "live"


@dataclasses.dataclass
class DashboardMeetingParticipantQosQueryParams:
    type: Optional[DashboardMeetingParticipantQosTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DashboardMeetingParticipantQosSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc
    QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc
    QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosQosObject:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosQosObject
    Quality of Service object.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    frame_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frame_rate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc
    QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc
    QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosQosObject1:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosQosObject1
    Quality of Service object.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosCPUUsage:
    system_max_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system_max_cpu_usage') }})
    zoom_avg_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoom_avg_cpu_usage') }})
    zoom_max_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoom_max_cpu_usage') }})
    zoom_min_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoom_min_cpu_usage') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc
    QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc:
    r"""DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc
    QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
    """
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avg_loss') }})
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrate') }})
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jitter') }})
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_loss') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQosUserQos:
    as_device_from_crc: Optional[DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('as_device_from_crc') }})
    as_device_to_crc: Optional[DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('as_device_to_crc') }})
    as_input: Optional[DashboardMeetingParticipantQosParticipantQosUserQosQosObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('as_input') }})
    as_output: Optional[DashboardMeetingParticipantQosParticipantQosUserQosQosObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('as_output') }})
    audio_device_from_crc: Optional[DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_device_from_crc') }})
    audio_device_to_crc: Optional[DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_device_to_crc') }})
    audio_input: Optional[DashboardMeetingParticipantQosParticipantQosUserQosQosObject1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_input') }})
    audio_output: Optional[DashboardMeetingParticipantQosParticipantQosUserQosQosObject1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_output') }})
    cpu_usage: Optional[DashboardMeetingParticipantQosParticipantQosUserQosCPUUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu_usage') }})
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    video_device_from_crc: Optional[DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_device_from_crc') }})
    video_device_to_crc: Optional[DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_device_to_crc') }})
    video_input: Optional[DashboardMeetingParticipantQosParticipantQosUserQosQosObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_input') }})
    video_output: Optional[DashboardMeetingParticipantQosParticipantQosUserQosQosObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_output') }})
    

@dataclass_json
@dataclasses.dataclass
class DashboardMeetingParticipantQosParticipantQos:
    r"""DashboardMeetingParticipantQosParticipantQos
    Participant QOS.
    """
    
    device: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    harddisk_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('harddisk_id') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    join_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('join_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    leave_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leave_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mac_addr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_addr') }})
    pc_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pc_name') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    user_qos: Optional[list[DashboardMeetingParticipantQosParticipantQosUserQos]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_qos') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclasses.dataclass
class DashboardMeetingParticipantQosRequest:
    path_params: DashboardMeetingParticipantQosPathParams = dataclasses.field()
    query_params: DashboardMeetingParticipantQosQueryParams = dataclasses.field()
    security: DashboardMeetingParticipantQosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DashboardMeetingParticipantQosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    participant_qos: Optional[DashboardMeetingParticipantQosParticipantQos] = dataclasses.field(default=None)
    
