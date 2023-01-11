import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteCallLogPathParams:
    call_log_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'callLogId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCallLogRequest:
    path_params: DeleteCallLogPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCallLogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_call_log_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
