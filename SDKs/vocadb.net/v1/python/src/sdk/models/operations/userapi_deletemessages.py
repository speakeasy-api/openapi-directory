import dataclasses



@dataclasses.dataclass
class UserAPIDeleteMessagesPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UserAPIDeleteMessagesQueryParams:
    message_id: list[int] = dataclasses.field(metadata={'query_param': { 'field_name': 'messageId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UserAPIDeleteMessagesRequest:
    path_params: UserAPIDeleteMessagesPathParams = dataclasses.field()
    query_params: UserAPIDeleteMessagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserAPIDeleteMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
