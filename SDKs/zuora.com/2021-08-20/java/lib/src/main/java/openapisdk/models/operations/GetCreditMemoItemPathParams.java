package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditMemoItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cmitemid")
    public String cmitemid;
    public GetCreditMemoItemPathParams withCmitemid(String cmitemid) {
        this.cmitemid = cmitemid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public GetCreditMemoItemPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
}