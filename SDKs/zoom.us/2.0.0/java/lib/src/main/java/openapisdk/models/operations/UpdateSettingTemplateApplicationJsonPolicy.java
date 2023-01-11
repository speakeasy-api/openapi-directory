package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJsonPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ad_hoc_call_recording")
    public UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording adHocCallRecording;
    public UpdateSettingTemplateApplicationJsonPolicy withAdHocCallRecording(UpdateSettingTemplateApplicationJsonPolicyAdHocCallRecording adHocCallRecording) {
        this.adHocCallRecording = adHocCallRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_call_recording")
    public UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording autoCallRecording;
    public UpdateSettingTemplateApplicationJsonPolicy withAutoCallRecording(UpdateSettingTemplateApplicationJsonPolicyAutoCallRecording autoCallRecording) {
        this.autoCallRecording = autoCallRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public UpdateSettingTemplateApplicationJsonPolicySms sms;
    public UpdateSettingTemplateApplicationJsonPolicy withSms(UpdateSettingTemplateApplicationJsonPolicySms sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voicemail")
    public UpdateSettingTemplateApplicationJsonPolicyVoicemail voicemail;
    public UpdateSettingTemplateApplicationJsonPolicy withVoicemail(UpdateSettingTemplateApplicationJsonPolicyVoicemail voicemail) {
        this.voicemail = voicemail;
        return this;
    }
}