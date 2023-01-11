package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Snmp2cConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("community_string")
    public String communityString;
    public Snmp2cConfig withCommunityString(String communityString) {
        this.communityString = communityString;
        return this;
    }
}