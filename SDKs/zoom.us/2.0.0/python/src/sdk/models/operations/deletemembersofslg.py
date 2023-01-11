import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteMembersOfSlgPathParams:
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMembersOfSlgRequest:
    path_params: DeleteMembersOfSlgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMembersOfSlgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_members_of_slg_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
