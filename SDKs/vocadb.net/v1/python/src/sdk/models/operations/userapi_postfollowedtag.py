import dataclasses



@dataclasses.dataclass
class UserAPIPostFollowedTagPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIPostFollowedTagRequest:
    path_params: UserAPIPostFollowedTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIPostFollowedTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
