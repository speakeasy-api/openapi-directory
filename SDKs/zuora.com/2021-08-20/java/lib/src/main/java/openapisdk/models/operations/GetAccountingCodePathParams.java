package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountingCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ac-id")
    public String acId;
    public GetAccountingCodePathParams withAcId(String acId) {
        this.acId = acId;
        return this;
    }
}