"use strict";
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
exports.PostOrderRequestType = exports.PostOrderRequestTypeSubscriptions = void 0;
var utils_1 = require("../../../internal/utils");
var createorderorderaction_1 = require("./createorderorderaction");
var quoteobjectfields_1 = require("./quoteobjectfields");
var ramprequest_1 = require("./ramprequest");
var orderlineitemcommonpostorder_1 = require("./orderlineitemcommonpostorder");
var processingoptions_1 = require("./processingoptions");
var PostOrderRequestTypeSubscriptions = /** @class */ (function (_super) {
    __extends(PostOrderRequestTypeSubscriptions, _super);
    function PostOrderRequestTypeSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PostOrderRequestTypeSubscriptions.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderActions", elemType: createorderorderaction_1.CreateOrderOrderAction }),
        __metadata("design:type", Array)
    ], PostOrderRequestTypeSubscriptions.prototype, "orderActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quote" }),
        __metadata("design:type", quoteobjectfields_1.QuoteObjectFields)
    ], PostOrderRequestTypeSubscriptions.prototype, "quote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ramp" }),
        __metadata("design:type", ramprequest_1.RampRequest)
    ], PostOrderRequestTypeSubscriptions.prototype, "ramp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], PostOrderRequestTypeSubscriptions.prototype, "subscriptionNumber", void 0);
    return PostOrderRequestTypeSubscriptions;
}(utils_1.SpeakeasyBase));
exports.PostOrderRequestTypeSubscriptions = PostOrderRequestTypeSubscriptions;
var PostOrderRequestType = /** @class */ (function (_super) {
    __extends(PostOrderRequestType, _super);
    function PostOrderRequestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PostOrderRequestType.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostOrderRequestType.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existingAccountNumber" }),
        __metadata("design:type", String)
    ], PostOrderRequestType.prototype, "existingAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newAccount" }),
        __metadata("design:type", Object)
    ], PostOrderRequestType.prototype, "newAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderDate" }),
        __metadata("design:type", Date)
    ], PostOrderRequestType.prototype, "orderDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderLineItems", elemType: orderlineitemcommonpostorder_1.OrderLineItemCommonPostOrder }),
        __metadata("design:type", Array)
    ], PostOrderRequestType.prototype, "orderLineItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderNumber" }),
        __metadata("design:type", String)
    ], PostOrderRequestType.prototype, "orderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processingOptions" }),
        __metadata("design:type", processingoptions_1.ProcessingOptions)
    ], PostOrderRequestType.prototype, "processingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions", elemType: PostOrderRequestTypeSubscriptions }),
        __metadata("design:type", Array)
    ], PostOrderRequestType.prototype, "subscriptions", void 0);
    return PostOrderRequestType;
}(utils_1.SpeakeasyBase));
exports.PostOrderRequestType = PostOrderRequestType;
