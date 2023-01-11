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
exports.PostPaymentRunRequest = void 0;
var utils_1 = require("../../../internal/utils");
var postpaymentrundataelementrequest_1 = require("./postpaymentrundataelementrequest");
var PostPaymentRunRequest = /** @class */ (function (_super) {
    __extends(PostPaymentRunRequest, _super);
    function PostPaymentRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], PostPaymentRunRequest.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applyCreditBalance" }),
        __metadata("design:type", Boolean)
    ], PostPaymentRunRequest.prototype, "applyCreditBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoApplyCreditMemo" }),
        __metadata("design:type", Boolean)
    ], PostPaymentRunRequest.prototype, "autoApplyCreditMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoApplyUnappliedPayment" }),
        __metadata("design:type", Boolean)
    ], PostPaymentRunRequest.prototype, "autoApplyUnappliedPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch" }),
        __metadata("design:type", String)
    ], PostPaymentRunRequest.prototype, "batch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billCycleDay" }),
        __metadata("design:type", String)
    ], PostPaymentRunRequest.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingRunId" }),
        __metadata("design:type", String)
    ], PostPaymentRunRequest.prototype, "billingRunId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collectPayment" }),
        __metadata("design:type", Boolean)
    ], PostPaymentRunRequest.prototype, "collectPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consolidatedPayment" }),
        __metadata("design:type", Boolean)
    ], PostPaymentRunRequest.prototype, "consolidatedPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PostPaymentRunRequest.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: postpaymentrundataelementrequest_1.PostPaymentRunDataElementRequest }),
        __metadata("design:type", Array)
    ], PostPaymentRunRequest.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentGatewayId" }),
        __metadata("design:type", String)
    ], PostPaymentRunRequest.prototype, "paymentGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processPaymentWithClosedPM" }),
        __metadata("design:type", Boolean)
    ], PostPaymentRunRequest.prototype, "processPaymentWithClosedPM", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runDate" }),
        __metadata("design:type", Date)
    ], PostPaymentRunRequest.prototype, "runDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetDate" }),
        __metadata("design:type", Date)
    ], PostPaymentRunRequest.prototype, "targetDate", void 0);
    return PostPaymentRunRequest;
}(utils_1.SpeakeasyBase));
exports.PostPaymentRunRequest = PostPaymentRunRequest;
