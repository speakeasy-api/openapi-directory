package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony
 * Account Settings Update: Telephony.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_conference_info")
    public String audioConferenceInfo;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony withAudioConferenceInfo(String audioConferenceInfo) {
        this.audioConferenceInfo = audioConferenceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony_regions")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions telephonyRegions;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony withTelephonyRegions(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephonyTelephonyRegions telephonyRegions) {
        this.telephonyRegions = telephonyRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party_audio")
    public Boolean thirdPartyAudio;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsTelephony withThirdPartyAudio(Boolean thirdPartyAudio) {
        this.thirdPartyAudio = thirdPartyAudio;
        return this;
    }
}