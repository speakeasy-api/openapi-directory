package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditMemoItemPartsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public GetCreditMemoItemPartsPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partid")
    public String partid;
    public GetCreditMemoItemPartsPathParams withPartid(String partid) {
        this.partid = partid;
        return this;
    }
}