import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optionalclaim as shared_optionalclaim


@dataclass_json
@dataclasses.dataclass
class OptionalClaims:
    r"""OptionalClaims
    Specifying the claims to be included in the token.
    """
    
    access_token: Optional[list[shared_optionalclaim.OptionalClaim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    id_token: Optional[list[shared_optionalclaim.OptionalClaim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    saml_token: Optional[list[shared_optionalclaim.OptionalClaim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlToken') }})
    
