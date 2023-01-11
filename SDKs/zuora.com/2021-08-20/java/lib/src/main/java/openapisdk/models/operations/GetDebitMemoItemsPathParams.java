package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDebitMemoItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public GetDebitMemoItemsPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
}