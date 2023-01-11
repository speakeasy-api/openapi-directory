package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SettingsTrackingCategories
 * Tracking categories for Employees and Timesheets
**/
public class SettingsTrackingCategories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeGroups")
    public SettingsTrackingCategoriesEmployeeGroups employeeGroups;
    public SettingsTrackingCategories withEmployeeGroups(SettingsTrackingCategoriesEmployeeGroups employeeGroups) {
        this.employeeGroups = employeeGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimesheetCategories")
    public SettingsTrackingCategoriesTimesheetCategories timesheetCategories;
    public SettingsTrackingCategories withTimesheetCategories(SettingsTrackingCategoriesTimesheetCategories timesheetCategories) {
        this.timesheetCategories = timesheetCategories;
        return this;
    }
}