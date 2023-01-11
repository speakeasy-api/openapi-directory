import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class RecordingStatusUpdateOnePathParams:
    meeting_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meetingId', 'style': 'simple', 'explode': False }})
    recording_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'recordingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RecordingStatusUpdateOneRequests:
    any: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    any1: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class RecordingStatusUpdateOneSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RecordingStatusUpdateOneRequest:
    path_params: RecordingStatusUpdateOnePathParams = dataclasses.field()
    request: RecordingStatusUpdateOneRequests = dataclasses.field()
    security: RecordingStatusUpdateOneSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RecordingStatusUpdateOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
