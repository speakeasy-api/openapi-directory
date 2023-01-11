package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolUpgradeOsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolUpgradeOsPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}