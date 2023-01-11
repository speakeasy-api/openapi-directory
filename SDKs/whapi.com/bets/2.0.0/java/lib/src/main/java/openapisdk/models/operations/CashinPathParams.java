package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CashinPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=betId")
    public String betId;
    public CashinPathParams withBetId(String betId) {
        this.betId = betId;
        return this;
    }
}