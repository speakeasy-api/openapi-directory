package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PurchaseInteractionBuy
 * Information on purchasing this video.
**/
public class PurchaseInteractionBuy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drm")
    public Boolean drm;
    public PurchaseInteractionBuy withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
}