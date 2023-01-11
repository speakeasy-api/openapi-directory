package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
public class MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_list")
    public String[] approvedList;
    public MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions withApprovedList(String[] approvedList) {
        this.approvedList = approvedList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denied_list")
    public String[] deniedList;
    public MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions withDeniedList(String[] deniedList) {
        this.deniedList = deniedList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum method;
    public MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegions withMethod(MeetingCreateMultipartFormDataSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum method) {
        this.method = method;
        return this;
    }
}