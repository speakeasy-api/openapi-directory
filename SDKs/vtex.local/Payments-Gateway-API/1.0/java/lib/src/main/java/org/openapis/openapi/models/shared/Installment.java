/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Installment {
    @JsonProperty("options")
    public Option[] options;

    public Installment withOptions(Option[] options) {
        this.options = options;
        return this;
    }
    
    @JsonProperty("payment")
    public Payment payment;

    public Installment withPayment(Payment payment) {
        this.payment = payment;
        return this;
    }
    
    public Installment(@JsonProperty("options") Option[] options, @JsonProperty("payment") Payment payment) {
        this.options = options;
        this.payment = payment;
  }
}
