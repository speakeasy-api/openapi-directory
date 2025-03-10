/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemsUpdate200ApplicationJSONItemMetadataItems {
    /**
     * Detail URL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailUrl")
    public String detailUrl;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withDetailUrl(String detailUrl) {
        this.detailUrl = detailUrl;
        return this;
    }
    
    /**
     * European Article Number.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String ean;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withEan(String ean) {
        this.ean = ean;
        return this;
    }
    
    /**
     * Item ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Image URL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    
    /**
     * Product name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Product ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    
    /**
     * Ref ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refId")
    public String refId;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withRefId(String refId) {
        this.refId = refId;
        return this;
    }
    
    /**
     * Seller.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public String seller;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withSeller(String seller) {
        this.seller = seller;
        return this;
    }
    
    /**
     * SKU name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skuName")
    public String skuName;

    public ItemsUpdate200ApplicationJSONItemMetadataItems withSkuName(String skuName) {
        this.skuName = skuName;
        return this;
    }
    
    public ItemsUpdate200ApplicationJSONItemMetadataItems(){}
}
