package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVoicemailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=voicemailId")
    public String voicemailId;
    public DeleteVoicemailPathParams withVoicemailId(String voicemailId) {
        this.voicemailId = voicemailId;
        return this;
    }
}