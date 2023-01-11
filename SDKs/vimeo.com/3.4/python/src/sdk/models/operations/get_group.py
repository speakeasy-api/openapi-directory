import dataclasses
from typing import Optional
from ..shared import group as shared_group


@dataclasses.dataclass
class GetGroupPathParams:
    group_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupRequest:
    path_params: GetGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    
