package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUserSettings200ApplicationJsonVoiceMail
 * [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
**/
public class PhoneUserSettings200ApplicationJsonVoiceMail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_user_id")
    public String accessUserId;
    public PhoneUserSettings200ApplicationJsonVoiceMail withAccessUserId(String accessUserId) {
        this.accessUserId = accessUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public PhoneUserSettings200ApplicationJsonVoiceMail withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public PhoneUserSettings200ApplicationJsonVoiceMail withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_id")
    public String sharedId;
    public PhoneUserSettings200ApplicationJsonVoiceMail withSharedId(String sharedId) {
        this.sharedId = sharedId;
        return this;
    }
}