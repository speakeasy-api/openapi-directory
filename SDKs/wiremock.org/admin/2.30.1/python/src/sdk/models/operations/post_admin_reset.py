import dataclasses



@dataclasses.dataclass
class PostAdminResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
