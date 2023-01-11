package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUnpostDebitMemoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public PutUnpostDebitMemoPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
}