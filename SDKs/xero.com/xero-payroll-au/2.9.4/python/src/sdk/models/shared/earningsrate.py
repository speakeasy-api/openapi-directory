import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowancetype_enum as shared_allowancetype_enum
from ..shared import earningstype_enum as shared_earningstype_enum
from ..shared import employmentterminationpaymenttype_enum as shared_employmentterminationpaymenttype_enum
from ..shared import ratetype_enum as shared_ratetype_enum


@dataclass_json
@dataclasses.dataclass
class EarningsRate:
    account_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountCode') }})
    accrue_leave: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccrueLeave') }})
    allowance_type: Optional[shared_allowancetype_enum.AllowanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowanceType') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    current_record: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    earnings_rate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRateID') }})
    earnings_type: Optional[shared_earningstype_enum.EarningsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsType') }})
    employment_termination_payment_type: Optional[shared_employmentterminationpaymenttype_enum.EmploymentTerminationPaymentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentTerminationPaymentType') }})
    is_exempt_from_super: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromSuper') }})
    is_exempt_from_tax: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromTax') }})
    is_reportable_as_w1: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsReportableAsW1') }})
    multiplier: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Multiplier') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate_per_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePerUnit') }})
    rate_type: Optional[shared_ratetype_enum.RateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    type_of_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeOfUnits') }})
    updated_date_utc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    

@dataclass_json
@dataclasses.dataclass
class EarningsRateInput:
    account_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountCode') }})
    accrue_leave: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccrueLeave') }})
    allowance_type: Optional[shared_allowancetype_enum.AllowanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowanceType') }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    current_record: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRecord') }})
    earnings_rate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsRateID') }})
    earnings_type: Optional[shared_earningstype_enum.EarningsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarningsType') }})
    employment_termination_payment_type: Optional[shared_employmentterminationpaymenttype_enum.EmploymentTerminationPaymentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmploymentTerminationPaymentType') }})
    is_exempt_from_super: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromSuper') }})
    is_exempt_from_tax: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsExemptFromTax') }})
    is_reportable_as_w1: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsReportableAsW1') }})
    multiplier: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Multiplier') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rate_per_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatePerUnit') }})
    rate_type: Optional[shared_ratetype_enum.RateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateType') }})
    type_of_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeOfUnits') }})
    
