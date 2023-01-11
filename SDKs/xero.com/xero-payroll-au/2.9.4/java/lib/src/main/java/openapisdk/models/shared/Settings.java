package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Settings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Accounts")
    public Account[] accounts;
    public Settings withAccounts(Account[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DaysInPayrollYear")
    public Integer daysInPayrollYear;
    public Settings withDaysInPayrollYear(Integer daysInPayrollYear) {
        this.daysInPayrollYear = daysInPayrollYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingCategories")
    public SettingsTrackingCategories trackingCategories;
    public Settings withTrackingCategories(SettingsTrackingCategories trackingCategories) {
        this.trackingCategories = trackingCategories;
        return this;
    }
}