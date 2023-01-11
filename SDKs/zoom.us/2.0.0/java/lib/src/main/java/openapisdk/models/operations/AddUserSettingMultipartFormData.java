package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserSettingMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=voice_mail,json")
    public AddUserSettingMultipartFormDataVoiceMail voiceMail;
    public AddUserSettingMultipartFormData withVoiceMail(AddUserSettingMultipartFormDataVoiceMail voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}