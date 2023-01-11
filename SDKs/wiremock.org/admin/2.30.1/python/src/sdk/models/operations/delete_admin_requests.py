import dataclasses



@dataclasses.dataclass
class DeleteAdminRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
