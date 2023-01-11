package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_conference_info")
    public String audioConferenceInfo;
    public UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings withAudioConferenceInfo(String audioConferenceInfo) {
        this.audioConferenceInfo = audioConferenceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_international_numbers_link")
    public Boolean showInternationalNumbersLink;
    public UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings withShowInternationalNumbersLink(Boolean showInternationalNumbersLink) {
        this.showInternationalNumbersLink = showInternationalNumbersLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony_regions")
    public UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions telephonyRegions;
    public UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings withTelephonyRegions(UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions telephonyRegions) {
        this.telephonyRegions = telephonyRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party_audio")
    public Boolean thirdPartyAudio;
    public UserSettingsUpdateMultipartFormDataUserSettingsTelephonyUpdateSettingsMeetingSettings withThirdPartyAudio(Boolean thirdPartyAudio) {
        this.thirdPartyAudio = thirdPartyAudio;
        return this;
    }
}