import dataclasses



@dataclasses.dataclass
class SchemeAPIKeyAuth:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
