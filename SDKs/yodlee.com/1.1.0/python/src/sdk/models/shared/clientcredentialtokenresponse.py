import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientcredentialtoken as shared_clientcredentialtoken


@dataclass_json
@dataclasses.dataclass
class ClientCredentialTokenResponse:
    token: Optional[shared_clientcredentialtoken.ClientCredentialToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
