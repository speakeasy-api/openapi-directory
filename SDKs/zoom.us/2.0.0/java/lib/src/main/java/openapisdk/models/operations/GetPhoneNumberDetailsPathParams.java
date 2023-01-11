package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhoneNumberDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=numberId")
    public String numberId;
    public GetPhoneNumberDetailsPathParams withNumberId(String numberId) {
        this.numberId = numberId;
        return this;
    }
}