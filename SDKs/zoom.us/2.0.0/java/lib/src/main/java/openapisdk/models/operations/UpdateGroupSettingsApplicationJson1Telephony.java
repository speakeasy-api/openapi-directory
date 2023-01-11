package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsApplicationJson1Telephony {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_conference_info")
    public String audioConferenceInfo;
    public UpdateGroupSettingsApplicationJson1Telephony withAudioConferenceInfo(String audioConferenceInfo) {
        this.audioConferenceInfo = audioConferenceInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("third_party_audio")
    public Boolean thirdPartyAudio;
    public UpdateGroupSettingsApplicationJson1Telephony withThirdPartyAudio(Boolean thirdPartyAudio) {
        this.thirdPartyAudio = thirdPartyAudio;
        return this;
    }
}