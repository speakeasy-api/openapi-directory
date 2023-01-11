import dataclasses



@dataclasses.dataclass
class SchemeAPIPubKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class SchemeAPISecretKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'x-api-key' }})
    

@dataclasses.dataclass
class SchemeWsSecretKey:
    api_key: str = dataclasses.field(metadata={'security': { 'field_name': 'x-token' }})
    
