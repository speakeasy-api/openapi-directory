import dataclasses
from enum import Enum

class UserTspDeleteTspIDEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclasses.dataclass
class UserTspDeletePathParams:
    tsp_id: UserTspDeleteTspIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'tspId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserTspDeleteRequest:
    path_params: UserTspDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserTspDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
