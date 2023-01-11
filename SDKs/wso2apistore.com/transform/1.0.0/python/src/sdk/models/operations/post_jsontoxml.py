import dataclasses



@dataclasses.dataclass
class PostJsontoxmlRequest:
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostJsontoxmlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
