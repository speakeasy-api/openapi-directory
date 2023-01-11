import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetScrabbleScorePathParams:
    word: str = dataclasses.field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScrabbleScoreRequest:
    path_params: GetScrabbleScorePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetScrabbleScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
