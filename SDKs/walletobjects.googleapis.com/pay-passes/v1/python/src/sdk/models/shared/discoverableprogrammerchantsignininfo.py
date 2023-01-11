import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uri as shared_uri


@dataclass_json
@dataclasses.dataclass
class DiscoverableProgramMerchantSigninInfo:
    r"""DiscoverableProgramMerchantSigninInfo
    Information about the merchant hosted signin flow for a program.
    """
    
    signin_website: Optional[shared_uri.URI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signinWebsite') }})
    
