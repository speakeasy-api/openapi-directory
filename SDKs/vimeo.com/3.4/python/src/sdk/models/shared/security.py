import dataclasses



@dataclasses.dataclass
class SchemeOauth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    oauth2: SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SchemeBearer:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
