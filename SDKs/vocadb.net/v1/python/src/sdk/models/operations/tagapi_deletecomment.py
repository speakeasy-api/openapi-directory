import dataclasses



@dataclasses.dataclass
class TagAPIDeleteCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TagAPIDeleteCommentRequest:
    path_params: TagAPIDeleteCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TagAPIDeleteCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
