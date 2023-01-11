import dataclasses
from typing import Optional
from ..shared import userresponse as shared_userresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class SamlLoginQueryParams:
    issuer: str = dataclasses.field(metadata={'query_param': { 'field_name': 'issuer', 'style': 'form', 'explode': True }})
    saml_response: str = dataclasses.field(metadata={'query_param': { 'field_name': 'samlResponse', 'style': 'form', 'explode': True }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SamlLoginRequest:
    query_params: SamlLoginQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SamlLoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_response: Optional[shared_userresponse.UserResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
