package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipPhonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneId")
    public String phoneId;
    public UpdateSipPhonePathParams withPhoneId(String phoneId) {
        this.phoneId = phoneId;
        return this;
    }
}