/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetProductSearchFacetsSortEnum - Defines the sort type. If null, the products will be sorted by relevance.
 */
public enum GetProductSearchFacetsSortEnum {
    PRICE_DESC("price:desc"),
    PRICE_ASC("price:asc"),
    ORDERS_DESC("orders:desc"),
    NAME_DESC("name:desc"),
    NAME_ASC("name:asc"),
    RELEASE_DESC("release:desc"),
    DISCOUNT_DESC("discount:desc");

    @JsonValue
    public final String value;

    private GetProductSearchFacetsSortEnum(String value) {
        this.value = value;
    }
}
