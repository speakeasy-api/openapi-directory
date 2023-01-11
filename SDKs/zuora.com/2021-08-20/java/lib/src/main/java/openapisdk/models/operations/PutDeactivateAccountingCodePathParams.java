package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDeactivateAccountingCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ac-id")
    public String acId;
    public PutDeactivateAccountingCodePathParams withAcId(String acId) {
        this.acId = acId;
        return this;
    }
}