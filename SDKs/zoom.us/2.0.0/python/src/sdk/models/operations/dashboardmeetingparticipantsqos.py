"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class DashboardMeetingParticipantsQOSSecurity:
    
    o_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    
class DashboardMeetingParticipantsQOSTypeEnum(str, Enum):
    r"""The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings."""
    PAST = 'past'
    PAST_ONE = 'pastOne'
    LIVE = 'live'


@dataclasses.dataclass
class DashboardMeetingParticipantsQOSRequest:
    
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    r"""The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
    
    If a UUID starts with \"/\" or contains \"//\" (example: \"/ajXp112QmuoKj4854875==\\"), you must **double encode** the UUID before making an API request.
    """  
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next_page_token', 'style': 'form', 'explode': True }})
    r"""The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    r"""The number of items returned per page."""  
    type: Optional[DashboardMeetingParticipantsQOSTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    r"""The meeting types: <br>`past` - Past meetings.<br>`live` - Live Meetings."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceFromCrc:
    r"""QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceToCrc:
    r"""QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject:
    r"""Quality of Service object."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    frame_rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('frame_rate'), 'exclude': lambda f: f is None }})
    r"""The rate at which your video camera can produce unique images, or frames. Zoom supports a frame rate of up to 30fps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""Max loss: the max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resolution'), 'exclude': lambda f: f is None }})
    r"""The number of pixels in each dimension that can be displayed by your video camera."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceFromCrc:
    r"""QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceToCrc:
    r"""QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1:
    r"""Quality of Service object."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""Max loss: the max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSCPUUsage:
    
    system_max_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('system_max_cpu_usage'), 'exclude': lambda f: f is None }})
    r"""System Maximum CPU Usage"""  
    zoom_avg_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('zoom_avg_cpu_usage'), 'exclude': lambda f: f is None }})
    r"""Zoom Average CPU Usage"""  
    zoom_max_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('zoom_max_cpu_usage'), 'exclude': lambda f: f is None }})
    r"""Zoom Maximum CPU Usage"""  
    zoom_min_cpu_usage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('zoom_min_cpu_usage'), 'exclude': lambda f: f is None }})
    r"""Zoom Minimum CPU Usage"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceFromCrc:
    r"""QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceToCrc:
    r"""QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector."""
    
    avg_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avg_loss'), 'exclude': lambda f: f is None }})
    r"""The average amount of packet loss, i.e., the percentage of packets that fail to arrive at their destination."""  
    bitrate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bitrate'), 'exclude': lambda f: f is None }})
    r"""The number of bits per second that can be transmitted along a digital network. The value of this field is expressed in kbps."""  
    jitter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jitter'), 'exclude': lambda f: f is None }})
    r"""The variation in the delay of received packets. The value of this field is expressed in milliseconds."""  
    latency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latency'), 'exclude': lambda f: f is None }})
    r"""The amount of time it takes for a packet to travel from one point to another. The value of this field is expressed in milliseconds."""  
    max_loss: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('max_loss'), 'exclude': lambda f: f is None }})
    r"""The max amount of packet loss, that is the max percentage of packets that fail to arrive at their destination."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOS:
    
    as_device_from_crc: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceFromCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('as_device_from_crc'), 'exclude': lambda f: f is None }})
    r"""QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector."""  
    as_device_to_crc: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAsDeviceToCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('as_device_to_crc'), 'exclude': lambda f: f is None }})
    r"""QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector."""  
    as_input: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('as_input'), 'exclude': lambda f: f is None }})
    r"""Quality of service object."""  
    as_output: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('as_output'), 'exclude': lambda f: f is None }})
    r"""Quality of service object."""  
    audio_device_from_crc: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceFromCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audio_device_from_crc'), 'exclude': lambda f: f is None }})
    r"""QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector."""  
    audio_device_to_crc: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSAudioDeviceToCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audio_device_to_crc'), 'exclude': lambda f: f is None }})
    r"""QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector."""  
    audio_input: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audio_input'), 'exclude': lambda f: f is None }})
    r"""Quality of Service object."""  
    audio_output: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('audio_output'), 'exclude': lambda f: f is None }})
    r"""Quality of Service object."""  
    cpu_usage: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSCPUUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cpu_usage'), 'exclude': lambda f: f is None }})  
    date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""Date-time of QOS"""  
    video_device_from_crc: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceFromCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('video_device_from_crc'), 'exclude': lambda f: f is None }})
    r"""QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting."""  
    video_device_to_crc: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSVideoDeviceToCrc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('video_device_to_crc'), 'exclude': lambda f: f is None }})
    r"""QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector."""  
    video_input: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('video_input'), 'exclude': lambda f: f is None }})
    r"""Quality of service object."""  
    video_output: Optional[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOSQOSObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('video_output'), 'exclude': lambda f: f is None }})
    r"""Quality of service object."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOS:
    r"""Participant QOS."""
    
    device: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('device'), 'exclude': lambda f: f is None }})
    r"""The type of device using which the participant joined the meeting."""  
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('domain'), 'exclude': lambda f: f is None }})
    r"""Participant's PC domain."""  
    harddisk_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('harddisk_id'), 'exclude': lambda f: f is None }})
    r"""Participant's hard disk ID."""  
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip_address'), 'exclude': lambda f: f is None }})
    r"""Participant's IP address."""  
    join_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('join_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The time at which participant joined the meeting."""  
    leave_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('leave_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The time at which participant left the meeting."""  
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('location'), 'exclude': lambda f: f is None }})
    r"""Participant's location."""  
    mac_addr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mac_addr'), 'exclude': lambda f: f is None }})
    r"""Participant's MAC address."""  
    pc_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pc_name'), 'exclude': lambda f: f is None }})
    r"""Participant's PC name."""  
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('user_id'), 'exclude': lambda f: f is None }})
    r"""Participant ID."""  
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('user_name'), 'exclude': lambda f: f is None }})
    r"""Participant display name."""  
    user_qos: Optional[list[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOSUserQOS]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('user_qos'), 'exclude': lambda f: f is None }})
    r"""Quality of service provided to the user."""  
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('version'), 'exclude': lambda f: f is None }})
    r"""Participant's Zoom Client version."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DashboardMeetingParticipantsQOSParticipantQOSList:
    r"""Pagination object."""
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('next_page_token'), 'exclude': lambda f: f is None }})
    r"""The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceed the current page size. The expiration period for this token is 15 minutes."""  
    page_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page_count'), 'exclude': lambda f: f is None }})
    r"""The number of pages returned for the request made."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page_size'), 'exclude': lambda f: f is None }})
    r"""The number of items per page."""  
    participants: Optional[list[DashboardMeetingParticipantsQOSParticipantQOSListParticipantQOS]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('participants'), 'exclude': lambda f: f is None }})
    r"""Array of user objects."""  
    total_records: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_records'), 'exclude': lambda f: f is None }})
    r"""The number of all records available across pages."""  
    

@dataclasses.dataclass
class DashboardMeetingParticipantsQOSResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    participant_qos_list: Optional[DashboardMeetingParticipantsQOSParticipantQOSList] = dataclasses.field(default=None)
    r"""**HTTP Status Code:** `200`<br>
    Meeting participants returned.<br>
    Only available for paid accounts that have enabled the dashboard feature.
    """  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    