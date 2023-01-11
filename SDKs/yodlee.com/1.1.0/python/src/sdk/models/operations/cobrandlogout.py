import dataclasses



@dataclasses.dataclass
class CobrandLogoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
