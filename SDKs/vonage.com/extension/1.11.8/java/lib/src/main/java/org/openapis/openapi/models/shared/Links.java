/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Links {
    /**
     * URL to the first page of records
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public FirstHref first;

    public Links withFirst(FirstHref first) {
        this.first = first;
        return this;
    }
    
    /**
     * URL to the next page of records
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public NextHref next;

    public Links withNext(NextHref next) {
        this.next = next;
        return this;
    }
    
    /**
     * URL to the previous page of records
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public PrevHref prev;

    public Links withPrev(PrevHref prev) {
        this.prev = prev;
        return this;
    }
    
    /**
     * URL to the current page of records
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public SelfHref self;

    public Links withSelf(SelfHref self) {
        this.self = self;
        return this;
    }
    
    public Links(){}
}
