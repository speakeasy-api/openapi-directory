package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUserSetting201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_mail")
    public AddUserSetting201ApplicationJsonVoiceMail voiceMail;
    public AddUserSetting201ApplicationJson withVoiceMail(AddUserSetting201ApplicationJsonVoiceMail voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}