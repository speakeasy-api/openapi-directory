package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserSettingApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_mail")
    public UpdateUserSettingApplicationJsonVoiceMail voiceMail;
    public UpdateUserSettingApplicationJson withVoiceMail(UpdateUserSettingApplicationJsonVoiceMail voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}