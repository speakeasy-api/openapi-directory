package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutActivateAccountingCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ac-id")
    public String acId;
    public PutActivateAccountingCodePathParams withAcId(String acId) {
        this.acId = acId;
        return this;
    }
}