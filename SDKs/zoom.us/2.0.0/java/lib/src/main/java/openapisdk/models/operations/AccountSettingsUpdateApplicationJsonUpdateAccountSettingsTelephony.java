package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony
 * Account Settings Update: Telephony.
**/
public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_conference_info")
    public String audioConferenceInfo;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony withAudioConferenceInfo(String audioConferenceInfo) {
        this.audioConferenceInfo = audioConferenceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony_regions")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions telephonyRegions;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony withTelephonyRegions(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephonyTelephonyRegions telephonyRegions) {
        this.telephonyRegions = telephonyRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party_audio")
    public Boolean thirdPartyAudio;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsTelephony withThirdPartyAudio(Boolean thirdPartyAudio) {
        this.thirdPartyAudio = thirdPartyAudio;
        return this;
    }
}