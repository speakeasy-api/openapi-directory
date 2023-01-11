package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SettingsTrackingCategoriesTimesheetCategories
 * The tracking category used for timesheets
**/
public class SettingsTrackingCategoriesTimesheetCategories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingCategoryID")
    public String trackingCategoryID;
    public SettingsTrackingCategoriesTimesheetCategories withTrackingCategoryId(String trackingCategoryID) {
        this.trackingCategoryID = trackingCategoryID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingCategoryName")
    public String trackingCategoryName;
    public SettingsTrackingCategoriesTimesheetCategories withTrackingCategoryName(String trackingCategoryName) {
        this.trackingCategoryName = trackingCategoryName;
        return this;
    }
}