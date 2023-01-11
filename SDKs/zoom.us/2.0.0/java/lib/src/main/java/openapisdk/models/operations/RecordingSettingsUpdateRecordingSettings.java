package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class RecordingSettingsUpdateRecordingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_type")
@SpeakeasyMetadata("multipartForm:name=approval_type")
    public Long approvalType;
    public RecordingSettingsUpdateRecordingSettings withApprovalType(Long approvalType) {
        this.approvalType = approvalType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_domains")
@SpeakeasyMetadata("multipartForm:name=authentication_domains")
    public String authenticationDomains;
    public RecordingSettingsUpdateRecordingSettings withAuthenticationDomains(String authenticationDomains) {
        this.authenticationDomains = authenticationDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication_option")
@SpeakeasyMetadata("multipartForm:name=authentication_option")
    public String authenticationOption;
    public RecordingSettingsUpdateRecordingSettings withAuthenticationOption(String authenticationOption) {
        this.authenticationOption = authenticationOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("on_demand")
@SpeakeasyMetadata("multipartForm:name=on_demand")
    public Boolean onDemand;
    public RecordingSettingsUpdateRecordingSettings withOnDemand(Boolean onDemand) {
        this.onDemand = onDemand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
@SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public RecordingSettingsUpdateRecordingSettings withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_authentication")
@SpeakeasyMetadata("multipartForm:name=recording_authentication")
    public Boolean recordingAuthentication;
    public RecordingSettingsUpdateRecordingSettings withRecordingAuthentication(Boolean recordingAuthentication) {
        this.recordingAuthentication = recordingAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("send_email_to_host")
@SpeakeasyMetadata("multipartForm:name=send_email_to_host")
    public Boolean sendEmailToHost;
    public RecordingSettingsUpdateRecordingSettings withSendEmailToHost(Boolean sendEmailToHost) {
        this.sendEmailToHost = sendEmailToHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_recording")
@SpeakeasyMetadata("multipartForm:name=share_recording")
    public RecordingSettingsUpdateRecordingSettingsShareRecordingEnum shareRecording;
    public RecordingSettingsUpdateRecordingSettings withShareRecording(RecordingSettingsUpdateRecordingSettingsShareRecordingEnum shareRecording) {
        this.shareRecording = shareRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_social_share_buttons")
@SpeakeasyMetadata("multipartForm:name=show_social_share_buttons")
    public Boolean showSocialShareButtons;
    public RecordingSettingsUpdateRecordingSettings withShowSocialShareButtons(Boolean showSocialShareButtons) {
        this.showSocialShareButtons = showSocialShareButtons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
@SpeakeasyMetadata("multipartForm:name=topic")
    public String topic;
    public RecordingSettingsUpdateRecordingSettings withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewer_download")
@SpeakeasyMetadata("multipartForm:name=viewer_download")
    public Boolean viewerDownload;
    public RecordingSettingsUpdateRecordingSettings withViewerDownload(Boolean viewerDownload) {
        this.viewerDownload = viewerDownload;
        return this;
    }
}