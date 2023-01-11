package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneNumberDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberId")
    public String numberId;
    public UpdatePhoneNumberDetailsPathParams withNumberId(String numberId) {
        this.numberId = numberId;
        return this;
    }
}