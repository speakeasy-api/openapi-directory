package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl
 * Setting to allow cloud recording access only from specific IP address ranges.
 * 
**/
public class GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_addresses_or_ranges")
    public String ipAddressesOrRanges;
    public GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl withIpAddressesOrRanges(String ipAddressesOrRanges) {
        this.ipAddressesOrRanges = ipAddressesOrRanges;
        return this;
    }
}