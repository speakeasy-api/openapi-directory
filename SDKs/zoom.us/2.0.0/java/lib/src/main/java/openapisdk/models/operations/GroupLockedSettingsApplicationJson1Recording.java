package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupLockedSettingsApplicationJson1Recording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_user_access_recording")
    public Boolean accountUserAccessRecording;
    public GroupLockedSettingsApplicationJson1Recording withAccountUserAccessRecording(Boolean accountUserAccessRecording) {
        this.accountUserAccessRecording = accountUserAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr")
    public Boolean autoDeleteCmr;
    public GroupLockedSettingsApplicationJson1Recording withAutoDeleteCmr(Boolean autoDeleteCmr) {
        this.autoDeleteCmr = autoDeleteCmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public String autoRecording;
    public GroupLockedSettingsApplicationJson1Recording withAutoRecording(String autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public GroupLockedSettingsApplicationJson1Recording withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download")
    public Boolean cloudRecordingDownload;
    public GroupLockedSettingsApplicationJson1Recording withCloudRecordingDownload(Boolean cloudRecordingDownload) {
        this.cloudRecordingDownload = cloudRecordingDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_delete_cloud_recording")
    public Boolean hostDeleteCloudRecording;
    public GroupLockedSettingsApplicationJson1Recording withHostDeleteCloudRecording(Boolean hostDeleteCloudRecording) {
        this.hostDeleteCloudRecording = hostDeleteCloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl ipAddressAccessControl;
    public GroupLockedSettingsApplicationJson1Recording withIpAddressAccessControl(GroupLockedSettingsApplicationJson1RecordingIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public GroupLockedSettingsApplicationJson1Recording withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_authentication")
    public String recordingAuthentication;
    public GroupLockedSettingsApplicationJson1Recording withRecordingAuthentication(String recordingAuthentication) {
        this.recordingAuthentication = recordingAuthentication;
        return this;
    }
}