import dataclasses
from typing import Optional
from enum import Enum
from ..shared import createcobrandnotificationeventrequest as shared_createcobrandnotificationeventrequest
from ..shared import yodleeerror as shared_yodleeerror

class CreateSubscriptionEventEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclasses.dataclass
class CreateSubscriptionEventPathParams:
    event_name: CreateSubscriptionEventEventNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'eventName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSubscriptionEventRequest:
    path_params: CreateSubscriptionEventPathParams = dataclasses.field()
    request: shared_createcobrandnotificationeventrequest.CreateCobrandNotificationEventRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSubscriptionEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
