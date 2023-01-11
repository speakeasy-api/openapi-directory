package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserSettingMultipartFormDataVoiceMail
 * Update the voicemail setting.
**/
public class UpdateUserSettingMultipartFormDataVoiceMail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_user_id")
    public String accessUserId;
    public UpdateUserSettingMultipartFormDataVoiceMail withAccessUserId(String accessUserId) {
        this.accessUserId = accessUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public UpdateUserSettingMultipartFormDataVoiceMail withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public UpdateUserSettingMultipartFormDataVoiceMail withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_id")
    public String sharedId;
    public UpdateUserSettingMultipartFormDataVoiceMail withSharedId(String sharedId) {
        this.sharedId = sharedId;
        return this;
    }
}