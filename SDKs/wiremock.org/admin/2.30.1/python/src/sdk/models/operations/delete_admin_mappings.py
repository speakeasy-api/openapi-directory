import dataclasses



@dataclasses.dataclass
class DeleteAdminMappingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
