package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddUserSetting201ApplicationJsonVoiceMail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_user_id")
    public String accessUserId;
    public AddUserSetting201ApplicationJsonVoiceMail withAccessUserId(String accessUserId) {
        this.accessUserId = accessUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public AddUserSetting201ApplicationJsonVoiceMail withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public AddUserSetting201ApplicationJsonVoiceMail withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_id")
    public String sharedId;
    public AddUserSetting201ApplicationJsonVoiceMail withSharedId(String sharedId) {
        this.sharedId = sharedId;
        return this;
    }
}