import dataclasses



@dataclasses.dataclass
class SchemeBasicAuth:
    password: str = dataclasses.field(metadata={'security': { 'field_name': 'password' }})
    username: str = dataclasses.field(metadata={'security': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class SchemeOAuth2:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
