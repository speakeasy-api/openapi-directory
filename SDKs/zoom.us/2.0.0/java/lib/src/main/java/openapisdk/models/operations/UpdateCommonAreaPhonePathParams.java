package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCommonAreaPhonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commonAreaPhoneId")
    public String commonAreaPhoneId;
    public UpdateCommonAreaPhonePathParams withCommonAreaPhoneId(String commonAreaPhoneId) {
        this.commonAreaPhoneId = commonAreaPhoneId;
        return this;
    }
}