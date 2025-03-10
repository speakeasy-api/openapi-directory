/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertSellerRequest {
    /**
     * SKU Seller Identification
     */
    @JsonProperty("CSCIdentification")
    public String cscIdentification;

    public UpsertSellerRequest withCSCIdentification(String cscIdentification) {
        this.cscIdentification = cscIdentification;
        return this;
    }
    
    /**
     * Seller's account name
     */
    @JsonProperty("account")
    public String account;

    public UpsertSellerRequest withAccount(String account) {
        this.account = account;
        return this;
    }
    
    /**
     * Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.
     */
    @JsonProperty("allowHybridPayments")
    public Boolean allowHybridPayments;

    public UpsertSellerRequest withAllowHybridPayments(Boolean allowHybridPayments) {
        this.allowHybridPayments = allowHybridPayments;
        return this;
    }
    
    /**
     * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) available.
     */
    @JsonProperty("availableSalesChannels")
    public AvailableSalesChannel[] availableSalesChannels;

    public UpsertSellerRequest withAvailableSalesChannels(AvailableSalesChannel[] availableSalesChannels) {
        this.availableSalesChannels = availableSalesChannels;
        return this;
    }
    
    /**
     * URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`
     */
    @JsonProperty("catalogSystemEndpoint")
    public String catalogSystemEndpoint;

    public UpsertSellerRequest withCatalogSystemEndpoint(String catalogSystemEndpoint) {
        this.catalogSystemEndpoint = catalogSystemEndpoint;
        return this;
    }
    
    /**
     * Channel's name.
     */
    @JsonProperty("channel")
    public String channel;

    public UpsertSellerRequest withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    
    /**
     * Text describing the delivery policy previously agreed between the marketplace and the seller.
     */
    @JsonProperty("deliveryPolicy")
    public String deliveryPolicy;

    public UpsertSellerRequest withDeliveryPolicy(String deliveryPolicy) {
        this.deliveryPolicy = deliveryPolicy;
        return this;
    }
    
    /**
     * String describing the seller
     */
    @JsonProperty("description")
    public String description;

    public UpsertSellerRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * email of the admin responsible for the seller.
     */
    @JsonProperty("email")
    public String email;

    public UpsertSellerRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    
    /**
     * Text describing the exchange and return policy previously agreed between the marketplace and the seller.
     */
    @JsonProperty("exchangeReturnPolicy")
    public String exchangeReturnPolicy;

    public UpsertSellerRequest withExchangeReturnPolicy(String exchangeReturnPolicy) {
        this.exchangeReturnPolicy = exchangeReturnPolicy;
        return this;
    }
    
    /**
     * URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. 
     * 
     * For **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process. 
     * 
     * For **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&amp;sc={TradePolicyID}`. 
     * 
     * The value `SellerName` corresponds to the store name if the seller is a VTEX store. 
     * 
     * The value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. 
     * 
     * The value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process. 
     * 
     * To configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&amp;sc={{salesChannel`
     */
    @JsonProperty("fulfillmentEndpoint")
    public String fulfillmentEndpoint;

    public UpsertSellerRequest withFulfillmentEndpoint(String fulfillmentEndpoint) {
        this.fulfillmentEndpoint = fulfillmentEndpoint;
        return this;
    }
    
    /**
     *  Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.
     */
    @JsonProperty("fulfillmentSellerId")
    public String fulfillmentSellerId;

    public UpsertSellerRequest withFulfillmentSellerId(String fulfillmentSellerId) {
        this.fulfillmentSellerId = fulfillmentSellerId;
        return this;
    }
    
    /**
     * Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public Groups[] groups;

    public UpsertSellerRequest withGroups(Groups[] groups) {
        this.groups = groups;
        return this;
    }
    
    /**
     * Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.
     */
    @JsonProperty("id")
    public String id;

    public UpsertSellerRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Whether the seller is active on the marketplace or not.
     */
    @JsonProperty("isActive")
    public Boolean isActive;

    public UpsertSellerRequest withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    
    /**
     * Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.
     */
    @JsonProperty("isBetterScope")
    public Boolean isBetterScope;

    public UpsertSellerRequest withIsBetterScope(Boolean isBetterScope) {
        this.isBetterScope = isBetterScope;
        return this;
    }
    
    /**
     * Flag determining whether the seller configured is a VTEX store or not.
     */
    @JsonProperty("isVtex")
    public Boolean isVtex;

    public UpsertSellerRequest withIsVtex(Boolean isVtex) {
        this.isVtex = isVtex;
        return this;
    }
    
    /**
     * Name of the seller's store, configured in the seller's environment.
     */
    @JsonProperty("name")
    public String name;

    public UpsertSellerRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * User password, if you are using a hub to integrate with the external seller.
     */
    @JsonProperty("password")
    public String password;

    public UpsertSellerRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    
    /**
     * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.
     */
    @JsonProperty("salesChannel")
    public String salesChannel;

    public UpsertSellerRequest withSalesChannel(String salesChannel) {
        this.salesChannel = salesChannel;
        return this;
    }
    
    /**
     * Score attributed to this seller.
     */
    @JsonProperty("score")
    public Double score;

    public UpsertSellerRequest withScore(Double score) {
        this.score = score;
        return this;
    }
    
    /**
     *  Text describing the security policy previously agreed between the marketplace and the seller.
     */
    @JsonProperty("securityPrivacyPolicy")
    public String securityPrivacyPolicy;

    public UpsertSellerRequest withSecurityPrivacyPolicy(String securityPrivacyPolicy) {
        this.securityPrivacyPolicy = securityPrivacyPolicy;
        return this;
    }
    
    @JsonProperty("sellerCommissionConfiguration")
    public java.util.Map<String, Object> sellerCommissionConfiguration;

    public UpsertSellerRequest withSellerCommissionConfiguration(java.util.Map<String, Object> sellerCommissionConfiguration) {
        this.sellerCommissionConfiguration = sellerCommissionConfiguration;
        return this;
    }
    
    /**
     * Type of seller, including: 
     * 
     * `1`: regular seller 
     * 
     * `2`: whitelabel seller
     */
    @JsonProperty("sellerType")
    public Integer sellerType;

    public UpsertSellerRequest withSellerType(Integer sellerType) {
        this.sellerType = sellerType;
        return this;
    }
    
    /**
     * This code is the Identity Number for the legal entity and is linked to information in its base country.
     */
    @JsonProperty("taxCode")
    public String taxCode;

    public UpsertSellerRequest withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    
    /**
     *  the marketplace must first allow VTEX to share clients\u2019 email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field
     */
    @JsonProperty("trustPolicy")
    public String trustPolicy;

    public UpsertSellerRequest withTrustPolicy(String trustPolicy) {
        this.trustPolicy = trustPolicy;
        return this;
    }
    
    /**
     * Username, if you are using a hub to integrate with the external seller.
     */
    @JsonProperty("user")
    public String user;

    public UpsertSellerRequest withUser(String user) {
        this.user = user;
        return this;
    }
    
    public UpsertSellerRequest(@JsonProperty("user") String user, @JsonProperty("password") String password, @JsonProperty("CSCIdentification") String cscIdentification, @JsonProperty("account") String account, @JsonProperty("allowHybridPayments") Boolean allowHybridPayments, @JsonProperty("availableSalesChannels") AvailableSalesChannel[] availableSalesChannels, @JsonProperty("catalogSystemEndpoint") String catalogSystemEndpoint, @JsonProperty("channel") String channel, @JsonProperty("deliveryPolicy") String deliveryPolicy, @JsonProperty("description") String description, @JsonProperty("email") String email, @JsonProperty("exchangeReturnPolicy") String exchangeReturnPolicy, @JsonProperty("fulfillmentEndpoint") String fulfillmentEndpoint, @JsonProperty("fulfillmentSellerId") String fulfillmentSellerId, @JsonProperty("id") String id, @JsonProperty("isActive") Boolean isActive, @JsonProperty("isBetterScope") Boolean isBetterScope, @JsonProperty("isVtex") Boolean isVtex, @JsonProperty("name") String name, @JsonProperty("salesChannel") String salesChannel, @JsonProperty("score") Double score, @JsonProperty("securityPrivacyPolicy") String securityPrivacyPolicy, @JsonProperty("sellerCommissionConfiguration") java.util.Map<String, Object> sellerCommissionConfiguration, @JsonProperty("sellerType") Integer sellerType, @JsonProperty("taxCode") String taxCode, @JsonProperty("trustPolicy") String trustPolicy) {
        this.user = user;
        this.password = password;
        this.cscIdentification = cscIdentification;
        this.account = account;
        this.allowHybridPayments = allowHybridPayments;
        this.availableSalesChannels = availableSalesChannels;
        this.catalogSystemEndpoint = catalogSystemEndpoint;
        this.channel = channel;
        this.deliveryPolicy = deliveryPolicy;
        this.description = description;
        this.email = email;
        this.exchangeReturnPolicy = exchangeReturnPolicy;
        this.fulfillmentEndpoint = fulfillmentEndpoint;
        this.fulfillmentSellerId = fulfillmentSellerId;
        this.id = id;
        this.isActive = isActive;
        this.isBetterScope = isBetterScope;
        this.isVtex = isVtex;
        this.name = name;
        this.salesChannel = salesChannel;
        this.score = score;
        this.securityPrivacyPolicy = securityPrivacyPolicy;
        this.sellerCommissionConfiguration = sellerCommissionConfiguration;
        this.sellerType = sellerType;
        this.taxCode = taxCode;
        this.trustPolicy = trustPolicy;
  }
}
