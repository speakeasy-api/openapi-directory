import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import albumforapicontract as shared_albumforapicontract
from ..shared import userforapicontract as shared_userforapicontract

class AlbumForUserForAPIContractMediaTypeEnum(str, Enum):
    PHYSICAL_DISC = "PhysicalDisc"
    DIGITAL_DOWNLOAD = "DigitalDownload"
    OTHER = "Other"

class AlbumForUserForAPIContractPurchaseStatusEnum(str, Enum):
    NOTHING = "Nothing"
    WISHLISTED = "Wishlisted"
    ORDERED = "Ordered"
    OWNED = "Owned"


@dataclass_json
@dataclasses.dataclass
class AlbumForUserForAPIContract:
    album: Optional[shared_albumforapicontract.AlbumForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album') }})
    media_type: Optional[AlbumForUserForAPIContractMediaTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    purchase_status: Optional[AlbumForUserForAPIContractPurchaseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseStatus') }})
    rating: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    user: Optional[shared_userforapicontract.UserForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
