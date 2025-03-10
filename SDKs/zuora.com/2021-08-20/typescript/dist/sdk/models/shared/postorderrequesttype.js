"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTOrderRequestType = exports.POSTOrderRequestTypeSubscriptions = void 0;
var utils_1 = require("../../../internal/utils");
var createorderorderaction_1 = require("./createorderorderaction");
var orderlineitemcommonpostorder_1 = require("./orderlineitemcommonpostorder");
var processingoptions_1 = require("./processingoptions");
var quoteobjectfields_1 = require("./quoteobjectfields");
var ramprequest_1 = require("./ramprequest");
var class_transformer_1 = require("class-transformer");
var POSTOrderRequestTypeSubscriptions = /** @class */ (function (_super) {
    __extends(POSTOrderRequestTypeSubscriptions, _super);
    function POSTOrderRequestTypeSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customFields" }),
        __metadata("design:type", Object)
    ], POSTOrderRequestTypeSubscriptions.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: createorderorderaction_1.CreateOrderOrderAction }),
        (0, class_transformer_1.Expose)({ name: "orderActions" }),
        (0, class_transformer_1.Type)(function () { return createorderorderaction_1.CreateOrderOrderAction; }),
        __metadata("design:type", Array)
    ], POSTOrderRequestTypeSubscriptions.prototype, "orderActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "quote" }),
        (0, class_transformer_1.Type)(function () { return quoteobjectfields_1.QuoteObjectFields; }),
        __metadata("design:type", quoteobjectfields_1.QuoteObjectFields)
    ], POSTOrderRequestTypeSubscriptions.prototype, "quote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ramp" }),
        (0, class_transformer_1.Type)(function () { return ramprequest_1.RampRequest; }),
        __metadata("design:type", ramprequest_1.RampRequest)
    ], POSTOrderRequestTypeSubscriptions.prototype, "ramp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "subscriptionNumber" }),
        __metadata("design:type", String)
    ], POSTOrderRequestTypeSubscriptions.prototype, "subscriptionNumber", void 0);
    return POSTOrderRequestTypeSubscriptions;
}(utils_1.SpeakeasyBase));
exports.POSTOrderRequestTypeSubscriptions = POSTOrderRequestTypeSubscriptions;
var POSTOrderRequestType = /** @class */ (function (_super) {
    __extends(POSTOrderRequestType, _super);
    function POSTOrderRequestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customFields" }),
        __metadata("design:type", Object)
    ], POSTOrderRequestType.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], POSTOrderRequestType.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "existingAccountNumber" }),
        __metadata("design:type", String)
    ], POSTOrderRequestType.prototype, "existingAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "newAccount" }),
        __metadata("design:type", Object)
    ], POSTOrderRequestType.prototype, "newAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "orderDate" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], POSTOrderRequestType.prototype, "orderDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: orderlineitemcommonpostorder_1.OrderLineItemCommonPostOrder }),
        (0, class_transformer_1.Expose)({ name: "orderLineItems" }),
        (0, class_transformer_1.Type)(function () { return orderlineitemcommonpostorder_1.OrderLineItemCommonPostOrder; }),
        __metadata("design:type", Array)
    ], POSTOrderRequestType.prototype, "orderLineItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "orderNumber" }),
        __metadata("design:type", String)
    ], POSTOrderRequestType.prototype, "orderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "processingOptions" }),
        (0, class_transformer_1.Type)(function () { return processingoptions_1.ProcessingOptions; }),
        __metadata("design:type", processingoptions_1.ProcessingOptions)
    ], POSTOrderRequestType.prototype, "processingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: POSTOrderRequestTypeSubscriptions }),
        (0, class_transformer_1.Expose)({ name: "subscriptions" }),
        (0, class_transformer_1.Type)(function () { return POSTOrderRequestTypeSubscriptions; }),
        __metadata("design:type", Array)
    ], POSTOrderRequestType.prototype, "subscriptions", void 0);
    return POSTOrderRequestType;
}(utils_1.SpeakeasyBase));
exports.POSTOrderRequestType = POSTOrderRequestType;
