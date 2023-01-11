package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUserSettingApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_mail")
    public AddUserSettingApplicationJsonVoiceMail voiceMail;
    public AddUserSettingApplicationJson withVoiceMail(AddUserSettingApplicationJsonVoiceMail voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}