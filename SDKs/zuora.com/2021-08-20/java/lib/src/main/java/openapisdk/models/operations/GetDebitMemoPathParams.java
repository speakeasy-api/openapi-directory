package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDebitMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public GetDebitMemoPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
}