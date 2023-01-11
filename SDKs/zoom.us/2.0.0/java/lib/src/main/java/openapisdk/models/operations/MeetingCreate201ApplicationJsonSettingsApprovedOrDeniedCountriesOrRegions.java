package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
public class MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_list")
    public String[] approvedList;
    public MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withApprovedList(String[] approvedList) {
        this.approvedList = approvedList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denied_list")
    public String[] deniedList;
    public MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withDeniedList(String[] deniedList) {
        this.deniedList = deniedList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum method;
    public MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withMethod(MeetingCreate201ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum method) {
        this.method = method;
        return this;
    }
}