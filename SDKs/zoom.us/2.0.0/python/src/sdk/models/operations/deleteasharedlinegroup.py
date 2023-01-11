import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteASharedLineGroupPathParams:
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteASharedLineGroupRequest:
    path_params: DeleteASharedLineGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteASharedLineGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_a_shared_line_group_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
