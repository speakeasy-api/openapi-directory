package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availToSellQty")
    public Integer availToSellQty;
    public GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes withAvailToSellQty(Integer availToSellQty) {
        this.availToSellQty = availToSellQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedDate")
    public String modifiedDate;
    public GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onHandQty")
    public Integer onHandQty;
    public GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes withOnHandQty(Integer onHandQty) {
        this.onHandQty = onHandQty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipNodeType")
    public String shipNodeType;
    public GetWfsInventory200ApplicationJsonPayloadInventoryShipNodes withShipNodeType(String shipNodeType) {
        this.shipNodeType = shipNodeType;
        return this;
    }
}