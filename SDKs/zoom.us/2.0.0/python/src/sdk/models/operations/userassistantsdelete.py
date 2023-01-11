import dataclasses



@dataclasses.dataclass
class UserAssistantsDeletePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAssistantsDeleteRequest:
    path_params: UserAssistantsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAssistantsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
