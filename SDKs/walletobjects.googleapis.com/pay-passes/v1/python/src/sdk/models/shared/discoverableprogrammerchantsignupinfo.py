import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uri as shared_uri

class DiscoverableProgramMerchantSignupInfoSignupSharedDatasEnum(str, Enum):
    SHARED_DATA_TYPE_UNSPECIFIED = "SHARED_DATA_TYPE_UNSPECIFIED"
    FIRST_NAME = "FIRST_NAME"
    LAST_NAME = "LAST_NAME"
    STREET_ADDRESS = "STREET_ADDRESS"
    ADDRESS_LINE_1 = "ADDRESS_LINE_1"
    ADDRESS_LINE_2 = "ADDRESS_LINE_2"
    ADDRESS_LINE_3 = "ADDRESS_LINE_3"
    CITY = "CITY"
    STATE = "STATE"
    ZIPCODE = "ZIPCODE"
    COUNTRY = "COUNTRY"
    EMAIL = "EMAIL"
    PHONE = "PHONE"


@dataclass_json
@dataclasses.dataclass
class DiscoverableProgramMerchantSignupInfo:
    r"""DiscoverableProgramMerchantSignupInfo
    Information about the merchant hosted signup flow for a program.
    """
    
    signup_shared_datas: Optional[list[DiscoverableProgramMerchantSignupInfoSignupSharedDatasEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signupSharedDatas') }})
    signup_website: Optional[shared_uri.URI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signupWebsite') }})
    
