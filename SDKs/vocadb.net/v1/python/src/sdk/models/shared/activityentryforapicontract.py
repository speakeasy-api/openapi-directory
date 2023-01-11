import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import archivedobjectversionforapicontract as shared_archivedobjectversionforapicontract
from ..shared import userforapicontract as shared_userforapicontract
from ..shared import entryforapicontract as shared_entryforapicontract

class ActivityEntryForAPIContractEditEventEnum(str, Enum):
    CREATED = "Created"
    UPDATED = "Updated"
    DELETED = "Deleted"
    RESTORED = "Restored"


@dataclass_json
@dataclasses.dataclass
class ActivityEntryForAPIContract:
    archived_version: Optional[shared_archivedobjectversionforapicontract.ArchivedObjectVersionForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archivedVersion') }})
    author: Optional[shared_userforapicontract.UserForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    edit_event: Optional[ActivityEntryForAPIContractEditEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editEvent') }})
    entry: Optional[shared_entryforapicontract.EntryForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry') }})
    
