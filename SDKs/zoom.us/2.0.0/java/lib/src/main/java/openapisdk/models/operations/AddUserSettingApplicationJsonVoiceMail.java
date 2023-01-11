package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddUserSettingApplicationJsonVoiceMail
 * Update the voicemail setting.
**/
public class AddUserSettingApplicationJsonVoiceMail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_user_id")
    public String accessUserId;
    public AddUserSettingApplicationJsonVoiceMail withAccessUserId(String accessUserId) {
        this.accessUserId = accessUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public AddUserSettingApplicationJsonVoiceMail withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public AddUserSettingApplicationJsonVoiceMail withDownload(Boolean download) {
        this.download = download;
        return this;
    }
}