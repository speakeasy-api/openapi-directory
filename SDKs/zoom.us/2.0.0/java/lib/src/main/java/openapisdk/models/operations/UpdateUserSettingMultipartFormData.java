package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserSettingMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=voice_mail,json")
    public UpdateUserSettingMultipartFormDataVoiceMail voiceMail;
    public UpdateUserSettingMultipartFormData withVoiceMail(UpdateUserSettingMultipartFormDataVoiceMail voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}