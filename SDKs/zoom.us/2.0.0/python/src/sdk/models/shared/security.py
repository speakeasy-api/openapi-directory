import dataclasses



@dataclasses.dataclass
class SchemeOAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    o_auth: SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SchemeBearer:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeClientCredentials:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    
