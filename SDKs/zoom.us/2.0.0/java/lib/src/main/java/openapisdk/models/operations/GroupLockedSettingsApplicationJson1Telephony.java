package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupLockedSettingsApplicationJson1Telephony {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony_regions")
    public Boolean telephonyRegions;
    public GroupLockedSettingsApplicationJson1Telephony withTelephonyRegions(Boolean telephonyRegions) {
        this.telephonyRegions = telephonyRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party_audio")
    public Boolean thirdPartyAudio;
    public GroupLockedSettingsApplicationJson1Telephony withThirdPartyAudio(Boolean thirdPartyAudio) {
        this.thirdPartyAudio = thirdPartyAudio;
        return this;
    }
}