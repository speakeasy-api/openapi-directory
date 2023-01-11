package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecordingSettingUpdateRecordingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
    public Long approvalType;
    public RecordingSettingUpdateRecordingSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
    public String authenticationDomains;
    public RecordingSettingUpdateRecordingSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
    public String authenticationOption;
    public RecordingSettingUpdateRecordingSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("on_demand")
    public Boolean onDemand;
    public RecordingSettingUpdateRecordingSettings withOnDemand(Boolean onDemand) {
        this.onDemand = onDemand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public RecordingSettingUpdateRecordingSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_authentication")
    public Boolean recordingAuthentication;
    public RecordingSettingUpdateRecordingSettings withRecordingAuthentication(Boolean recordingAuthentication) {
        this.recordingAuthentication = recordingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("send_email_to_host")
    public Boolean sendEmailToHost;
    public RecordingSettingUpdateRecordingSettings withSendEmailToHost(Boolean sendEmailToHost) {
        this.sendEmailToHost = sendEmailToHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_recording")
    public RecordingSettingUpdateRecordingSettingsShareRecordingEnum shareRecording;
    public RecordingSettingUpdateRecordingSettings withShareRecording(RecordingSettingUpdateRecordingSettingsShareRecordingEnum shareRecording) {
        this.shareRecording = shareRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_social_share_buttons")
    public Boolean showSocialShareButtons;
    public RecordingSettingUpdateRecordingSettings withShowSocialShareButtons(Boolean showSocialShareButtons) {
        this.showSocialShareButtons = showSocialShareButtons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public RecordingSettingUpdateRecordingSettings withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewer_download")
    public Boolean viewerDownload;
    public RecordingSettingUpdateRecordingSettings withViewerDownload(Boolean viewerDownload) {
        this.viewerDownload = viewerDownload;
        return this;
    }
}