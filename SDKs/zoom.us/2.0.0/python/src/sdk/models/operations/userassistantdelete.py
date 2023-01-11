import dataclasses



@dataclasses.dataclass
class UserAssistantDeletePathParams:
    assistant_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assistantId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAssistantDeleteRequest:
    path_params: UserAssistantDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAssistantDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
