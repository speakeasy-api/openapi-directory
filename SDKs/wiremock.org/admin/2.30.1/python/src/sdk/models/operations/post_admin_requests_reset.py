import dataclasses



@dataclasses.dataclass
class PostAdminRequestsResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
