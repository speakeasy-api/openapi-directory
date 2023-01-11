package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolUpdatePropertiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolUpdatePropertiesPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}