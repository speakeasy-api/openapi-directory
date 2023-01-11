package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditMemoItemPartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creditMemoId")
    public String creditMemoId;
    public GetCreditMemoItemPartPathParams withCreditMemoId(String creditMemoId) {
        this.creditMemoId = creditMemoId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itempartid")
    public String itempartid;
    public GetCreditMemoItemPartPathParams withItempartid(String itempartid) {
        this.itempartid = itempartid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=partid")
    public String partid;
    public GetCreditMemoItemPartPathParams withPartid(String partid) {
        this.partid = partid;
        return this;
    }
}