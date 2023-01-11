import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerattributes as shared_containerattributes

class AttributeContainerEnum(str, Enum):
    BANK = "bank"
    CREDIT_CARD = "creditCard"
    INVESTMENT = "investment"
    INSURANCE = "insurance"
    LOAN = "loan"
    REWARD = "reward"
    REAL_ESTATE = "realEstate"
    OTHER_ASSETS = "otherAssets"
    OTHER_LIABILITIES = "otherLiabilities"

class AttributeNameEnum(str, Enum):
    BASIC_ACCOUNT_INFO = "BASIC_ACCOUNT_INFO"
    TRANSACTIONS = "TRANSACTIONS"
    STATEMENTS = "STATEMENTS"
    HOLDINGS = "HOLDINGS"
    ACCOUNT_DETAILS = "ACCOUNT_DETAILS"
    TAX = "TAX"
    EBILLS = "EBILLS"
    FULL_ACCT_NUMBER = "FULL_ACCT_NUMBER"
    BANK_TRANSFER_CODE = "BANK_TRANSFER_CODE"
    HOLDER_NAME = "HOLDER_NAME"
    HOLDER_DETAILS = "HOLDER_DETAILS"
    PAYMENT_PROFILE = "PAYMENT_PROFILE"
    PAYMENT_DETAILS = "PAYMENT_DETAILS"
    INTEREST_DETAILS = "INTEREST_DETAILS"
    COVERAGE = "COVERAGE"


@dataclass_json
@dataclasses.dataclass
class AttributeInput:
    container: Optional[list[AttributeContainerEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    container_attributes: Optional[shared_containerattributes.ContainerAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerAttributes') }})
    name: Optional[AttributeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class Attribute:
    container: Optional[list[AttributeContainerEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    container_attributes: Optional[shared_containerattributes.ContainerAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerAttributes') }})
    from_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromDate') }})
    from_fin_year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromFinYear') }})
    name: Optional[AttributeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    to_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toDate') }})
    to_fin_year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toFinYear') }})
    
