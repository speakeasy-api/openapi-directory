import dataclasses
from typing import Optional
from enum import Enum
from ..shared import cobrandnotificationresponse as shared_cobrandnotificationresponse

class GetSubscribedEventsEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclasses.dataclass
class GetSubscribedEventsQueryParams:
    event_name: Optional[GetSubscribedEventsEventNameEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubscribedEventsRequest:
    query_params: GetSubscribedEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscribedEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cobrand_notification_response: Optional[shared_cobrandnotificationresponse.CobrandNotificationResponse] = dataclasses.field(default=None)
    
