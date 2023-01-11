package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountingCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ac-id")
    public String acId;
    public PutAccountingCodePathParams withAcId(String acId) {
        this.acId = acId;
        return this;
    }
}