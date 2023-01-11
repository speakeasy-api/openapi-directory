package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ad_hoc_call_recording")
    public UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording adHocCallRecording;
    public UpdateSettingTemplateMultipartFormDataPolicy withAdHocCallRecording(UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording adHocCallRecording) {
        this.adHocCallRecording = adHocCallRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_call_recording")
    public UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording autoCallRecording;
    public UpdateSettingTemplateMultipartFormDataPolicy withAutoCallRecording(UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording autoCallRecording) {
        this.autoCallRecording = autoCallRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public UpdateSettingTemplateMultipartFormDataPolicySms sms;
    public UpdateSettingTemplateMultipartFormDataPolicy withSms(UpdateSettingTemplateMultipartFormDataPolicySms sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voicemail")
    public UpdateSettingTemplateMultipartFormDataPolicyVoicemail voicemail;
    public UpdateSettingTemplateMultipartFormDataPolicy withVoicemail(UpdateSettingTemplateMultipartFormDataPolicyVoicemail voicemail) {
        this.voicemail = voicemail;
        return this;
    }
}