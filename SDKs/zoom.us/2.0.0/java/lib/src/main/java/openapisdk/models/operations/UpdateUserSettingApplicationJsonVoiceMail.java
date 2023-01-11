package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserSettingApplicationJsonVoiceMail
 * Update the voicemail setting.
**/
public class UpdateUserSettingApplicationJsonVoiceMail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_user_id")
    public String accessUserId;
    public UpdateUserSettingApplicationJsonVoiceMail withAccessUserId(String accessUserId) {
        this.accessUserId = accessUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public UpdateUserSettingApplicationJsonVoiceMail withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public UpdateUserSettingApplicationJsonVoiceMail withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_id")
    public String sharedId;
    public UpdateUserSettingApplicationJsonVoiceMail withSharedId(String sharedId) {
        this.sharedId = sharedId;
        return this;
    }
}