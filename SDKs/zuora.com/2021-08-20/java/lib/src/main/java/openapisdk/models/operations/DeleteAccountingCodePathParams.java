package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccountingCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ac-id")
    public String acId;
    public DeleteAccountingCodePathParams withAcId(String acId) {
        this.acId = acId;
        return this;
    }
}