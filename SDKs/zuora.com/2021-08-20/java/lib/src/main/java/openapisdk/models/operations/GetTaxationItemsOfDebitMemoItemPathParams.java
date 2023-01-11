package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaxationItemsOfDebitMemoItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=debitMemoId")
    public String debitMemoId;
    public GetTaxationItemsOfDebitMemoItemPathParams withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dmitemid")
    public String dmitemid;
    public GetTaxationItemsOfDebitMemoItemPathParams withDmitemid(String dmitemid) {
        this.dmitemid = dmitemid;
        return this;
    }
}