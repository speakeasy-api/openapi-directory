import dataclasses
from typing import Optional
from ..shared import clientcredentialtokenresponse as shared_clientcredentialtokenresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GenerateAccessTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_credential_token_response: Optional[shared_clientcredentialtokenresponse.ClientCredentialTokenResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
