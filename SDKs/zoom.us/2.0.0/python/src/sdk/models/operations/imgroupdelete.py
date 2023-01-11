import dataclasses



@dataclasses.dataclass
class ImGroupDeletePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImGroupDeleteRequest:
    path_params: ImGroupDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImGroupDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
