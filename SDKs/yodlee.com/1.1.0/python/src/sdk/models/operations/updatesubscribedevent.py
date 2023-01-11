import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import updatecobrandnotificationeventrequest as shared_updatecobrandnotificationeventrequest
from ..shared import yodleeerror as shared_yodleeerror

class UpdateSubscribedEventEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclasses.dataclass
class UpdateSubscribedEventPathParams:
    event_name: UpdateSubscribedEventEventNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'eventName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSubscribedEventRequest:
    path_params: UpdateSubscribedEventPathParams = dataclasses.field()
    request: shared_updatecobrandnotificationeventrequest.UpdateCobrandNotificationEventRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSubscribedEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
