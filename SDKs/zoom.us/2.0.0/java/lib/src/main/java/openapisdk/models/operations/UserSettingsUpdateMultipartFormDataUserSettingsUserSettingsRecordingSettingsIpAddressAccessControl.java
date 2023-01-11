package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
public class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_addresses_or_ranges")
    public String ipAddressesOrRanges;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl withIpAddressesOrRanges(String ipAddressesOrRanges) {
        this.ipAddressesOrRanges = ipAddressesOrRanges;
        return this;
    }
}