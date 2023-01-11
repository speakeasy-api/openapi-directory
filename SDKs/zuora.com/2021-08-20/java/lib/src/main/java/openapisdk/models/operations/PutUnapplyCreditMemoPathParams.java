package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUnapplyCreditMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public PutUnapplyCreditMemoPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}