import dataclasses



@dataclasses.dataclass
class SchemeDefault:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
