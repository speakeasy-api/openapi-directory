import dataclasses



@dataclasses.dataclass
class PostAdminShutdownResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
