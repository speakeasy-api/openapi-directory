package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_conference_info")
    public String audioConferenceInfo;
    public UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings withAudioConferenceInfo(String audioConferenceInfo) {
        this.audioConferenceInfo = audioConferenceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_international_numbers_link")
    public Boolean showInternationalNumbersLink;
    public UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings withShowInternationalNumbersLink(Boolean showInternationalNumbersLink) {
        this.showInternationalNumbersLink = showInternationalNumbersLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony_regions")
    public UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions telephonyRegions;
    public UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings withTelephonyRegions(UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettingsTelephonyRegions telephonyRegions) {
        this.telephonyRegions = telephonyRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party_audio")
    public Boolean thirdPartyAudio;
    public UserSettingsUpdateApplicationJsonUserSettingsTelephonyUpdateSettingsMeetingSettings withThirdPartyAudio(Boolean thirdPartyAudio) {
        this.thirdPartyAudio = thirdPartyAudio;
        return this;
    }
}