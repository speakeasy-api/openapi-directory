import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import issuercontactinfo as shared_issuercontactinfo
from ..shared import smarttapmerchantdata as shared_smarttapmerchantdata


@dataclass_json
@dataclasses.dataclass
class Issuer:
    contact_info: Optional[shared_issuercontactinfo.IssuerContactInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfo') }})
    homepage_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepageUrl') }})
    issuer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    smart_tap_merchant_data: Optional[shared_smarttapmerchantdata.SmartTapMerchantData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartTapMerchantData') }})
    
