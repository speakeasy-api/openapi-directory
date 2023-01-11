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
exports.OrderForEvergreen = exports.OrderForEvergreenSubscriptions = void 0;
var utils_1 = require("../../../internal/utils");
var orderactionforevergreen_1 = require("./orderactionforevergreen");
var quoteobjectfields_1 = require("./quoteobjectfields");
var OrderForEvergreenSubscriptions = /** @class */ (function (_super) {
    __extends(OrderForEvergreenSubscriptions, _super);
    function OrderForEvergreenSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baseVersion" }),
        __metadata("design:type", Number)
    ], OrderForEvergreenSubscriptions.prototype, "baseVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], OrderForEvergreenSubscriptions.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newVersion" }),
        __metadata("design:type", Number)
    ], OrderForEvergreenSubscriptions.prototype, "newVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderActions", elemType: orderactionforevergreen_1.OrderActionForEvergreen }),
        __metadata("design:type", Array)
    ], OrderForEvergreenSubscriptions.prototype, "orderActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quote" }),
        __metadata("design:type", quoteobjectfields_1.QuoteObjectFields)
    ], OrderForEvergreenSubscriptions.prototype, "quote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], OrderForEvergreenSubscriptions.prototype, "sequence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], OrderForEvergreenSubscriptions.prototype, "subscriptionNumber", void 0);
    return OrderForEvergreenSubscriptions;
}(utils_1.SpeakeasyBase));
exports.OrderForEvergreenSubscriptions = OrderForEvergreenSubscriptions;
// OrderForEvergreen
/**
 * Represents the order information that will be returned in the GET call.
**/
var OrderForEvergreen = /** @class */ (function (_super) {
    __extends(OrderForEvergreen, _super);
    function OrderForEvergreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdDate" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], OrderForEvergreen.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existingAccountNumber" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "existingAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderDate" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "orderDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderNumber" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "orderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions", elemType: OrderForEvergreenSubscriptions }),
        __metadata("design:type", Array)
    ], OrderForEvergreen.prototype, "subscriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedDate" }),
        __metadata("design:type", String)
    ], OrderForEvergreen.prototype, "updatedDate", void 0);
    return OrderForEvergreen;
}(utils_1.SpeakeasyBase));
exports.OrderForEvergreen = OrderForEvergreen;
