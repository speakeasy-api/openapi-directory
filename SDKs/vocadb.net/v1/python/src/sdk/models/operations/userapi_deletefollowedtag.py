import dataclasses



@dataclasses.dataclass
class UserAPIDeleteFollowedTagPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIDeleteFollowedTagRequest:
    path_params: UserAPIDeleteFollowedTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIDeleteFollowedTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
