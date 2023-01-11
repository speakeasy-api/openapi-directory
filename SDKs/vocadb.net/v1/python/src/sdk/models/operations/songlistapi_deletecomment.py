import dataclasses



@dataclasses.dataclass
class SongListAPIDeleteCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SongListAPIDeleteCommentRequest:
    path_params: SongListAPIDeleteCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SongListAPIDeleteCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
