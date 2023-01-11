import dataclasses



@dataclasses.dataclass
class UnregisterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
