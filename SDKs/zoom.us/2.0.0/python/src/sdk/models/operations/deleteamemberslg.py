import dataclasses



@dataclasses.dataclass
class DeleteAMemberSlgPathParams:
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'memberId', 'style': 'simple', 'explode': False }})
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAMemberSlgRequest:
    path_params: DeleteAMemberSlgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAMemberSlgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
