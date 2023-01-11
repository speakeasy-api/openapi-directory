import dataclasses



@dataclasses.dataclass
class PostXmltojsonRequest:
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclasses.dataclass
class PostXmltojsonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
