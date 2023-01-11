package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions
 * Approve or block users from specific regions/countries from joining this meeting. 
 * 
**/
public class Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved_list")
    public String[] approvedList;
    public Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withApprovedList(String[] approvedList) {
        this.approvedList = approvedList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denied_list")
    public String[] deniedList;
    public Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withDeniedList(String[] deniedList) {
        this.deniedList = deniedList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum method;
    public Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegions withMethod(Meeting200ApplicationJsonSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum method) {
        this.method = method;
        return this;
    }
}