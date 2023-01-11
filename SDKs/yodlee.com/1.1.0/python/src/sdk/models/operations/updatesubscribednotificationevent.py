import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import updateconfigsnotificationeventrequest as shared_updateconfigsnotificationeventrequest
from ..shared import yodleeerror as shared_yodleeerror

class UpdateSubscribedNotificationEventEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclasses.dataclass
class UpdateSubscribedNotificationEventPathParams:
    event_name: UpdateSubscribedNotificationEventEventNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'eventName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSubscribedNotificationEventRequest:
    path_params: UpdateSubscribedNotificationEventPathParams = dataclasses.field()
    request: shared_updateconfigsnotificationeventrequest.UpdateConfigsNotificationEventRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSubscribedNotificationEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
