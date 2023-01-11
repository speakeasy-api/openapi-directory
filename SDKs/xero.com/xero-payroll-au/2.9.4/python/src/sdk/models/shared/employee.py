import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bankaccount as shared_bankaccount
from ..shared import homeaddress as shared_homeaddress
from ..shared import leavebalance as shared_leavebalance
from ..shared import leaveline as shared_leaveline
from ..shared import openingbalances as shared_openingbalances
from ..shared import paytemplate as shared_paytemplate
from ..shared import employeestatus_enum as shared_employeestatus_enum
from ..shared import supermembership as shared_supermembership
from ..shared import taxdeclaration as shared_taxdeclaration
from ..shared import validationerror as shared_validationerror
from ..shared import taxdeclaration as shared_taxdeclaration

class EmployeeGenderEnum(str, Enum):
    N = "N"
    M = "M"
    F = "F"
    I = "I"


@dataclass_json
@dataclasses.dataclass
class Employee:
    date_of_birth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfBirth') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    bank_accounts: Optional[list[shared_bankaccount.BankAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankAccounts') }})
    classification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    employee_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroupName') }})
    employee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    gender: Optional[EmployeeGenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    home_address: Optional[shared_homeaddress.HomeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeAddress') }})
    is_authorised_to_approve_leave: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveLeave') }})
    is_authorised_to_approve_timesheets: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveTimesheets') }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTitle') }})
    leave_balances: Optional[list[shared_leavebalance.LeaveBalance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveBalances') }})
    leave_lines: Optional[list[shared_leaveline.LeaveLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLines') }})
    middle_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleNames') }})
    mobile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mobile') }})
    opening_balances: Optional[shared_openingbalances.OpeningBalances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningBalances') }})
    ordinary_earnings_rate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrdinaryEarningsRateID') }})
    pay_template: Optional[shared_paytemplate.PayTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayTemplate') }})
    payroll_calendar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    status: Optional[shared_employeestatus_enum.EmployeeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    super_memberships: Optional[list[shared_supermembership.SuperMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperMemberships') }})
    tax_declaration: Optional[shared_taxdeclaration.TaxDeclaration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDeclaration') }})
    termination_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationDate') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    twitter_user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TwitterUserName') }})
    updated_date_utc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[list[shared_validationerror.ValidationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    

@dataclass_json
@dataclasses.dataclass
class EmployeeInput:
    date_of_birth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfBirth') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }})
    bank_accounts: Optional[list[shared_bankaccount.BankAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankAccounts') }})
    classification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Classification') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    employee_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroupName') }})
    employee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeID') }})
    gender: Optional[EmployeeGenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    home_address: Optional[shared_homeaddress.HomeAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeAddress') }})
    is_authorised_to_approve_leave: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveLeave') }})
    is_authorised_to_approve_timesheets: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAuthorisedToApproveTimesheets') }})
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobTitle') }})
    leave_balances: Optional[list[shared_leavebalance.LeaveBalance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveBalances') }})
    leave_lines: Optional[list[shared_leaveline.LeaveLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LeaveLines') }})
    middle_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MiddleNames') }})
    mobile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mobile') }})
    opening_balances: Optional[shared_openingbalances.OpeningBalances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningBalances') }})
    ordinary_earnings_rate_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrdinaryEarningsRateID') }})
    pay_template: Optional[shared_paytemplate.PayTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayTemplate') }})
    payroll_calendar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayrollCalendarID') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    status: Optional[shared_employeestatus_enum.EmployeeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    super_memberships: Optional[list[shared_supermembership.SuperMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperMemberships') }})
    tax_declaration: Optional[shared_taxdeclaration.TaxDeclarationInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDeclaration') }})
    termination_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TerminationDate') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    twitter_user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TwitterUserName') }})
    validation_errors: Optional[list[shared_validationerror.ValidationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
