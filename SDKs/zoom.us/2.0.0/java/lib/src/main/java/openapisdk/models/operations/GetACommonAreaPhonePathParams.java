package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetACommonAreaPhonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commonAreaPhoneId")
    public String commonAreaPhoneId;
    public GetACommonAreaPhonePathParams withCommonAreaPhoneId(String commonAreaPhoneId) {
        this.commonAreaPhoneId = commonAreaPhoneId;
        return this;
    }
}