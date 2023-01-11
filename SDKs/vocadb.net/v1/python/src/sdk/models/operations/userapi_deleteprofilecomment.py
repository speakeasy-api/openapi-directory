import dataclasses



@dataclasses.dataclass
class UserAPIDeleteProfileCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIDeleteProfileCommentRequest:
    path_params: UserAPIDeleteProfileCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIDeleteProfileCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
