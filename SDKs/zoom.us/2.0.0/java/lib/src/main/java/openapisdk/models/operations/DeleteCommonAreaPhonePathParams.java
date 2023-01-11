package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCommonAreaPhonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commonAreaPhoneId")
    public String commonAreaPhoneId;
    public DeleteCommonAreaPhonePathParams withCommonAreaPhoneId(String commonAreaPhoneId) {
        this.commonAreaPhoneId = commonAreaPhoneId;
        return this;
    }
}