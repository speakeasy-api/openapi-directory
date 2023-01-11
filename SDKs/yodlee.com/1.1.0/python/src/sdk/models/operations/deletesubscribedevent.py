import dataclasses
from typing import Optional
from enum import Enum
from ..shared import yodleeerror as shared_yodleeerror

class DeleteSubscribedEventEventNameEnum(str, Enum):
    REFRESH = "REFRESH"
    DATA_UPDATES = "DATA_UPDATES"
    AUTO_REFRESH_UPDATES = "AUTO_REFRESH_UPDATES"


@dataclasses.dataclass
class DeleteSubscribedEventPathParams:
    event_name: DeleteSubscribedEventEventNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'eventName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSubscribedEventRequest:
    path_params: DeleteSubscribedEventPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSubscribedEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
