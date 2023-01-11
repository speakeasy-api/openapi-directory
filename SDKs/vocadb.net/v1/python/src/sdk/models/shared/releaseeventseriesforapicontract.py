import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import releaseeventforapicontract as shared_releaseeventforapicontract
from ..shared import entrythumbforapicontract as shared_entrythumbforapicontract
from ..shared import localizedstringcontract as shared_localizedstringcontract
from ..shared import weblinkforapicontract as shared_weblinkforapicontract

class ReleaseEventSeriesForAPIContractCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventSeriesForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclasses.dataclass
class ReleaseEventSeriesForAPIContract:
    additional_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    category: Optional[ReleaseEventSeriesForAPIContractCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events: Optional[list[shared_releaseeventforapicontract.ReleaseEventForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_picture: Optional[shared_entrythumbforapicontract.EntryThumbForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[list[shared_localizedstringcontract.LocalizedStringContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    status: Optional[ReleaseEventSeriesForAPIContractStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[list[shared_weblinkforapicontract.WebLinkForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
