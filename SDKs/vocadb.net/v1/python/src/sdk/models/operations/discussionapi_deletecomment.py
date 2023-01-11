import dataclasses



@dataclasses.dataclass
class DiscussionAPIDeleteCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DiscussionAPIDeleteCommentRequest:
    path_params: DiscussionAPIDeleteCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DiscussionAPIDeleteCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
