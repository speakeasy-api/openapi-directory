import dataclasses
from typing import Optional
from enum import Enum
from ..shared import createconfigsnotificationeventrequest as shared_createconfigsnotificationeventrequest
from ..shared import yodleeerror as shared_yodleeerror

class CreateSubscriptionNotificationEventEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclasses.dataclass
class CreateSubscriptionNotificationEventPathParams:
    event_name: CreateSubscriptionNotificationEventEventNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'eventName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSubscriptionNotificationEventRequest:
    path_params: CreateSubscriptionNotificationEventPathParams = dataclasses.field()
    request: shared_createconfigsnotificationeventrequest.CreateConfigsNotificationEventRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSubscriptionNotificationEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
