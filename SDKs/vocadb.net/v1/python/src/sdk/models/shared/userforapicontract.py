import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userknownlanguagecontract as shared_userknownlanguagecontract
from ..shared import entrythumbforapicontract as shared_entrythumbforapicontract
from ..shared import oldusernamecontract as shared_oldusernamecontract

class UserForAPIContractGroupIDEnum(str, Enum):
    NOTHING = "Nothing"
    LIMITED = "Limited"
    REGULAR = "Regular"
    TRUSTED = "Trusted"
    MODERATOR = "Moderator"
    ADMIN = "Admin"


@dataclass_json
@dataclasses.dataclass
class UserForAPIContract:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    group_id: Optional[UserForAPIContractGroupIDEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    known_languages: Optional[list[shared_userknownlanguagecontract.UserKnownLanguageContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownLanguages') }})
    main_picture: Optional[shared_entrythumbforapicontract.EntryThumbForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    member_since: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberSince'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    old_usernames: Optional[list[shared_oldusernamecontract.OldUsernameContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldUsernames') }})
    verified_artist: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedArtist') }})
    
