import dataclasses



@dataclasses.dataclass
class SchemeAzureAuth:
    authorization: str = dataclasses.field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclasses.dataclass
class Security:
    azure_auth: SchemeAzureAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
