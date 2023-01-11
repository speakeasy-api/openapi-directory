import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account


@dataclass_json
@dataclasses.dataclass
class SettingsTrackingCategoriesEmployeeGroups:
    r"""SettingsTrackingCategoriesEmployeeGroups
    The tracking category used for employees
    """
    
    tracking_category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryID') }})
    tracking_category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryName') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingsTrackingCategoriesTimesheetCategories:
    r"""SettingsTrackingCategoriesTimesheetCategories
    The tracking category used for timesheets
    """
    
    tracking_category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryID') }})
    tracking_category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategoryName') }})
    

@dataclass_json
@dataclasses.dataclass
class SettingsTrackingCategories:
    r"""SettingsTrackingCategories
    Tracking categories for Employees and Timesheets
    """
    
    employee_groups: Optional[SettingsTrackingCategoriesEmployeeGroups] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployeeGroups') }})
    timesheet_categories: Optional[SettingsTrackingCategoriesTimesheetCategories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimesheetCategories') }})
    

@dataclass_json
@dataclasses.dataclass
class Settings:
    accounts: Optional[list[shared_account.Account]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accounts') }})
    days_in_payroll_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DaysInPayrollYear') }})
    tracking_categories: Optional[SettingsTrackingCategories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackingCategories') }})
    
