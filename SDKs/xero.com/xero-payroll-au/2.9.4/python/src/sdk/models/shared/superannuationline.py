import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import superannuationcalculationtype_enum as shared_superannuationcalculationtype_enum
from ..shared import superannuationcontributiontype_enum as shared_superannuationcontributiontype_enum


@dataclass_json
@dataclasses.dataclass
class SuperannuationLine:
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    calculation_type: Optional[shared_superannuationcalculationtype_enum.SuperannuationCalculationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationType') }})
    contribution_type: Optional[shared_superannuationcontributiontype_enum.SuperannuationContributionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContributionType') }})
    expense_account_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpenseAccountCode') }})
    liability_account_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LiabilityAccountCode') }})
    minimum_monthly_earnings: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumMonthlyEarnings') }})
    payment_date_for_this_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDateForThisPeriod') }})
    percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Percentage') }})
    super_membership_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperMembershipID') }})
    
