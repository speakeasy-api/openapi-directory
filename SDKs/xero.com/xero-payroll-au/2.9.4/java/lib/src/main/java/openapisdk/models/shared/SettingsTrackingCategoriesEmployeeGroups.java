package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SettingsTrackingCategoriesEmployeeGroups
 * The tracking category used for employees
**/
public class SettingsTrackingCategoriesEmployeeGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingCategoryID")
    public String trackingCategoryID;
    public SettingsTrackingCategoriesEmployeeGroups withTrackingCategoryId(String trackingCategoryID) {
        this.trackingCategoryID = trackingCategoryID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingCategoryName")
    public String trackingCategoryName;
    public SettingsTrackingCategoriesEmployeeGroups withTrackingCategoryName(String trackingCategoryName) {
        this.trackingCategoryName = trackingCategoryName;
        return this;
    }
}