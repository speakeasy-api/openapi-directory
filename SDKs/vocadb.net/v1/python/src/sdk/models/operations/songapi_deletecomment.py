import dataclasses



@dataclasses.dataclass
class SongAPIDeleteCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SongAPIDeleteCommentRequest:
    path_params: SongAPIDeleteCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SongAPIDeleteCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
