package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutApplyCreditMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public PutApplyCreditMemoPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}