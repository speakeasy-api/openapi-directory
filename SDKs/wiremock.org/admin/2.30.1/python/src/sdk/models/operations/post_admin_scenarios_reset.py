import dataclasses



@dataclasses.dataclass
class PostAdminScenariosResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
