package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupLockSettings200ApplicationJson1Recording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_user_access_recording")
    public Boolean accountUserAccessRecording;
    public GetGroupLockSettings200ApplicationJson1Recording withAccountUserAccessRecording(Boolean accountUserAccessRecording) {
        this.accountUserAccessRecording = accountUserAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr")
    public Boolean autoDeleteCmr;
    public GetGroupLockSettings200ApplicationJson1Recording withAutoDeleteCmr(Boolean autoDeleteCmr) {
        this.autoDeleteCmr = autoDeleteCmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public String autoRecording;
    public GetGroupLockSettings200ApplicationJson1Recording withAutoRecording(String autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public GetGroupLockSettings200ApplicationJson1Recording withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download")
    public Boolean cloudRecordingDownload;
    public GetGroupLockSettings200ApplicationJson1Recording withCloudRecordingDownload(Boolean cloudRecordingDownload) {
        this.cloudRecordingDownload = cloudRecordingDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_delete_cloud_recording")
    public Boolean hostDeleteCloudRecording;
    public GetGroupLockSettings200ApplicationJson1Recording withHostDeleteCloudRecording(Boolean hostDeleteCloudRecording) {
        this.hostDeleteCloudRecording = hostDeleteCloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl ipAddressAccessControl;
    public GetGroupLockSettings200ApplicationJson1Recording withIpAddressAccessControl(GetGroupLockSettings200ApplicationJson1RecordingIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public GetGroupLockSettings200ApplicationJson1Recording withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prevent_host_access_recording")
    public Boolean preventHostAccessRecording;
    public GetGroupLockSettings200ApplicationJson1Recording withPreventHostAccessRecording(Boolean preventHostAccessRecording) {
        this.preventHostAccessRecording = preventHostAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_authentication")
    public Boolean recordingAuthentication;
    public GetGroupLockSettings200ApplicationJson1Recording withRecordingAuthentication(Boolean recordingAuthentication) {
        this.recordingAuthentication = recordingAuthentication;
        return this;
    }
}