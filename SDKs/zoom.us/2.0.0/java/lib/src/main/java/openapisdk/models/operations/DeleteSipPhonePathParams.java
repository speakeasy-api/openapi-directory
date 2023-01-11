package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSipPhonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneId")
    public String phoneId;
    public DeleteSipPhonePathParams withPhoneId(String phoneId) {
        this.phoneId = phoneId;
        return this;
    }
}