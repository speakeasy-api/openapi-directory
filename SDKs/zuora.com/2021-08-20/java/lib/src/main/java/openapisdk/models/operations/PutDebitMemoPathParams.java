package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDebitMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public PutDebitMemoPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
}