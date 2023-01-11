package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCancelCreditMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public PutCancelCreditMemoPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}