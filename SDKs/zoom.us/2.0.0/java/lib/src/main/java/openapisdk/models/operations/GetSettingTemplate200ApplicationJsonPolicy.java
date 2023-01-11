package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ad_hoc_call_recording")
    public GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording adHocCallRecording;
    public GetSettingTemplate200ApplicationJsonPolicy withAdHocCallRecording(GetSettingTemplate200ApplicationJsonPolicyAdHocCallRecording adHocCallRecording) {
        this.adHocCallRecording = adHocCallRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_call_recording")
    public GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording autoCallRecording;
    public GetSettingTemplate200ApplicationJsonPolicy withAutoCallRecording(GetSettingTemplate200ApplicationJsonPolicyAutoCallRecording autoCallRecording) {
        this.autoCallRecording = autoCallRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms")
    public GetSettingTemplate200ApplicationJsonPolicySms sms;
    public GetSettingTemplate200ApplicationJsonPolicy withSms(GetSettingTemplate200ApplicationJsonPolicySms sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voicemail")
    public GetSettingTemplate200ApplicationJsonPolicyVoicemail voicemail;
    public GetSettingTemplate200ApplicationJsonPolicy withVoicemail(GetSettingTemplate200ApplicationJsonPolicyVoicemail voicemail) {
        this.voicemail = voicemail;
        return this;
    }
}