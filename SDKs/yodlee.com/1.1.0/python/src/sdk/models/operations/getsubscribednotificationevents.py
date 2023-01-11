import dataclasses
from typing import Optional
from enum import Enum
from ..shared import configsnotificationresponse as shared_configsnotificationresponse

class GetSubscribedNotificationEventsEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclasses.dataclass
class GetSubscribedNotificationEventsQueryParams:
    event_name: Optional[GetSubscribedNotificationEventsEventNameEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubscribedNotificationEventsRequest:
    query_params: GetSubscribedNotificationEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubscribedNotificationEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    configs_notification_response: Optional[shared_configsnotificationresponse.ConfigsNotificationResponse] = dataclasses.field(default=None)
    
