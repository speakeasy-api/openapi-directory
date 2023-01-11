import dataclasses



@dataclasses.dataclass
class UserLogoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
