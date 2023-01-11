package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupLockedSettingsMultipartFormData1Recording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_user_access_recording")
    public Boolean accountUserAccessRecording;
    public GroupLockedSettingsMultipartFormData1Recording withAccountUserAccessRecording(Boolean accountUserAccessRecording) {
        this.accountUserAccessRecording = accountUserAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr")
    public Boolean autoDeleteCmr;
    public GroupLockedSettingsMultipartFormData1Recording withAutoDeleteCmr(Boolean autoDeleteCmr) {
        this.autoDeleteCmr = autoDeleteCmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public String autoRecording;
    public GroupLockedSettingsMultipartFormData1Recording withAutoRecording(String autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public GroupLockedSettingsMultipartFormData1Recording withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download")
    public Boolean cloudRecordingDownload;
    public GroupLockedSettingsMultipartFormData1Recording withCloudRecordingDownload(Boolean cloudRecordingDownload) {
        this.cloudRecordingDownload = cloudRecordingDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_delete_cloud_recording")
    public Boolean hostDeleteCloudRecording;
    public GroupLockedSettingsMultipartFormData1Recording withHostDeleteCloudRecording(Boolean hostDeleteCloudRecording) {
        this.hostDeleteCloudRecording = hostDeleteCloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl ipAddressAccessControl;
    public GroupLockedSettingsMultipartFormData1Recording withIpAddressAccessControl(GroupLockedSettingsMultipartFormData1RecordingIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public GroupLockedSettingsMultipartFormData1Recording withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_authentication")
    public String recordingAuthentication;
    public GroupLockedSettingsMultipartFormData1Recording withRecordingAuthentication(String recordingAuthentication) {
        this.recordingAuthentication = recordingAuthentication;
        return this;
    }
}