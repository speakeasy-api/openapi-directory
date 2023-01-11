import dataclasses



@dataclasses.dataclass
class PostAdminMappingsSaveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
