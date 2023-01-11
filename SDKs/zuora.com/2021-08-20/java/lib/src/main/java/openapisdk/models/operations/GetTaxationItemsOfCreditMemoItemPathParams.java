package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaxationItemsOfCreditMemoItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cmitemid")
    public String cmitemid;
    public GetTaxationItemsOfCreditMemoItemPathParams withCmitemid(String cmitemid) {
        this.cmitemid = cmitemid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public GetTaxationItemsOfCreditMemoItemPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}