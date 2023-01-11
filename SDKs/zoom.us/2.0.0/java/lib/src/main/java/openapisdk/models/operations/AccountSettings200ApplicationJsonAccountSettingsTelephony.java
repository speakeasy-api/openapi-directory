package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsTelephony
 * Account Settings: Telephony.
**/
public class AccountSettings200ApplicationJsonAccountSettingsTelephony {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_conference_info")
    public String audioConferenceInfo;
    public AccountSettings200ApplicationJsonAccountSettingsTelephony withAudioConferenceInfo(String audioConferenceInfo) {
        this.audioConferenceInfo = audioConferenceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony_regions")
    public AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions telephonyRegions;
    public AccountSettings200ApplicationJsonAccountSettingsTelephony withTelephonyRegions(AccountSettings200ApplicationJsonAccountSettingsTelephonyTelephonyRegions telephonyRegions) {
        this.telephonyRegions = telephonyRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party_audio")
    public Boolean thirdPartyAudio;
    public AccountSettings200ApplicationJsonAccountSettingsTelephony withThirdPartyAudio(Boolean thirdPartyAudio) {
        this.thirdPartyAudio = thirdPartyAudio;
        return this;
    }
}