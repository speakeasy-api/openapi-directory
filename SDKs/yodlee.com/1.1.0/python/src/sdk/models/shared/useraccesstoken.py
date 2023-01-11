import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesstokens as shared_accesstokens


@dataclass_json
@dataclasses.dataclass
class UserAccessToken:
    access_tokens: Optional[list[shared_accesstokens.AccessTokens]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTokens') }})
    
